document.querySelector(".menu").addEventListener("click",displayMenu);

function displayMenu(){
    document.querySelector(".menu-hidden").classList.add("menu-visibility");
    document.querySelector(".menu-hidden").classList.remove("menu-hidden");
    document.querySelector(".menu").classList.add("men-hidden");
}

document.querySelector(".menu-hidden").addEventListener("click",hideMenu);

function hideMenu(){
    document.querySelector(".menu-visibility").classList.add("menu-hidden");
    document.querySelector(".menu-hidden").classList.remove("menu-visibility");
  
    document.querySelector(".menu").classList.remove("men-hidden");
}
