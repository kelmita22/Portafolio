const hamburger = document.querySelector(".hamburger");
const wrapper = document.querySelector(".wrapper");
const backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", function () {
	wrapper.classList.add("active");
})

backdrop.addEventListener("click", function () {
	wrapper.classList.remove("active");
})
