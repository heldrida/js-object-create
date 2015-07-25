(function () {

	var MyClass = {
		prototype: {
			// prototypal members and methods
			id: 'foo',
			name: 'Lucas'
		},
		create: function(options){
			// do stuff with options
			return Object.create(MyClass.prototype, options);
		}
	};


	var instance = MyClass.create();

	console.log(instance.name);

})();