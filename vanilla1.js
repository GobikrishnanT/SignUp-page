let form = document.querySelector("#signup_Id")
let usernameEl = document.querySelector("#name_Id");
let useremailEl = document.querySelector("#email_Id");
console.log(useremailEl);
let pripassEl = document.querySelector("#passwordpri_Id");
let secpassEl = document.querySelector("#passwordsec_Id");
console.log(form);


let btn = document.querySelector("#sub_btn");

let isRequired = value => value === "" ? false : true;
let isUnderLen = (length , min , max) => length > min && length < max ? true : false;
let isemailValid = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
let isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
let showSuccess = (input) => {
    let form_field = input.parentElement;
    console.log(form_field);
    form_field.classList.remove("error");
    form_field.classList.add("success");
    let elem = form_field.querySelector("small");
    elem.textContent = "";
    console.log(input);
};
let showError = (input , msg) => {
    let form_field = input.parentElement;
    console.log(form_field);
    form_field.classList.remove("success");
    form_field.classList.add("error");
    let elem = form_field.querySelector("small");
    elem.textContent = msg;
};

let checkUserName = () => {
    //console.log("Username func is called");
    let min = 3;
    let max= 26;
    if(!isRequired(usernameEl.value)){
        showError(usernameEl , "Name field is Empty");
    }
    else if(!isUnderLen(usernameEl.value.length , min , max)) {
        showError(usernameEl , `Name length must between ${min} to ${max}`);
    }
    else {
        showSuccess(usernameEl);
        return true;
    }
};
let checkUserEmail = () => {
    //console.log("email fun is called");
    if(!isRequired(useremailEl.value)) {
        showError(useremailEl , "Email should not empty");
    }
    else if(!isemailValid) {
        showError(useremailEl , "Invalid email");
    }
    else{
        showSuccess(useremailEl);
        return true;
    }
};

let checkUserPasswordPri = () => {
    //console.log("pri pass fun is called");
    if(!isRequired(pripassEl.value)) {
        showError(pripassEl , "Password should not empty");
    }
    else if(!isPasswordSecure(pripassEl.value)) {
        showError(pripassEl , `Password must has at least 8 
        characters that include at least 1 
        lowercase character, 1 uppercase 
        characters, 1 number, 
        and 1 special character in (!@#$%^&*)`);
    }
    else {
        showSuccess(pripassEl);
        return true;
    }
};

let checkUserPasswordSec = () => {
    //console.log("sec pass is called");
    let prePassword = pripassEl.value.trim();
    if(!isRequired(secpassEl)) {
        showError(secpassEl.value , "Password should not empty");
    }
    else if(prePassword !== secpassEl.value.trim()){
        showError(secpassEl , "Password is not matching!");
    }
    else{
        showSuccess(secpassEl);
        return true;
    }
};

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    //alert("Iam clicked");
    checkUserName();
    checkUserEmail();
    checkUserPasswordPri();
    checkUserPasswordSec();
});


