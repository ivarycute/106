function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/q1nexU_cY/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
var cat = 0;

var dog = 0;

var lion = 0;

var cow = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";

        document.getElementById("result_label").style.color = "rgb(" +random_number_r+ ","+ random_number_g +","+ random_number_b +")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+ ","+ random_number_g +","+ random_number_b +")";

        img = document.getElementById("animal_image");
    
        if(results[0].label == "meowing cat") {
            img.src = 'cat.gif';
            cat = cat+1;
        }
        else if(results[0].label == "dog barking") {
            img.src = 'dog.gif';
            dog = dog+1
        }
        else if(results[0].label == "lion roaring") {
            img.src = 'lion.gif';
            lion = lion+1
        }
        else if(results[0].label == "mooing cow") {
            img.src = 'cow.gif';
            cow = cow+1
        }
        else {
            img.src = 'ear.gif';
        }
    }
}