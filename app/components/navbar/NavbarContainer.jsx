import {connect} from 'react-redux'
import Navbar from './Navbar'
import {logout} from 'APP/app/reducers/auth'

export default connect(
    ({auth, items}) => ({auth, items}),
    {logout})
(Navbar)