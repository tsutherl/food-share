import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from 'APP/app/store'
// import { toggleInstructionsPage } from 'APP/app/reducers/timelineReducer';

export class About extends Component {
    constructor () {
        super()
        // this.state = {
        //  open: false
        // }
    };
    // for use with some button in controls to re-open  instruction
    // toggle = () => {
    //   this.setState({open: !this.state.open});
    // };

    render () {
        console.log('HELLO', this.props.providers)
        return (
          <div>
            <div id='about'>
              <div id='close-btn-container'>

              </div>
                    <p className='top' id="top">
                    <br></br>
                    Up to 40% of food in the U.S. is completely wasted, at a cost of $165 billion each year. To help resolve the issue restaurants, hotels, and grocery stores need an easy method for seamlessly transfering food to hunger charities
                    </p>
                    <h3>List of Participating Restaurants</h3>
                    <h4>Pick up some food today!</h4>

                     {this.props.providers.map((vendor, idx) => (
                           <div className="col-md-3 col-xs-4 instruction-div" key={idx}>
                                <div>
                                    <p>{vendor.name}</p>
                                    <p>{vendor.phone}</p>
                                    <br></br>
                                </div>
                            </div>
                        )
                    )}



                </div>

        </div>
        )
    }
}
const mapStateToProps = ({instructionsPage}) => ({instructionsPage})

export default connect(
    mapStateToProps,
    null
)(About)
