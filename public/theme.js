(() => {

const saved=localStorage.getItem("parkers1st");

const system=window.matchMedia("(prefers-color-scheme:dark)").matches;

const dark=
saved==="dark" ||
(saved!=="light" && system);

document.documentElement.classList.toggle("dark",dark);

})();