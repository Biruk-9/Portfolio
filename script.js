// script.js
      function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }

      // Add scroll effect to navbar
      window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
          nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
          nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
        }
      });

      // Add animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe elements for animation
      document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          section.style.opacity = 0;
          section.style.transform = 'translateY(20px)';
          section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          observer.observe(section);
        });
      });