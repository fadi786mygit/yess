import React from 'react'

import img2 from '../Components/images/2.jpg'
import img3 from '../Components/images/3.jpg'
import img4 from '../Components/images/4.jpg'
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
              alt="Image 2"
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity:'1',
              }}
            />
            <img
              src={img3}
              alt="Image 3"
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity:'1',
              }}
            />
            <img
              src={img4}
              alt="Image 4"
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity:'1',
              }}
            />
            <img
              src={img3}
              alt="Image 3 again"
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity:'1',
              }}
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Yes3
