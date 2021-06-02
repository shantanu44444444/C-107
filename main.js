camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    });
}

console.log('ml5 version : ' , ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/d8GvuxZgK/model.json',modelLoaded);

function modelLoaded(){
    console.log(" Model Loaded");
}