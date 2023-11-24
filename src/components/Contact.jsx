import React, { useState, useRef, useEffect } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Contact() {

  const [ form, setForm ] = useState({ email: '',
                                        name: '',
                                        message: '' }) 
  
  const [success, setSuccess] = useState(true)

  //put these in effect
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSuccess('stand-in') //for maintenance
    const result = await addToMailchimp(form.email, {
      FNAME: form.name,
      LNAME: form.name,
      MESSAGE: form.message
    })
    if(result.result==='success'){
      setSuccess('success')
      setForm({ email: '', name: '', message: '' });
    }
    if(result.result==='error') {
      setSuccess('error') 
      //leave form with details
    }
    console.log(result)
  }

  const handleChange = (event)=>{
    const {name, value} = event.target
    setForm ((current)=>{  
      return {
        ...current,
        [name]: value
      }
    })
    console.log(form)
  }

  const FormSent=()=>{
    const ref = useRef(null)
    // if(success==='stand-in') {
    //   return (
    //     <div className="popup-container" onClick={(e)=>setSuccess(null)} >
    //       <div className="popup-bg"></div>
    //       <div className='form-success' ref={ref} onClick={(e)=>e.stopPropagation()} >
    //         <p>This feature is having a bad day :( Please make contact another way.</p>
    //         <span className='dismiss' onClick={(e)=>setSuccess(null)}
    //         >X</span>
    //       </div>
    //     </div>
    //   )
    // }
    if(success==='success') {
      return (
        <div className="popup-container" onClick={(e)=>setSuccess(null)} >
          <div className="popup-bg"></div>
          <div className='form-success' ref={ref} onClick={(e)=>e.stopPropagation()} >
            <p>Thanks for reaching out!</p>
            <span className='dismiss' onClick={(e)=>setSuccess(null)}
            >X</span>
          </div>
        </div>
      )
    }
    if(success==='error'){
      return (
          <div className="popup-container" onClick={(e)=>setSuccess(null)} >
            <div className="popup-bg"></div>
            <div className='form-fail' ref={ref} 
              onClick={(e)=>e.stopPropagation()} >
              <p>I didn't get that.. <br/><br/> Try sending your message again. Be sure to include all fields.</p>
              <span className='dismiss' onClick={(e)=>setSuccess(null)}
                >X</span>
            </div>
          </div>
      )
    }
  }

  //for implementing fade out..
  //need to delay removing from dom until fade transition has finished
  //(2nd answer?) https://stackoverflow.com/questions/42733986/how-to-wait-and-fade-an-element-out

  return (
    <div id='contact' className="contact side-viewing">
      <div className="contact-bg"></div>
      <div className="contact-top-svg"></div>
      {FormSent()}
      <div className="form-wrapper">
        {/* <h1 className="contact-header fade-in">Message</h1> */}

        <svg className='contact-header' viewBox="0 0 42 37" xmlns="http://www.w3.org/2000/svg">                           
              <path d="M39.2489 0.712402H2.75109C1.23166 0.712402 0 2.00201 0 3.59292V27.7892C0 29.3801 1.23176 30.6698 2.75109 30.6698H14.8651L18.8947 35.686C19.4174 36.3367 20.188 36.7124 21.0001 36.7124C21.8122 36.7124 22.5827 36.3368 23.1055 35.686L27.1351 30.6698H39.2489C40.7682 30.6698 42 29.3801 42 27.7892V3.59292C42 2.00201 40.7682 0.712402 39.2489 0.712402ZM29.7041 23.7565H7.59796C6.8383 23.7565 6.22242 23.1117 6.22242 22.3163C6.22242 21.5209 6.8383 20.876 7.59796 20.876H29.7041C30.4638 20.876 31.0796 21.5209 31.0796 22.3163C31.0796 23.1117 30.4638 23.7565 29.7041 23.7565ZM6.22242 15.8083C6.22242 15.0129 6.8383 14.3681 7.59796 14.3681H24.5725C25.3321 14.3681 25.948 15.0129 25.948 15.8083C25.948 16.6037 25.3321 17.2486 24.5725 17.2486H7.59796C6.8383 17.2486 6.22242 16.6037 6.22242 15.8083ZM34.402 10.7404H7.59796C6.8383 10.7404 6.22242 10.0956 6.22242 9.30018C6.22242 8.50477 6.8383 7.85992 7.59796 7.85992H34.4019C35.1616 7.85992 35.7775 8.50477 35.7775 9.30018C35.7776 10.0956 35.1617 10.7404 34.402 10.7404Z" />
        </svg>

        <form className="contact-form" onSubmit={handleSubmit} >
          <div className="name col-12 fade-in">
            {/* <label for='name'>
              Name
            </label> */}
            <input id='name' type="text" name='name' onChange={handleChange} value={form.name} 
            placeholder='Name' />
          </div>

          <div className="email col-12 fade-in">
            {/* <label for='email'>
              Email
            </label> */}
            <input placeholder='Email' id='email' type="email" name='email' onChange={handleChange} value={form.email} />
          </div>

          <div className="message col-12 fade-in">
            {/* <label for='message'>
              Message
            </label> */}
            <textarea  id='message' type="text" name='message' onChange={handleChange} value={form.message} 
                       placeholder="Hi Elliot,&#10;I need your help with a developing a digital product.. "/>
          </div>

          <button className='form-submit-btn fade-in' type='submit'>SEND</button>
        </form>
      </div>
      <div className="contact-bottom-svg"></div>
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