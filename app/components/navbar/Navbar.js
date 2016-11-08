import React from 'react'
import {Link} from 'react-router'

export default ({auth, logout}) => {
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
                <li className="active"><Link to="/home">Home</Link></li>
                <li><Link to="/stickers">{`Swishes`}</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/cart"><img src="http://downloadicons.net/sites/default/files/shopping-cart-icon-44762.png" height="23" width="23"/> </Link></li>
                <li><Link to={auth? `/user` : `/login`}>{auth? `Hello, ${auth.name}` : `Login/SignUp`}</Link></li>
                <li><Link to="/home"><button onClick={logout} type="button" className="btn btn-success">Logout</button></Link></li>
                </ul>
            </div>
          </div>
        </nav>
    )
}


