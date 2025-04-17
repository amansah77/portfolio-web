const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const typewriterHeading = document.querySelector(".typewriter h1");
if (typewriterHeading) {
  typewriterHeading.addEventListener("animationend", (e) => {
    if (e.animationName === "typewriter") {
      setTimeout(() => {
        typewriterHeading.classList.add("revert");
      }, 1500);
    }
  });
  setTimeout(() => {
    if (!typewriterHeading.classList.contains("revert")) {
      typewriterHeading.classList.add("revert");
    }
  }, 5000);
}

function showAboutSection(sectionId, clickedElement) {
  const details = document.querySelectorAll(".about-detail");
  details.forEach((detail) => detail.classList.remove("active"));
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    targetElement.classList.add("active");
  }

  const navLinks = document.querySelectorAll(".about-nav a");
  navLinks.forEach((link) => link.classList.remove("active"));
  if (clickedElement) {
    clickedElement.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const firstNavLink = document.querySelector(".about-nav a");
  if (firstNavLink) {
    const firstSectionId = firstNavLink.getAttribute("href")?.substring(1);
    if (firstSectionId) {
      showAboutSection(firstSectionId, firstNavLink);
    }
  }

  const root = document.documentElement;
  root.style.setProperty("--primary-color", "#1DCD9F");
  root.style.setProperty("--primary-dark-color", "#169976");
  root.style.setProperty("--darkestbg", "#0a0a0a");
  root.style.setProperty("--darkbg", "#1a1a1a");
  root.style.setProperty("--lightbg", "#242424");
  root.style.setProperty("--skill-card-bg", "#2d2d2d");
  root.style.setProperty("--neutral-text", "#E0E0E0");
  root.style.setProperty("--neutral-subtle", "#a0a0a0");
  root.style.setProperty("--bordergray", "#444444");
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const thankYouMessage = document.getElementById("thank-you-message");

if (contactForm && formStatus && thankYouMessage) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const submitButton = contactForm.querySelector('button[type="submit"]');

    formStatus.textContent = "Sending...";
    formStatus.classList.remove("text-red-500", "text-green-500");
    if (submitButton) submitButton.disabled = true;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status == 200) {
          formStatus.textContent = "";
          contactForm.reset();
          contactForm.style.display = "none";
          thankYouMessage.classList.remove("hidden");

          setTimeout(() => {
            thankYouMessage.classList.add("hidden");
            contactForm.style.display = "block";
            if (submitButton) submitButton.disabled = false;
          }, 5000);
        } else {
          console.error("Submission Error:", jsonResponse);
          formStatus.textContent =
            jsonResponse.message || "Failed to send message. Please try again.";
          formStatus.classList.add("text-red-500");
          if (submitButton) submitButton.disabled = false;
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        formStatus.textContent =
          "An error occurred. Please check your connection and try again.";
        formStatus.classList.add("text-red-500");
        if (submitButton) submitButton.disabled = false;
      });
  });
}

const currentYearElement = document.getElementById("current-year");
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hrefAttribute = this.getAttribute("href");
    if (hrefAttribute && hrefAttribute !== "#") {
      const targetElement = document.querySelector(hrefAttribute);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
