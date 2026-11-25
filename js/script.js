const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

const englishContent = {
  "page-title": "Vu Quang Diep | Personal Portfolio",
  description: "Personal portfolio of Vu Quang Diep, an IT student who enjoys web development, Minecraft, Renegade Immortal, and Cristiano Ronaldo.",
  "menu-open": "Open menu",
  "menu-close": "Close menu",
  "nav-label": "Main navigation",
  "nav-home": "Home",
  "nav-about": "About",
  "nav-home-family": "Home & family",
  "nav-skills": "Skills",
  "nav-learning": "Learning path",
  "nav-projects": "Projects",
  "nav-game": "Mini game",
  "nav-interests": "Interests",
  "nav-goals": "Goals",
  "nav-contact": "Contact",
  "language-to-en": "Switch to English",
  "language-to-vi": "Chuyển sang tiếng Việt",
  "theme-to-light": "Light mode",
  "theme-to-dark": "Dark mode",
  "hero-kicker": "Personal portfolio · Information Technology",
  "hero-title": "Hello, I'm Vu Quang Diep",
  "hero-intro": "I am an IT 20-04 student who enjoys web development and turning ideas into useful websites.",
  "hero-goal": "My goal is to build a strong foundation in HTML, CSS, and web technologies. Outside class, I enjoy listening to music and playing Minecraft.",
  "hero-button": "About me",
  "avatar-alt": "Portrait of Vu Quang Diep",
  "about-title": "About me",
  "about-text": "I am Vu Quang Diep, an Information Technology student at Dai Nam University in class IT 20-04. I enjoy web development, exploring technology, and turning ideas into useful websites.",
  "home-family-title": "Home and family",
  "home-family-intro": "A little about where I grew up and the people in my family.",
  "hometown-label": "Hometown",
  "hometown-name": "Bảo Ái, Lào Cai",
  "hometown-text": "I was born and raised in Bảo Ái, Lào Cai. I have many childhood memories there.",
  "family-label": "Family",
  "family-count": "There are five people in my family",
  "family-members-label": "Family members",
  "family-father": "Father",
  "family-mother": "Mother",
  "family-sister": "Older sister",
  "family-me": "Me",
  "family-younger-sister": "Younger sister",
  "family-text": "My family is a source of support and encouragement in my studies and everyday life. I value the time we spend together.",
  "skills-title": "Skills",
  "skill-html": "HTML5 and semantic content structure.",
  "skill-forms": "HTML links, images, lists, and forms.",
  "skill-css": "Basic CSS (currently learning).",
  "skill-files": "Organizing project files and assets.",
  "learning-title": "Learning path",
  "learning-html-title": "Stage 1: HTML fundamentals",
  "learning-html-text": "I practice HTML5 structure, semantic HTML, links, images, lists, and forms.",
  "learning-css-title": "Stage 2: Styling with CSS",
  "learning-css-text": "I am learning to create layouts, colors, typography, and interfaces for different screen sizes.",
  "learning-project-title": "Stage 3: Completing web projects",
  "learning-project-text": "I apply what I have learned to improve my portfolio and build more practice projects.",
  "projects-title": "Projects",
  "projects-intro": "A practice project created while learning and developing web skills.",
  "project-portfolio-image-alt": "Illustration of a personal portfolio website on a computer screen",
  "project-practice-label": "Practice project · FIT4014 A3",
  "project-portfolio-title": "Personal portfolio",
  "project-portfolio-text": "A personal introduction website built to practice HTML, responsive CSS, and vanilla JavaScript. This is a learning assignment, not a commercial product.",
  "game-title": "Dinosaur game",
  "game-intro": "Jump over the cacti and see how far you can run.",
  "game-score-label": "Score",
  "game-ready": "Choose Start or press Space / the Up Arrow.",
  "game-instructions": "While playing, press Space, the Up Arrow, or the button below to jump.",
  "game-action-start": "Start",
  "game-canvas-ready": "Press Start to play",
  "game-canvas-over": "Try again!",
  "interests-title": "Interests and favorites",
  "interests-intro": "Besides studying and web development, I enjoy games, films, cars, and the footballer I admire.",
  "minecraft-label": "Favorite game",
  "minecraft-title": "Minecraft",
  "minecraft-text": "Minecraft is one of my favorite games. I enjoy exploring its vast world, surviving, building creative structures, and playing with friends. I often play the RLCraft modpack.",
  "minecraft-image-alt": "Minecraft landscape with Steve, Alex, and a block-built world",
  "music-label": "Relaxation",
  "music-title": "Listening to music",
  "music-text": "I enjoy listening to music to relax after class.",
  "tien-nghich-image-alt": "Illustration from the animated series Renegade Immortal",
  "tien-nghich-label": "Favorite series",
  "tien-nghich-title": "Renegade Immortal",
  "tien-nghich-text-1": "Renegade Immortal is a xianxia animated series adapted from the novel of the same name by Er Gen. It follows Wang Lin, an ordinary young man who enters the path of cultivation and grows through difficult trials, loss, and hard choices.",
  "tien-nghich-text-2": "I admire Wang Lin's determination, the expansive cultivation world, and the story of perseverance in the face of adversity.",
  "revuelto-image-alt": "Orange Lamborghini Revuelto supercar",
  "revuelto-label": "Dream supercar",
  "revuelto-title": "Lamborghini Revuelto",
  "revuelto-text": "I love the Revuelto's angular, aerodynamic design and futuristic style. This plug-in hybrid supercar combines a naturally aspirated V12 with three electric motors and all-wheel drive.",
  "revuelto-link": "Discover the Revuelto on Lamborghini's website",
  "lamborghini-logo-alt": "Lamborghini emblem",
  "ronaldo-image-alt": "Photo collage of Cristiano Ronaldo in different team kits",
  "ronaldo-label": "Favorite footballer",
  "ronaldo-title": "Cristiano Ronaldo (CR7)",
  "ronaldo-text-1": "I am a fan of Cristiano Ronaldo, also known as CR7. I admire not only his talent and goals, but also his determination and discipline. Ronaldo shows me that talent alone is not enough for success: you have to work hard every day, face challenges, and keep striving to surpass yourself.",
  "ronaldo-text-2": "What impresses me most is his journey from a boy with a dream to one of the world's best-known footballers. He inspires me to work harder in my studies and life. To me, Ronaldo represents perseverance, determination, and the spirit of pursuing a dream.",
  "ronaldo-text-3": "I will always follow and support him. Thank you, Ronaldo, for being part of my youth.",
  "goals-title": "Learning goals",
  "goals-text": "My goal is to build a strong foundation in HTML, CSS, and web technologies, then use what I learn to create useful websites and complete more practice projects.",
  "contact-title": "Contact",
  "contact-intro": "You can find me on GitHub:",
  "contact-form-title": "Send a message",
  "form-name": "Full name",
  "form-email": "Email",
  "form-message": "Your message",
  "form-submit": "Check form",
  "form-fallback": "This form only checks data in your browser; the website does not send email.",
  "footer-line-1": "Vu Quang Diep · Personal Portfolio · FIT4014 A3 Project",
  "footer-line-2": "Dai Nam University · Information Technology · Class IT 20-04",
  "scroll-progress-label": "Page scroll progress",
  "lightbox-label": "Image gallery",
  "lightbox-close": "Close image",
  "lightbox-previous": "Previous image",
  "lightbox-next": "Next image",
  "back-to-top": "Back to top"
};

