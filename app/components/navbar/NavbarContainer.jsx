import {connect} from 'react-redux'
import Navbar from './Navbar'
import {logout} from 'APP/app/reducers/auth'
import { loadItemsAsync } from 'APP/app/reducers/cart'

export default connect(
    ({auth, items}) => ({auth, items}),
    {logout}
)
(Navbar)