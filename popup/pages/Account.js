import Menu from "../components/Menu.js"

function AccountTemplate(object) {
    return (
        /*html*/`
        <div class="SurfiComponent page-container"> 
            <button id="backButton">
                <span class="material-icons">arrow_back_ios</span>
            </button>   
            <h2 class="title">Account</h2>
            <span class="material-icons accountLogo">account_circle</span>
            <div class="SignInComponent_container" id="Form">
                <form
                class="SignInComponent_form"
                >
                <button
                    disabled
                    class="sign_in_btn"
                    id="LogInToStartButton"
                >
                    Account features coming soon!
                </button>
                </form>
            </div>
            ${Menu()}
        </div>
        `
    )
}

export { AccountTemplate }