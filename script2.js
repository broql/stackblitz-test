var sharedModule2 = (function () {
  var sharedVariable = 'This is a shared variable';

  function sharedFunction() {
    console.log('This is a shared function');
  }

  return {
    sharedFunction: sharedFunction,
    sharedVariable: sharedVariable,
  };
})();
