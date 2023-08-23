document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return
        const json = JSON.parse(xhr.responseText)

        document.querySelector("#channel_count").innerHTML = json.guild.channels.length
        document.querySelector("#message_count").innerHTML = json.guild.message_count
        document.querySelector("#member_count").innerHTML = json.guild.members
    }

    xhr.open("GET", "./api/discord")
    xhr.send()
})