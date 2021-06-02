const tabs = () => {
    let tab = document.querySelectorAll(".feedbacks__tab"),
        menu = document.querySelector(".feedbacks__tab-wrap"),
        tabContent = document.querySelectorAll(".feedbacks__content");

    function hideTabContent() {
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove("feedbacks__tab_active");
        }
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("feedbacks__content_active");
        }
    }

    function showTabContent(a) {
        tab[a].classList.add("feedbacks__tab_active");
        tabContent[a].classList.add("feedbacks__content_active");
    }

    menu.addEventListener("click", function(event) {
        let target = event.target.closest(".feedbacks__tab");

        if (target && target.classList.contains("feedbacks__tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent();
                    showTabContent(i);
                }
            }
        }
    });
};

export default tabs;