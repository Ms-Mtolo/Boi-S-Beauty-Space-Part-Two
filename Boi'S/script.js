// Navigation functionality for all pages
function toggleMenu() {
  const navigation = document.getElementById("navigation");
  const hamburger = document.querySelector(".hamburger");

  navigation.classList.toggle("mobile-active");
  hamburger.classList.toggle("active");
}

// Close menu when clicking on a link
document.querySelectorAll("#navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    const navigation = document.getElementById("navigation");
    const hamburger = document.querySelector(".hamburger");

    navigation.classList.remove("mobile-active");
    hamburger.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const navigation = document.getElementById("navigation");
  const hamburger = document.querySelector(".hamburger");
  const isClickInsideNav = navigation.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnHamburger &&
    navigation.classList.contains("mobile-active")
  ) {
    navigation.classList.remove("mobile-active");
    hamburger.classList.remove("active");
  }
});

// Add animation delays for gallery items
document.addEventListener("DOMContentLoaded", function () {
  const figures = document.querySelectorAll("figure");
  figures.forEach((figure, index) => {
    figure.style.animationDelay = `${(index + 1) * 0.1}s`;
  });
});

// Form handling for contact page
if (document.getElementById("bookingForm")) {
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const submitButton = this.querySelector('input[type="submit"]');
      const originalText = submitButton.value;

      // Show loading state
      submitButton.value = "Booking...";
      submitButton.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        alert(
          "Thank you for your booking! We will contact you shortly to confirm your appointment."
        );
        this.reset();
        submitButton.value = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
}

// ===== CRITICAL FIX: Prevent horizontal scrolling on mobile =====
function preventHorizontalScroll() {
  let startX = 0;
  let startY = 0;

  document.addEventListener("touchstart", function (e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  document.addEventListener("touchmove", function (e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      // If user is trying to scroll horizontally more than vertically, prevent it
      if (Math.abs(x - startX) > Math.abs(y - startY)) {
        e.preventDefault();
      }
    }
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", function () {
  preventHorizontalScroll();

  // Additional safety measure
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";

  // Remove any inline width styles that might have been missed
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (img.style.width && img.style.width.includes("%")) {
      img.style.width = "100%";
    }
  });
});

// Additional safety for window resize
window.addEventListener("resize", function () {
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";
});
