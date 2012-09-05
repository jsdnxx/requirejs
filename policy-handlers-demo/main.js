require.config({/*
  handlers: {
    'greeter': function () { return {
      greet: function (m) { console.log(m); }
    } }
  }*/
  handlers: {
    'greeter': 'greeter'
  }
});

define(['greeter', 'require'], function (greeter, require) {
  greeter.greet('hello!');
  r = require;
});