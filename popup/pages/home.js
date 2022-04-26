import UserInput from "../components/UserInput.js"
import Menu from "../components/Menu.js"

function HomeTemplate(object) {
    return (
        `
        <div class="SurfiComponent page-container"> 
            <button id="backButton">
                <span class="material-icons menu_icon">reply</span>
            </button>   
            <h2 class="title">Home</h2>
            <!-- <img src="../../assets/logo/round_logo.png" class="logo" alt="Surfi Logo"> -->
            <div class="SignInComponent_container" id="Form">
                <form
                class="SignInComponent_form"
                onSubmit={handleSubmit}
                >
                ${UserInput({ id: 'email', title: 'Email', type: "email" })}
                ${UserInput({ id: 'password', title: 'Password', type: "password" })}
                <button
                    class="sign_in_btn"
                    id="HomeToStartButton"
                >
                    Sign In
                </button>
                </form>
                <button class="SignInComponent_SingUp" id="HomeToSignUpButton">Sign Up</button>
            </div>
            ${Menu()}
        </div>
        `
    )
}

export { HomeTemplate }