import axios from 'axios'


export function aboutReducer (state = [], action) {
  switch(action.type) {
    case SHOW_ABOUT: return true;
    default: return state
  }
};


//-------------------------ACTION TYPES-----------------------------//
const SHOW_ABOUT = 'SHOW_ABOUT';


//-------------------------ACTION CREATORS-----------------------------//

export const showAbout = function () {
  return {
    type: SHOW_ABOUT
  };
};

//-------------------------ASYNC ACTION CREATORS (THUNK)---------------------------//

