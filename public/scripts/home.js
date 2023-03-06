const techbtn = document.querySelector('.techbtn');
const techstack = document.querySelector('.techstack');

const projectbtn = document.querySelector('.projectbtn');
const projectssection = document.querySelector('.projectsection');

techbtn.addEventListener('click', () => {
    const isShown = techstack.classList.contains('fade-in-fwd')
    if(isShown){
        techstack.classList.remove('fade-in-fwd');
        techstack.classList.add('fade-out-bck');
    } else {
        techstack.classList.add('fade-in-fwd');
        techstack.classList.remove('fade-out-bck');
    }
})

projectbtn.addEventListener('click', () => {
    const isShown = projectssection.classList.contains('fade-in-fwd')
    if(isShown){
        projectssection.classList.remove('fade-in-fwd');
        projectssection.classList.add('fade-out-bck');
    } else {
        projectssection.classList.add('fade-in-fwd');
        projectssection.classList.remove('fade-out-bck');
    }
})