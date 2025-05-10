// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Parallax effect for devices
document.addEventListener('mousemove', (e) => {
  const devices = document.querySelectorAll('.device');
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  devices.forEach((device, index) => {
    const factor = index === 0 ? 20 : -20;
    device.style.transform = `
      rotate(${index === 0 ? -15 : 15}deg)
      translateX(${mouseX * factor}px)
      translateY(${mouseY * factor}px)
    `;
  });
});

// Add this to your existing app.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

function switchCountry(country) {
    if (country === 'in') {
        window.location.href = 'https://cherrypickcc.com/in';
    } else if (country === 'us') {
        window.location.href = 'https://cherrypickcc.com/us';
    }
}
document.addEventListener("DOMContentLoaded", function () {
  const qrCodeContainer = document.querySelector(".qr-code-container");

  // Check if the screen width is greater than or equal to 1024px (desktop)
  console.log("-------->",window.innerWidth);
  if (window.innerWidth >= 1024) {
    qrCodeContainer.style.display = "block";
  }
});

// Set initial country based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const select = document.getElementById('countrySelect');
    if (path.includes('/us')) {
        select.value = 'us';
    } else {
        select.value = 'in';
    }
}); 