// ellocentLABGIT 
import { Routes, Route } from "react-router-dom";

import './App.scss';
import Navbar from './components/navigation/Navbar';
import Homescreen from "./containers/screens/Homescreen";
import logo from './Assest/logo.png'
import searchicon from '../src/components/navigation/Assest/searchicon.png';
import R from '../src/components/navigation/Assest/R.png';

// import './components/highlights/style.scss';
import PrimaryButton from './components/buttons/PrimaryButton';

import Dropdown from './components/buttons/Dropdown';
import Search from './components/navigation/searchbutton/Search';

import  Footer  from './components/footer/Footer';
import footerlogo from './Assest/footerlogo.png';

// Pages

import Whatwedo from "./pages/whatwedo/Whatwedo";
import Technologies from "./pages/technology/Technologies";
import Industries from "./pages/industries/Industries";
import Portfolio from './pages/portfolio/Portfolio';
import Company from './pages/company/Company';
import Contactus from './pages/contact/Contactus';

// JSON DATA 

// import list from './Data/list.json';


// navigation
const list = [
  { label: "What We Do", path: "/whatwedo" },
  { label: "Technologies", path: "/technologies" },
  { label: "Industries", path: "/industries" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Company", path: "/company" },
  { label: <PrimaryButton primaryBtn="Contact Us" />, path: "/contactus" },
  { label: <Dropdown icon={R} />, path: "/contactus" },
  { label: <Search icon={searchicon} />, path: "/" }
  
];

function App() {
    return (
      <div className="main-container">
        {/* Navigation */}
        <Navbar list={list} logo={logo} />
        <Routes>
          {/* Home Screen Data */}
          <Route exact path="/" element={<Homescreen />} />
          <Route exact path="/whatwedo" element={<Whatwedo />} />
          <Route exact path="/technologies" element={<Technologies />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>

      
  

        {/* BLog Section */}
        {/* <Blog blog={blog} /> */}

        {/* Footer Section */}
        <Footer flogo={footerlogo} />
      </div>
    );
  }

export default App;
