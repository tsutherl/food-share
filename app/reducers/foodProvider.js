'use strict';
import axios from 'axios'

//-------------------------ACTION TYPES-----------------------------//
const GET_ALL_PROVIDERS = 'GET_ALL_PROVIDERS';
//const POST_PROVIDER = 'POST_PROVIDER';

//-------------------------ACTION CREATORS-----------------------------//
const fetchAllProviders = (providers) => ({ type: GET_ALL_PROVIDERS, providers });
//const postNewProvider = (newProvider) => ({ type: POST_PROVIDER, newProvider });

//-------------------------ASYNC ACTION CREATORS (THUNK)-----------------------------//
export const fetchAllProvidersAction = () => {
  return dispatch =>
    fetch(`/api/offerings/`) //not specific to a food provider
      .then(res => res.json())
      .then(providers => dispatch(fetchAllProviders(providers)) )
      .catch(err => console.error(err));
  }

// export const postNewProviderAction = (newProvider) => {
//   return dispatch => {
//     axios.post('/api/offerings', newProvider)
//     .then(function(result) {
//       dispatch(postNewProvider(result.data))
//     })
//     .catch(err => console.error(err));
//   }
// }
//-------------------------REDUCER-----------------------------//
const initialState = [
  {name: 'Bouley', address: '75 Wall St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.705137, -74.013940], type: 'restaurant'},
  {name: 'Marc Forgione', address: '134 Reade St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.716526, -74.009567], type: 'restaurant'},
  {name: 'Tamarind', address: '99 Hudson St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718977, -74.008929], type: 'restaurant'},
  {name: 'Hop Lee Restaurant', address: '16 Mott St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.714230, -73.998509], type: 'restaurant'},
  {name: 'Jungsik', address: '2 Harrison St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.718679, -74.008900], type: 'restaurant'},
  {name: 'The Capital Grille', address: '120 Broadway', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.708475, -74.010846], type: 'restaurant'},
  {name: 'Pylos', address: '128 E 7th St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.726096, -73.984152], type: 'restaurant'},
  {name: 'Club Quarters', address: '140 Washington St', city: 'New York', state: 'NY', phone: '123-456-7890', location: [40.709630, -74.013940], type: 'hotel' }
  ]

const providersReducer = function(state = initialState, action) {
  switch(action.type) {
  	case GET_ALL_PROVIDERS :
      return action.providers
    // case POST_PROVIDER :
    //   return [...state, action.newProvider ]
    default: 
    	return state
  }
};

export default providersReducer