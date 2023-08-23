document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return
        const json = JSON.parse(xhr.responseText)
        console.log(json)

        document.querySelector("#player_count").innerHTML = json.players.online
        document.querySelector("#version").innerHTML = json.version
        if(json.online) {
            document.querySelector("#status").innerHTML = "Online"
            document.querySelector("#status").classList.remove("unknown")
            document.querySelector("#status").classList.add("online")
        } else {
            document.querySelector("#status").innerHTML = "Offline"
            document.querySelector("#status").classList.remove("unknown")
            document.querySelector("#status").classList.add("offline")
        }
    }

    xhr.open("GET", "https://api.mcsrvstat.us/3/piwkotesco.mc.hostify.cz")
    xhr.send()
})