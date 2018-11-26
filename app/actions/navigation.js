

let push_section = ((identifier, params) => { return {
  type : 'PUSH_SECTION',
  payload : { identifier, params }
}});

let push_view = ((identifier, params) => { return {
  type : 'PUSH_VIEW',
  payload : { identifier, params }
}});

let switch_view = (identifier => { return {
  type : 'SWITCH_VIEW',
  payload : { identifier } 
}});

export { 
  push_section,
  push_view,
  switch_view 
};