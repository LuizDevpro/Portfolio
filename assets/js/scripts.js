const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
            observer.unobserve(entry.target); // remove depois de mostrar
          }
        });
      },
      {
        threshold: 0.1 // quando 10% estiver visível
      }
    );

    document.querySelectorAll('.hidden-section').forEach(section => {
      observer.observe(section);
    });