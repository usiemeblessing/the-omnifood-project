// const myName = "Usieme Blessing";

// const h1 = document.querySelector(".heading-primary");

// h1.addEventListener("click", function () {
// 	h1.textContent = myName;
// 	h1.style.backgroundColor = "yellow";
// 	h1.style.padding = "5rem";
// });

//////////////////////////////////////////////
//Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////
//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////
