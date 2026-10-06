/**
 * FX-Master Application Logic & Interactivity
 * High-performance vanilla JS modules
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCurrencyConverter();
  initPortfolioChart();
  initSavingsCalculator();
  initPricingToggle();
  initFaqAccordion();
  initNumberCounters();
  initCardMouseGlow();
  initTestimonialsCarousel();
});

/* ==========================================================================
   1. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   2. Live Currency Exchange Calculator (Hero Widget)
   ========================================================================== */
const FX_RATES = {
  USD: { EUR: 0.9214, GBP: 0.7890, JPY: 154.60, SGD: 1.3480, CAD: 1.3650, USD: 1.0 },
  EUR: { USD: 1.0853, GBP: 0.8563, JPY: 167.78, SGD: 1.4629, CAD: 1.4814, EUR: 1.0 },
  GBP: { USD: 1.2674, EUR: 1.1678, JPY: 195.94, SGD: 1.7084, CAD: 1.7300, GBP: 1.0 },
  JPY: { USD: 0.00646, EUR: 0.00596, GBP: 0.00510, SGD: 0.00871, CAD: 0.00882, JPY: 1.0 },
  SGD: { USD: 0.7418, EUR: 0.6835, GBP: 0.5853, JPY: 114.68, CAD: 1.0126, SGD: 1.0 },
  CAD: { USD: 0.7326, EUR: 0.6750, GBP: 0.5780, JPY: 113.26, SGD: 0.9875, CAD: 1.0 }
};

function initCurrencyConverter() {
  const sendInput = document.getElementById('sendAmount');
  const receiveInput = document.getElementById('receiveAmount');
  const sendCurrency = document.getElementById('sendCurrency');
  const receiveCurrency = document.getElementById('receiveCurrency');
  const swapBtn = document.getElementById('swapCurrenciesBtn');
  const rateDisplay = document.getElementById('currentRateDisplay');
  const savingsDisplay = document.getElementById('heroBankSavings');

  if (!sendInput || !receiveInput) return;

  function recalculate() {
    const from = sendCurrency.value;
    const to = receiveCurrency.value;
    const amount = parseFloat(sendInput.value) || 0;

    let rate = 1.0;
    if (FX_RATES[from] && FX_RATES[from][to]) {
      rate = FX_RATES[from][to];
    }

    const converted = amount * rate;
    receiveInput.value = converted.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: to === 'JPY' ? 0 : 2
    });

    if (rateDisplay) {
      rateDisplay.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
    }

    // Estimate bank hidden markup savings (approx 3.2% + $15 wire fee)
    if (savingsDisplay) {
      const bankLoss = (amount * 0.032) + 15;
      savingsDisplay.textContent = `+$${bankLoss.toFixed(2)} USD`;
    }
  }

  sendInput.addEventListener('input', recalculate);
  sendCurrency.addEventListener('change', recalculate);
  receiveCurrency.addEventListener('change', recalculate);

  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const temp = sendCurrency.value;
      sendCurrency.value = receiveCurrency.value;
      receiveCurrency.value = temp;
      recalculate();
    });
  }

  recalculate();
}

/* ==========================================================================
   3. Interactive Canvas Portfolio Spline Chart
   ========================================================================== */
function initPortfolioChart() {
  const canvas = document.getElementById('portfolioChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const timeButtons = document.querySelectorAll('#chartTimeFilter .filter-btn');

  // Timeframe datasets
  const chartDatasets = {
    '24h': [120, 135, 128, 142, 139, 155, 148, 162, 175],
    '7d':  [95, 110, 105, 130, 125, 150, 145, 170, 185, 195],
    '1m':  [80, 95, 115, 110, 140, 135, 160, 180, 210, 230],
    '1y':  [50, 75, 90, 120, 145, 180, 205, 240, 280, 310],
    'all': [30, 55, 80, 110, 150, 190, 230, 270, 320, 360]
  };

  let currentKey = '7d';

  function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth * window.devicePixelRatio || 600;
    canvas.height = parent.clientHeight * window.devicePixelRatio || 220;
    renderChart(chartDatasets[currentKey]);
  }

  function renderChart(data) {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const padding = 20 * (window.devicePixelRatio || 1);
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const minVal = Math.min(...data) * 0.9;
    const maxVal = Math.max(...data) * 1.1;

    const points = data.map((val, idx) => {
      const x = padding + (idx / (data.length - 1)) * chartW;
      const y = height - padding - ((val - minVal) / (maxVal - minVal)) * chartH;
      return { x, y };
    });

    // Draw Gradient Background Fill under curve
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
    gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.1)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    ctx.lineTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const cpX = (points[i].x + points[i + 1].x) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, (points[i].y + points[i + 1].y) / 2);
    }
    const last = points[points.length - 1];
    ctx.lineTo(last.x, last.y);
    ctx.lineTo(last.x, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw Smooth Line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length - 1; i++) {
      const cpX = (points[i].x + points[i + 1].x) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, cpX, (points[i].y + points[i + 1].y) / 2);
    }
    ctx.lineTo(last.x, last.y);
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3 * (window.devicePixelRatio || 1);
    ctx.lineCap = 'round';
    ctx.stroke();

    // Draw Active Glow Pin at Last Point
    ctx.beginPath();
    ctx.arc(last.x, last.y, 6 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();
    ctx.lineWidth = 2 * (window.devicePixelRatio || 1);
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
  }

  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      timeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentKey = btn.getAttribute('data-time') || '7d';
      renderChart(chartDatasets[currentKey]);
    });
  });

  window.addEventListener('resize', resizeCanvas);
  setTimeout(resizeCanvas, 100);
}

