// ellocentLABGIT 
import { Routes, Route } from "react-router-dom";

import './App.scss';
import Navbar from './components/navigation/Navbar';
import logo from './Assest/logo.png'
import searchicon from '../src/components/navigation/Assest/searchicon.png';
import R from '../src/components/navigation/Assest/R.png';
import HomeSlider from './components/homeslider/HomeSlider';
import Highlight from './components/highlights/Highlight';
import './components/highlights/style.scss';
import PrimaryButton from './components/buttons/PrimaryButton';

import Dropdown from './components/buttons/Dropdown';
import Search from './components/navigation/searchbutton/Search';

import Imagebox from './components/imagebox/Imagebox';
import technical from './Assest/technical.png'

import Howwework from './components/howwework/Howwework';
import workimage from './Assest/workimage.png';
import Awards from './components/awards/Awards';

import Videotestimonial from './components/videotesti/Videotestimonial';

import Package from './components/packages/Package';

import Contactform from './components/form/Contactform';
import Trade from './components/trade/Trade';
import bulb from './Assest/bulb.png';
import Testimonials from './components/testimonials/Testimonials';


import Blog from './components/blog/Blog';

import  Footer  from './components/footer/Footer';
import footerlogo from './Assest/footerlogo.png';

// Pages

import Whatwedo from "./pages/whatwedo/Whatwedo";

// JSON DATA 

// import list from './Data/list.json';
import highlight from './Data/highlights.json';
import sliderdata from './Data/sliderdata.json';
import howwework from './Data/howwework.json';
import packages from './Data/packages.json';
import testimonials from './Data/testimonials.json';
import awards from './Data/awards.json';
import blog from './Data/blog.json';



// navigation
const list = [{label:"What We Do",key:"1",path:"whatwedo"},{label:"Technologies",key:"2"},{label:"Industries",key:"3"}, {label:"Portfolio",key:"4"}, {label:"Company",key:"5"}, {label: <PrimaryButton primaryBtn = "Contact Us" /> ,key:"6",},{label: <Dropdown icon={R}/>,  key:"7"},{label:<Search icon={searchicon}/>, key:"8"}]

function App() {
    return ( 

      <div className="main-container">
      {/* Navigation */}
      <Navbar list={list} logo={logo}/>
      <Routes>
        <Route exact path="/whatwedo" element={<Whatwedo/>}/>      
      </Routes>
        

      {/* Slider Section */}
      <HomeSlider sliderdata ={sliderdata} />  
    
        {/* <Whatwedo/> */}
       {/* Highlights Section */}
      <Highlight highlight={highlight}/>
 
      {/* How we Work Section */}
      <Howwework howwework={howwework} src={workimage}/>
 
        {/* Awards Sections*/}
       <Awards awards={awards}/>        
      
      {/* Technical Expertise Section */}
      <Imagebox imgbox={technical}/>

    <Videotestimonial width="100%" src="https://www.youtube.com/embed/D0UnqGm_miA" height="400" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>


      {/*   Package section - Work We Are Proud Of */}
      <Package packages={packages}/>
  
      {/* Form */}
      <Contactform/>
    
      <Trade imgbox={bulb}/>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials}/>

      {/* BLog Section */}
      <Blog blog={blog}/>

      {/* Footer Section */}
      <Footer flogo={footerlogo}/>

      </div>
    );
  }

export default App;
