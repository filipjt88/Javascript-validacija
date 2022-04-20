// Selektovanje svakog elementa iz forme
let form              = document.getElementById('form');
let username          = document.querySelector("#username");
let email             = document.querySelector("#email");
let password          = document.querySelector("#password");
let password_confirm  = document.querySelector("#password_confirm");
let btn               = document.querySelector("button");
let msg               = document.querySelector("#msg");


form.addEventListener("submit",check);

// Funkcija za validaciju polja u formi
function validateInput() {
    // Cekiranje praznih polja i provera za ispis greske
    if(username.value.trim() === "") {
       onError(username,"Ovo polje je obavezno!");
    } else {
       onSuccess(username);
    }

    if(email.value.trim() === "") {
        onError(email,"Ovo polje je obavezno!");
     } else {
        if(!isValidEmail(email.value.trim())) {
        onError(email,"Email nije validan!");
        } else {
            onSuccess(email);
        }
     }

     if(password.value.trim() === "") {
        onError(password,"Ovo polje je obavezno!");
     } else {
        onSuccess(password);
     } 
     
     if(password_confirm.value.trim() === "") {
        onError(password_confirm,"Ovo polje je obavezno!");
     } else {
        onSuccess(password_confirm);
     }   
     
     if(password.value.trim() !== password_confirm.value.trim()) {
        onError(password_confirm,"Sifre se ne podudaraju!");
     }

}


function check(e) {
    e.preventDefault();
   validateInput();
}

// Funkcija za uspesno pounjena polja
function onSuccess(input) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = 'hidden';
    parent.classList.remove("error");
    parent.classList.add("success");
}

// Funkcija za greske
function onError(input,msg) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = 'visible';
    msgEle.innerText = msg;
    parent.classList.add("error");
    parent.classList.remove("success");
}


// Funkcija za proveru validnosti email-a
function isValidEmail(email) {
   return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}


