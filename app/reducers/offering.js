'use strict';
import axios from 'axios'

//-------------------------ACTION TYPES-----------------------------//
const GET_ALL_OFFERS = 'GET_ALL_OFFERS';
const POST_OFFER = 'POST_OFFER';

//-------------------------ACTION CREATORS-----------------------------//
const fetchAllOffers = (offers) => ({ type: GET_ALL_OFFERS, offers });
const postNewOffer = (newOffer) => ({ type: POST_OFFER, newOffer });

//-------------------------ASYNC ACTION CREATORS (THUNK)-----------------------------//
export const fetchAllOffersAction = () => {
  return dispatch =>
    fetch(`/api/offerings/`) //not specific to a food provider
      .then(res => res.json())
      .then(offers => dispatch(fetchAllOffers(offers)) )
      .catch(err => console.error(err));
  }

export const postNewOfferAction = (newOffer) => {
  return dispatch => {
    axios.post('/api/offerings', newOffer)
    .then(function(result) {
      dispatch(postNewOffer(result.data))
    })
    .catch(err => console.error(err));
  }
}
//-------------------------REDUCER-----------------------------//
const initialState =[
  {expirationDate: '01-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '02-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '03-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '04-01-2017', isPerishable: 'true', value: '30', description:'food'},
  {expirationDate: '05-01-2017', isPerishable: 'true', value: '30', description:'food'}
  ]
const offeringsReducer = function(state = initialState, action) {
  switch(action.type) {
  	case GET_ALL_OFFERS :
      return action.offers
    case POST_OFFER :
      return [...state, action.newOffer ]
    default: 
    	return state
  }
};

export default offeringsReducer