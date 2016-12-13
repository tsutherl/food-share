
'use strict'

const geocode = require( '../../utils/geocode');
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  lastCompletedOrder: {                // can delete this once all the OrderMaster control is implemented
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
});

User.hook('beforeUpdate', function (User) {
    if (!User.location) {
      let addressString = User.address + ', ' + User.city + ', ' + User.state;
      User.location = geocode(addressString);
    }
});

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

const FoodProviders = db.define('foodProviders', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
})

const Offering = db.define('offerings', {
  // Other optional fields size/contents
  //--> foodProviders ID, belongs to later
  // postingDate--getter virtual date_created of the instance of the model

  expirationDate: {
    type: Sequelize.DATEONLY,
    allowNull: true //because some items are barely perishable like cans or rice
  },
  isPerishable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  value: {
    type: Sequelize.FLOAT, //$ amount for tax deductions
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})


module.exports = Offering
