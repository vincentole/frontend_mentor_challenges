const shareOpen = document.querySelector("#btn-share-open");
const shareClose = document.querySelector("#btn-share-close");
const navSocial = document.querySelector("#nav-social");
const navSocialEls = document.querySelectorAll("#nav-social > *");



shareOpen.addEventListener("click", handleOpen);
shareClose.addEventListener("click", handleClose);

function handleOpen() {
    
    
    
    navSocial.classList.remove("h-0");
    navSocial.classList.add("h-[64px]");

    navSocial.classList.remove("md:h-0");
    navSocial.classList.add("md:h-[52px]");
    navSocial.classList.add("md:overflow-visible");

    setTimeout( () => {
        navSocialEls.forEach(el => {
            el.classList.remove("opacity-0");
        });
    }, 300);

    
}

function handleClose() {
    console.log(navSocialEls)
    
    navSocialEls.forEach(el => {
        el.classList.add("opacity-0");
    }),
    
    setTimeout(() => {
        navSocial.classList.add("h-0");
        
        navSocial.classList.add("md:h-0");
        navSocial.classList.remove("md:h-[52px]]");
        navSocial.classList.remove("md:overflow-visible");
    }, 200);
}