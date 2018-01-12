
export default function Timer(frq) {
  let _lastTime = 0,
    _cumulateTime = 0,
    _playied = false,
    _public = {
      update: () => { },
      draw: () => { },
      run,
      stop
    };



  function proxiPlay(iTime) {
    _cumulateTime += ((iTime - _lastTime) || 0) / 1000;

    _cumulateTime = (_cumulateTime > 1) ? 1 : _cumulateTime;

    while (_cumulateTime > frq) {
      _public.update(frq);
      _cumulateTime -= frq;
    }

    _lastTime = iTime;
    _public.draw(_cumulateTime);

    _playied && enqueue();
  }

  function enqueue() {
    requestAnimationFrame(proxiPlay);
  }

  function run() {
    _playied = true;
    enqueue();
  }


  function stop() {
    _playied = false;
  }


  return _public;

}