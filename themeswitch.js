function setDarkTheme(darkTheme) {
    if (darkTheme) {
        document.querySelectorAll(".desc").forEach((element) => {
            element.classList.add("dark");
        });
        document.body.classList.add("dark");
    } else {
        document.querySelectorAll(".desc").forEach((element) => {
            element.classList.remove("dark");
        });
        document.body.classList.remove("dark");
    }
    localStorage.setItem("darkTheme", darkTheme);
}

// apply stored theme
const darkTheme = localStorage.getItem("darkTheme");
if (darkTheme === "true") {
    setDarkTheme(true);
    document.querySelector("#theme-switch").checked = true;
}

// toggle
document.querySelector("#theme-switch").addEventListener("input", (event) => {
    const isChecked = event.target.checked;
    setDarkTheme(isChecked);
});
