

const init_state = {
  
  elements : {  },
  activeView : 'home',
  
  sections : { 
    main : { 
      label : 'Main', 
      order : 0 
    },
    sprints : {
      label : 'Sprints',
      order : 1
    }
  },

};

export default (( state=init_state, action ) => {

  let p = action.payload;
  let e = state.elements;
  let s = state.sections;
  
  switch ( action.type ) {

    case "PUSH_SECTION": 
      s[p.identifier] = p.params;
      return Object.assign ({}, state, {
        sections : s
      });

    case 'PUSH_VIEW':
      e[p.identifier] = p.params;
      if ( s[p.params.section] == null ) { 
        s[p.params.section] = { 
          label : p.identifier, 
          index : 1, elements : [
          p.identifier
        ]}; 
      }
      
      return Object.assign ({}, state, {
        elements : e,
        sections : s
      });

    case 'SWITCH_VIEW':
      return Object.assign({}, state, {
        activeView : action.payload.identifier,
      }); 

    default:
      return state;

  }
});