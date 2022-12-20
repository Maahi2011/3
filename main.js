//teachablemachine.withgoogle.com/models/izRKObMJu/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xLPV8FQQs/model.json',modelready);
}
function modelready(){
classifier.classify(gotresult)
}
function gotresult(error,results){
    console.log("I got the result")
}