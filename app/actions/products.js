

let push_product = (( identifier, params ) => {
  return {
    type : 'PUSH_PRODUCT',
    payload : { identifier, params }
  };
});

let pop_product = ( identifier => {
  return {
    type : 'POP_PRODUCT',
    payload : { identifier }
  }
});

let switch_product = ( identifier => {
  return {
    type : 'SWITCH_PRODUCT',
    payload : { identifier }
  }
});

export {
  push_product,
  pop_product,
  switch_product
};