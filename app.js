const hamburger= document.querySelector('.header1 .nav-bar .nav-list .hamburger');
const mobile_menu= document.querySelector('.header1 .nav-bar .nav-list ul');
const header = document.querySelector('.header1.container');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
    var scroll_position =window.scrollY;
    if(scroll_position>250){
        header.getElementsByClassName.backgroundColor="#29323c";
    }else{
        header.getElementsByClassName.backgroundColor="transparent";
    }
});

menu_item.forEach((item) => {

    item.addEventListener('click',()=>{
        hanburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    });


});
