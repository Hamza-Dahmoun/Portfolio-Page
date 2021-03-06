/********************************************* MENU BUTTON CLICKS IN MOBILE DEVICE */
document.querySelector("#navbar i").addEventListener("click", showMenu);
function showMenu() {
    let menuBtnContainer = document.getElementById("menu-buttons-container");
    menuBtnContainer.className = "menu-buttons-container-shown";
    /*Please read the description of css class .menu-buttons-container-shown in css file*/


    document.querySelector("#navbar i").removeEventListener("click", showMenu);
    document.querySelector("#navbar i").addEventListener("click", hideMenu);
}
function hideMenu() {
    let menuBtnContainer = document.getElementById("menu-buttons-container");
    menuBtnContainer.className = "menu-buttons-container-hidden";
    /*Please read the description of css class .menu-buttons-container-hidden in css file*/

    document.querySelector("#navbar i").removeEventListener("click", hideMenu);
    document.querySelector("#navbar i").addEventListener("click", showMenu);
}
let menuLinks = document.querySelectorAll("#navbar a");
for(let i=0; i<menuLinks.length; i++){
    menuLinks[i].addEventListener("click", hideMenu);
}
/********************************************* PROJECTS HOVER EFFECT SIMULATION IN MOBILE DEVICE */
let projects = document.getElementsByClassName("project-tile");
for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("touchstart", projectTouchStart);
    projects[i].addEventListener("touchend", projectTouchEnd);
}

function projectTouchStart(event) {
    //this function makes the project container elements transparent and displays the project description and links
    // but it waits for one second to do so ... for better UX
    setTimeout(function () {
        //1- make touched elements transparent
        let project_tile = event.target.closest(".project-tile");//bringing the nearest element that have a class 'project-tile'
        let project_name_container = event.target.closest(".project-tile").querySelector(".project-name-container");//bringing the nearest element that have a class 'project-name-container'
        let project_picture = event.target.closest(".project-tile").querySelector(".project-picture");//bringing the nearest element that have a class 'project-picture'
        let technologies_in_project_container = event.target.closest(".project-tile").querySelector(".technologies-in-project-container");//bringing the nearest element that have a class 'technologies-in-project-container'    
        project_tile.style.boxShadow = "0px 0px 10px var(--cool-gray)";
        project_name_container.style.opacity = 0.1;
        project_picture.style.opacity = 0.1;
        technologies_in_project_container.style.opacity = 0.1;
        //2- display hiden elements
        let project_description_and_buttons_container = event.target.closest(".project-tile").querySelector(".project-description-and-buttons-container");//bringing the nearest element that have a class 'project-description-and-buttons-container'    
        project_description_and_buttons_container.style.opacity = 1;
    }, 400);

}
function projectTouchEnd(event) {
    //this function makes the project container elements opacity=1 and hide the project description and links
    // but it waits for one second to do so ... for better UX
    setTimeout(function () {
        //1- make the project container elements opacity=1
        let project_tile = event.target.closest(".project-tile");//bringing the nearest element that have a class 'project-tile'
        let project_name_container = event.target.closest(".project-tile").querySelector(".project-name-container");//bringing the nearest element that have a class 'project-name-container'
        let project_picture = event.target.closest(".project-tile").querySelector(".project-picture");//bringing the nearest element that have a class 'project-picture'
        let technologies_in_project_container = event.target.closest(".project-tile").querySelector(".technologies-in-project-container");//bringing the nearest element that have a class 'technologies-in-project-container'    
        project_tile.style.boxShadow = "none";
        project_name_container.style.opacity = 1;
        project_picture.style.opacity = 1;
        technologies_in_project_container.style.opacity = 1;
        //2- hide the project description and links
        let project_description_and_buttons_container = event.target.closest(".project-tile").querySelector(".project-description-and-buttons-container");//bringing the nearest element that have a class 'project-description-and-buttons-container'    
        project_description_and_buttons_container.style.opacity = 0;
    }, 400);

}

