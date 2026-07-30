// =========================
// Scroll Reveal
// =========================
const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.3  
      }
    );

    document.querySelectorAll('.hidden-section').forEach(section => {
      observer.observe(section);
    });


// =========================
// Navegação
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#desktop-nav a");
const indicator = document.getElementById("nav-indicator");

function updateIndicator(link) {

    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.left = `${link.offsetLeft}px`;

}

function updateActiveSection() {

    let currentSection = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("text-slate-400");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("text-slate-400");
            updateIndicator(link);

        }

    });

}

window.addEventListener("scroll", updateActiveSection);
window.addEventListener("resize", updateActiveSection);
window.addEventListener("load", updateActiveSection);


// =========================
// Digitação na Hero
// =========================

let heroAnimationExecuted = false;

async function typeText(element, speed = 75) {

    return new Promise(resolve => {

        const text = element.dataset.text;

        element.textContent = "";

        let index = 0;

        const cursor = document.createElement("span");
        cursor.textContent = "|";
        cursor.className = "animate-pulse";

        element.appendChild(cursor);

        const interval = setInterval(() => {

            if (index < text.length) {

                cursor.before(text[index]);
                index++;

            } else {

                clearInterval(interval);

                cursor.remove();

                resolve();

            }

        }, speed);

    });

}

async function startHeroTyping() {

    if (heroAnimationExecuted) return;

    heroAnimationExecuted = true;

    await typeText(document.getElementById("hero-name"), 100);

    await new Promise(resolve => setTimeout(resolve, 250));

    await typeText(document.getElementById("hero-role"), 50);

}

const heroSection = document.getElementById("inicio");

const heroObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(async entry => {

        if (!entry.isIntersecting) return;

        await startHeroTyping();

        observer.unobserve(entry.target);

    });

}, {
    threshold: 0.4
});

heroObserver.observe(heroSection);

// =========================
// Tecnologias
// =========================

const techSection = document.getElementById("tecnologias");

const techCards = document.querySelectorAll(".tech-card");

const techObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            techCards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 80);

            });

            observer.unobserve(entry.target);

        });

    },

    {

        threshold: 0.25

    }

);

techObserver.observe(techSection);

// =========================
// Projetos
// =========================

const projectsSection = document.getElementById("projetos");

const projectCards = document.querySelectorAll(".project-card");

const projectsObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            projectCards.forEach((card, cardIndex) => {

                setTimeout(() => {

                    card.classList.add("show");

                    const tags = card.querySelectorAll(".project-tag");

                    tags.forEach((tag, tagIndex) => {

                        setTimeout(() => {

                            tag.classList.add("show");

                        }, tagIndex * 200);

                    });

                }, cardIndex * 180);

            });

            observer.unobserve(entry.target);

        });

    },

    {

        threshold:0.25

    }

);

projectsObserver.observe(projectsSection);

// =========================
// Contato
// =========================

const contactSection = document.getElementById("contato");

const contactCards = document.querySelectorAll(".contact-card");

const contactObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            contactCards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 120);

            });

            observer.unobserve(entry.target);

        });

    },

    {

        threshold: 0.25

    }

);

contactObserver.observe(contactSection);