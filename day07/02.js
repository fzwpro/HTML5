function getSum(num){
	var rs=0;
	for(var i=0;i<=num;i++){
		rs+=i;
	}
	return rs;
}
onmessage=function(e){
	var val=e.data;
	var rs=getSum(val);
	postMessage(rs);
}