const localizedMessages = {
  vi: {
    nameRequired: "Vui lòng nhập họ tên.",
    fieldRequired: "Vui lòng điền trường này.",
    emailRequired: "Vui lòng nhập email.",
    emailInvalid: "Vui lòng nhập địa chỉ email hợp lệ.",
    formInvalid: "Vui lòng kiểm tra các trường được đánh dấu.",
    formValidNoSend: "Thông tin hợp lệ. Đây chỉ là kiểm tra phía trình duyệt; chưa có email nào được gửi.",
    gameReady: "Chọn Bắt đầu, hoặc nhấn Space / phím mũi tên lên.",
    gameRunning: "Game đang chạy — nhảy đúng lúc để tránh xương rồng.",
    gameOver: "Game Over! Bạn đạt {score} điểm.",
    gameActionStart: "Bắt đầu",
    gameActionJump: "Nhảy",
    gameActionReplay: "Chơi lại",
    gameScoreAria: "Điểm: {score}",
    gameCanvasReady: "Nhấn Bắt đầu để chơi",
    gameCanvasOver: "Thử lại nhé!",
    themeLight: "Đã chuyển sang giao diện sáng.",
    themeDark: "Đã chuyển sang giao diện tối.",
    language: "Ngôn ngữ đã chuyển sang tiếng Việt."
  },
  en: {
    nameRequired: "Please enter your full name.",
    fieldRequired: "This field is required.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    formInvalid: "Please check the fields marked below.",
    formValidNoSend: "Your details are valid. This is only a browser-side check; no email has been sent.",
    gameReady: "Choose Start or press Space / the Up Arrow.",
    gameRunning: "The game is running — jump at the right moment to avoid the cacti.",
    gameOver: "Game over! You scored {score} points.",
    gameActionStart: "Start",
    gameActionJump: "Jump",
    gameActionReplay: "Play again",
    gameScoreAria: "Score: {score}",
    gameCanvasReady: "Press Start to play",
    gameCanvasOver: "Try again!",
    themeLight: "Switched to light mode.",
    themeDark: "Switched to dark mode.",
    language: "Language changed to English."
  }
};

