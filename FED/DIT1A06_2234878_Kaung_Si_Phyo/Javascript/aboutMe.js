"use strict"

var sentenceArray = new Array(
	"မင်္ဂလာပါ,ကျွန်တော့်ကိုယ်ရေးအကျဥ်းမှကြိုဆိုပါတယ်!!!",
	"你好，欢迎来到我的投资组合!!!",
	"Ciao, benvenuto al mio portafoglio!!!",
	"こんにちは私のポートフォリオからようこそ!!!",
	"Hello,welcome from my E-portfolio!!!",
	"안녕하세요 제 포트폴리오에서 환영합니다!!!"
);

// Sentence index that is being typed
var sentenceIndex = 0;

// Character Index that is being typed
var characterIndex = 0;

// Interval ID to clean interval
var intervalID;

var stringcontent = document.querySelector("#dynamic_Header");

// Typing function
function typeSentence() {
	stringcontent.innerHTML = sentenceArray[sentenceIndex].substring(0, characterIndex + 1);
	characterIndex++;
	if (stringcontent.innerHTML === sentenceArray[sentenceIndex]) {
		clearInterval(intervalID);
		setTimeout(function () {
			intervalID = setInterval(deletesentence, 100);
		}, 3000);
	}
}

// delele function
function deletesentence() {
	stringcontent.innerHTML = sentenceArray[sentenceIndex].substring(0, characterIndex - 1);
	characterIndex--;
	if (stringcontent.innerHTML === '') {
		clearInterval(intervalID);
		if (sentenceIndex == (sentenceArray.length - 1))
			sentenceIndex = 0;
		else sentenceIndex++;
		characterIndex = 0;
		setTimeout(function () {
			intervalID = setInterval(typeSentence, 100);
		}, 200);
	}
}
intervalID = setInterval(typeSentence, 100);