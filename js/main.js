
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating animation to logo after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.logo').classList.add('floating');
    }, 3000);
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    // Add mobile menu toggle if needed
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            navbarCollapse.classList.toggle('show');
        });
    }
});

// Parallax effect for hero text
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });

    icon.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animate numbers with intersection observer
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const target = parseInt(number.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            number.classList.add('animate');

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    number.textContent = target;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);

            numberObserver.unobserve(number);
        }
    });
}, { threshold: 0.5 });

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(number => {
    numberObserver.observe(number);
});

// Add hover effects to portrait
const portraitImage = document.querySelector('.portrait-image');
if (portraitImage) {
    portraitImage.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    portraitImage.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
}

// Skills section animations
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    skillsObserver.observe(category);
});

// Skill item interactions
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });

    // Add click functionality for skills
    item.addEventListener('click', function () {
        const skillName = this.getAttribute('data-skill');
        console.log('Skill clicked:', skillName);
        // Add your skill selection logic here

        // Add a temporary highlight effect
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Animate skill icons on scroll
const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'float 3s ease-in-out infinite';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

// Observe skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.style.animation = 'none';
    iconObserver.observe(icon);
});

// Services section animations
const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    servicesObserver.observe(card);
});

// Service card interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });

    // Add click functionality for service cards
    card.addEventListener('click', function () {
        const serviceTitle = this.querySelector('.service-title').textContent;
        console.log('Service clicked:', serviceTitle);
        // Add your service navigation logic here

        // Add a temporary highlight effect
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Projects section animations
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectsObserver.observe(card);
});

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });

    // Add click functionality for project cards
    card.addEventListener('click', function (e) {
        if (!e.target.closest('.project-link')) {
            const projectTitle = this.querySelector('.project-title').textContent;
            console.log('Project clicked:', projectTitle);
            // Add your project navigation logic here
        }
    });
});

// Project link interactions
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.stopPropagation();
        const linkType = this.querySelector('i').classList.contains('fa-external-link-alt') ? 'Live Demo' : 'GitHub';
        console.log(`${linkType} link clicked`);
        // Add your link navigation logic here
    });
});

// Tech tag interactions
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.background = '#007bff';
        this.style.color = '#ffffff';
        this.style.transform = 'translateY(-2px)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.background = '#f8f9fa';
        this.style.color = '#666';
        this.style.transform = 'translateY(0)';
    });
});

// Typing effect for hero name (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Uncomment the line below to enable typing effect
// setTimeout(() => typeWriter(document.querySelector('.hero-name'), 'Bruno Erdison'), 1000);

// Contact form functionality
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        let isValid = true;

        // Reset error states
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error', 'success');
        });
        document.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });

        // Validate name
        if (!name || name.trim().length < 2) {
            document.getElementById('name').classList.add('error');
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name').classList.add('success');
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email').classList.add('success');
        }

        // Validate message
        if (!message || message.trim().length < 10) {
            document.getElementById('message').classList.add('error');
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('message').classList.add('success');
        }

        if (isValid) {
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Show success message
                successMessage.style.display = 'block';

                // Reset form
                this.reset();
                document.querySelectorAll('.form-control').forEach(input => {
                    input.classList.remove('error', 'success');
                });

                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);

                console.log('Form submitted:', { name, email, message });
            }, 2000);
        }
    });
}

// Contact section animations
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

// Observe contact elements
document.querySelectorAll('.contact-form, .contact-info').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    contactObserver.observe(element);
});

// Contact item hover effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.background = '#f8f9fa';
        this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.background = 'transparent';
        this.style.transform = 'translateX(0)';
    });
});



// Form input focus effects
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Real-time form validation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        const errorElement = this.parentElement.querySelector('.error-message');
        if (this.value.trim().length > 0) {
            this.classList.remove('error');
            this.classList.add('success');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        } else {
            this.classList.remove('success');
        }
    });
});

// Footer animations
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

// Observe footer elements
document.querySelectorAll('.footer-brand, .footer-section, .footer-bottom').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    footerObserver.observe(element);
});

// Footer social link interactions
document.querySelectorAll('.footer-social-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const platform = this.querySelector('i').className;
        console.log('Footer social link clicked:', platform);
        // Add your social media navigation logic here

        // Add a temporary highlight effect
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Footer link interactions
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const linkText = this.textContent;
        const href = this.getAttribute('href');
        console.log('Footer link clicked:', linkText, href);
        // Add your navigation logic here

        // Add a temporary highlight effect
        this.style.transform = 'translateX(10px)';
        setTimeout(() => {
            this.style.transform = 'translateX(5px)';
        }, 200);
    });
});

// Smooth scrolling for footer links
document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



  const roles = ["Frontend Developer", "UI/UX Interaction Designer", "Web Creator"];
  const typedText = document.getElementById("typed-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    const currentText = currentRole.substring(0, charIndex);

    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 1000);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
