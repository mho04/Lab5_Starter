// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const input = document.getElementById("text-to-speak");
  const voiceSelected = document.getElementById("voice-select");
  const button = document.querySelector('button');
  let voices;
  
  //loads all the accent options for dropdown selection
  window.speechSynthesis.onvoiceschanged = function(){
    voices = speechSynthesis.getVoices(); 
    voiceSelected.innerHTML = '';
     voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voiceSelected.lang + ')';
      option.setAttribute("data-lang", voices.lang);
      option.setAttribute("data-name", voices.name);
      voiceSelected.appendChild(option);
     });
  };

  //text to speech when button is pressed
  button.addEventListener('click', function(){
    const selected = voiceSelected.selectedOptions[0].getAttribute('data-name');
    const text = input.value;
    if (text !== '') {
      const utter = new SpeechSynthesisUtterance(text);
      const voice = voices.find(v => v.name === voiceSelected);

      if(voice){
        // image changes while talking
        utter.voice = voice;
        speechSynthesis.speak(utter);

        //image changes back when done
      }
    }
  });
}