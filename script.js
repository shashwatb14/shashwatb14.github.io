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

    var heading = document.querySelector("h1");

    if(heading) {

        heading.onmouseover = event => {
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
    }

    const trailer = document.getElementById("trailer");

    const animateTrailer = (e, interacting) => {
        const x1 = e.clientX - trailer.offsetWidth / 2,
              y1 = e.clientY - trailer.offsetHeight / 2;

        let keyframes1 = {}
        
        if (interacting) {
            keyframes1 = {
                transform: `translate(${x1}px, ${y1}px) scale(${interacting ? 4 : 1})`,
                backgroundColor: `transparent`
            }
        } else {
            keyframes1 = {
                transform: `translate(${x1}px, ${y1}px) scale(${interacting ? 4 : 1})`,
                backgroundColor: `var(--color-tertiary)`
            }
        }

        trailer.animate(keyframes1, {
            duration: 800,
            fill: "forwards"
        });
    }

    window.onmousemove = e => {
        const interactable = e.target.closest(".interactable"),
              interacting = interactable !== null;
        
        animateTrailer(e, interacting);
    }
}