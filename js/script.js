

// Name (5-15 character)

let txt = document.getElementById('span_1');
let Inp_Name = document.getElementById('Inp_Name');
function NameFun(){

    if(Inp_Name.value.length < 5 || Inp_Name.value.length >= 15){
        txt.innerHTML = "please enter name between 5 to 15 characters";
        txt.style.color = "red";
    }
    else{
        txt.innerHTML = " ";
        return true;
    }
}
Inp_Name.addEventListener('input' , NameFun)


// email check 
let txt_Email = document.getElementById('span_3');
let Inp_Email = document.getElementById('Inp_Email');
function emailFun(){

    if(/[*@]/.test(Inp_Email.value) == false){
       txt_Email.innerHTML = "plaese enter valid email";
       txt_Email.style.color = "red";
    }
    else{
       txt_Email.innerHTML = " ";
       return true;
    }
}
Inp_Email.addEventListener('input' , emailFun);


// password eye appear snd disappear
let Inp_Password = document.getElementById('Inp_Password');
let txtPassword = document.getElementById('span_2');
let icon = document.getElementById('icon')
function passwordApp(){
    if(Inp_Password.type == "password"){
        Inp_Password.type = "text";
        icon.style.color = "red"
        icon.className = "fa-solid fa-eye"
    }else{
        Inp_Password.type = "password";
        icon.className = "fa-solid fa-eye-slash"
        icon.style.color = "black"
    }
}
icon.addEventListener('click' , passwordApp)


// password check
function passFun(){

    if(Inp_Password.value.search(/[A-Z]/) == -1){
        txtPassword.innerHTML = "please enter one Capital letter";
        txtPassword.style.color = "red";
    }
    else if(Inp_Password.value.search(/[0-9]{2}/) == -1){
        txtPassword.innerHTML = "please enter 2 numbers";
        txtPassword.style.color = "red";
    }
    else if(Inp_Password.value.search(/[_]/) == -1 
    && Inp_Password.value.search(/[&]/) == -1 
    && Inp_Password.value.search(/[$]/) == -1){
        txtPassword.innerHTML = "please enter special characters $ , & , _";
        txtPassword.style.color = "red";
        
    }
    else{
        txtPassword.innerHTML = " ";
        return true;
    }
    
}
Inp_Password.addEventListener('input' , passFun)


//button submit
let btn = document.getElementById('btn');
let span_4 = document.getElementById('span_4');
function checkBtn(e){
    e.preventDefault();

    if(Inp_Name.value == "" || Inp_Email.value == "" || Inp_Password.value == ""){
        alert("please enter your data")
    }
    else if ( NameFun() == true && passFun() == true && emailFun() == true){
        alert("go to home page")
    }
    else{
        btn.style.background = "red";
        span_4.innerHTML = "follow notes in previous fields to sign up";
        span_4.style.color = "red"
    }

}

btn.addEventListener('click' , checkBtn);

//loader
let loader = document.getElementById('preloader');
window.onload = setTimeout( function myFun(){
    loader.style.top = '-100vh';
    loader.style.opacity = "0";
},2000)


  



let dark = document.getElementById('dark');

function darkTheme(){
    let right_part = document.getElementById('right_part');
    let left_part = document.getElementById('left_part');
    let img = document.getElementById('img');
    let dark_mode = document.getElementById('dark_mode');
    let h2 = document.getElementById('h2');

    dark_mode.style.background = '#1D1E22';
    dark_mode.style.color = '#fff';

   right_part.style.background = "#1D1E22"; 
   right_part.style.color = "#fff"; 

   left_part.style.background = "#666"; 
   left_part.style.color = "#fff";
   
   img.style.filter= "brightness(.8)";
   h2.style.color = "#13c095";

}
dark.addEventListener('click', darkTheme);


let light = document.getElementById('light');

function lightTheme(){
    let right_part = document.getElementById('right_part');
    let left_part = document.getElementById('left_part');
    let img = document.getElementById('img');
    let dark_mode = document.getElementById('dark_mode');

   right_part.style.background = "#fff"; 
   right_part.style.color = "#000"; 
   btn.style.background = "rgb(24, 138, 109)";

   left_part.style.background = "#188a6d"; 
   left_part.style.color = "#fff";
   
   img.style.filter= "brightness(1)";
   dark_mode.style.background = "#fff";
   dark_mode.style.color = "#1D1E22"

}
light.addEventListener('click', lightTheme)




















































































// input length 

// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.length < 4 || myinp.value.length >= 15){
//         txt.innerHTML = "not valid"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)



// check email found or not 

// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(/[*@]/.test(myinp.value) == false){
//         txt.innerHTML = "plaese enter valid email"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction);




// another way for check email found or not

// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search('@') == -1){
//         txt.innerHTML = "plaese enter valid email"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction);


// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search(/['@']/) == -1){
//         txt.innerHTML = "plaese enter valid email"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)







// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search(/[A-Z]/) == -1){
//         txt.innerHTML = "plaese enter Capital letter"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)



// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search(/[0-9]/) == -1){
//         txt.innerHTML = "plaese enter number"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)





// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search(/[0-9]{2}/) == -1){
//         txt.innerHTML = "plaese enter 2 sequence number"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)



// let txt = document.getElementsByTagName('span')[0];
// let myinp = document.getElementsByTagName('input')[0];
// function myFunction(){

//     if(myinp.value.search(/[_]/) == -1){
//         txt.innerHTML = "plaese enter number"
//     }
//     else{
//         txt.innerHTML = " "
//     }
// }
// myinp.addEventListener('input' , myFunction)