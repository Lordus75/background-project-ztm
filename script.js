console.log("it works!");
var htmlElem = document.getElementsByTagName("html")[0];
var bodyElem = document.getElementsByTagName("body")[0]; //сохраняем тело в переменную
var input1 = document.getElementsByTagName("input")[0];//палитра цветов слева
var input2 = document.getElementsByTagName("input")[1];//палитра цветов справа
var h3tag = document.getElementsByTagName("h3")[0];//место для отображения текущего градиента
var buttonColor1=document.querySelector(".button1");//кнопка для случайного цвета градиента слева
//console.log(buttonColor1);
var buttonColor2=document.querySelector(".button2");//кнопка для случайного цвета градиента справа
h3tag.textContent=  "Here will be current linear-gradient";
//console.log(buttonColor2);
//console.log(input1, input2);
function getRandomInt(max){
	return Math.floor(Math.random()*Math.floor(max));
}//функция задает случайное число от 0 до 255

function getRandomColor() {
	let colorArr=[];
	for (let i=1;i<=3;i++) {
		colorArr.push(getRandomInt(256));
	}
	console.log(colorArr);
	colorArr=colorArr.map(item => {
		item=decimalToHex(item);
		return item;
	});
	console.log(colorArr);
	let hexString=colorArr.reduce((accum, item)=> {
		accum=accum+item;
		return accum;
	},"#");
	console.log(hexString);
	return hexString;
} //функция возвращает случайный цвет в формате #ffffff
function hexDigit(number){
	if(number >= 10){
		switch(number){
			case 10:
			return "a";
			break;
			case 11:
			return "b";
			break;
			case 12:
			return "c";
			break;
			case 13:
			return "d";
			break;
			case 14:
			return "e";
			break;
			case 15:
			return "f";
			break;
		}
	}
	return number;
} //функция для преобразования десятичных цифр в шестнадцатиричные разряды
function decimalToHex(number){
	if (number===0){return "00"}
	let hexNumberArr=[];
	let firstDigit = Math.floor(number/16);
	hexNumberArr.push(hexDigit(firstDigit));
	number=number%16;
	hexNumberArr.push(hexDigit(number));
	return hexNumberArr.reduce((accum,item)=>accum+item,"");
}//функция для преобразования десятичных цифры от 0 до 255 в шестнадцатиричный формат

input1.addEventListener("input", function(event){
	//console.log(event);
	//console.log(typeof input1.value);
	setColor(hexToRGB(input1.value),hexToRGB(input2.value));
	input1CurrentValue =hexToRGB(input1.value);
	//console.log(input1CurrentValue);
});
input2.addEventListener("input", function(event){
	//console.log(event);
	//console.log(typeof input1.value);
	setColor(hexToRGB(input1.value),hexToRGB(input2.value));
});
function hexToRGB(value){
	let hexRegex=/[0-9,a-f]{2}/g;
	let hexArr=value.match(hexRegex);
	hexArr=hexArr.map(item => {
		item="0x"+item;
		item=parseInt(item,16);
		return item;
	});
	//console.log(hexArr);
	let rgbString = "rgb("+hexArr[0]+", "+hexArr[1]+", "+hexArr[2]+")";
	//console.log(rgbString);
	return rgbString;

}
function setColor(input1,input2){
	//bodyElem.style.background="linear-gradient(to right, "+ test + ", red);";
	//console.log(input1,input2);
	bodyElem.style.background="linear-gradient(to right, "+input1+", "+ input2+")";
	h3tag.textContent= bodyElem.style.background + ";";
	//h3tag.appendChild(document.createTextNode("linear-gradient(to right, "+input1+", "+ input2+")"));
}
console.log(decimalToHex(255));
buttonColor1.addEventListener("click", function(){
	input1.value=getRandomColor();
	setColor(input1.value,input2.value);
});
buttonColor2.addEventListener("click", function(){
	input2.value=getRandomColor();
	setColor(input1.value,input2.value);
});
//h3tag.appendChild(document.createTextNode("linear-gradient(to right, "+hexToRGB(input1.value)+", "+ hexToRGB(input2.value)+")"));
