

const init_state = {
  elements : [ ],
  activeView : 'home',
};

export default (( state=init_state, action ) => {
  switch ( action.type ) {

    case 'PUSH_VIEW':
      let e = state.elements;
      e.push( action.payload );
      return Object.assign ({}, state, {
        elements : e
      });

    case 'SWITCH_VIEW':
      return Object.assign({}, state, {
        activeView : action.payload.identifier
      }); 

    default:
      return state;

  }
});