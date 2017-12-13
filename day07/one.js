
function isPrime(num){
	var start=new Date().getTime();
	do{	
		var end=new Date().getTime();
		}while(end-start<=5000);
	for(var i=2;i<num;i++){
		if(num%i==0){
			break;
		}
	}
	if(i==num){
		return true;
	}else{
		return false;
	}
}
// console.time("fdgdfgdf");
// console.log();
postMessage(isPrime(9));
// console.timeEnd(a);