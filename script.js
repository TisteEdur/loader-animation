let btn = document.getElementById("click");
const counterContainer = document.getElementById("counter");
const card = document.getElementById("card");

btn.addEventListener("click", () => {
    let counter = 0;
    let count = 0;

    counterContainer.setAttribute("style", "transform: translateY(20px)");

    let i = setInterval(() => {
        counterContainer.innerHTML = `${count}%`;
        card.setAttribute("style", `max-width: ${count}%`);
        card.setAttribute("style", `width: ${count}%`);
        counter++;
        count++;

        btn.disabled = true;
        btn.textContent = "LOADING";

        if (btn.disabled === true) {
            btn.style.cursor = "not-allowed";
            btn.style.opacity = "0.6";
        }

        if (counter === 101) {
            clearInterval(i);
            btn.textContent = "DONE";
            btn.style.opacity = "1";
            btn.classList.add("special");

            setTimeout(() => {
                btn.textContent = "START";
                counterContainer.setAttribute("style", "transform: translateY(85px)");
                card.setAttribute("style", `width: 0%`);
                btn.disabled = false;
                btn.classList.remove("special");
                btn.style.cursor = "pointer";
            }, 1000);
        }
    }, 100);
});