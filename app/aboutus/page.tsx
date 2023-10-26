import Image from 'next/image'
import Footer from '../(components)/footer/footer';
import Header  from '../(components)/header/header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header/>
        <div>Text1</div>
      <Footer/>
    </div>
  )
}
export default page