var timerid = 0;
var images = ["login.png", "login3.png", "images1.jpeg", "LogMeIn.jpg", "images2.jpeg", "images.jpeg", "bg.jpeg", "bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "index.jpeg"];
//var backgroundImages = ["login2.jpg", "login3.jpg", "user-register-form.jpg", "1531851.jpg"];
var countimages = 0;
//var countBGimages = 0;
function startTime() {
    if(timerid) {
        timerid = 0;
    }
    var date = new Date();
    if(countimages == images.length) {
        countimages = 0;
    }
    if(countBGimages == backgroundImages.length) {
        countBGimages = 0;
    }
    if(date.getSeconds() % 5 === 0) {
        document.getElementById("loginimage").src = images[countimages];
        //document.body.style.backgroundImage = 'url('+backgroundImages[countBGimages]+')';
    }
    countimages++;
    //countBGimages++;
    timerid = setTimeout("startTime()", 1000);
}
