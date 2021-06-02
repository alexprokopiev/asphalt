import "./style.sass";
import hover from "./js/hover";
import tabs from "./js/tabs";
import mask from "./js/mask";
import header from "./js/header";
import sendmail from "./js/sendmail";
import modal from "./js/modal";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    hover();
    tabs();
    mask("input[name=phone]");
    sendmail();
    modal();
    header();
});