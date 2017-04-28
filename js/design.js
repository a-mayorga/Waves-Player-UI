//// Request the camera.
//navigator.getUserMedia(
//    // Constraints
//    {
//        video: true
//    },
//    // Success Callback
//    function(localMediaStream) {
//          // Get a reference to the video element on the page.
//        var vid = document.getElementById('camera-stream');
//
//        // Create an object URL for the video stream and use this 
//        // to set the video source.
//        vid.src = window.URL.createObjectURL(localMediaStream);
//    },
//    // Error Callback
//    function(err) {
//        // Log the error to the console.
//        console.log('The following error occurred when trying to use getUserMedia: ' + err);
//    }
//);


function logInClic() {
    boton = document.getElementById('btnSignIn');
    boton.textContent = ""
    boton.style.marginTop = "45px";
    boton.style.minHeight = "60px";
    boton.style.minWidth = "60px";
    boton.style.width = "60px";
    boton.style.height = "60px";
    boton.style.borderRadius = "50%";
}

function showSignUp() {
    window.location.assign('signUp.html')
}

function showSignIn() {
    window.location.assign('index.html')
}