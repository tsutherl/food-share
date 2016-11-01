const request = require('supertest-as-promised');
const {expect} = require("chai");
const db = require('APP/db');
const User = require('APP/db/models/user');
const app = require('./start');


// even if the restful routes were created by epilogue, we should still be able to test them, correct?
// in which case, don't we need superagent to mimic admin user access?  How do we do that? 

describe('api/users', () => {

	const users = [
		{name: 'Tati',
		 email: 'tati@tati.com',
		 password: 'heyhey'},

		 {name: 'Cara',
		 email: 'cara@cara.com'},

		 {name: 'Ashi',
		 email: 'ashi@ashi.com'}
	]
	const [tati, cara, ashi] = users;


	before('sync db & make users', () => 
		db.didSync
			.then(()=> User.destroy({truncate: true}))
			.then(()=> db.Promise.map(users,
				user => {
					console.log('in the before sync', user)
					return User.create(user)
				})
	))

	describe('login user by id', ()=> {
		    const agent = request.agent(app)   // pass express app to the request.agent function, creates agent which
		                                          // persists normally in block for tests
		    before('log in', () => agent
		        .post('/api/auth/local/login') 
		        .send({username: tati.email, password: tati.password})
		        .expect(302)
		        .then(() => agent
		        	.get('/api/auth/whoami')
		        	.expect(200))
		        .then(rsp => {
		        	console.log('logged in with', rsp.body)
		        	tati.id = rsp.body.id
		        })
		    )




			it('GET / gets one user by id if authentication is successful', () => 
				agent
				.get(`/api/users/${tati.id}`)
				.expect(200)
				.then(res => {
					expect(res.body).to.contain({
						email: tati.email,
						name: tati.name,
					})
				})
			)

	})

	 // it('GET / lists all users', () =>                commented out; will add when we get to admins
		// 	request(app)
		// 	.get(`/api/users`)
		// 	.expect(200)
		// 	.then(res => {
		// 		expect(res.body).to.have.length(users.length)
		// 		const[gotTati, gotCara, gotAshi] = res.body;
		// 		expect(gotAshi).to.contain(ashi)
		// 	})
		// )


})