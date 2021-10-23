let submitButton = document.querySelector('.button');
let ServerResponse = document.querySelector('.serverResponse')


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateNumber(number) {
    re = /^(\+|-)?[1-9][0-9]*(\.[0-9]*)?$/
    return re.test(number)
}

function validateText(text) {
    text += ""
    if (text.length > 2) {
        return true
    }else {
        return false
    }
}


function sendDataToServer(data) {
    RegistrationUrl = ''
    let xhr = new XMLHttpRequest();
    xhr.open("POST", RegistrationUrl)
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onload = function() {
            if (xhr.status == 200) {
                ServerResponse.style.display = "initial";s
                ServerResponse.style.color = "green"
                ServerResponse.innerText = "Data sent Successfully"
            }else {
                ServerResponse.style.display = "initial";
                ServerResponse.style.color = "red";
                ServerResponse.innerText = "Data sent Successfully"
            }
    }
    
    xhr.send(data)
    
}



submitButton.addEventListener("click", () => {
    let username =  document.querySelector('.username');
    let email =  document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let text = document.querySelector('.textIn');
    let valid = true


    
    
    if (validateText(username.value)) {
        username.parentElement.classList.remove('warning')
    }else {
        username.parentElement.classList.add('warning')
        valid = false
    }
    if (validateEmail(email.value)) {
        email.parentElement.classList.remove('warning')
    }else {
        email.parentElement.classList.add('warning')
        valid = false
    }
    if (validateNumber(phone.value)) {
        phone.parentElement.classList.remove('warning')
    }else{
        phone.parentElement.classList.add('warning')
        valid = false
    }
    if (validateText(text.innerText)) {
        text.parentElement.classList.remove('warning')
    }else{
        text.parentElement.classList.add('warning')
        valid = false
    }
    
    if (valid) {
        sendDataToServer({'username': username.value, 'email': email.value, 'phone': phone.value, 'bio': text.innerText})
    }
})
