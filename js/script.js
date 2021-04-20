function setCookie() {
    document.cookie = "address=pune";
    document.cookie = "token=temptoken";
}

function getCookie() {
    const cookie = document.cookie
    console.log(cookie.split(' ')
    )
}

function setLocalStorage() {
    localStorage.setItem('name', 'rayn')
    localStorage.setItem('phone', 889898989)
}

function getLocalStorage() {
    console.log(`name`+localStorage.getItem('name'))
    console.log(`phone`+localStorage.getItem('phone'))
}

function setSessionStorage() {
    sessionStorage.setItem('auth', 'jjjhjkhjhasdhgajshdkah')
    sessionStorage.setItem('phone', 889898989)
}

function getSessionStorage() {
    console.log(`auth token `+sessionStorage.getItem('auth'))
}



getCookie()