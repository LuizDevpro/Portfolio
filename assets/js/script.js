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

// topbar
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");

function openMenu() {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");

    overlay.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}

function closeMenu() {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");

    overlay.classList.add("hidden");

    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

// Fecha ao clicar em um link
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
}); 