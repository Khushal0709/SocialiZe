// side bar
const menuItems=document.querySelectorAll('.menu-item');

const changeActive=()=>{
    menuItems.forEach(item => {
      item.classList.remove('active');
    })
}

menuItems.forEach(item =>{

item.addEventListener('click',()=>{
    changeActive();
    item.classList.add('active');
    if(item.id !='notifications'){
        document.querySelector('.notifications-popup').style.display='none';
      
    }
    else {
        document.querySelector('.notifications-popup').style.display='block';
        document.querySelector('#notifications .notification-count').style.display='none';
    }
})
})


// messages

const messageNotification=document.querySelector('#message-notifications');
const messages=document.querySelector('.messages');
    messageNotification.addEventListener('click',()=>{
    document.querySelector('.messages').style.boxShadow='0 0 1rem var(--color-primary)';
    document.querySelector('#message-notifications .notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow='none';
    },2000);
   
})
let whitelightness;
let darklightness;
let lightlightness;
 const changebg=()=>{
        ShadowRoot.style.setProperty('--white-color-lightness',whitelightness);
        ShadowRoot.style.setProperty('--dark-color-lightness',darklightness);
        ShadowRoot.style.setProperty('--light-color-lightness',lightlightness);
 }

const dark=document.querySelector('#dark');
darklightness='95%';
whitelightness='0%';
lightlightness='12%';
dark.addEventListener('click',()=>{
    dark.classList.add('active');
});
changebg();