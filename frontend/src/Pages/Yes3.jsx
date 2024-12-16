import React from 'react'

import img2 from '../Components/images/2.jpg'
import img3 from '../Components/images/3.jpg'
import img4 from '../Components/images/4.jpg'
import img5 from '../Components/images/5.jpg'
import img6 from '../Components/images/6.jpg'
import img7 from '../Components/images/7.jpg'
import img8 from '../Components/images/8.jpg'
import img9 from '../Components/images/9.jpg'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Yes3 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '90%' }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 1200: 1 }} // Ensure only 1 column
        >
          <Masonry>
            <img
              src={img2}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />
            <img
              src={img3}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />
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
              src={img5}
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
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Yes3
