var toggle_btn ;
var bigWrapper ;
var humburger_menu;

function declare() {
    toggle_btn = document.querySelector('.toggle-btn');
    bigWrapper = document.querySelector('.bigWrapper');
    humburger_menu = document.querySelector(".hamburger-menu ")
}
var main = document.querySelector('main');

let dark = false;

declare();
function toggleAnimation () {
    dark = !dark;
    let clone = bigWrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add('copy');
    main.appendChild(clone);

    clone.addEventListener("animationend", () => {
        bigWrapper.remove();
        clone.classList.remove('copy')
        declare();
        events();
    })
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);

    humburger_menu.addEventListener("click", () =>{ bigWrapper.classList.toggle("active");})

}
events();