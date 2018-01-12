

function GradientDescent() {
  let _public = {
    point: new Set(),
    treat,
    calculate,
    rate: 0.5,
    m: 1,
    b: 0
  };

  function calculate(x) {
    return this.m * x + this.b;
  }

  function treat() {
    let deltaM = 0;
    let deltaB = 0;

    for (let { x, y } of this.point) {
      
      let yGuess = this.m * x + this.b;
      let error  = y - yGuess;

      deltaM += x * error * (2/this.point.size);
      deltaB += error * (2/this.point.size);
    }
    
    this.m += deltaM * this.rate;
    this.b += deltaB * this.rate;

  }


  return _public;

}


export default GradientDescent;