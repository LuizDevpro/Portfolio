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