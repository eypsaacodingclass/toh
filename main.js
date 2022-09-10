function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
      classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/0P8JXp-hN/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
      
      document.getElementById("result_label").innerHTML = '#RAGEGAME - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = '#BANTOH(dont tho) - '+ (results[0].confidence*100).toFixed(2)+" %"
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
      
      img = document.getElementById('1')
      img1 = document.getElementById('2')

      if (results[0].label == "Clap") {
        img.src = 'doggif106.jpg';
        img1.src = 'pig 106.jpg';
      } else if (results[0].label == "Background Noise") {
        img.src = 'dog106.jpg';
        img1.src = 'piggif106.jpg';
      }
    }
  }
