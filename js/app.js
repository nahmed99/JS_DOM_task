/*

  The Events
  ==========

  1. Element that dispatches the event
  2. What event are we listening for?
  3. The code to run when event is fired (addEventListener: callback function)

  The Event Creators (corresponding numbers to above)
  ===================================================

  1. document
  2. DOMContentLoaded
  3. The function to run (in this case: arrow function)

*/

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // Set up event listeners - Event listeners

  const coolButton = document.querySelector('#button');
  coolButton.addEventListener('click', handleOurButtonClick); //Although handleOurButtonClick is a function, we don't use brackets at the end of its name at this point, otherwise it will be called/executed at this point. We don't want that.

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleTextInput);  //Although handleTextInput is a function, we don't use brackets at the end of its name at this point, otherwise it will be called/executed at this point. We don't want that.


  const selectEvent = document.querySelector('#select');
  selectEvent.addEventListener('change', handleSelectEvent);


  // Form Event Listening
  const coolForm = document.querySelector('#form');
  coolForm.addEventListener('submit', handleFormSubmit);

});


// Handle the events - event handlers


const handleOurButtonClick = function() {
  //console.log("The button has been clicked! 🧨")


  // 'grab' the button-result id and then manipulate it.
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = "That button has definetely been clicked!!! 🔓";


};


const handleTextInput = function(anInputEvent) {
    /*
    console.log(anInputEvent); //Each keystroke in the testbox will trigger an event...we don't want an event for each keystroke.
    console.log(anEvent.target.value);
    */

    const resultParagraph = document.querySelector('#input-result');
    resultParagraph.textContent = `You have typed: ${anInputEvent.target.value}`;

};


const handleSelectEvent = function(aSelection) {
    const resultParagraph = document.querySelector('#select-result');
    resultParagraph.textContent = `You have selected: ${aSelection.target.value}`;
};


const handleFormSubmit = function(submitEvent) {
  
  submitEvent.preventDefault(); // Stops a p;ost request taking place...
  /*
  console.log(submitEvent); //check that the code works so far...
  console.log(submitEvent.target); 
  console.log(submitEvent.target.first_name); 
  console.log(submitEvent.target.first_name.value); 
  */

  const resultParagraph = document.querySelector('#form-result');
  const firstName = submitEvent.target.first_name.value;
  const lastName = submitEvent.target.last_name.value;
  resultParagraph.textContent = `It's going to be ${firstName} ${lastName}`;

}

