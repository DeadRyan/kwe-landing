import { useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Logo from './../images/LOGO.svg';
import LogoIcon from './../images/logo-icon.svg';
import CloseIcon from './../images/close-icon.svg';
import MenuImg from './../images/menu.svg';
import ChevronDown from './../images/chevron-down.svg';
import ExternalLinkImg from './../images/external-link.svg';
import './../styles/navbar.scss';

const Navbar = () => {

  let navigate = useNavigate();
  let location = useLocation();
  const [curPath, setCurPath] = useState(location.pathname)
  const [sideNav, setSideNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    setCurPath(location.pathname);
  }, [location]);

  if(location.pathname === '/whitepaper'){
    return null;
  }
  return(
    <>
      <div className="nav">
        <div className="menu" onClick={()=>setSideNav(true)}>
          <img src={MenuImg} />
        </div>
        <div className='logo' onClick={()=>navigate('/')}>
          <img src={Logo}/>
        </div>
        <div className='items'>
          <Link to="how-it-works" className={`${curPath === '/how-it-works'? 'active': ''}`}>How It Works</Link>
          <div className='dropdown-container'>
            <div className='title' onClick={()=>setDropdown(!dropdown)}>
              <div>Ecosystem</div>
              <img src={ChevronDown} alt="dropdown"/>
            </div>
            <div className={`dropdown ${!dropdown && 'd-none'}`}>
              <a href='https://kwe-network.gitbook.io/documentation/'>Documentation</a>
            </div>
          </div>
          <Link to="token" className={`${curPath === '/token'? 'active': ''}`}>Token</Link>
          {/* <Link to="news" className={`${curPath === '/news'? 'active': ''}`}>News</Link> */}
          <Link to="faq" className={`${curPath === '/faq'? 'active': ''}`}>FAQ</Link>
          <Link to="contact" className={`${curPath === '/contact'? 'active': ''}`}>Contact</Link>
        </div>
        <div className='cta-button' onClick={()=>navigate('/whitepaper')}>
          <img src={ExternalLinkImg} alt=""/>
          <span>Whitepaper</span>
        </div>
      </div>
      <div className={`sideNav ${!sideNav && 'd-none'}`}>
        <div className='header'>
          <img src={LogoIcon} onClick={()=>{
            navigate('/');
            setSideNav(false);
          }} alt="KWE"/>
          <img src={CloseIcon} alt="close" onClick={()=>setSideNav(false)}/>
        </div>
        <div className='items'>
          <div onClick={()=>{
            navigate('/how-it-works');
            setSideNav(false)
          }}>How It Works</div>
          <div onClick={()=>{
            navigate('/token');
            setSideNav(false)
          }}>
          </div>
          <div className='title' onClick={()=>setDropdown(!dropdown)}>
            <span>Ecosystem</span>
            <img src={ChevronDown} alt="dropdown"/>
          </div>
          <div className={`dropdown ${!dropdown && 'd-none'}`}>
            <a href='https://kwe-network.gitbook.io/documentation/'>Documentation</a>
          </div>
          <div onClick={()=>{
            navigate('/token');
            setSideNav(false)
          }}>Token</div>
          {/* <div onClick={()=>{
            navigate('/news');
            setSideNav(false)
          }}>News</div> */}
          <div onClick={()=>{
            navigate('/faq');
            setSideNav(false)
          }}>FAQ</div>
          <div onClick={()=>{
            navigate('/contact');
            setSideNav(false)
          }}>Contact</div>
          <div classname="text-green" onClick={()=>{
            navigate('/whitepaper');
            setSideNav(false)
          }}>
            <img className="whitepaper-icon" src={ExternalLinkImg} alt=""/>
            <span>Whitepaper</span>
          </div>
        </div>
      </div>
      
      
    </>
    // <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease-in" data-easing2="ease" role="banner" className="navbar-3 w-nav">
    //   <div className="div-block-5">
    //     <Link to="/" aria-current="page" className="button-5 w-button">‍</Link>
    //     <nav role="navigation" className="nav-menu-4 w-nav-menu">
    //       <a href="how-it-works" className="nav-link-11 w-nav-link">How it works</a>
    //       <div data-delay="0" data-hover="false" className="w-dropdown">
    //         <div className="dropdown-toggle-2 w-dropdown-toggle">
    //           <div className="icon-2 w-icon-dropdown-toggle"></div>
    //           <div className="text-block-15">Ecosystem</div>
    //         </div>
    //         <nav className="dropdown-list-2 w-dropdown-list">
    //           <a href="https://kwe-network.gitbook.io/documentation/" className="dropdown-link-4 w-dropdown-link">Documentation</a>
    //           <a href="#" className="dropdown-link-5 w-dropdown-link">KWE Testnet</a>
    //         </nav>
    //       </div>

    //       <Link to="token" className="nav-link-12 w-nav-link">Token</Link>
    //       <Link to="news" className="nav-link-13 w-nav-link">News</Link>
    //       <Link to="faq" className="nav-link-14 w-nav-link">FAQ</Link>
    //       <Link to="contact" className="nav-link-15 w-nav-link">Contact</Link>
    //       <Link to="whitepaper" className="button-4 w-button"></Link>
    //     </nav>
    //     <div className="menu-button-6 w-nav-button">
    //       <div className="w-icon-nav-menu"></div>
    //     </div>
    //   </div>
    // </div>
  )

}
export default Navbar;