let currentLanguage = window.localStorage.getItem("portfolio-language") === "en" ? "en" : "vi";
let galleryImages = [];
let activeGalleryIndex = -1;
let lightboxImage = null;
let lightboxCaption = null;

function message(key) {
  return localizedMessages[currentLanguage][key];
}

function applyLanguage(language, persist = false) {
  currentLanguage = language === "en" ? "en" : "vi";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.defaultText) {
      element.dataset.defaultText = element.textContent;
    }

    const translatedText = englishContent[element.dataset.i18n];
    element.textContent = currentLanguage === "en" && typeof translatedText === "string"
      ? translatedText
      : element.dataset.defaultText;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    if (!element.dataset.defaultAria) {
      element.dataset.defaultAria = element.getAttribute("aria-label") || "";
    }

    element.setAttribute("aria-label", currentLanguage === "en"
      ? englishContent[element.dataset.i18nAria]
      : element.dataset.defaultAria);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    if (!element.dataset.defaultTitle) {
      element.dataset.defaultTitle = element.getAttribute("title") || "";
    }

    element.setAttribute("title", currentLanguage === "en"
      ? englishContent[element.dataset.i18nTitle]
      : element.dataset.defaultTitle);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    if (!element.dataset.defaultAlt) {
      element.dataset.defaultAlt = element.getAttribute("alt") || "";
    }

    element.setAttribute("alt", currentLanguage === "en"
      ? englishContent[element.dataset.i18nAlt]
      : element.dataset.defaultAlt);
  });

  document.querySelectorAll("img[data-lightbox][role='button']").forEach((image) => {
    image.setAttribute("aria-label", `${currentLanguage === "vi" ? "Xem ảnh" : "View image"}: ${image.alt}`);
  });

  if (typeof galleryImages !== "undefined" && activeGalleryIndex >= 0) {
    const activeImage = galleryImages[activeGalleryIndex];
    if (activeImage && lightboxImage && lightboxCaption) {
      lightboxImage.alt = activeImage.alt;
      lightboxCaption.textContent = activeImage.alt;
    }
  }

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    if (!description.dataset.defaultContent) {
      description.dataset.defaultContent = description.content;
    }
    description.content = currentLanguage === "en"
      ? englishContent.description
      : description.dataset.defaultContent;
  }

  const formStatus = document.querySelector("#contact-form-status");
  if (formStatus && formStatus.dataset.messageKey) {
    formStatus.textContent = localizedMessages[currentLanguage][formStatus.dataset.messageKey];
  }
  document.querySelectorAll(".field-error[data-message-key]").forEach((element) => {
    const key = element.dataset.messageKey;
    element.textContent = key ? localizedMessages[currentLanguage][key] : "";
  });

  const languageToggle = document.querySelector("#language-toggle");
  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "vi" ? "EN" : "VI";
    languageToggle.setAttribute("aria-label", currentLanguage === "vi"
      ? englishContent["language-to-en"]
      : englishContent["language-to-vi"]);
  }

  const navToggle = document.querySelector("#nav-toggle");
  if (navToggle) {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.textContent = currentLanguage === "vi"
      ? (isOpen ? "Đóng menu" : "Mở menu")
      : (isOpen ? englishContent["menu-close"] : englishContent["menu-open"]);
  }

  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    const isLight = document.documentElement.dataset.theme === "light";
    themeToggle.textContent = englishContent[isLight ? "theme-to-dark" : "theme-to-light"];
    if (currentLanguage === "vi") {
      themeToggle.textContent = isLight ? "Giao diện tối" : "Giao diện sáng";
    }
  }

  if (persist) {
    window.localStorage.setItem("portfolio-language", currentLanguage);
  }

  window.dispatchEvent(new Event("portfolio-language-change"));
}

const toastElement = document.querySelector("#toast");
let toastTimeout;

function showToast(text) {
  if (!toastElement) return;

  toastElement.textContent = text;
  toastElement.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toastElement.classList.remove("is-visible");
  }, 3000);
}

const progressTrack = document.querySelector("#scroll-progress");
const progressFill = progressTrack && progressTrack.querySelector("span");
let progressUpdatePending = false;

function updateScrollProgress() {
  progressUpdatePending = false;

  if (!progressTrack || !progressFill) return;

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0
    ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
    : 0;
  const roundedProgress = Math.round(progress);

  const backToTopButton = document.querySelector("#back-to-top");
  if (backToTopButton) {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 560);
  }

  if (progressTrack.getAttribute("aria-valuenow") !== String(roundedProgress)) {
    progressTrack.setAttribute("aria-valuenow", String(roundedProgress));
    progressFill.style.transform = `scaleX(${progress / 100})`;
  }
}

