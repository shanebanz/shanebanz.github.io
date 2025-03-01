let activeIndex = -1; 
// -1 just means that we have no box that is active yet, we only

function moveBox(index) {
  let boxes = document.querySelectorAll(".box"); // we select all elements that have the class "box"

  if (activeIndex !== -1) {
    // if it is not equal to -1, it means we have previously pressed a button and that a box is already on the screen
    let prevBox = boxes[activeIndex];
    prevBox.style.backgroundColor = prevBox.dataset.originalColor; // Restore the original color
    prevBox.classList.remove("active"); // we remove it from the screen
    prevBox.classList.add("inactive"); // and do the initial stage of what it used to look like
  }

  let newBox = boxes[index];

  // store the original background color only the first time this retains its color
  // para nadin di mawala sa second iteration ng button
  //  ! checks if the value doesn’t exist. If it’s the box’s first use, it stores the background color for later use.
  if (!newBox.dataset.originalColor) {
    newBox.dataset.originalColor = newBox.style.backgroundColor;
  }

  newBox.classList.add("active"); // shows the box on the screen
  newBox.classList.remove("inactive");

  activeIndex = index; 
  // our activeIndex is set to whatever button is pressed. If we press the button for Tuesday, it should have the value of 1.
}