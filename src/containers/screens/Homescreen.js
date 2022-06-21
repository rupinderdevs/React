import React from 'react'
import HomeSlider from '../screens/homeslider/HomeSlider';

import Highlight from '../screens/highlights/Highlight';
import Howwework from '../screens/howwework/Howwework';


import Awards from '../screens/awards/Awards';
import Imagebox from '../screens/imagebox/Imagebox';

import Videotestimonial from "../screens/videotesti/Videotestimonial";
import Package from '../screens/packages/Package';
import Form from '../screens/form/Form';
import Trade from "../screens/trade/Trade";
import Testimonials from "../screens/testimonials/Testimonials";
import Blog from '../screens/blog/Blog';

// images
import workimage from "../../Assest/workimage.png";
import technical from "../../Assest/technical.png";
import bulb from "../../Assest/bulb.png";

// Json Data
import sliderdata from '../../Data/sliderdata.json';
import highlight from '../../Data/highlights.json';
import howwework from "../../Data/howwework.json";


import packages from "../../Data/packages.json";
import testimonials from "../../Data/testimonials.json";
import awards from "../../Data/awards.json";
import blog from "../../Data/blog.json";
import videotestimonials from "../../Data/videotestimonials.json";

function Homescreen() {
  return (
    <>
      <HomeSlider sliderdata={sliderdata} />
      <Highlight highlight={highlight} />
      <Howwework howwework={howwework} src={workimage} />

      {/* Awards Sections*/}
      <Awards awards={awards} />

      {/* Technical Expertise Section */}
      <Imagebox imgbox={technical} />

      <Videotestimonial videotestimonials={videotestimonials} />

      {/*   Package section - Work We Are Proud Of */}
      <Package packages={packages} />
      {/* <Contactform /> */}
      <Form />
      <Trade imgbox={bulb} />

      <Testimonials testimonials={testimonials} />
      <Blog blog={blog} />
    </>
  );
}

export default Homescreen