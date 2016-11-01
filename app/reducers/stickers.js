//-------------------------REDUCER-----------------------------//
export default function stickerReducer (state = [], action) {
  switch(action.type) {
    case LOAD_ALL_STICKERS: return action.stickers
    default: return state
  }
};

//-------------------------ACTION TYPES-----------------------------//
export const LOAD_ALL_STICKERS = 'LOAD_ALL_STICKERS';
export const LOAD_ONE_STICKER = 'LOAD_ONE_STICKER';


//-------------------------ACTION CREATORS-----------------------------//

const loadStickers = function (stickers) {
  return {
    type: LOAD_ALL_STICKERS,
    stickers
  };
};

const loadSticker = function (sticker) {
  return {
    type: LOAD_ONE_STICKER,
    sticker
  };
};

//-------------------------ASYNC ACTION CREATORS (THUNK)-----------------------------//

export const loadStickersAsync = function () {
  return function (dispatch) {
    fetch('/api/stickers')
      .then(res => res.json())
      .then(stickers => {
        dispatch(loadStickers(stickers));
      })
      .catch(err => console.error(err));
  };
};


export const loadStickerAsync = function (stickerId) {
  return function (dispatch) {
    fetch('/api/stickers/' + stickerId)
      .then(res => res.json())
      .then(sticker => {
        dispatch(loadSticker(sticker));
      })
      .catch(err => console.error(err));
  };
};
