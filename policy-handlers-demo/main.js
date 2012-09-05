require.config({
  handlers: {
    'greeter': 'greeter'
  }
});

define(['greeter', 'otherModule'], function (greeter) {
  greeter.greet('hello!');
});