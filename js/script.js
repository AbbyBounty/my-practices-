function addGraphics() {
    //logic to add graphics inside canvas
    let cv = document.querySelector("#cvs");
    let context = cv.getContext("2d");
   
    //circle
    context.beginPath()
    context.arc(200, 200, 50, 0,60)
    context.stroke()
    // line
    context.moveTo(10, 10);
    context.lineTo(150, 150);
    context.stroke()
   
    // triangle
    context.moveTo(10, 10);
    context.lineTo(150, 150);
    context.lineTo(300, 10)
    context.fill()
    context.stroke();
  }
    
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