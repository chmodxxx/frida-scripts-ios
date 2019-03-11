testingJB = false
var obj = ObjC.classes.NSFileManager['- fileExistsAtPath:']
Interceptor.attach(obj.implementation, {
  onEnter: function(args) {
    filename = ObjC.Object(args[2]).toString()
    if (filename === '/Applications/Cydia.app' || filename === '/Library/MobileSubstrate/MobileSubstrate.dylib' 
    	|| filename == '/bin/bash' || filename === '/usr/sbin/sshd' || filename === '/etc/apt') {
    	testingJB = true;
    }},

   onLeave: function(ret) {
   	 if (testingJB) {
   	 	newret = ptr(0x0)
   	 	ret.replace(newret);
   	 	console.log(ret)
   	 }
   }
})

testingJB2 = false;

var obj = ObjC.classes.NSString["- writeToFile:atomically:encoding:error:"]
Interceptor.attach(obj.implementation, {
  onEnter: function(args) {
  	filename = ObjC.Object(args[2]).toString()
  	if (filename === '/private/jailbreak.txt') {
  		testingJB2 = true;
  	}
  	},
  	onLeave: function(ret){
  		if (testingJB2) {
  			newret = ptr(0x0)
  			ret.replace(newret);
  		}
  	}


  }
 )

testingJB3 = false;

var obj = ObjC.classes.UIApplication['- canOpenURL:']
Interceptor.attach(obj.implementation, {
  onEnter: function(args) {
  	url = ObjC.Object(args[2]).toString();
  	if (url === 'cydia://package/com.example.package'){
  		testingJB3 = true;
  	}
  },

  onLeave: function(ret){
  	if(testingJB3){
  		newret = ptr(0x0);
  		ret.replace(newret)
  	}
  }
})
