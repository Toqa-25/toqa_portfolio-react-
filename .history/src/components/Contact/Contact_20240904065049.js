import React from 'react'

const Contact = () => {
 
  return (
    <div className="container">
      Hello Toqa
      <form onSubmit={onSubmit} className="form_contact">
      <input type="text"  name="name"/>
      <input type="email" name="email" />
      <textarea name="" id="" cols="30" rows='30'></textarea>
      <button type="submit" >submit</button>
      </form>
    </div>
  )
}

export default Contact
