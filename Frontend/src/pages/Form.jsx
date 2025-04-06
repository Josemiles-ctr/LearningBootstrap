import React from 'react'

function Form() {
  return (
<div className="container">
<form style={{
    backgroundColor:'transparent',
    color:'white'
}} className='form-control my-3 p-5 rounded-4' action="">
    <h1 style={{
        textAlign: "center",
        color: "blue",
    }}>Sign Up</h1>
    <div className="form-floating my-3">
        <input className='form-control' type="email" id="email" name="email" required placeholder='email'/>
        <label className='form-lable' htmlFor="email">Enter your email</label>
    </div>
    <div className="form-floating">
        <input className='form-control' type="password" placeholder='password' id="password" name="password" required />
        <label className='form-lable' htmlFor="password">Password</label>
    </div>
    <div className="form-floating mt-3">

        <input className='form-control' placeholder='confirm password' type="password" id="confirm-password" name="confirm-password" required />
        <label className='form-lable' htmlFor="confirm-password">Confirm Password</label>
    </div>
       
        
        <select className="form-select mt-3">
            <option >Select An Option</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
        </select>
       <p className='pt-3 pb-0'>Select your Gender</p>
        <div className="row">
            <div className="col">

                <div className="form-check form-switch">
                    <input type="checkbox" className='form-check-input'
                     id="male" name="male" value="male" />
                        <label htmlFor="male">Male</label>
            </div>
             </div>
            <div className="col">
                    <div className="form-check form-switch">
                        <input type="checkbox" className='form-check-input' 
                        id="female" name="female" value="female" />
                        <label htmlFor="female">Female</label>
            </div>
            </div>
            <div className="col">
                    <div className="form-check form-switch">
                        <input type="checkbox"className='form-check-input' 
                        id="other" name="other" value="other" />
                        <label htmlFor="other">other</label>
            </div>
            
            

            </div>
        </div>
        <div className="input-group">
            <div className="input-group-text">$</div>
            <div className="form-floating">
       
           <input type="number" id='amount' className='form-control' placeholder='Amout'/>
             <label htmlFor="amount">Amount in dollars</label>

            </div>
           <div className="input-group-text">.00</div>
        </div>
      
        
        <div className="input-group mt-3">
            <div className="input-group-text">
                <select name="" id="" className='form-select no-arrow'>
                    <option className='form-select-option' value="+256">+256</option>
                    <option value="+23">+23</option>
                    <option value="+91">+91</option>
                    <option value="+1">+256</option>
                    <option value="+67">+67</option>
                    <option value="+253">+253</option>
                    <option value="+12">+12</option>
                </select>
            </div>
           <div className="form-floating ">
           <input type="tel" id='Tel' className='form-control' placeholder='tel'/>
           <label htmlFor="Tel">Tel:</label>
           </div>
        </div>
        <button type="submit" className='btn btn-primary my-3 d-block mx-auto'>
            Submit</button>
    </form>
</div>
  )
}

export default Form