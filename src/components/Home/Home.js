import React from 'react'

function Home() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <h2>We care about your helath</h2>

          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <img style={{height: '80vh'}}src='https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600' alt='doctor and nurse' />
          </div>
        </div>
    </div>
  )
}

export default Home