import React, { useState, useRef, useEffect } from 'react'
// import addToMailchimp from 'gatsby-plugin-mailchimp'

      
export default function Contact() {

  

  const [ form, setForm ] = useState({ email: 'email',
                                       firstName: 'First Name',
                                       lastName: 'Last Name', 
                                       message: 'message' })
  
  const [success, setSuccess] = useState(true)

  //put these in effect
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('error') 
    // const result = await addToMailchimp(form.email, {
    //   FNAME: form.firstName,
    //   LNAME: form.lastName,
    //   MESSAGE: form.message
    // })
    // if(result.result==='success'){
    //   setSuccess('success')
    //   setForm({ email: 'email', firstName: 'First Name', lastName: 'Last Name', message: 'message' });
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





  //implementing hook for detecting clicks outside an element
  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component


  const FormSent=()=>{
    
    const ref = useRef(null)

    //put this in effect   //move this to hook for reuse with all popups?
    const handleOutsideClick=(e)=> {
      if (ref.current && !ref.current.contains(e.target)) {
        // ref.current.style.display='none'
        setSuccess(null)
      }
    }
    useEffect(()=>{
      document.addEventListener("mousedown", handleOutsideClick);
    }, [])
      // useEffect(()=>{
  //   return document.removeEventListener("mousedown", handleOutsideClick)
  // }, [ref])
  
    if(success==='success') {
      return (
        <div className="popup-container" 
          >
          <div className='form-success' ref={ref} onClick={handleOutsideClick} >
            <p>Thanks for reaching out!</p>
            <span className='dismiss' onClick={(e)=>setSuccess(null)}
            >X</span>
          </div>
         </div>
      )
    }
    if(success==='error'){
      return (
        <div className="popup-container" >
          <div className='form-fail' ref={ref} onClick={handleOutsideClick}>
            <p>Please try sending again</p>
            <span className='dismiss' onClick={(e)=>setSuccess(null)}
              >X</span>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="contact">

      {/* {success===true?<div>Thanks for reaching out!</div>} */}

      {FormSent()}
      {/* <div className='form-success'>Thanks for reaching out!</div> */}

      <form className="contact-form" onSubmit={handleSubmit} >

        <label>
          First Name
          <input type="text" name='firstName' onChange={handleChange} value={form.firstName} />
        </label>

        <label>
          Last Name
          <input type="text" name='lastName' onChange={handleChange} value={form.lastName} />
        </label>

        <label>
          Email
          <input type="email" name='email' onChange={handleChange} value={form.email} />
        </label>

        <label>
          Message
          <textarea type="text" name='message' onChange={handleChange} value={form.message} />
        </label>

        <input type="submit" value="Submit" />
        
      </form>
    </div>
  )
}
