(function() {
window["JST"] = window["JST"] || {};

window["JST"]["tpl1.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += 'hello: ' +
((__t = ( name )) == null ? '' : __t);

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["tpl2.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<b>' +
__e( value ) +
'</b>';

}
return __p
}})();