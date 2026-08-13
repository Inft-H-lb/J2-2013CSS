document.addEventListener("DOMContentLoaded", () => {
    const main_scroll_bar = document.getElementById("main_scroll");
    const first_main_icon = main_scroll_bar.children[0];

    first_main_icon.id = "first_main_icon";

    if (main_scroll_bar) {
        // Prüfen, ob der Container aktuell horizontal oder vertikal scrollt
        // Wir schauen uns an, welcher Overflow-Modus aktiv ist:
        const computedStyle = window.getComputedStyle(main_scroll_bar);
        const overflowX = computedStyle.overflowX;

        // Wenn overflow-x auf auto oder scroll steht, scrollen wir horizontal
        if (overflowX === "auto" || overflowX === "scroll") {
            main_scroll_bar.scrollLeft = (main_scroll_bar.scrollWidth - main_scroll_bar.clientWidth) / 2;
        } else {
            // Ansonsten (im Querformat / wenn vertikal gescrollt wird)
            main_scroll_bar.scrollTop = (main_scroll_bar.scrollHeight - main_scroll_bar.clientHeight) / 2;
        }
    }
});
