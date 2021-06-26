const navlink = document.querySelectorAll(".navlink");
const nav = document.querySelector("nav");

//===================dropdown creation =================================

let baseHeight;
function adjustInnerHTML() {
    if (document.body.clientWidth <= 612) {
        if (typeof baseHeight === "undefined") {
            baseHeight = document.querySelector("nav").style.height;
        }

        if (typeof baseHeight !== "undefined"){
        document.querySelector("ul").style.flexDirection = "column";
        document.querySelector("ul").style.textAlign = "center";
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.visibility = "hidden";
        }
    }

    } else {
        document.querySelector("ul").style.flexDirection = "row";
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.visibility = "visible";
            navlink[i].style.backgroundColor = "var(--color2)";
        }
         nav.style.height = "1em";
    }
}

const dropdownCheck = document.querySelector(".mobileLinkDropdown");
const button = document.getElementById("mobileLinks")

dropdownCheck.addEventListener("click", () => {
    if (button.checked) {
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.visibility = "visible";
        }
        nav.style.height = baseHeight;
        
    } else {
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].style.visibility = "hidden";
        }
        nav.style.height = "1em";
    }
}
)

window.addEventListener("resize", adjustInnerHTML);

adjustInnerHTML();

//========================= carousel function ================================

// const carouselSlide = document.querySelector('#carousel-paras');
// const carouselPara = document.querySelectorAll('.header-para');

// const prevBtn = document.querySelector('#prev-btn');
// const nextBtn = document.querySelector('#next-btn');

// let counter = 1;
// const size = carouselPara[0].clientHeight;

// carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', ()=> {
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
// });