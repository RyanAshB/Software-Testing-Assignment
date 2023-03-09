'use strict';

window.calculator = window.calculator || {};

var memoryList = [0];
let isOn = false;



(function() {
	var getIntById = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	var addition = function() {
		var sum = getIntById('x') + getIntById('y');
		document.getElementById('result').innerHTML = isNaN(sum) ? "ERROR" : sum;
	};

	//MY FUNCTIONS
	var subtraction = function() {
		var difference = getIntById('x') - getIntById('y');
		document.getElementById('result').innerHTML = isNaN(difference) ? "ERROR" : difference;
	};

	var multiplication = function(){
		var multiple = getIntById('x') * getIntById('y');
		document.getElementById('result').innerHTML = isNaN(multiple) ? "ERROR" : multiple
	}

	var division = function(){
		if (getIntById('y') == 0) {
			document.getElementById('result').innerHTML = "UNDEFINED"
		} else {
			var divis = getIntById('x') / getIntById('y');
			document.getElementById('result').innerHTML = isNaN(divis) ? "ERROR" : divis
		}
	}
	
	var percentage = function(){
		var percentNum = getIntById('x') / 100;
		document.getElementById('result').innerHTML = isNaN(percentNum) ? "ERROR" : percentNum

		// var percentNum = (getIntById('x') / getIntById('y')) * 100;
		// document.getElementById('result').innerHTML = isNaN(percentNum) ? "ERROR" : percentNum
	}	

	var square = function(){
		var sqrt = Math.sqrt(getIntById('x'));
		document.getElementById('result').innerHTML = isNaN(sqrt) ? "ERROR" : sqrt
	}	

	var changeSign = function(){
		if (getIntById('x') > 0) {
			var newNum = getIntById('x') - (2 * getIntById('x'))
		} else if (getIntById('x') < 0) {
			var newNum = getIntById('x') + (-2 * getIntById('x'))
		} else if (getIntById('x') == 0){
			var newNum = 0
		}
		document.getElementById('result').innerHTML = isNaN(newNum) ? "ERROR" : newNum
	}	

	var equalFun = function() {
		var zInput = document.getElementById("z").value
		//document.getElementById("result").innerHTML = zInput;
		if (zInput != '+' || zInput != '-' || zInput != '*' || zInput != '/' || zInput != '%' || zInput != 'sqrt' || zInput != 'change') {
			document.getElementById('result').innerHTML = "ERROR"
		}

		if (zInput == '+'){
			addition();
		}else if ((zInput == '-')) {
			subtraction();
		}else if ((zInput == '*')) {
			multiplication();
		}else if ((zInput == '/')) {
			division();
		}else if ((zInput == '%')) {
			percentage();
		}else if ((zInput == 'sqrt')) {
			square();
		}else if ((zInput == 'change')) {
			changeSign();
		}	
	}

	var memoryPlus = function() {
		equalFun();
		memoryList[0] = memoryList[0] + parseInt(document.getElementById('result').innerHTML)
		//document.getElementById('result2').innerHTML = memoryList[0]

	}

	var memoryMinus = function() {
		equalFun();
		memoryList[0] = memoryList[0] - parseInt(document.getElementById('result').innerHTML)
		//document.getElementById('result2').innerHTML = memoryList[0]

	}

	var memoryRecall = function() {
		document.getElementById('result').innerHTML = memoryList[0]
	}

	var memoryClear = function() {
		memoryList[0] = 0;
		document.getElementById('result').innerHTML = memoryList[0]
	}

	var resultClear = function() {
		document.getElementById('result').innerHTML = ""
		document.getElementById('x').innerHTML = ""
		document.getElementById('y').innerHTML = ""
		document.getElementById('z').innerHTML = ""
	}

	var powerOnOff = function () {
		isOn = !isOn;
		document.getElementById('x').disabled = isOn;
		document.getElementById('y').disabled = isOn;
		document.getElementById('z').disabled = isOn;
		document.getElementById('add').disabled = isOn;
		document.getElementById('subtract').disabled = isOn;
		document.getElementById('multiply').disabled = isOn;
		document.getElementById('divide').disabled = isOn;
		document.getElementById('percent').disabled = isOn;
		document.getElementById('squareRoot').disabled = isOn;
		document.getElementById('change').disabled = isOn;
		document.getElementById('memory+').disabled = isOn;
		document.getElementById('memory-').disabled = isOn;
		document.getElementById('memoryRec').disabled = isOn;
		document.getElementById('equal').disabled = isOn;
		
		
	}






	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', addition);

		//MY FUNCTIONS
		document.getElementById('subtract').addEventListener('click', subtraction);
		document.getElementById('multiply').addEventListener('click', multiplication);
		document.getElementById('divide').addEventListener('click', division);
		document.getElementById('percent').addEventListener('click', percentage);
		document.getElementById('squareRoot').addEventListener('click', square);
		document.getElementById('change').addEventListener('click', changeSign);
		document.getElementById('equal').addEventListener('click', equalFun);
		document.getElementById('memory+').addEventListener('click', memoryPlus);
		document.getElementById('memory-').addEventListener('click', memoryMinus);
		document.getElementById('memoryRec').addEventListener('click', memoryRecall);
		document.getElementById('memoryRec').addEventListener('dblclick', memoryClear);
		document.getElementById('memoryCl').addEventListener('click', memoryClear);
		document.getElementById('power').addEventListener('dblclick', powerOnOff);
		document.getElementById('power').addEventListener('click', resultClear);
	};

})();

//window.calculator.init();