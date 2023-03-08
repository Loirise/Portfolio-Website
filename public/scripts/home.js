const currentPath = window.location.pathname;
const homelink = document.querySelector('#homelink');
const projectslink = document.querySelector('#projectslink');
const aboutlink = document.querySelector('#aboutlink')


const techbtn = document.querySelector('.techbtn');
const techstack = document.querySelector('.techstack');

const projectbtn = document.querySelector('.projectbtn');
const projectssection = document.querySelector('.projectsection');

switch(currentPath){
    case '/':
        homelink.classList.add('active');
        projectslink.classList.remove('active');
        aboutlink.classList.remove('active');
        break;
    case '/projects':
        projectslink.classList.add('active');
        homelink.classList.remove('active');
        aboutlink.classList.remove('active');
        break;
    case '/aboutme':
        aboutlink.classList.add('active');
        homelink.classList.remove('active');
        projectslink.classList.remove('active');
        break;
}

if(techbtn){
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
}

if(projectbtn){
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
}

