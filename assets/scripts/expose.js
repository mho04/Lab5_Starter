// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //changes images & audio based on dropdown selection
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("section#expose img");
  const audio = document.querySelector("section#expose audio");
  let selected;

  hornSelect.addEventListener('change', function(){
    selected = hornSelect.value;
    switch(selected){
      case 'air-horn':
        image.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        image.src = 'assets/images/no-image.png';
    }
  });

  //sets volumne level
  const volSelect = document.getElementById("volume");
  const volImg = document.querySelector("#volume-controls img");

  volSelect.addEventListener('input', function(){
    const volValue = volSelect.value;
    audio.volume = volValue / 100;
    if(volValue >= 67){
      volImg.src = 'assets/icons/volume-level-3.svg';
      volImg.alt = 'Volume level 3';
    } else if(volValue >= 33){
      volImg.src = 'assets/icons/volume-level-2.svg';
      volImg.alt = 'Volume level 2';
    } else if(volValue >= 1){
      volImg.src = 'assets/icons/volume-level-1.svg';
      volImg.alt = 'Volume level 1';
    } else {
      volImg.src = 'assets/icons/volume-level-0.svg';
      volImg.alt = 'Volume level 0';
    }
  });

  //play corresponding sound 
  const playSound = document.querySelector("section#expose button");
  playSound.addEventListener('click', function(){
    audio.play();

    
    // TODO: if party horn selected, summon confetti 
    if(selected === 'party-horn'){
      confetti.start();
      setTimeout(() => confetti.stop(), 3000);
    }
  });
}