/* ==========================================================================
   4. Cost & Savings Calculator Section
   ========================================================================== */
function initSavingsCalculator() {
  const slider = document.getElementById('transferAmountSlider');
  const sliderDisplay = document.getElementById('sliderValueDisplay');
  const fxReceived = document.getElementById('fxReceivedSum');
  const bankReceived = document.getElementById('bankReceivedSum');
  const totalSaved = document.getElementById('totalMoneySaved');
  const pairBtns = document.querySelectorAll('#pairButtons .pair-btn');

  let activeRate = 0.9214;
  let activeSymbol = '€';
  let activeCurr = 'EUR';

  function updateSavings() {
    const amountUSD = parseFloat(slider.value) || 25000;
    sliderDisplay.textContent = `$${amountUSD.toLocaleString('en-US')} USD`;

    // FX-Master calculations (0% markup, $0 wire fee)
    const fxAmount = amountUSD * activeRate;
    fxReceived.textContent = `${activeSymbol}${fxAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${activeCurr}`;

    // Bank calculations (3.8% hidden spread + $45 wire fee)
    const bankLossUSD = (amountUSD * 0.038) + 45;
    const bankEffectiveUSD = Math.max(0, amountUSD - bankLossUSD);
    const bankAmount = bankEffectiveUSD * activeRate;
    bankReceived.textContent = `${activeSymbol}${bankAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${activeCurr}`;

    // Total Savings Display
    totalSaved.textContent = `$${bankLossUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  if (slider) {
    slider.addEventListener('input', updateSavings);
  }

  pairBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pairBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCurr = btn.getAttribute('data-curr') || 'EUR';
      activeRate = parseFloat(btn.getAttribute('data-rate')) || 0.9214;

      const symbols = { EUR: '€', GBP: '£', JPY: '¥', SGD: 'S$', CAD: 'C$', AUD: 'A$' };
      activeSymbol = symbols[activeCurr] || '$';
      updateSavings();
    });
  });

  if (slider) updateSavings();
}

/* ==========================================================================
   5. Pricing Billing Interval Switch (Monthly / Annually 20% off)
   ========================================================================== */
function initPricingToggle() {
  const toggle = document.getElementById('pricingBillingToggle');
  const proAmount = document.querySelector('.price-amount[data-monthly]');
  const proPeriod = document.getElementById('proPeriod');

  if (!toggle || !proAmount) return;

  toggle.addEventListener('click', () => {
    const isAnnual = toggle.classList.toggle('active');
    toggle.setAttribute('aria-checked', isAnnual);

    if (isAnnual) {
      proAmount.textContent = proAmount.getAttribute('data-annual');
      if (proPeriod) proPeriod.textContent = '/mo (Billed annually)';
    } else {
      proAmount.textContent = proAmount.getAttribute('data-monthly');
      if (proPeriod) proPeriod.textContent = '/month';
    }
  });
}

/* ==========================================================================
   6. FAQ Accordion Toggle
   ========================================================================== */
function initFaqAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const isOpen = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   7. Animated Key Metric Number Counters
   ========================================================================== */
function initNumberCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-count')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const isPrefixDollar = counter.textContent.startsWith('$') || target === 14.8;
        
        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo curve
          const easeOut = 1 - Math.pow(2, -10 * progress);
          const current = (target * easeOut);

          const decimals = target % 1 !== 0 ? (target.toString().split('.')[1] || '').length : 0;
          const displayVal = current.toFixed(decimals);

          counter.textContent = `${isPrefixDollar ? '$' : ''}${displayVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }

        requestAnimationFrame(updateCount);
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   8. Mouse Spotlight Card Illumination
   ========================================================================== */
function initCardMouseGlow() {
  const cards = document.querySelectorAll('.glow-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   9. Interactive Testimonials Carousel
   ========================================================================== */
function initTestimonialsCarousel() {
  const testimonials = [
    {
      quote: "“I can invoice clients in different countries and actually know what I'll receive. FX Master makes working globally feel local.”",
      author: "Amara Okafor",
      role: "Creative Director, Lagos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
    },
    {
      quote: "“I used to lose time and money every time I got paid overseas. Now everything happens in one place, and it just works.”",
      author: "Sofia Bennett",
      role: "Independent Consultant, London",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80"
    },
    {
      quote: "“From sending money to managing currencies, it's the kind of simple experience I always wished banking could be.”",
      author: "Daniel Reyes",
      role: "Founder, New York",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
    }
  ];

  let currentIndex = 0;
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const roleEl = document.getElementById('testimonial-role');
  const avatarEl = document.getElementById('testimonial-avatar');
  const prevBtn = document.getElementById('btn-testi-prev');
  const nextBtn = document.getElementById('btn-testi-next');
  const dots = document.querySelectorAll('.testi-dot-btn');

  if (!quoteEl || !authorEl || !roleEl) return;

  function updateTestimonial(index) {
    currentIndex = index;
    const item = testimonials[currentIndex];

    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(4px)';

    setTimeout(() => {
      quoteEl.textContent = item.quote;
      authorEl.textContent = item.author;
      roleEl.textContent = item.role;
      if (avatarEl) {
        avatarEl.src = item.avatar;
        avatarEl.alt = item.author;
      }
      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
    }, 150);

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const nextIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(nextIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (currentIndex + 1) % testimonials.length;
      updateTestimonial(nextIdx);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateTestimonial(idx);
    });
  });
}
