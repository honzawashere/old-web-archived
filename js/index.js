let last_choice;

function click_me_clicked() {
    document.querySelector("#page_container").classList.add("page-container-hidden")
    document.querySelector("#particles-js").remove()
    setTimeout(() => {
        document.querySelector("#main_page").classList.remove("main-page-hidden")
    }, 500)
}

function handle_clicks() {
    document.querySelector("#menu_option_1").onclick = () => {
        document.querySelector("#menu_option_1").classList.add("option-selected")
        document.querySelector("#menu_option_2").classList.remove("option-selected")
        document.querySelector("#menu_option_3").classList.remove("option-selected")

        document.querySelector("#description_1").classList.remove("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#menu_option_1_phone").classList.add("option-selected")
        document.querySelector("#menu_option_2_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_3_phone").classList.remove("option-selected")
    }
    document.querySelector("#menu_option_2").onclick = () => {
        document.querySelector("#menu_option_1").classList.remove("option-selected")
        document.querySelector("#menu_option_2").classList.add("option-selected")
        document.querySelector("#menu_option_3").classList.remove("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.remove("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#menu_option_1_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_2_phone").classList.add("option-selected")
        document.querySelector("#menu_option_3_phone").classList.remove("option-selected")
    }
    document.querySelector("#menu_option_3").onclick = () => {
        document.querySelector("#menu_option_1").classList.remove("option-selected")
        document.querySelector("#menu_option_2").classList.remove("option-selected")
        document.querySelector("#menu_option_3").classList.add("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.remove("description-hidden")
        document.querySelector("#menu_option_1_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_2_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_3_phone").classList.add("option-selected")
    }
    document.querySelector("#my-skills-redirect").onclick = () => {
        document.querySelector("#menu_option_1").classList.remove("option-selected")
        document.querySelector("#menu_option_2").classList.remove("option-selected")
        document.querySelector("#menu_option_3").classList.add("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.remove("description-hidden")
    }
}

function phone_sidebar() {
    document.querySelector("#open_button").onclick = () => {
        document.querySelector("#close_button").classList.remove("hidden")
        document.querySelector("#open_button").classList.add("hidden")

        document.querySelector("#menu_list_phone").classList.remove("hidden")

        if(document.querySelector("#menu_option_1").classList.contains("option-selected")) {
            last_choice = 1
        }
        if(document.querySelector("#menu_option_2").classList.contains("option-selected")) {
            last_choice = 2
        }
        if(document.querySelector("#menu_option_3").classList.contains("option-selected")) {
            last_choice = 3
        }

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
    }
    document.querySelector("#close_button").onclick = () => {
        document.querySelector("#close_button").classList.add("hidden")
        document.querySelector("#open_button").classList.remove("hidden")

        document.querySelector("#menu_list_phone").classList.add("hidden")

        if(last_choice == 1) {
            document.querySelector("#description_1").classList.remove("description-hidden")
            console.log(".")
        }
        else if(last_choice == 2) {
            document.querySelector("#description_2").classList.remove("description-hidden")
            console.log("..")
        }
        else if(last_choice == 3) {
            document.querySelector("#description_3").classList.remove("description-hidden")
            console.log("... ")
        }
    }
    document.querySelector("#menu_option_1_phone").onclick = () => {
        document.querySelector("#menu_option_1").classList.add("option-selected")
        document.querySelector("#menu_option_2").classList.remove("option-selected")
        document.querySelector("#menu_option_3").classList.remove("option-selected")

        document.querySelector("#description_1").classList.remove("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#menu_option_1_phone").classList.add("option-selected")
        document.querySelector("#menu_option_2_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_3_phone").classList.remove("option-selected")

        document.querySelector("#description_1").classList.remove("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#close_button").classList.add("hidden")
        document.querySelector("#open_button").classList.remove("hidden")

        document.querySelector("#menu_list_phone").classList.add("hidden")
    }
    document.querySelector("#menu_option_2_phone").onclick = () => {
        document.querySelector("#menu_option_1_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_2_phone").classList.add("option-selected")
        document.querySelector("#menu_option_3_phone").classList.remove("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.remove("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#menu_option_1").classList.remove("option-selected")
        document.querySelector("#menu_option_2").classList.add("option-selected")
        document.querySelector("#menu_option_3").classList.remove("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.remove("description-hidden")
        document.querySelector("#description_3").classList.add("description-hidden")
        document.querySelector("#close_button").classList.add("hidden")
        document.querySelector("#open_button").classList.remove("hidden")

        document.querySelector("#menu_list_phone").classList.add("hidden")
    }
    document.querySelector("#menu_option_3_phone").onclick = () => {
        document.querySelector("#menu_option_1_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_2_phone").classList.remove("option-selected")
        document.querySelector("#menu_option_3_phone").classList.add("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.remove("description-hidden")
        document.querySelector("#menu_option_1").classList.remove("option-selected")
        document.querySelector("#menu_option_2").classList.remove("option-selected")
        document.querySelector("#menu_option_3").classList.add("option-selected")

        document.querySelector("#description_1").classList.add("description-hidden")
        document.querySelector("#description_2").classList.add("description-hidden")
        document.querySelector("#description_3").classList.remove("description-hidden")
        document.querySelector("#close_button").classList.add("hidden")
        document.querySelector("#open_button").classList.remove("hidden")

        document.querySelector("#menu_list_phone").classList.add("hidden")
    }
}
