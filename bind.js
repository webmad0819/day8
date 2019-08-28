var obj = {
    foo: function() {
      console.log( this );
    }
  };
  
  var bindFoo = obj.foo.bind(window);
  
  obj.foo(); // ==> obj
  bindFoo(); // ==> window