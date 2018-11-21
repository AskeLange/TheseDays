
let look = (( e, id ) => {
  let i = 0;
  for (;;) {
  
    if ( e[i++] == id )
      return i-1;
  
  }
});

let es = ['A', 'B', 'C', 'D'];
let i = look(es, 'C');
console.log ( i );