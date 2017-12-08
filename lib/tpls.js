exports['tpl1']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='hello: '+
((__t=( name ))==null?'':__t)+
'';
}
return __p;
};
exports['tpl2']=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<b>'+
((__t=( value ))==null?'':_.escape(__t))+
'</b>';
}
return __p;
};