const header = () => {
    const header = document.querySelector(".header"),
        wrap = document.querySelector(".header__main-wrap");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 120) {
            header.classList.add("header_fixed");
            wrap.classList.add("header__main-wrap_fixed");
        } else {
            header.classList.remove("header_fixed");
            wrap.classList.remove("header__main-wrap_fixed");
        }
    });
};

export default header;