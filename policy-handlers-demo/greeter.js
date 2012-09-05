// this is a module handler
// syntax inspired by AMD module loaders.
// Handlers implement a `handle` function, which is invoked with the module object
// They also get a reference to require and access to the config object.

define({
  handle: function (module, require, config) {

    function greet (message) {
      return document.body.innerText += message + ' from ' + module.map.id;
    }

    return {
      greet: greet
    };
  }
});