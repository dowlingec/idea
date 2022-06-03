function SignupForm() {
    return (
        <div>
            <form className="signup-form">
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="nickname"/>
                <input type="password" placeholder="Enter password"/>
                <input type="password" placholder="Confirm password"/>
                <input type="submit" value="Get started"/>
            </form>
        </div>
    )
}

export default SignupForm;