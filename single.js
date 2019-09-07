var getSingle = function(fun){
	var result;
	return function(){
		if( !result ){
			result = new fun(...arguments)
		}
		return result
	}
}
function m(name){
	this.name = name||'mmp'
}
var singleM = getSingle(m);
var s1 = singleM("mmp")
var s2 = singleM("mmp2")
console.log(s1== s2)