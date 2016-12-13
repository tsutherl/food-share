'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from 'APP/app/store'

//import { createNewReview } from '../action-creators/review'


//export default ({ products }) => (
class Offering extends Component {

  handleSubmit(event) {
    // event.preventDefault();
    // console.log("THE STATE OF THE STATE ON SUBMIT", store.getState())
    // const review = {
    //   subject: event.target.subject.value,
    //   body: event.target.body.value,
    //   rating: event.target.rating.value,
    //   //REVIEW is this best practice?
    //   author_id: store.getState().auth.id,
    //   product_id: this.props.productId,
    // }
    // this.props.createNewReview(review)
  }


  render() {
    //console.log("THE STORE STATE ", store.getState  )  //array
    return (
      <div>
        <h4>Submit an Offer</h4>
         <div>
          <form >
            <p><input type="text" placeholder="Title" name="subject" /></p>
            <p>
            <textarea placeholder="your offer here" name="body" /></p>
            <button className= 'btn btn-default'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
//onSubmit={this.handleSubmit}

//const MapDispatch = { createNewReview }

export default connect(null, null)(Offering) //container equivalent
