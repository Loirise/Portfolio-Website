const techbtn = document.querySelector('.techbtn');
const techstack = document.querySelector('.techstack');

const projectbtn = document.querySelector('.projectbtn');
const projectssection = document.querySelector('.projectsection');

techbtn.addEventListener('click', () => {
    const isOpen = techstack.classList.contains('slide-in')
    techstack.setAttribute('class', isOpen ? 'slide-out' : 'slide-in')
/*     techstack.classList.toggle('slide-in');
    techstack.classList.toggle('slide-out'); */
})

projectbtn.addEventListener('click', () => {
    const isOpen = projectssection.classList.contains('slide-up')
    projectssection.setAttribute('class', isOpen ? 'slide-down' : 'slide-up')
/*     projectssection.classList.toggle('slide-up');
    projectssection.classList.toggle('slide-down'); */
})