const hover = () => {
    function showBlock(triggerSelector, blockSelector, delay) {
        let triggers = document.querySelectorAll(triggerSelector),
            blocks = document.querySelectorAll(blockSelector);

        triggers.forEach((trigger, i) => {
            trigger.addEventListener("mouseover", () => {
                setTimeout(() => {
                    blocks[i].style.opacity = 1;
                    blocks[i].style.zIndex = 1;
                }, delay);
            });
        });

        blocks.forEach((block) => {
            block.addEventListener("mouseleave", () => {
                block.style.opacity = 0;
                block.style.zIndex = -1;
            });
        });
    }
    showBlock(".header__phone", ".header__hover-wrap", 500);
    showBlock(".goods__item", ".goods__item-hover", 0);
    showBlock(".use__item", ".use__item-hover", 0);
};

export default hover;