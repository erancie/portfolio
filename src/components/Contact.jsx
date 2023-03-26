import React, { useState, useRef, useEffect } from 'react'
import FadeInOut from './utils/FadeInOut'
// import addToMailchimp from 'gatsby-plugin-mailchimp'

      
export default function Contact() {

    const [ form, setForm ] = useState({ email: '',
                                       firstName: '',
                                       lastName: '', 
                                       message: '' })
  
  const [success, setSuccess] = useState(true)

  //put these in effect
  const handleSubmit = async (e) => {
    e.preventDefault();

    //fix gatsby build error for 'gatsby-plugin-mailchimp'

    setSuccess('success') //remove when fixed
    setSuccess('error') //remove when fixed
    // setForm({ email: 'email', firstName: 'First Name', lastName: 'Last Name', message: 'message' });//remove when fixed

    // const result = await addToMailchimp(form.email, {
    //   FNAME: form.firstName,
    //   LNAME: form.lastName,
    //   MESSAGE: form.message
    // })
    // if(result.result==='success'){
    //   setSuccess('success')
    //   setForm({ email: '', firstName: '', lastName: '', message: '' });
    // }
    // if(result.result==='error') {
    //   setSuccess('error') 
    //   //leave form with details
    // }
    // console.log(result)
  }

  const handleChange = (event)=>{
    const {name, value} = event.target
    setForm ((preValue)=>{  
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  const FormSent=()=>{
    
    const ref = useRef(null)

    if(success==='success') {
      return (
        <FadeInOut show={success==='success'} duration={200}>
        <div className="popup-container" onClick={(e)=>setSuccess(null)} >
          <div className="popup-bg"></div>
          <div className='form-success' ref={ref} onClick={(e)=>e.stopPropagation()} >
            <p>Thanks for reaching out!</p>
            <span className='dismiss' onClick={(e)=>setSuccess(null)}
            >X</span>
          </div>
        </div>
        </FadeInOut>
      )
    }
    if(success==='error'){
      return (
        <FadeInOut show={success==='error'} duration={200}>
          <div className="popup-container" onClick={(e)=>setSuccess(null)} >
            <div className="popup-bg"></div>
            <div className='form-fail' ref={ref} 
              onClick={(e)=>e.stopPropagation()} >
              <p>We didn't get that.. <br/> Try sending your message again. <br/>Be sure to include all fields.</p>
              <span className='dismiss' onClick={(e)=>setSuccess(null)}
                >X</span>
            </div>
          </div>
        </FadeInOut>
      )
    }
  }

  //for implementing fade out..
  //need to delay removing from dom until fade transition has finished
  //(2nd answer?) https://stackoverflow.com/questions/42733986/how-to-wait-and-fade-an-element-out

  return (
    <div className="contact">

      {FormSent()}

      <h1 className="contact-header">CONTACT</h1>

      <form className="contact-form" onSubmit={handleSubmit} >
    
        <label for='firstname'>
          First Name
        </label>
        <input id='firstname' type="text" name='firstName' onChange={handleChange} value={form.firstName} />

        <label for='lastname'>
          Last Name
        </label>
        <input id='lastname' type="text" name='lastName' onChange={handleChange} value={form.lastName} />

        <label for='email'>
          Email
        </label>
        <input id='email' type="email" name='email' onChange={handleChange} value={form.email} />

        <label for='message'>
          Message
        </label>
        <textarea id='message' type="text" name='message' onChange={handleChange} value={form.message} />

        <button className='form-submit-btn' type='submit'>SEND</button>
        
      </form>
    </div>
  )
}


  //can use for many popups by implementing hook for detecting clicks outside an element
  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component


    // //detect click outside of element
    // const handleOutsideClick=(e)=> {
    //   if (ref.current && !ref.current.contains(e.target)) {
    //     setSuccess(null)
    //   }
    // }
    // //event needs to be added to document too.. (?)
    // useEffect(()=>{
    //   document.addEventListener("mousedown", handleOutsideClick);
    //     // return document.removeEventListener("mousedown", handleOutsideClick) //why does action not work with cleanup added
    // }, [ref])