/* --- MOBILE MENU --- */

const mobileMenuButton = document.querySelector(".mobile-menu-button");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", function() {
	if (!this.classList.contains("active")) {
		this.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	}
})



const closeButton = document.querySelector(".button-close");

closeButton.addEventListener("click", function() {
	if (mobileMenu.classList.contains("active")) {
		mobileMenu.classList.toggle("active");
		mobileMenuButton.classList.toggle("active");
	}
})
