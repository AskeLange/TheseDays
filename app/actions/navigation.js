

let push_view = ((identifier, params) => {
  return {  
    type : 'PUSH_VIEW',
    payload : {
      params,
      identifier
    }
  };
});

let switch_view = (identifier => {
  return {
    type : 'SWITCH_VIEW',
    payload : { identifier } 
  };
});

export { 
  push_view,
  switch_view 
};