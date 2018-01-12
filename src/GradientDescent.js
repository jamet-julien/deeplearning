

function GradientDescent() {
  let _public = {
    point: [],
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
    let iLen   = this.point.length;

    for (let i = 0 ; i < iLen ; i++) {

      let { x, y } = this.point[ i];
      let yGuess   = this.m * x + this.b;
      let error    = y - yGuess;

      deltaM += x * error * (2/iLen);
      deltaB += error * (2/iLen);
    }
    
    this.m += deltaM * this.rate;
    this.b += deltaB * this.rate;

  }


  return _public;

}


export default GradientDescent;