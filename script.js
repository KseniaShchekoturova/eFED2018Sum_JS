
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
}

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
		if (Value1[key] != Value2[key]){
			return false;
		}
	}
	
	return true;
}

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
		if(Value1 != Value2){
			return false;
		}
	}
	
	return true;
}

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
}

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
}

function reverseArray(Arr){
	var i = 0, newArr = [];
	L = Arr.length;
	
	while (i<L){
		newArr[i] = Arr[L-i-1];
		i++;
	}
	
	return(newArr);
}

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
}

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
}

function rent(DaysNum){
	DaysNum / 7;
}