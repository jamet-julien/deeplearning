
function draw(ctx) {
  ctx.strokeStyle = '#FFF';
  ctx.beginPath();
  ctx.moveTo( this.start.x * 800, this.start.y * 600);
  ctx.lineTo( this.end.x * 800, this.end.y * 600);
  ctx.stroke();
}



function Line() {

  let _public = {
    start : { x : 0, y : 0},
    end   : { x : 1, y : 1 },
    draw
  };

  return _public;
}


export default Line;