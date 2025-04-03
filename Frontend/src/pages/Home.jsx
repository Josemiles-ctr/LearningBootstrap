import '../index.module.css'
const Home =()=>{

    return (
        <form method="POST" action={'/register'}>
            <h2>SignUp</h2>
            <label htmlFor="firstname">First Name:</label>
            <input minLength={4}  type="text" required={true} id="firstname"/>
            <label htmlFor="lastname">Last Name:</label>
            <input minLength={3}  required={true} type="text" id="lastname"/>
            <label typeof={'email'} htmlFor="email">Email:</label>
            <input required={true} type="text"  id="email"/>
            <label  htmlFor="password">Password:</label>
            <input minLength={8} required={true} type="password" id="password"/>
            <button type="submit">Submit</button>

        </form>
    )

}

export default Home;