const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

const englishContent = {
  "page-title": "Vu Quang Diep | Personal Portfolio",
  description: "Personal portfolio of Vu Quang Diep, an IT student who enjoys web development, Minecraft, Renegade Immortal, and Cristiano Ronaldo.",
  "menu-open": "Open menu",
  "menu-close": "Close menu",
  "nav-label": "Main navigation",
  "nav-home": "Home",
  "nav-about": "About",
  "nav-skills": "Skills",
  "nav-learning": "Learning path",
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
  "form-submit": "Check message",
  "form-fallback": "Enable JavaScript to validate this form. This website does not currently send email.",
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
    formValidNoSend: "Thông tin đã hợp lệ, nhưng trang chưa tích hợp dịch vụ gửi email nên tin nhắn chưa được gửi.",
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
    formValidNoSend: "Your details are valid, but this site has no email service configured, so your message was not sent.",
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
    let particles = [];
    let lastFrame = 0;
    let interactiveFeaturesInitialized = false;

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(60, Math.max(20, Math.round(width * height / 20000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: Math.random() * 1.3 + 0.7
      }));
    }

    function drawParticles(time) {
      if (!motionPreference.matches && time - lastFrame < 33) {
        window.requestAnimationFrame(drawParticles);
        return;
      }

      const frameScale = lastFrame ? Math.min((time - lastFrame) / 16.67, 2) : 1;
      lastFrame = time;

      if (!motionPreference.matches) {
        context.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          particle.x += particle.vx * frameScale;
          particle.y += particle.vy * frameScale;

          if (particle.x < 0) particle.x = width;
          if (particle.x > width) particle.x = 0;
          if (particle.y < 0) particle.y = height;
          if (particle.y > height) particle.y = 0;
        });

        for (let first = 0; first < particles.length; first += 1) {
          const particle = particles[first];
          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(102, 220, 255, 0.65)";
          context.shadowColor = "rgba(74, 199, 255, 0.75)";
          context.shadowBlur = 7;
          context.fill();
          context.shadowBlur = 0;

          for (let second = first + 1; second < particles.length; second += 1) {
            const neighbor = particles[second];
            const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y);
            const linkDistance = 120;

            if (distance < linkDistance) {
              context.beginPath();
              context.moveTo(particle.x, particle.y);
              context.lineTo(neighbor.x, neighbor.y);
              context.strokeStyle = `rgba(65, 181, 244, ${(1 - distance / linkDistance) * 0.16})`;
              context.lineWidth = 0.7;
              context.stroke();
            }
          }
        }
      }

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

          closeButton.addEventListener("click", () => lightbox.close());
          previousButton.addEventListener("click", () => showLightboxImage(activeGalleryIndex - 1));
          nextButton.addEventListener("click", () => showLightboxImage(activeGalleryIndex + 1));
          lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) lightbox.close();
          });
          lightbox.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") showLightboxImage(activeGalleryIndex - 1);
            if (event.key === "ArrowRight") showLightboxImage(activeGalleryIndex + 1);
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
        window.requestAnimationFrame(drawParticles);
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.requestAnimationFrame(drawParticles);
  }

  if ("IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".hero-layout > *, .hero-copy > *, .section > h2, .section > p, .section > ul, .section > ol, .section > form, .hobby-card"
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
