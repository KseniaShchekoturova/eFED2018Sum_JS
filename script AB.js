// 1.	Подсчет Букв
function countChar(Str,symb){
  var entrNum = 0, i = 0;
  N = Str.length;
  while(i<N){
    if(Str[i]==symb){
    	entrNum++;
    }
	i++;
  }
  return(entrNum);
};

// 2.	Глубокое сравнение
function deepCompare_old(Value1,Value2){
	// проверка на типы
	if (typeof(Value1) != typeof(Value2)){
	  return false;
	}
	
	// проверка на количество свойств
	var Num1 = 0, Num2 = 0;
	for(var key in Value1) {
		Num1++;
	}
	for(var key in Value2) {
		Num2++;
	}
	if (Num1 != Num2){
		return false;
	}
	
	
	// проверка значений свойств
	for(var key in Value1) {
		if (Value1[key] !== Value2[key]){
			return false;
		}
	}
	
	return true;
};

//2.	Глубокое сравнение
function deepCompare(Value1,Value2){
	// проверка на типы
	if (typeof(Value1) != typeof(Value2)){
	  return false;
	}
	
	if (typeof(Value1) == 'object'){
		for(var key in Value1) {
			sr = deepCompare(Value1[key],Value2[key]);
			return sr;
		}
	}else {
		if(Value1 !== Value2){
			return false;
		}
	}
	
	return true;
};

// 3.	Шахматная доска
function chessBoard(w,h){
  var i, j, Str = '', ch = false;
  for (i = 0; i < h; i++) {
    for (j = 0; j < w; j++) {
		ch = ~ch;
		if(ch){
			// Str = Str + '#';
			Str+='#';
		}else{
			// Str = Str + ' ';
			Str+=' ';
		}      
    }
	Str = Str + '\n';
	if(w%2==0){
		ch = ~ch;
	}
  }
  return(Str);
};

// 4.	Диапазон
function makeArray(elStart,elFinish,step){
	if (elStart == undefined 
	| elFinish == undefined){
		return('bad options');
	}
	
	var Arr = [], i = 0;
	
	if(step==undefined){
		step = 1;
	}
		
	if(elStart==elFinish){
		Arr[0] = elStart;
	}else if(elStart < elFinish){
		while(elStart<=elFinish){
			Arr[i] = elStart;
			i++;
			elStart+=step;
		}	
	}
	else{
		if (step>0){
			step = -step;
		}
		while(elStart>=elFinish){
			Arr[i] = elStart;
			i++;
			elStart+=step;
		}	
	}
	
	return(Arr);
};

// 5.	Наоборот
function reverseArray(Arr){
	var i = 0, newArr = [];
	L = Arr.length;
	
	while (i<L){
		newArr[i] = Arr[L-i-1];
		i++;
	}
	
	return(newArr);
};

function reverseArrayInPlace(Arr){
	var i = 0, val;
	L = Arr.length;
	
	while (i<L/2){
		val = Arr[i];
		Arr[i] = Arr[L-i-1];
		Arr[L-i-1] = val;
		i++;
	}
	
	return(Arr);
};

// 6.	Свертка
function mergeArrays(Arr1,Arr2){
	var TotalArr = Arr1.concat(Arr2);
	
	var i;
	for (i = 0; i < TotalArr.length; i++){
		if (TotalArr.indexOf(TotalArr[i],i+1) > -1){
			TotalArr.splice(i, 1);
			i--;
		}
	}

	return TotalArr;
};

// 7.	Every и some
function everyIsNaN(Arr){
	var i;
	for (i = 0; i < Arr.length; i++){
		if (!isNaN(Arr[i])){
			return false;
		}
	}
	return true;
};

function someIsNaN(Arr){
	var i;
	for (i = 0; i < Arr.length; i++){
		if (isNaN(Arr[i])){
			return true;
		}
	}
	return false;
};

// 8.	Повтор
function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
};

function multiply(a,b){
	try{
		return multiplyOrThrow(a, b);
	}catch{
		return multiply(a, b);
	}
};

// 9.	Кавычки в тексте

// 10.	Найти числа

// 11.	День и месяц
function getNames(date){
	//dateStr = date.toString();
	//var arr = dateStr.split(' ');
	//return arr[1] + ', ' + arr[0];
	
	var Month;
	switch(date.getMonth()){
		case 0:Month = 'January';break;
		case 1:Month = 'February';break;
		case 2:Month = 'March';break;
		case 3:Month = 'April';break;
		case 4:Month = 'May';break;
		case 5:Month = 'June';break;
		case 6:Month = 'July';break;
		case 7:Month = 'August';break;
		case 8:Month = 'September';break;
		case 9:Month = 'October';break;
		case 10:Month = 'November';break;
		case 11:Month = 'December';break;
	}
	
	var WeekDay;
	switch(date.getDay()){
		case 0:WeekDay = 'Sunday';break;
		case 1:WeekDay = 'Monday';break;
		case 2:WeekDay = 'Tuesday';break;
		case 3:WeekDay = 'Wednesday';break;
		case 4:WeekDay = 'Thursday';break;
		case 5:WeekDay = 'Friday';break;
		case 6:WeekDay = 'Saturday';break;
	}
	
	return Month + ', ' + WeekDay;
};

// 12.	Разница в годах
function differenceInYears(dateStart,dateFinish){
	daysBetween = (dateFinish - dateStart) / (24*3600*1000);
	yearsBeetween = Math.round(10 * daysBetween / 365)/10;
	return yearsBeetween;
}