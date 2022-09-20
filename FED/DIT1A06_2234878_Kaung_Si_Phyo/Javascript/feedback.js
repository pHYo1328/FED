"use strict";

// gif and png changing functions
// for happy emoji
document.querySelector("#happy").addEventListener('mouseover', function(){
    document.querySelector("#happy").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/happy.gif"
});
document.querySelector("#happy").addEventListener('mouseout', function (){
    document.querySelector("#happy").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/happy.png"
});

// for neutral emoji
document.querySelector("#neutral").addEventListener('mouseover', function(){
    document.querySelector("#neutral").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/neutral.gif"
});
document.querySelector("#neutral").addEventListener('mouseout', function (){
    document.querySelector("#neutral").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/neutral.png"
});

// for upset emoji
document.querySelector("#upset").addEventListener('mouseover', function(){
    document.querySelector("#upset").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/upset.gif"
});
document.querySelector("#upset").addEventListener('mouseout', function (){
    document.querySelector("#upset").src="/DIT1A06_2234878_Kaung_Si_Phyo/Images/upset.png"
});


