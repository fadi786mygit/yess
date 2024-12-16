import React from 'react'

import img4 from '../Components/images/yes1/4.jpg'
import img6 from '../Components/images/yes1/6.jpg'
import img7 from '../Components/images/yes1/7.jpg'
import img8 from '../Components/images/yes1/8.jpg'
import img9 from '../Components/images/yes1/9.jpg'
import img10 from '../Components/images/yes1/10.jpg'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Yes2 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '90%' }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 1200: 1 }} // Ensure only 1 column
        >
          <Masonry>

            <img
              src={img4}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img6}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img7}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img8}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img9}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img10}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Yes2
