

const init_state = {
  elements : { },
  fetched : false,
  activeProduct : '',
};

export default (( state=init_state, action ) => {
  switch ( action.type ) {

    case "PUSH_PRODUCT": {
      let p = action.payload;
      return Object.assign({}, state, {
        elements : Object.assign({}, state.elements, {
          [p.identifier] : p.params
        })
      })
    }

    case "POP_PRODUCT": {
      let e = state.elements, p = action.payload;
      e.splice(Object.keys(e).indexOf(p.identifier), 1);
      return Object.assign({}, state, { elements : e });
    }

    case "SWITCH_PRODUCT": {
      return Object.assign({}, state, {
        activeProduct : action.payload.identifier
      });
    }

    default:
      return state;

  }
});