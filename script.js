/**
 * Argha Kamal Saha - Personal Portfolio JavaScript
 * Interactive Particle Canvas, Typing Animation, Dynamic Filtering, Modals, Terminal logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initTypingEffect();
  initNavigation();
  initProjectFiltering();
  initModals();
  initTerminalInteractivity();
  initClipboardAndForm();
});

/* 1. Interactive Particle Canvas */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;

  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f2fe' : '#8b5cf6';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = '#00f2fe';
          ctx.globalAlpha = (1 - dist / 140) * 0.15;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* 2. Typing Effect */
function initTypingEffect() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const words = [
    'Full-Stack Developer',
    'Software Engineer Intern',
    'Machine Learning & AI Enthusiast',
    'CSE Student @ MCKVIE'
  ];

  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 40;
  const delayBetweenWords = 1800;

  function type() {
    const currentWord = words[wordIdx];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  type();
}

/* 3. Navigation Scrolling & Active Highlight */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active section on scroll
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

/* 4. Dynamic Project Filtering */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 5. Interactive Modals */
const projectData = {
  'kode-rise': {
    title: 'Kode and Rise',
    badge: 'Full-Stack / E-Commerce',
    description: 'A comprehensive E-Commerce and Digital Marketing application engineered to deliver modern digital storefront capabilities, product showcase, cart logic, and integrated QR code tracking for seamless promotional campaigns.',
    highlights: [
      'Built responsive UI with React.js & Tailwind CSS for optimal conversion rates',
      'Implemented Node.js backend services to handle product inventory & orders',
      'Integrated QRjs dynamic QR generation for interactive digital marketing campaigns',
      'Designed smooth user workflows for modern digital commerce experience'
    ],
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'QRjs'],
    github: 'https://github.com/pushanargha',
    demo: '#'
  },
  'agri-guru': {
    title: 'Agri-Guru',
    badge: 'AI & Supply Chain Security',
    description: 'A tech-driven supply chain and drug verification platform designed to prevent counterfeit agricultural drugs and supplies. Utilizes cryptographic and QR-code tracking to authenticate genuine products from source to consumer.',
    highlights: [
      'Comprehensive supply chain verification platform preventing counterfeit goods',
      'Implemented secure QR-code verification mechanism for instant drug validation',
      'Frontend built with React.js and HTML5/CSS3 for seamless verification UI',
      'Node.js REST APIs for supply chain batch verification & auditing'
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'QR Tracking'],
    github: 'https://github.com/pushanargha',
    demo: '#'
  },
  'ser-database': {
    title: 'South Eastern Railway IT Database System',
    badge: 'Enterprise / Database',
    description: 'Enterprise IT database optimization and query engineering developed during the Summer Internship at South Eastern Railway, Garden Reach.',
    highlights: [
      'Optimized complex Oracle SQL queries to support daily enterprise IT operations',
      'Analyzed multi-relational database schemas for high availability and reporting',
      'Streamlined internal reporting workflows for computer science & IT operations'
    ],
    tech: ['Oracle Database', 'SQL', 'Database Design', 'Enterprise Operations'],
    github: 'https://github.com/pushanargha',
    demo: '#'
  }
};

function initModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('.modal-trigger-btn');

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data) return;

      modalContainer.innerHTML = `
        <div class="project-badge" style="position:static; display:inline-block; margin-bottom:12px;">${data.badge}</div>
        <h2 style="font-size: 2rem; margin-bottom: 12px; color: var(--text-main);">${data.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1rem; line-height: 1.6;">${data.description}</p>

        <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 12px;">Key Highlights & Architecture</h4>
        <ul style="list-style: none; margin-bottom: 24px; padding-left: 0;">
          ${data.highlights.map(h => `<li style="padding-left: 20px; position: relative; margin-bottom: 8px; color: var(--text-muted);"><span style="position: absolute; left: 0; color: var(--accent-cyan);">▹</span>${h}</li>`).join('')}
        </ul>

        <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 12px;">Tech Stack</h4>
        <div class="tech-tags" style="margin-bottom: 28px;">
          ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 16px;">
          <a href="${data.github}" target="_blank" class="btn-primary" style="padding: 10px 22px; font-size: 0.9rem;">
            <i class="fab fa-github"></i> View Repository
          </a>
        </div>
      `;

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Resume Modal logic
  const resumeTrigger = document.getElementById('view-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const resumeCloseBtn = document.getElementById('resume-modal-close');

  if (resumeTrigger && resumeModal) {
    resumeTrigger.addEventListener('click', () => {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    if (resumeCloseBtn) {
      resumeCloseBtn.addEventListener('click', () => {
        resumeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }

    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

/* 6. Interactive Terminal Widget */
function initTerminalInteractivity() {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  // Additional CLI style feel
}

/* 7. Clipboard and Form Handlers */
function initClipboardAndForm() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast('Failed to copy');
        });
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      showToast(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
