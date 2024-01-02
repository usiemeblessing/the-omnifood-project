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
//Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href == "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		//scroll to other links
		if (href != "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		//close mobile navigation
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

//////////////////////////////////////////////
//Sticky Navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);
		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}
		if (ent.isIntersecting) {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////
//Fixing Safari flexbox gap
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
