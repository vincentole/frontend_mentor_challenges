const panels = document.querySelectorAll(".panel");
const content = document.querySelectorAll(".content");

panels.forEach((v, i) => {
    v.onclick = () => {
        v.classList.toggle("active");
        if (content[i].style.height) {content[i].style.height = null;}
        else {content[i].style.height = content[i].scrollHeight + "px";}
        
    };
});