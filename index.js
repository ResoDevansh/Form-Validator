let username=document.getElementById('Username');
let password=document.getElementById('Password');
console.log("Hello JS!");
let f=true;
let forms=document.getElementById("forms");
// forms.addEventListener("submit",formValidator);
function formValidator(){
    console.log("Clicked!");
    if(username.value==""){
        document.getElementById("error1").innerHTML="Empty Username not valid!";
        f=false;
    }
    else if(username.value.length<=3){
        document.getElementById("error1").innerHTML="Username must be greater than 3 charcters!";
        f=false;    
    }
    else{
        document.getElementById("error1").innerHTML="";
        f=true;
    }
    if(password.value.length==0){
        document.getElementById("error2").innerHTML="Empty password invalid!";
        f=false;
    }
    else{
        document.getElementById("error2").innerHTML="";
        f=true;
    }
    return f;
};