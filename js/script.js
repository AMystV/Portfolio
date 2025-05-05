// Smooth scroll for navbar links
document.querySelectorAll('#navbar a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Bootstrap Scrollspy initialization
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  offset: 70
});

// Back to Top button functionality
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Light Mode';
  } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
  }
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  ['name', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    input.classList.remove('is-invalid');
  });

  let valid = true;

  const name = document.getElementById('name');
  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    valid = false;
  }

  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    valid = false;
  }

  const message = document.getElementById('message');
  if (message.value.trim() === '') {
    message.classList.add('is-invalid');
    valid = false;
  }

  if (valid) {
    alert('Thank you for your message! 🎉');
    contactForm.reset();
  }
});

function toggleDrawer(id) {
  const drawer = document.getElementById(id);
  if (!drawer) return;

  // Close all other drawers
  document.querySelectorAll('.drawer-panel').forEach(panel => {
    if (panel.id !== id) {
      panel.classList.remove('open');
    }
  });

  // Toggle this drawer
  drawer.classList.toggle('open');
}

// Optional: close all drawers if clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.drawer-panel') && !event.target.classList.contains('drawer-toggle-btn')) {
    document.querySelectorAll('.drawer-panel.open').forEach(panel => {
      panel.classList.remove('open');
    });
  }
});


