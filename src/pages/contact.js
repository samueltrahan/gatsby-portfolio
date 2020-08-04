import React from 'react'
import Layout from '../components/Layouts'

export default function contact() {
  return (
    <Layout>
      <h1>Samuel Trahan</h1>
      <h3 className="contact">Phone Number - <a href="tel:337-909-9418">337-909-9418</a></h3>
      <h3 className='contact'>Email - <a href = "mailto: samtrahan91@gmail.com">samtrahan91@gmail.com</a></h3>
      <h3 className='contact'><a href={'https://www.linkedin.com/in/samueltrahan/'}>LinkedIn Profile</a></h3>
      <h3 className='contact'><a href={'https://github.com/samueltrahan'}>GitHub Profile</a></h3>
    </Layout>
  )
}



