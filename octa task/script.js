document.getElementById('learnMoreBtn').addEventListener('click', function() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});
