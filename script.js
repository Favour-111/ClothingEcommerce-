// Carousel functionality
const items = document.querySelectorAll(".carousel-item1");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      item.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

// Automatic carousel
setInterval(nextSlide, 3000);

// Dot click functionality
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-index"));
    showSlide(currentIndex);
  });
});

// back to top
const backToTopButton = document.getElementById("backToTop");

// Show the button after scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex"; // Show button
  } else {
    backToTopButton.style.display = "none"; // Hide button
  }
});

// Scroll back to the top smoothly
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// timer
// Set the target date and time for the countdown
const targetDate = new Date("2025-01-31T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    // Calculate time parts
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    // If the countdown is over
    document.getElementById("countdown-time").innerHTML =
      "<p>Offer expired!</p>";
    clearInterval(countdownInterval);
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the timer immediately
updateCountdown();

//nav functionality

const menuBar = document.querySelector(".menuBar");
const navBar = document.querySelector(".nav-sm");
const offCanvas = document.querySelector(".offcanvas-overlay");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
  offCanvas.classList.toggle("active-canvas");
});

// Close overlay and menu when clicking outside
offCanvas.addEventListener("click", () => {
  navBar.classList.remove("active");
  offCanvas.classList.remove("active-canvas");
});
