

const init_state = {
  elements : [],
  fetched : false,
  activeProduct : '',
};

let look = (( e, id ) => {
  for (let i = 0; i < e.length; i++) {
    if ( e[i].identifier != null && 
      e[i].identifier == id ) 
      return i;
  }
});

export default (( state=init_state, action ) => {
  switch ( action.type ) {

    case "PUSH_PRODUCT":
      let e = state.elements;
      return Object.assign({}, state, {
        elements : (e.push( Object.assign(
          action.payload.params,
          { identifier : action.payload.identifier }
        )), e)
      });

    case "POP_PRODUCT":
      let e = state.elements;
      e.splice(look(e, action.payload.identifier), 1);
      return Object.assign({}, state, { elements : e });

    case "SWITCH_PRODUCT":
      return Object.assign({}, state, {
        activeProduct : action.payload.identifier
      });

    default:
      return state;

  }
});