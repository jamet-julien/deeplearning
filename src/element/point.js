
function draw(ctx) {
  ctx.beginPath();
  ctx.fillStyle = '#FFF';
  ctx.arc( this.x * 800 , this.y * 600, 10, 0, 2 * Math.PI, false);
  ctx.fill();
}


function Point({ x, y }) {

  let _public = {
    x,
    y,
    draw
  };

  return _public;
}


export default Point;