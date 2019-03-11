var obj = ObjC.classes.RuntimeManipulationDetailsVC['- isLoginValidated']

Interceptor.attach(obj.implementation, {
	onLeave: function(ret){
		ret.replace(ptr(0x1))
	}
})
