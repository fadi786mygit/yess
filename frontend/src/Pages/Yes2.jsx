import React from 'react'

import img15 from '../Components/images/yes2/15.jpg'
import img16 from '../Components/images/yes2/16.jpg'
import img17 from '../Components/images/yes2/17.jpg'
import img18 from '../Components/images/yes2/18.jpg'
import img19 from '../Components/images/yes2/19.jpg'
import img20 from '../Components/images/yes2/20.jpg'

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
              src={img15}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img16}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img17}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img18}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img19}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                marginBottom: '10px',
                opacity: '1',
              }}
            />

            <img
              src={img20}
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
