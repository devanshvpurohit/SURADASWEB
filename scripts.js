
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  
    // Close mobile menu when clicking a nav link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }
  
  // Header scroll effect
  const header = document.getElementById('main-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll for "Learn More" button
  const learnMoreBtn = document.getElementById('learn-more-btn');
  
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      if (email) {
        // In a real application, you would send this to your server
        console.log('Newsletter subscription for:', email);
        
        // Show success message (simplified for demo)
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        emailInput.value = '';
      }
    });
  }
  
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
