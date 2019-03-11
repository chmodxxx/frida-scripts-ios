var obj = ObjC.classes.DamnVulnerableAppUtilities['+ showAlertForJailbreakTestIsJailbroken:']

Interceptor.attach(obj.implementation, {
  onEnter: function(args) {
     args[2] = ptr(0x0)

   }
})
