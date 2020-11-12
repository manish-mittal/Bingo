Window.onload = initAll();

function initAll() {
	if(document.getElementById){			// check if obj exist
		document.getElementById("reload").onclick = anotherCard();
		newCard();
	}
	else
		alert("browser does not support script");
};

function newCard() {
	for (var i=0; i<25; i++) {
		setValue(i);
	}
};

function setValue(square) {
	var curSq = "square" + square;
	var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
	var colBase = (colPlace[square] * 15);
	var newNum = colBase + getNewNum() + 1;
	
	for(var j=0; j<=square; j++){
		if(document.getElementById("square"+j).innerHTML == newNum){
			newNum = colBase + getNewNum() + 1;
			j=0;
		}
	}
	
	/*do{
		newNum = colBase + getNewNum() + 1;
	}
	while (usedNums[newNum])
		
	usedNums[newNum] = true;*/
	document.getElementById(curSq).innerHTML = newNum;
}; 

function getNewNum() {
	return Math.floor(Math.random() * 15);
}; 

function anotherCard() {
		newCard();
		return false;
};

$('td').on('click',function(e){
	console.log("############");
	e.target.style.textDecoration = 'line-through'
});
