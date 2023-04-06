let num1 = 12;
let num2 = 12;

function calculate(num1,num2){
	if (num1 > num2) {
		let result = num1/num2;
		num2 = num2/2;
		return result;

	}
	else if(num1 == num2){
		num2 = num2*2;
		let result = num2%num1;
		return result;
	}
	else{
		let result = num2-num1;
		return result;
	}




}
alert("The result is"+" "+calculate(num1,num2));