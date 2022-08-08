import React from 'react'
import Contact from '../components/Contact'
import Meta from '../components/Meta'
function contact() {
  return (
    <div className='min-h-main py-10'>
      <Meta title="Contacto" />
        <Contact />
    </div>
  )
}

export default contact