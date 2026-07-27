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