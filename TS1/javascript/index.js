function changeBgColor() {
    const resumeBody = document.getElementsByClassName("resume-container")[0];

    if (resumeBody.classList.contains('bg-color')) {
        resumeBody.classList.remove('bg-color')
        resumeBody.classList.add('resume-change-color');
    } else {
        resumeBody.classList.remove('resume-change-color');
        resumeBody.classList.add('bg-color')
    }
}


//          OR WE CAN ALSO DO IT LIKE THIS (A REFERENCE TO SIR JC'S LECTURE) 
//          ASSUME WE HAVE A CSS SELECTOR THAT IS NAMED '.change-background'
/*
function changeBgColor() {
    const resumeBody = document.getElementsByClassName("resume-container")[0]; 

    if (resumeBody.style.backgroundColor === 'rgb(196, 196, 196)' || resumeBody.style.backgroundColor === '#c4c4c4') {
        resumeBody.style.backgroundColor = '#E3F0AF';
    } else {
        resumeBody.style.backgroundColor = '#c4c4c4';
    }
}
*/