document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", () => {
        if(window.scrollY > 0) {
            document.querySelector("#header").classList.add("scrolled")
        } else {
            document.querySelector("#header").classList.remove("scrolled")
        }
    })

    document.querySelector("#menu2").onclick = () => {
        if(document.querySelector("#lista").classList.contains("clicked")) {
            document.querySelector("#lista").classList.remove("clicked")
        } else {
            document.querySelector("#lista").classList.add("clicked")
        }
    }
})