function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// hyperplexed effects
window.onload = function() { 
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>";
    const elements = document.querySelectorAll("a");
    
    if (elements) {
        elements.forEach(function(element) {
            if (element.parentElement.className === "ref-link") return;
            element.onmouseover = event => {
                let iterations = 0;

                if (!event.target.dataset.value) return;

                const interval = setInterval(() => {
                    event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return event.target.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 54)]
                    })
                    .join("");

                if (iterations >= event.target.dataset.value.length) clearInterval(interval);

                iterations += 1;
                }, 20);
            };
        });
    }

    document.querySelector("h1").onmouseover = event => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 52)]
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 2;
        }, 40);
    }

    const trailer = document.getElementById("trailer");
    const trailer2 = document.getElementById("trailer2");
    const trailer3 = document.getElementById("trailer3");
    const trailer4 = document.getElementById("trailer4");


    const animateTrailer = (e, interacting) => {
        const x1 = e.clientX - trailer.offsetWidth / 2,
              y1 = e.clientY - trailer.offsetHeight / 2;
        const x2 = e.clientX - trailer2.offsetWidth / 2,
              y2 = e.clientY - trailer2.offsetHeight / 2;
        const x3 = e.clientX - trailer3.offsetWidth / 2,
              y3 = e.clientY - trailer3.offsetHeight / 2;
        const x4 = e.clientX - trailer4.offsetWidth / 2,
              y4 = e.clientY - trailer4.offsetHeight / 2;

        let keyframes1 = {}
        let keyframes2 = {}
        let keyframes3 = {}
        let keyframes4 = {}
        
        if (interacting) {
            keyframes1 = {
                transform: `translate(${x1}px, ${y1}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `transparent`
            }
            keyframes2 = {
                transform: `translate(${x2}px, ${y2}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `transparent`
            }
            keyframes3 = {
                transform: `translate(${x3}px, ${y3}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `transparent`
            }
            keyframes4 = {
                transform: `translate(${x4}px, ${y4}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `transparent`
            }
        } else {
            keyframes1 = {
                transform: `translate(${x1}px, ${y1}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `var(--color-tertiary)`
            }
            keyframes2 = {
                transform: `translate(${x2}px, ${y2}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `var(--color-tertiary)`
            }
            keyframes3 = {
                transform: `translate(${x3}px, ${y3}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `var(--color-tertiary)`
            }
            keyframes4 = {
                transform: `translate(${x4}px, ${y4}px) scale(${interacting ? 2 : 1})`,
                backgroundColor: `var(--color-tertiary)`
            }
        }

        trailer.animate(keyframes1, {
            duration: 800,
            fill: "forwards"
        });

        trailer2.animate(keyframes2, {
            duration: 1600,
            fill: "forwards"
        });

        trailer3.animate(keyframes3, {
            duration: 2400,
            fill: "forwards"
        });

        trailer4.animate(keyframes4, {
            duration: 3200,
            fill: "forwards"
        });
    }

    window.onmousemove = e => {
        const interactable = e.target.closest(".interactable"),
              interacting = interactable !== null;
        
        animateTrailer(e, interacting);
    }
}