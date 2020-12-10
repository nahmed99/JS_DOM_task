document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const coolButton = document.querySelector('#button');
  coolButton.addEventListener('click', handleOurButtonClick);
});


const handleOurButtonClick = function() {
  console.log("The button has been clicked! 🧨")
}


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
