const panels = document.querySelectorAll(".panel");
const content = document.querySelectorAll(".content");

panels.forEach((v, i) => {
    v.onclick = () => {
        currActive = document.querySelector(".active");
        currContent = document.querySelector(".active .content")
        console.log(currContent);
        if (v == currActive) {
            v.classList.toggle("active");
            if (content[i].style.height) content[i].style.height = null;
            else content[i].style.height = content[i].scrollHeight + "px";
        }
        else {
            if (currContent && currContent.style.height) {
                currContent.style.height = null;
                currActive.classList.remove("active");
            }
            v.classList.toggle("active");
            if (content[i].style.height) content[i].style.height = null;
            else content[i].style.height = content[i].scrollHeight + "px";
        }
        
    };
});