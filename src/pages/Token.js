import KweImg from './../images/icon-kwe.svg';
import TokenImg from './../images/token.png';
import EthereumImg from './../images/ethereum.png';
import MaticImg from './../images/matic.png';
import './../styles/token.scss';
export const Token = () => {
  return(
    <>
      <div className="section-7 wf-section">
        <div className="container-9 w-container">
          <div className="d-flex">
            <div className="child">
              <div className='logo-container'>
                <img src={KweImg} className="logo" loading="lazy" alt=""/>
                <div className='d-flex title-container'>
                  <div className="title">KWE </div>
                  <div className="title">Network</div>
                </div>
              </div>
              <div className='more-details desktop'>
                <p className="">Click On The Link for KWE Token Etherscan Address <br/> 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://etherscan.io/address/0x14C4B0222F5651e9d922358b2C420d122E471905#events'>
                   KWE Eterscan Address Here
                  </a>
                 </p>
                 <br/><br/>
                <p className="title">KWE Token Contract Address</p>
                <p className="">0x14C4B0222F5651e9d922358b2C420d122E471905</p>
              </div>
            </div>
            <div className="child">
              <p className="">Funding Stages Closed</p>
              <p className="price">NOW $$ 0.05 USD</p>
              <p className="">Listing Price</p>
              <div className='tokens d-flex flex-wrap'>
                <img src={TokenImg} loading="lazy" alt="" className=""/>
                <img src={EthereumImg} loading="lazy" alt="" className=""/>
                <img src={MaticImg} loading="lazy" alt="" className=""/>
              </div>
            </div>
          </div>

          <div className='more-details mobile'>
            <p className="">Click On The Link Below To Buy KWE Tokens Now <br/>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://presale.kwe.network'>
                   Buy KWE Tokens Now
                 </a>           
            
            </p>
            <br/><br/>
            <p className="title">KWE Token Contract Address</p>
            <p className="">Sample Address - 0xa2dD817c2fDc3a2996f1A5174CF8f1AaED466E82</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Token;
