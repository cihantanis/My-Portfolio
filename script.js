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
        document.body.style.backgroundColor='red';
        isBlue=false;
    }
}