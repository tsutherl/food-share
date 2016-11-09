import React from 'react'
import {Link} from 'react-router'

export default ({auth, logout, items}) => {

    return (
        <nav className="navbar navbar-default">                                                   
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/home" className="navbar-brand" href="#">StickYoSelf</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className=""><Link to="/home">Home</Link></li>
                <li><Link to="/stickers">{`Swishes`}</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">

                <li className="nav-cont"><Link to="/cart">
                  {(items.length>=1)? 
                    <div className="mdl-badge" data-badge={items.length}>
                      <img className="navbar-img" src="http://cdn1.crystalcommerce.com/themes/clients/categoryonegames/assets/img/ui/icon-cart.png"/>
                    </div>
                  : <img className="navbar-img" src="http://cdn1.crystalcommerce.com/themes/clients/categoryonegames/assets/img/ui/icon-cart.png"/>} 
                </Link></li>

                <li><Link to={auth? `/user` : `/login`}>{auth? `Hello, ${auth.name}` : `Login/SignUp`}</Link></li>
                <Link to="/home">
                    <form className="navbar-form navbar-right">
                            <button onClick={logout} type="button" className="btn btn-pink">Logout</button>
                    </form>
                </Link>
              </ul>
              
            </div>
          </div>
        </nav>
    )
}


