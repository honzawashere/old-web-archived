let interval;

function make_lanyard_work() {
    const socket = new WebSocket(`wss://api.lanyard.rest/socket`)

    socket.addEventListener("open", () => {
        console.log(`[LANYARD] Connection opened`)
    })

    socket.addEventListener("message", (event) => {
        const data = JSON.parse(event.data)
        if (data.op == 1) {
            socket.send(JSON.stringify({op: 2, d: {subscribe_to_ids: ["900801159424512020"]}}))
            interval = setInterval(() => {
                socket.send(JSON.stringify({op: 3, d: {subscribe_to_ids: ["900801159424512020"]}}))
            }, data.d.heartbeat_interval)
            return
        }
        if (data.op === 0) {
            if (data.t === "INIT_STATE") {
                const d = data.d["900801159424512020"]
                if (d.activities.length === 0) return document.querySelector("#activity_container").classList.add("hidden")
                if (d.activities[0].id !== "spotify:1") {
                    const a = d.activities[0]
                    document.querySelector("#activity_container").classList.remove("hidden")
                    document.querySelector("#activity_title").innerHTML = "My Activity"
                    document.querySelector("#activity_image").setAttribute("src", `https://cdn.discordapp.com/app-assets/${a.application_id}/${a.assets.large_image}.png`)
                    document.querySelector(`#activity_name`).innerHTML = a.name
                    document.querySelector(`#activity_state`).innerHTML = a.state
                    document.querySelector(`#activity_state`).classList.add("no-hover")
                }
                else {
                    const a = d.activities[0]
                    document.querySelector("#activity_container").classList.remove("hidden")
                    document.querySelector("#activity_title").innerHTML = "Listening to Spotify"
                    document.querySelector("#activity_image").setAttribute("src", `https://i.scdn.co/image/${a.assets.large_image.replace("spotify:", "")}`)
                    document.querySelector(`#activity_name`).innerHTML = a.state.replace(";", ",")
                    document.querySelector(`#activity_state`).innerHTML = a.details
                    document.querySelector(`#activity_state`).classList.remove("no-hover")
                    document.querySelector(`#activity_state`).setAttribute("href", "https://open.spotify.com/track/" + d.spotify.track_id)
                }
            }
            if (data.t === "PRESENCE_UPDATE") {
                const d = data.d
                if (d.activities.length === 0) return document.querySelector("#activity_container").classList.add("hidden")
                if (d.activities[0].id !== "spotify:1") {
                    document.querySelector("#activity_container").classList.remove("hidden")
                    const a = d.activities[0]
                    document.querySelector("#activity_title").innerHTML = "My Activity"
                    document.querySelector("#activity_image").setAttribute("src", `https://cdn.discordapp.com/app-assets/${a.application_id}/${a.assets.large_image}.png`)
                    document.querySelector(`#activity_name`).innerHTML = a.name
                    document.querySelector(`#activity_state`).innerHTML = a.state
                    document.querySelector(`#activity_state`).classList.add("no-hover")
                }
                else {
                    const a = d.activities[0]
                    document.querySelector("#activity_container").classList.remove("hidden")
                    document.querySelector("#activity_title").innerHTML = "Listening to Spotify"
                    document.querySelector("#activity_image").setAttribute("src", `https://i.scdn.co/image/${a.assets.large_image.replace("spotify:", "")}`)
                    document.querySelector(`#activity_name`).innerHTML = a.state.replace(";", ",")
                    document.querySelector(`#activity_state`).innerHTML = a.details
                    document.querySelector(`#activity_state`).classList.remove("no-hover")
                    document.querySelector(`#activity_state`).setAttribute("href", "https://open.spotify.com/track/" + d.spotify.track_id)
                }
            }
        }
    })

    socket.addEventListener("error", () => {
        console.log(`[LANYARD] Connection error`)
    })

    socket.addEventListener("close", () => {
        clearInterval(interval)
        make_lanyard_work()
    })
}