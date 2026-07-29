function welcomeMessage() {
    alert('Hello! I`m Cihan. Welcome to my portfolio!');
}
function changeJobTitle() {
    document.getElementById('jobTitle').innerHTML ='Future Backend Developer'
}
let isBlue=false;
function toggleBackground(){
    if(isBlue==false){
        document.body.style.backgroundColor='lightblue';
        isBlue=true;
    } else {
        document.body.style.backgroundColor='white';
        isBlue=false;
    }
}
function changeName(){
    let userName=prompt('What is your name?');
    document.getElementById('myName').innerHTML=
    'Hello'+userName+'!';
}
let aboutVisible=true;
function toggleAbout(){
    if(aboutVisible){
        document.getElementById('aboutText').style.display='none';
        aboutVisible=false;
    }else{
        document.getElementById('aboutText').style.display='block';
        aboutVisible=true;
    }
}
let darkMode=false;
function toggleDarkMode(){
    if(darkMode==false){
        document.body.style.backgroundColor='#222';
        document.body.style.color='white';
        darkMode=true;
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        darkMode=false;
    }
}
function changeQuote(){
let quotes=[
    'Never give up!',
    'Practice every day.',
    'Dream big.',
    'Backend is my future.',
    'Success takes time.'
];
let randomNumber=Math.floor(Math.random()*quotes.length);
document.getElementById('quote').innerHTML=quotes[randomNumber];
}
function showTime(){
let today=new Date();
document.getElementById('time').innerHTML=
today;
}
console.log(document.getElementById('visitorCount'));
let visitor=0;
function countVisitor(){
    visitor++;
    document.getElementById('visitorCount').innerHTML=
    'Visitor:'+visitor;
}
window.onload = function () {
    countVisitor();
};
function goToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}