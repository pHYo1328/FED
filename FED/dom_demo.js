"use strict"

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="FED DOM DEMO";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[9].textContent="Wassup";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// getElementByid
// console.log(document.getElementById("mainheader"));
// let mainheader=document.getElementById("mainheader");
//modifying text
// mainheader.textContent="foo";
// mainheader.innerText="bar";
//innerHTML
// mainheader.innerHTML="<h3>Myh3!</h3>";
//style
// mainheader.style.color="red";
// mainheader.style.color="#00FF00";
// mainheader.style.paddingTop="40px"
// mainheader.style.border="2px solid red";
//getelementbytagname
// let h1Elements=document.getElementsByTagName("h1");
// console.log(h1Elements); 
// h1Elements[1].textContent="my h2";
//getelementbyclass
// let h1classes=document.getElementsByClassName("header");
// console.log(h1classes);

//Query Selector
// let mainheader=document.querySelector('#mainheader');
// mainheader.style.color="red";
// let submitBtn=document.querySelector('button[type="submit"]');
// submitBtn.textContent="Blah Blah blah";
// let classItem=document.querySelector('.header');
// classItem.textContent="Wassup";

// queryselectorall
// let listItems=document.querySelectorAll('.listItem');
// listItems[0].style.color="yellow";
//query selector& child nodes
// let unorderlist=document.querySelector('.items');
// console.log(unorderlist.childNodes);
// console.log(unorderlist.children);
// Creating elements with js
// let testdiv=document.createElement('div');
// add class
// testdiv.className="testClass";
//add id
// testdiv.id="testId";
//add attribute
// testdiv.setAttribute('attribute','value');
// testdiv.setAttribute('type','submit');
// add text node
// let testDivText=document.createTextNode("Inserted Myself");
// testdiv.appendChild(testDivText);
//add created div to footer
// let footerContainer=document.querySelector('footer>.container');
// footerContainer.insertAdjacentElement("afterbegin",testdiv);
//events
// let button=document.getElementById("deliverbuttom");
// button.addEventListener("click",buttonClick);
// function buttonClick(){
//     window.alert("Delivered!");
// }

// // let aquabox=document.getElementById("mybox");
// let aquabox=document.querySelector("#mybox");
// aquabox.addEventListener("mouseenter",mouseenterbox);
// function mouseenterbox()
// {
//     let colors=[];
//     colors[0]="#00FF00";
//     colors[1]="#FF0000";
//     colors[2]="#0000FF";
//     let numselect= Math.floor(Math.random()*3);
//     document.querySelector("#mainheader").style.color=colors[numselect];
//     //window.alert("moved into mybox");
//     aquabox.style.background=colors[numselect];
    
// }
// aquabox.addEventListener("mouseleave",mouseleaverbox);
// function mouseleaverbox()
// {
//     document.querySelector("#mainheader").style.color="aqua";
//     //window.alert("moved into mybox");
    
// }

// let foo=new Array();
// let bar=[];
// let foo=new Array("Monday","Tuesday","Wednesday");
// let bar=["Monday","Tuesday","Wednesday"];
// let foo=["Monday",true,1994,function(){window.alert("wassup")}];
//queues
// let foo=[];
// foo.push("Monday");
// foo.push("Tuesday");
// foo.push("Wednesday");
// console.log(foo.shift());
// console.log(foo.pop());
// let foo=["Monday","Tuesday","Wednesday"];
// console.log(foo[foo.length-1]);
// console.log(foo.at(-1));
// for(let i=0;i<foo.length;++i)
// {
//     console.log(foo[i]);
// }
// for(let i of foo){
//     console.log(i);
// }
// foo.forEach(PrintMessage);
// function PrintMessage(value){
//     console.log(value);
// };

// let foo=[];
// foo[776]="Wassup";
// console.log(foo.length);

//img slider
function SlideImage(){
    let imagePaths=new Array(
        "/images/1.jpg","/images/2.jpg","/images/3.jpg"
    )
    // let sourcePath="/images/";
    // let finalPath= sourcePath+random(1,3).toString()+".jpg";
    document.querySelector("#myImg").src=imagePaths[random(0,2)];
}

setInterval(SlideImage,1000);
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let isHidden=false;
function ToggleImage(){
    let imgBox=document.querySelector("#myImg");
    isHidden = !isHidden;
    // imgBox.style.visibility=isHidden ? "hidden" : "visible";
    if(isHidden)
    {
        imgBox.style.visibility="hidden";
    }
    else imgBox.style.visibility="visible";
}

document.querySelector("#myButton").addEventListener('click',ToggleImage);





