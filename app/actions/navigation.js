

let pushView = ((identifier, params) => {
  return {  
    type : 'PUSH_VIEW',
    payload : Object.assign(
      params, { identifier }
    )
  };
});

let switchView = (identifier => {
  return {
    type : 'SWITCH_VIEW',
    payload : { identifier } 
  };
});

export { 
  pushView,
  switchView 
};