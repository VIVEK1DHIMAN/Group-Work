const toogle_button = document.getElementsByClassName('dropdown-button')[0];
const toogle_menu =  document.getElementsByClassName('navbar-links')[0];

let count = 0;

toogle_button.addEventListener('click', ()=>{
    if(count != 1){
        toogle_menu.classList.add("active");
        count = 1;
    }else{
        toogle_menu.classList.remove("active");
        count = 0;
    }
    
});