import  './signup.module.css'
import styles from './signup.module.css'
function SignUp(){
    return(
        <form className={styles.signupContainer}>
            <h2>Signup</h2>
            <label htmlFor='firstName' >First Name:</label>
            <input className={styles.input} name='firstName' type='text' placeholder='First Name' required={true} minLength={4} />

            <label htmlFor='lastName' >Last Name:</label>
            <input className={styles.input} name='lastName' type='text' placeholder='Last Name' required={true} />

            <label htmlFor='email'>Email:</label>
            <input className={styles.input} name='email' type='text' placeholder='Email' required={true} type={'email'} />

            <label htmlFor='userName'>Username</label>
            <input className={styles.input} name='userName' type='text' placeholder='Username' required={true} />

            <label htmlFor='password'>Password:</label>
            <input className={styles.input} name='password' type='password' placeholder='Password' required={true} minLength={4} type={'password'}  />

            <input className={styles.submit_btn} type='submit' value='Signup'/>
            <label>Already Have account <a href="../login/login.jsx">Login</a></label>
        </form>
    )
}

export default SignUp