function scheduleProgressUpdate() {
  if (!progressUpdatePending) {
    progressUpdatePending = true;
    window.requestAnimationFrame(updateScrollProgress);
  }
}

window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
window.addEventListener("resize", scheduleProgressUpdate, { passive: true });
window.addEventListener("load", scheduleProgressUpdate);
scheduleProgressUpdate();

if (progressTrack && "ResizeObserver" in window) {
  new ResizeObserver(scheduleProgressUpdate).observe(document.body);
}

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  function applyTheme(theme, persist = false) {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.textContent = currentLanguage === "vi"
      ? (isLight ? "Giao diện tối" : "Giao diện sáng")
      : englishContent[isLight ? "theme-to-dark" : "theme-to-light"];

    if (persist) {
      window.localStorage.setItem("portfolio-theme", theme);
      showToast(message(isLight ? "themeLight" : "themeDark"));
    }
  }

  const savedTheme = window.localStorage.getItem("portfolio-theme");
  applyTheme(savedTheme === "light" ? "light" : "dark");

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme, true);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const fields = [
    document.querySelector("#contact-name"),
    document.querySelector("#contact-email"),
    document.querySelector("#contact-message")
  ];
  const formStatus = document.querySelector("#contact-form-status");
  const formFallback = document.querySelector("#contact-form-fallback");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  function getFieldError(field) {
    if (!field.value.trim()) {
      if (field.type === "email") return "emailRequired";
      return field.id === "contact-name" ? "nameRequired" : "fieldRequired";
    }

    if (field.type === "email" && field.validity.typeMismatch) {
      return "emailInvalid";
    }

    return "";
  }

  function updateFieldError(field) {
    const errorKey = getFieldError(field);
    const errorElement = document.querySelector(`#${field.id}-error`);
    field.setAttribute("aria-invalid", String(Boolean(errorKey)));
    errorElement.dataset.messageKey = errorKey;
    errorElement.textContent = errorKey ? message(errorKey) : "";
    return Boolean(errorKey);
  }

  contactForm.addEventListener("input", (event) => {
    formStatus.textContent = "";
    delete formStatus.dataset.messageKey;

    if (event.target.matches("input, textarea") && event.target.getAttribute("aria-invalid") === "true") {
      updateFieldError(event.target);
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalidFields = fields.filter(updateFieldError);

    if (invalidFields.length > 0) {
      formStatus.dataset.messageKey = "formInvalid";
      formStatus.textContent = message("formInvalid");
      invalidFields[0].focus();
      showToast(message("formInvalid"));
      return;
    }

    formStatus.dataset.messageKey = "formValidNoSend";
    formStatus.textContent = message("formValidNoSend");
    showToast(message("formValidNoSend"));
  });

  submitButton.disabled = false;
  formFallback.hidden = true;
}

