
function draw() {
  for (let fn of this.layer) fn( this.context);
}


export default ( context) => {

  let _public = {
    layer: new Set(),
    draw,
    context
  };

  return _public;
}