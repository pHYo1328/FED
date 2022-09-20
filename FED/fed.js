"use strict"

// window.alert("This is an alert!");
// window.prompt("this is a prompt","hi i am a default value");
// window.confirm("This is a confirm");

function H1ByElements()
{
    let s=document.getElementsByTagName("h1")[0].childNodes[0].textContent;
    window.alert(s);
}

H1ByElements();

function h1byId()
{
    let s=document.getElementById("myid").textContent;
    console.log(s);
    window.alert(s);
}
h1byId();

function addtoclass(){
    document.getElementById("myid").classList.add("colorclass");
    document.getElementById("myid").style.color="#FF0000";
}

addtoclass();