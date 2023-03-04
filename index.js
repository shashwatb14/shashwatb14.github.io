function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// hyperplexed hacker text effect
window.onload = function(){ 
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
    }   
};