function initializePageEffects() {
  const canvas = document.querySelector(".particle-background");
  const context = canvas && canvas.getContext("2d");

  if (canvas && context) {
    let width = 0;
    let height = 0;
    let stars = [];
    let snowflakes = [];
    let lastFrame = 0;
    let activeEffect = document.documentElement.dataset.theme === "light" ? "snow" : "night";
    let previousEffect = activeEffect;
    let transitionStartedAt = 0;
    let interactiveFeaturesInitialized = false;

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const isSmallScreen = width <= 600;
      const starCount = isSmallScreen ? 18 : 34;
      const snowCount = isSmallScreen ? 24 : 40;
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.25 + 0.55,
        phase: Math.random() * Math.PI * 2
      }));
      snowflakes = Array.from({ length: snowCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 1.1,
        speed: Math.random() * 16 + 22,
        drift: (Math.random() - 0.5) * 8,
        sway: Math.random() * 8 + 2,
        phase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.8 + 0.45
      }));
    }

    function drawNightSky(alpha, time) {
      if (alpha <= 0) return;

      context.save();
      context.globalAlpha = alpha;
      const moonX = Math.max(36, width - 72);
      const moonY = 76;
      const moonGlow = context.createRadialGradient(moonX, moonY, 8, moonX, moonY, 58);
      moonGlow.addColorStop(0, "rgba(255, 232, 174, 0.2)");
      moonGlow.addColorStop(1, "rgba(255, 232, 174, 0)");
      context.fillStyle = moonGlow;
      context.beginPath();
      context.arc(moonX, moonY, 58, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "#f4e5bb";
      context.beginPath();
      context.arc(moonX, moonY, 19, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgba(164, 148, 112, 0.32)";
      context.beginPath();
      context.arc(moonX - 6, moonY - 5, 3, 0, Math.PI * 2);
      context.arc(moonX + 7, moonY + 6, 2.2, 0, Math.PI * 2);
      context.fill();

      stars.forEach((star) => {
        const twinkle = motionPreference.matches ? 0.65 : 0.4 + (Math.sin(time * 0.0014 + star.phase) + 1) * 0.24;
        context.globalAlpha = alpha * twinkle;
        context.fillStyle = "#d8efff";
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });
      context.restore();
    }

    function drawSnowfall(alpha, deltaSeconds) {
      if (alpha <= 0) return;

      context.save();
      context.globalAlpha = alpha;
      snowflakes.forEach((flake) => {
        if (!motionPreference.matches) {
          flake.phase += flake.swaySpeed * deltaSeconds;
          flake.y += flake.speed * deltaSeconds;
          flake.x += (flake.drift + Math.sin(flake.phase) * flake.sway) * deltaSeconds;
          if (flake.y > height + 4) {
            flake.y = -4;
            flake.x = Math.random() * width;
          }
          if (flake.x < -4) flake.x = width + 4;
          if (flake.x > width + 4) flake.x = -4;
        }

        context.globalAlpha = alpha * (0.34 + flake.radius * 0.12);
        context.fillStyle = "#8eb8cf";
        context.beginPath();
        context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        context.fill();

        if (flake.radius > 1.8) {
          context.strokeStyle = "#8eb8cf";
          context.lineWidth = 0.65;
          context.beginPath();
          for (let spoke = 0; spoke < 3; spoke += 1) {
            const angle = (Math.PI / 3) * spoke;
            const offsetX = Math.cos(angle) * flake.radius * 1.35;
            const offsetY = Math.sin(angle) * flake.radius * 1.35;
            context.moveTo(flake.x - offsetX, flake.y - offsetY);
            context.lineTo(flake.x + offsetX, flake.y + offsetY);
          }
          context.stroke();
        }
      });
      context.restore();
    }

    function drawBackground(time) {
      const frameInterval = width <= 600 ? 40 : 33;
      if (!motionPreference.matches && lastFrame && time - lastFrame < frameInterval) {
        window.requestAnimationFrame(drawBackground);
        return;
      }

      const deltaSeconds = lastFrame ? Math.min((time - lastFrame) / 1000, 0.05) : 0;
      lastFrame = time;
      const nextEffect = document.documentElement.dataset.theme === "light" ? "snow" : "night";
      if (nextEffect !== activeEffect) {
        previousEffect = activeEffect;
        activeEffect = nextEffect;
        transitionStartedAt = time;
      }

      const transition = previousEffect === activeEffect || motionPreference.matches
        ? 1
        : Math.min(1, (time - transitionStartedAt) / 550);

      context.clearRect(0, 0, width, height);
      if (previousEffect !== activeEffect && transition < 1) {
        if (previousEffect === "night") drawNightSky(1 - transition, time);
        else drawSnowfall(1 - transition, deltaSeconds);
      }
      if (activeEffect === "night") drawNightSky(transition, time);
      else drawSnowfall(transition, deltaSeconds);
      if (transition >= 1) previousEffect = activeEffect;

      if (!interactiveFeaturesInitialized) {
        interactiveFeaturesInitialized = true;
        const languageToggle = document.querySelector("#language-toggle");

        if (languageToggle) {
          languageToggle.addEventListener("click", () => {
            applyLanguage(currentLanguage === "vi" ? "en" : "vi", true);
            showToast(message("language"));
          });
        }

        const navToggle = document.querySelector("#nav-toggle");
        const headerTools = document.querySelector(".header-tools");

        function updateMenuToggle() {
          if (!navToggle || !headerTools) return;

          const isOpen = headerTools.classList.contains("is-open");
          navToggle.setAttribute("aria-expanded", String(isOpen));
          navToggle.textContent = currentLanguage === "vi"
            ? (isOpen ? "Đóng menu" : "Mở menu")
            : englishContent[isOpen ? "menu-close" : "menu-open"];
        }

        if (navToggle && headerTools) {
          document.documentElement.classList.add("menu-enabled");
          updateMenuToggle();

          navToggle.addEventListener("click", () => {
            headerTools.classList.toggle("is-open");
            updateMenuToggle();
          });

          document.querySelectorAll("#primary-navigation a").forEach((link) => {
            link.addEventListener("click", () => {
              headerTools.classList.remove("is-open");
              updateMenuToggle();
            });
          });

          window.addEventListener("resize", () => {
            if (window.innerWidth > 820) {
              headerTools.classList.remove("is-open");
              updateMenuToggle();
            }
          }, { passive: true });
        }

        const navigationLinks = Array.from(document.querySelectorAll("#primary-navigation a[href^='#']"));
        const navigationSections = navigationLinks
          .map((link) => document.querySelector(link.getAttribute("href")))
          .filter(Boolean);

        function setActiveNavigation(sectionId) {
          navigationLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${sectionId}`;
            if (isCurrent) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }

        if (navigationSections.length > 0) {
          const initialSectionId = window.location.hash.slice(1) || navigationSections[0].id;
          setActiveNavigation(initialSectionId);

          if ("IntersectionObserver" in window) {
            const navigationObserver = new IntersectionObserver((entries) => {
              const visibleSections = entries.filter((entry) => entry.isIntersecting);
              if (visibleSections.length === 0) return;

              visibleSections.sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
              setActiveNavigation(visibleSections[0].target.id);
            }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });

            navigationSections.forEach((section) => navigationObserver.observe(section));
          }
        }

        const backToTopButton = document.querySelector("#back-to-top");

        if (backToTopButton) {
          backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: motionPreference.matches ? "auto" : "smooth" });
          });
        }

        const lightbox = document.querySelector("#lightbox");
        lightboxImage = lightbox && lightbox.querySelector(".lightbox-image");
        lightboxCaption = lightbox && lightbox.querySelector(".lightbox-caption");
        galleryImages = Array.from(document.querySelectorAll("img[data-lightbox]"));
        let lightboxTouchStartX = 0;

        function showLightboxImage(index) {
          if (galleryImages.length === 0 || !lightboxImage || !lightboxCaption) return;

          activeGalleryIndex = (index + galleryImages.length) % galleryImages.length;
          const sourceImage = galleryImages[activeGalleryIndex];
          lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
          lightboxImage.alt = sourceImage.alt;
          lightboxCaption.textContent = sourceImage.alt;
        }

        if (lightbox && lightboxImage && lightboxCaption) {
          const closeButton = lightbox.querySelector(".lightbox-close");
          const previousButton = lightbox.querySelector(".lightbox-previous");
          const nextButton = lightbox.querySelector(".lightbox-next");

          galleryImages.forEach((image, index) => {
            image.tabIndex = 0;
            image.setAttribute("role", "button");
            image.setAttribute("aria-label", `${currentLanguage === "vi" ? "Xem ảnh" : "View image"}: ${image.alt}`);

            function openImage() {
              showLightboxImage(index);
              if (typeof lightbox.showModal === "function") {
                lightbox.showModal();
              } else {
                lightbox.setAttribute("open", "");
              }
              closeButton.focus();
            }

            image.addEventListener("click", openImage);
            image.addEventListener("keydown", (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImage();
              }
            });
          });

          function closeLightbox() {
            if (typeof lightbox.close === "function") {
              lightbox.close();
            } else {
              lightbox.removeAttribute("open");
              if (activeGalleryIndex >= 0) galleryImages[activeGalleryIndex].focus();
            }
          }

          closeButton.addEventListener("click", closeLightbox);
          previousButton.addEventListener("click", () => showLightboxImage(activeGalleryIndex - 1));
          nextButton.addEventListener("click", () => showLightboxImage(activeGalleryIndex + 1));
          lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) closeLightbox();
          });
          lightbox.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") showLightboxImage(activeGalleryIndex - 1);
            if (event.key === "ArrowRight") showLightboxImage(activeGalleryIndex + 1);
            if (event.key === "Escape") closeLightbox();
          });
          lightbox.addEventListener("pointerdown", (event) => {
            lightboxTouchStartX = event.clientX;
          }, { passive: true });
          lightbox.addEventListener("pointerup", (event) => {
            const movement = event.clientX - lightboxTouchStartX;
            if (Math.abs(movement) > 50) {
              showLightboxImage(activeGalleryIndex + (movement < 0 ? 1 : -1));
            }
          }, { passive: true });
          lightbox.addEventListener("close", () => {
            if (activeGalleryIndex >= 0) galleryImages[activeGalleryIndex].focus();
          });
        }

        const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
        const cursorGlow = document.querySelector(".cursor-glow");

        if (cursorGlow && pointerMedia.matches && !motionPreference.matches) {
          let pointerFramePending = false;
          let pointerX = 0;
          let pointerY = 0;

          window.addEventListener("pointermove", (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;

            if (!pointerFramePending) {
              pointerFramePending = true;
              window.requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
                document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
                cursorGlow.classList.add("is-active");
                pointerFramePending = false;
              });
            }
          }, { passive: true });

          document.documentElement.addEventListener("pointerleave", () => {
            cursorGlow.classList.remove("is-active");
          });
        }

        applyLanguage(currentLanguage);
      }

      if (!motionPreference.matches) {
        window.requestAnimationFrame(drawBackground);
      }
    }

    window.addEventListener("portfolio-theme-change", () => {
      if (motionPreference.matches) drawBackground(performance.now());
    });
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    drawBackground(performance.now());
  }

  if ("IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".hero-layout > *, .hero-copy > *, .section > h2, .section > p, .section > ul, .section > ol, .section > form, .hobby-card, .project-card, .hometown-card, .family-card"
    );
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
      observer.observe(element);
    });

    document.documentElement.classList.add("reveal-ready");
  }
}

initializePageEffects();

function initializeDinoGame() {
  const game = document.querySelector("#dino-game");
  const canvas = document.querySelector("#dino-canvas");
  const actionButton = document.querySelector("#dino-action");
  const scoreOutput = document.querySelector("#dino-score");
  const statusElement = document.querySelector("#dino-status");

  if (!game || !canvas || !actionButton || !scoreOutput || !statusElement) return;

  const context = canvas.getContext("2d");
  if (!context) {
    statusElement.textContent = currentLanguage === "vi"
      ? "Trình duyệt này chưa hỗ trợ Canvas để chạy game."
      : "This browser does not support Canvas for the game.";
    actionButton.disabled = true;
    return;
  }

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let state = "ready";
  let score = 0;
  let scoreProgress = 0;
  let speed = 250;
  let obstacleTimer = 0;
  let elapsedTime = 0;
  let groundOffset = 0;
  let lastFrameTime = 0;
  let animationFrame = 0;
  let obstacles = [];
  let playerY = 0;
  let playerVelocity = 0;
  let isJumping = false;

  function getGroundY() {
    return height - 23;
  }

  function getPlayerX() {
    return Math.max(28, Math.min(58, width * 0.14));
  }

  function resizeGame() {
    const bounds = canvas.getBoundingClientRect();
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    if (!isJumping) playerY = getGroundY() - 38;
    drawScene(performance.now());
  }

  function updateGameText() {
    const actionKey = state === "ready"
      ? "gameActionStart"
      : (state === "running" ? "gameActionJump" : "gameActionReplay");
    const statusKey = state === "ready"
      ? "gameReady"
      : (state === "running" ? "gameRunning" : "gameOver");

    actionButton.textContent = message(actionKey);
    statusElement.textContent = message(statusKey).replace("{score}", String(score));
    scoreOutput.textContent = String(score);
    scoreOutput.setAttribute("aria-label", message("gameScoreAria").replace("{score}", String(score)));
  }

  function drawCactus(obstacle, groundY, color) {
    const top = groundY - obstacle.height;
    context.fillStyle = color;
    context.fillRect(obstacle.x + 10, top, 10, obstacle.height);
    context.fillRect(obstacle.x + 2, top + obstacle.height * 0.43, 8, 7);
    context.fillRect(obstacle.x + 2, top + obstacle.height * 0.32, 6, 14);
    context.fillRect(obstacle.x + 20, top + obstacle.height * 0.58, 8, 7);
    context.fillRect(obstacle.x + 22, top + obstacle.height * 0.46, 6, 15);
  }

  function drawDinosaur(time, groundY, color, eyeColor) {
    const x = getPlayerX();
    const y = playerY;
    const legStep = state === "running" && !isJumping && Math.floor(time / 110) % 2 === 0;

    context.fillStyle = color;
    context.fillRect(x + 4, y + 17, 26, 19);
    context.fillRect(x + 22, y + 6, 16, 17);
    context.fillRect(x + 33, y + 15, 8, 7);
    context.beginPath();
    context.moveTo(x + 5, y + 27);
    context.lineTo(x - 3, y + 22);
    context.lineTo(x + 4, y + 32);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(x + 8, y + 17);
    context.lineTo(x + 13, y + 9);
    context.lineTo(x + 17, y + 17);
    context.lineTo(x + 20, y + 11);
    context.lineTo(x + 24, y + 17);
    context.closePath();
    context.fill();

    context.fillStyle = eyeColor;
    context.fillRect(x + 32, y + 10, 3, 3);
    context.fillStyle = color;
    context.fillRect(x + 9, y + 34, 7, legStep ? 7 : 4);
    context.fillRect(x + 23, y + 34, 7, legStep ? 4 : 7);
  }

  function drawScene(time) {
    if (width <= 0 || height <= 0) return;

    const isLight = document.documentElement.dataset.theme === "light";
    const colors = isLight
      ? { sky: "#edf6fa", horizon: "#a7c3d0", accent: "#007d9b", dino: "#176d78", eye: "#f2f7fc" }
      : { sky: "#071426", horizon: "#294765", accent: "#59dcff", dino: "#59dcff", eye: "#071426" };
    const groundY = getGroundY();

    context.clearRect(0, 0, width, height);
    context.fillStyle = colors.sky;
    context.fillRect(0, 0, width, height);

    context.fillStyle = isLight ? "rgba(67, 133, 159, 0.08)" : "rgba(89, 220, 255, 0.07)";
    [0.24, 0.69].forEach((position, index) => {
      const cloudX = width * position;
      const cloudY = 37 + index * 24;
      context.beginPath();
      context.arc(cloudX, cloudY, 12, 0, Math.PI * 2);
      context.arc(cloudX + 13, cloudY + 2, 9, 0, Math.PI * 2);
      context.arc(cloudX - 10, cloudY + 4, 8, 0, Math.PI * 2);
      context.fill();
    });

    context.strokeStyle = colors.horizon;
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(0, groundY);
    context.lineTo(width, groundY);
    context.stroke();

    context.fillStyle = colors.horizon;
    const markGap = 44;
    const firstMark = -(groundOffset % markGap);
    for (let x = firstMark; x < width; x += markGap) {
      context.fillRect(x, groundY + 8, 14, 2);
    }

    obstacles.forEach((obstacle) => drawCactus(obstacle, groundY, colors.accent));
    drawDinosaur(time, groundY, colors.dino, colors.eye);

    if (state !== "running") {
      context.fillStyle = isLight ? "#496779" : "#b4cbe0";
      context.font = "600 14px Segoe UI, Arial, sans-serif";
      context.textAlign = "center";
      context.fillText(
        message(state === "ready" ? "gameCanvasReady" : "gameCanvasOver"),
        width / 2,
        Math.max(24, groundY - 61)
      );
    }
  }

  function endGame() {
    state = "gameover";
    animationFrame = 0;
    updateGameText();
    drawScene(performance.now());
  }

  function updateGame(deltaSeconds) {
    elapsedTime += deltaSeconds;
    scoreProgress += deltaSeconds * 10;
    const nextScore = Math.floor(scoreProgress);
    speed = Math.min(520, 250 + elapsedTime * 13);
    groundOffset = (groundOffset + speed * deltaSeconds) % 44;

    if (nextScore !== score) {
      score = nextScore;
      scoreOutput.textContent = String(score);
      scoreOutput.setAttribute("aria-label", message("gameScoreAria").replace("{score}", String(score)));
    }

    const groundY = getGroundY();
    if (isJumping) {
      playerVelocity += 1350 * deltaSeconds;
      playerY += playerVelocity * deltaSeconds;
      if (playerY >= groundY - 38) {
        playerY = groundY - 38;
        playerVelocity = 0;
        isJumping = false;
      }
    }

    obstacleTimer -= deltaSeconds;
    if (obstacleTimer <= 0) {
      obstacles.push({
        x: width + 12,
        width: 30,
        height: 32 + Math.random() * 18
      });
      obstacleTimer = 1.05 + Math.random() * 0.55;
    }

    obstacles.forEach((obstacle) => {
      obstacle.x -= speed * deltaSeconds;
      const playerLeft = getPlayerX() + 5;
      const playerRight = getPlayerX() + 36;
      const playerBottom = playerY + 38;
      const obstacleTop = groundY - obstacle.height;
      if (
        playerRight > obstacle.x + 3
        && playerLeft < obstacle.x + obstacle.width - 2
        && playerBottom > obstacleTop + 4
      ) {
        endGame();
      }
    });

    obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);
  }

  function runFrame(time) {
    if (state !== "running") return;

    const deltaSeconds = lastFrameTime
      ? Math.min((time - lastFrameTime) / 1000, 0.05)
      : 0;
    lastFrameTime = time;
    updateGame(deltaSeconds);
    drawScene(time);

    if (state === "running") {
      animationFrame = window.requestAnimationFrame(runFrame);
    } else {
      animationFrame = 0;
    }
  }

  function startGame() {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    state = "running";
    score = 0;
    scoreProgress = 0;
    speed = 250;
    obstacleTimer = 1.05;
    elapsedTime = 0;
    groundOffset = 0;
    obstacles = [];
    playerY = getGroundY() - 38;
    playerVelocity = 0;
    isJumping = false;
    lastFrameTime = 0;
    updateGameText();
    animationFrame = window.requestAnimationFrame(runFrame);
  }

  function jump() {
    if (state !== "running") {
      startGame();
      return;
    }

    if (!isJumping) {
      playerVelocity = -470;
      isJumping = true;
    }
  }

  actionButton.addEventListener("click", jump);
  game.addEventListener("keydown", (event) => {
    if (event.code !== "Space" && event.code !== "ArrowUp") return;
    event.preventDefault();
    if (event.repeat) return;
    jump();
  });
  window.addEventListener("resize", resizeGame, { passive: true });
  window.addEventListener("portfolio-theme-change", () => drawScene(performance.now()));
  window.addEventListener("portfolio-language-change", () => {
    updateGameText();
    drawScene(performance.now());
  });

  resizeGame();
  updateGameText();
}

initializeDinoGame();
