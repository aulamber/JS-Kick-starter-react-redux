// =================================  Actions  =================================

const LOAD = 'LOAD';


// =============================  Action creators  =============================

export function load() {
  return {
    type: LOAD,
  };
}


// ==============================  Initial state  ==============================

const initialState = {
  loading: false,
};


// =================================  Reducer  =================================

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
