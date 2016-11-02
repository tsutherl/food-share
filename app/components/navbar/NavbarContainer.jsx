import {connect} from 'react-redux'
import Navbar from './Navbar'

export default connect(
    ({auth}) => ({auth}),
     null)
(Navbar)