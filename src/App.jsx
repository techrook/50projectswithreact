import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./App.css";
import img1 from '../image/dave.jpg';
import img2 from '../image/A.jpg';
import img3 from '../image/babe.jpg';
import img4 from '../image/client.jpg';
import img5 from '../image/finegal.jpg';
import img6 from '../image/lulu.jpg';
import img7 from '../image/monday.jpg';
import img8 from '../image/Ndi2.jpg';
import img9 from '../image/nusra.jpg';
import img10 from '../image/sis.jpg';
import { MdOutlineStar } from "react-icons/md";
function App() {
  return (
    <div className='bg-black w-3/5 h-1/2 mt-3 m-auto flex justify-center flex-col text-gray-500'>
      <h1 className='text-center text-2xl font-mono'>My Testimonials</h1>
      <Carousel
        className='w-8/12 h-1/2 ml-auto mr-auto pl-1.5 pr-1.5 pt-2 pb-2 border-solid border-2 border-orange-600 '
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
      
      >
        <div>
          <img className='w-32 rounded-full' src={img1}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>David Dike</h3>
            <h4 className='font-mono font-bold text-xl'>developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img2}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>Amaka Elodi</h3>
            <h4 className='font-mono font-bold text-xl'>Stylist</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img3}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>oluchi abonyi</h3>
            <h4 className='font-mono font-bold text-xl'>Model</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img4}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>sara mill</h3>
            <h4 className='font-mono font-bold text-xl'>dancer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img5}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>sandra amber</h3>
            <h4 className='font-mono font-bold text-xl'>Actress</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img6}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>oluchi monday</h3>
            <h4 className='font-mono font-bold text-xl'> Entrepreneur </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img7}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>Itohowo Monday</h3>
            <h4 className='font-mono font-bold text-xl'>Founder, CEO, developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img8}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>Ndifreke umoh</h3>
            <h4 className='font-mono font-bold text-xl'>Game developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img9}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>mrs nusra</h3>
            <h4 className='font-mono font-bold text-xl'>Model</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
        <div>
          <img className='w-32 rounded-full' src={img10}/>
          <div className='pt-16'>
            <h3 className='font-mono font-bold text-xl'>Aniedi umoh</h3>
            <h4 className='font-mono font-bold text-xl'>photograher</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
               quod ab cumque officia quisquam ut, minima consequatur omnis? Ad, 
              omnis itaque. Fugiat aperiam qui at doloremque quasi, maiores assumenda fuga.</p>
              <div className='text-center flex flex-row justify-center text-xl'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default App