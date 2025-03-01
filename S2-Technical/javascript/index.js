let activeIndex = -1;
// -1 just means that we have to box that is active yet, we only

function moveBox(index) {
  let boxes = document.querySelectorAll(".box"); // we select all elements that has the element of box

  if (activeIndex !== -1) {
    // if is not equal to -1 it means we have previously pressed on a button and that a box is already on the screen
    boxes[activeIndex].classList.remove("active"); // we remove it from the screen
    boxes[activeIndex].classList.add("inactive"); // and do the initial stage of what it used to look like
  }

  boxes[index].classList.add("active"); // shows the box on the screen
  boxes[index].classList.remove("inactive");

  activeIndex = index; // our activeIndex is set to whatever button is pressed. if we have pressed button tuesday it should have the value of 1.
}
