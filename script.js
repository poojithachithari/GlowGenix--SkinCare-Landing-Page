//nav-bar mobile
// script.js
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
    mobileMenu.style.flexDirection = 'column';
  }
});
//herosection

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function updateQty(change) {
    const qtyInput = document.getElementById('qtyInput');
    let value = parseInt(qtyInput.value);
    if (!isNaN(value)) {
        value = Math.max(1, value + change);
        qtyInput.value = value;
    }
}

function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("span");

  const isOpen = content.classList.contains("open");

  if (isOpen) {
    content.classList.remove("open");
    icon.textContent = "+";
  } else {
    content.classList.add("open");
    icon.textContent = "−";
  }
}


  //product features
  const toggleBtn = document.getElementById("toggle-btn");
  const moreText = document.getElementById("more-text");

  toggleBtn.addEventListener("click", () => {
    const isHidden = moreText.classList.toggle("hidden");
    toggleBtn.textContent = isHidden ? "Read More" : "Read Less";
  });

//slider
const sliderContainer = document.getElementById("slider-container");
const overlay = document.getElementById("overlay");
const handle = document.getElementById("handle");

// Labels
const label1 = document.getElementById("label-day1");
const label5 = document.getElementById("label-day5");
const label33 = document.getElementById("label-day33");

let isDragging = false;

sliderContainer.addEventListener("mousedown", () => {
  isDragging = true;
  sliderContainer.classList.add("cursor-grabbing");
});
sliderContainer.addEventListener("mouseup", () => {
  isDragging = false;
  sliderContainer.classList.remove("cursor-grabbing");
});
sliderContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  sliderContainer.classList.remove("cursor-grabbing");
});
sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  updateSlider(e.pageX);
});

sliderContainer.addEventListener("touchstart", () => isDragging = true);
sliderContainer.addEventListener("touchend", () => isDragging = false);
sliderContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  updateSlider(e.touches[0].pageX);
}, { passive: false });

function updateSlider(x) {
  const rect = sliderContainer.getBoundingClientRect();
  const offset = Math.min(Math.max(0, x - rect.left), rect.width);
  const percent = (offset / rect.width) * 100;

  overlay.style.clipPath = `inset(0 0 0 ${percent}%)`;
  handle.style.left = `${percent}%`;

  highlightLabel(percent);
}

function highlightLabel(percent) {
  label1.classList.remove("active-label");
  label5.classList.remove("active-label");
  label33.classList.remove("active-label");

  if (percent < 33) {
    label1.classList.add("active-label");
  } else if (percent < 66) {
    label5.classList.add("active-label");
  } else {
    label33.classList.add("active-label");
  }
}

// Initial positioning
window.addEventListener("load", () => {
  setTimeout(() => {
    updateSlider(sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth * 0.11);
  }, 300);
});

window.addEventListener("resize", () => {
  updateSlider(sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth * 0.11);
});
