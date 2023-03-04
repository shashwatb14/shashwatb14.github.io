function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// hyperplexed hacker text effect
window.onload = function() { 
    const letters = "abcdefghijklmnopqrstuvwxyz";

    document.querySelector("h1").onmouseover = event => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iterations >= 9) clearInterval(interval);

        iterations += 1 / 2;
        }, 40);
    };

    const trailer = document.getElementById("trailer");

    const animateTrailer = (e, interacting) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 0.5 : 1})`,
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    }

    window.onmousemove = e => {
        const interactable = e.target.closest("a"),
              interacting = interactable !== null;
        
        animateTrailer(e, interacting);
    }
};