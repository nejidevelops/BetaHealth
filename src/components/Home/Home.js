import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex flex-col align-items-center justify-content-center'>
            <h2 className='font-bold landing-text my-6'><span>We care</span><br />about your health</h2>
            <p className='landing-textt ml-24'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, 
            </p>
            <button className='btn btn-primary my-6'>BOOK AN APPOINTMENT</button>
          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <img style={{height: '80vh'}}src='https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600' alt='doctor and nurse' />
          </div>
        </div>
    </div>
  )
}

export default Home