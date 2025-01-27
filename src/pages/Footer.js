import LogoImg from './../images/LOGO.svg';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './../styles/footer.scss';
export const Footer = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [curPath, setCurPath] = useState(location.pathname)

  useEffect(() => {
    setCurPath(location.pathname);
  }, [location]);

  return(
      <div className="footer">
        <div className='logo' onClick={()=>navigate('/')}>
          <img src={LogoImg} alt="kwe"/>
        </div>
          <div className='items'>
            <Link to="how-it-works" className={`${curPath === '/how-it-works'? 'active': ''}`}>How It Works</Link>
            <Link to="token" className={`${curPath === '/token'? 'active': ''}`}>Token</Link>
            <Link to="whitepaper" className={`${curPath === '/whitepaper'? 'active': ''}`}>Whitepaper</Link>
          </div>
          <div className='copyright'>© 2025 KWE Network. All Rights Reserved.</div>
        
      </div>
  );
}
export default Footer;
