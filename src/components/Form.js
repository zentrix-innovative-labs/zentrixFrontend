import React from 'react'
import style from './style/Form.module.css'
import land from './assets/form.png'
import Navbar from './Navbar'

const Form = () => {
  return (
    <div>
    <Navbar/>
    <div className='container-fluid' id={style.body}>
        <div className=' container mx-auto row' id={style.zentrix}>
            <div className='col-md-4 offset-1 mt-5' >
                <h3>Zentrix Scholarship Application</h3>
                <p>Elevate your ambitions: apply now at Zentrix Africa technology Institutes, were opportunities sharps the future  </p>
            </div>
            <div className='col-md-4 offset-1'>
                <img src={land} alt="land" className='w-75 h-75'/>    
            </div>
        </div>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-4 offset-1'>
                    <label>First Name</label><br/>
                    <input type="text" name='firstName' className='form-control' placeholder='Enter Your First Name' />
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Last Name (Surname)</label><br/>
                    <input type='text' name='lastName' className='form-control' placeholder='Enter Your Last Name' />
            </div>
            
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 offset-1'>
                    <label>Email</label><br/>
                    <input type="email" name='email' className='form-control' placeholder='Enter Your Email' />
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Phone Number</label><br/>
                    <input type='number' name='phoneNumber' className='form-control' placeholder='Enter Your Phone Number' />
            </div>
            
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 offset-1'>
                    <label>Gender</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Country</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                    </select>
            </div>     
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 offset-1'>
                    <label>Highest level of education</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>P.Hd</option>
                        <option>M.Sc</option>
                        <option>B.Sc</option>
                        <option>HND</option>
                        <option>OND</option>
                    </select>
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Do you have access to a laptop?</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
            </div>     
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 offset-1'>
                    <label>How many hours a week can you dedicate a week?</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>10hrs</option>
                        <option>20hrs</option>
                    </select>
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Which course are you applying for? First Choice</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                    </select>
            </div>     
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 offset-1'>
                    <label>Which course are you applying for? Second Choice</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
            </div>
            <div className='col-md-4 offset-1'>
                    <label>Where did you hear us from?</label><br/>
                    <select className='form-control'>
                        <option disabled>Select</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                    </select>
            </div>     
        </div>
        <div className='row mt-3'>
            <div className='col-md-9 offset-1'>
                    <label>Why are you applying for this scholarship? </label><br/>
                    <textarea type="message" name='message' className='form-control p-5' placeholder='Enter Your message' />
            </div>
        </div>
        <button className='btn btn text-light p-3 mb-5 mt-5 w-25' id={style.button}>Submit</button>
    </div>
         

    </div>
    </div>
  )
}

export default Form;