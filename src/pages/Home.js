import React from 'react';
import RectangGlowImg from './../images/rectangle-glow.png';
import TransparencyImg from './../images/transparency.svg';
import DecentralizationImg from './../images/decentralization.svg';
import SecurityImg from './../images/security.svg';
import RoadmapImgMobile from './../images/roadmap-small.svg';
import RoadmapImgTab from './../images/roadmap-mid.svg';
import RoadmapImgDesktop from './../images/roadmap.svg';
import WrthImg from './../images/wrth.png';
import NordicImg from './../images/nordic.svg';
import Port3Img from './../images/port13.svg';
import CodonoImg from './../images/codono.png';
import x10Img from './../images/x10.png';
import PlanvImg from './../images/planv.png';
import FacebookImg from './../images/facebook.svg';
import TwitterImg from './../images/twitter.svg';
import YoutubeImg from './../images/youtube.svg';
import InstagramImg from './../images/instagram.svg';
import TelegramImg from './../images/telegram.svg';
import SubstrateFrameworkImg from './../images/substrate-framework.svg';
import GravityStorageImg from './../images/gravity-storage.svg';
import TrendingUpImg from './../images/trending-up.svg';
import BlockchainImg from './../images/blockchain.svg';
import AncaImg from './../images/Anca.png';
import AdrianImg from './../images/Adrian.png';
import LopezImg from './../images/Lopez.png';
import EronimImg from './../images/Eronim.png';
import OliImg from './../images/Oli.png';
import CamiImg from './../images/Cami.png';
import BrendaImg from './../images/Brenda.png';
import AlexImg from './../images/Alex.png';
import './../styles/home.scss';
const Home = () => {
  return(
    <>
      <div className="section-5 wf-section">
        <h1 className="heading-10">Green energy<br/>Meets Blockchain <br/>Technology.</h1>
        <div className="text-block-9">KWE Network is revolutionizing the renewable industry, harnessing the power of decentralization to provide industrial-scale Green Energy production and Green Energy storage solutions allowing global participation in the energy retail market via blockchain.</div>
      </div>
      <div className="section-12 wf-section">
        <div className="container-12 w-container">
          <img src={RectangGlowImg} loading="lazy" alt="rectangle" className="image-2"/>
          <h1 className="heading-2">Innovative and Disruptive</h1>
          <div className='feature-card-container'>
            <div className='feature-card'>
              <img src={SubstrateFrameworkImg} alt=""/>
              <div className='title'>Substrate Framework</div>
              <div className='content'>Develop a safe, reliable and fast network that allows flexibility and scalability to push boundaries further.</div>
            </div>
            <div className='feature-card'>
              <img src={GravityStorageImg} alt=""/>
              <div className='title'>Gravity Storage</div>
              <div className='content'>Harness the ultimate gravity energy storage technology to build the foundation of a clean energy future.</div>
            </div>
          </div>
          <div className='feature-card-container'>
            <div className='feature-card'>
              <img src={TrendingUpImg} alt=""/>
              <div className='title'>Energy Marketplace</div>
              <div className='content'>Operate a decentralized marketplace where the trading of green energy production will take place.</div>
            </div>
            <div className='feature-card'>
              <img src={BlockchainImg} alt=""/>
              <div className='title'>Real World Bridge</div>
              <div className='content'>Implement real world utility of blockchain technology, bridging the gap between web2 and web3.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-12 wf-section">
        <div className="container-12 w-container">
          <img src={RectangGlowImg} loading="lazy" alt="rectangle" className="image-2"/>
          <h1 className="heading-2">Built on 3 Core Principles</h1>
        </div>
        <div className="text-block-5">Our core principles are reflecting the philosophy behind KWE Network; we are providing a game-changing solution to disrupt the green energy market.</div>
        <div className='pillar-container'>
          <div className='pillar-card'>
            <img src={TransparencyImg} alt=""/>
            <div className='title'>Transparency</div>
            <div className='content'>Full traceability of all sources of inputs used in all stages and provides real-time access to information, improving communication and information flow between users.</div>
          </div>

          <div className='pillar-card'>
            <img src={DecentralizationImg} alt=""/>
            <div className='title'>Decentralization</div>
            <div className='content'>Allows users to deal with each other directly, removing a central power of authority as well as the absence of intermediaries that drives benefits such as efficiency and lower transaction costs.</div>
          </div>
          <div className='pillar-card'>
            <img src={SecurityImg} alt=""/>
            <div className='title'>Security</div>
            <div className='content'>Powerful encryption in blockchain networks to protect each transaction and exchange that takes place on our platform.</div>
          </div>
        </div>
      </div>
      <div className="section-12 wf-section">
        <div className="container-12 w-container">
          <img src={RectangGlowImg} loading="lazy" alt="rectangle" className="image-2"/>
          <h1 className="heading-2">Roadmap</h1>
        </div>
      </div>
      <div className="section-17 wf-section roadmap">
        <img src={RoadmapImgMobile} loading="lazy" alt="" className="image-40 mobile"/>
        <img src={RoadmapImgTab} loading="lazy" alt="" className="image-40 tab"/>
        <img src={RoadmapImgDesktop} loading="lazy" alt="" className="image-40 desktop"/>
      </div>
      <div className="section-9 wf-section">
        <div className="w-container"><img src={RectangGlowImg} loading="lazy" alt="" className="image-21"/></div>
        <h1 className="heading-3">Meet The Team</h1>
      </div>

      <div className="section-15 wf-section ">
        <div className='team-container'>
          <div className='team-card'>
            <img src={AncaImg} alt="Anca M."/>
            <div className='title'>Mary Faulkner</div>
            <div className='description'>Fiancials & Compliance</div>
          </div>
          <div className='team-card'>
            <img src={AdrianImg} alt="Adrian F."/>
            <div className='title'>Adrian Florea</div>
            <div className='description'>General Manager</div>
          </div>
          <div className='team-card'>
            <img src={CamiImg} alt="Camigui L."/>
            <div className='title'>Camigui Leia</div>
            <div className='description'>Social Media</div>
          </div>
          <div className='team-card'>
            <img src={OliImg} alt="Olimpiu C."/>
            <div className='title'>Olimpiu Celea</div>
            <div className='description'>CTO</div>
          </div>
        </div>

        <div className='team-container'>
          <div className='team-card'>
            <img src={EronimImg} alt="Eronim C."/>
            <div className='title'>Eronim Cosmin</div>
            <div className='description'>CEO & Co-Founder </div>            
          </div>
          <div className='team-card'>
            <img src={BrendaImg} alt="Brenda Y."/>
            <div className='title'>Brenda Yu</div>
            <div className='description'>China Markets</div>            
          </div>
          <div className='team-card'>
            <img src={AlexImg} alt="Ethan C."/>
            <div className='title'>Ergen Cavender</div>
            <div className='description'> Co-Founder</div>            
          </div>
          <div className='team-card'>
            <img src={LopezImg} alt="Lopez M."/>
            <div className='title'>Lopez Miguel</div>
            <div className='description'>Grid Eng.</div>            
          </div>
          
        </div>
        

        
      </div>
      <div className="section-14 wf-section">
        <div className="div-block-6">
            <img src={RectangGlowImg} loading="lazy" alt="" className="image-21"/>
            <h1 className="heading-19">Partners</h1>
            <div className="partners">
              <img src={Port3Img} loading="lazy" id="" alt=""/>
              <img src={WrthImg} loading="lazy" id="w-node-_8cdaead8-6806-eaa6-0e7f-adf391103dcc-b508944f" alt=""/>
              <img src={NordicImg} loading="lazy" id="w-node-_8d34484b-5af1-0196-3545-2efacb059d52-b508944f" alt=""/>
              <img src={CodonoImg} loading="lazy" id="w-node-_65d39dd0-7a4b-de21-c29e-2a231b55d495-b508944f" alt=""/>
              <img src={x10Img} loading="lazy" id="w-node-_0e11f50c-4447-db37-8817-c599062737e9-b508944f" alt=""/>
              <img src={PlanvImg} loading="lazy" id="w-node-_0776ad76-4161-a92d-5968-9059a2dd937c-b508944f" alt="" className=""/>
            </div>
        </div>
      </div>
      <div className="section-18 wf-section">
        <img src={RectangGlowImg} loading="lazy" alt="" className="image-21"/>
        <h1 className="heading-19">Join the Community</h1>
        <div className="text-block-30">Become a part of the KWE community and contribute towards a greener, cleaner, better future for all.</div>
        <div className="w-layout-grid grid-6">
          <a href="https://www.facebook.com/KryptoWealthPlatform" target="_blank" className="w-inline-block" rel="noreferrer">
            <img src={FacebookImg} loading="lazy" alt=""/>
          </a>
          <a href="https://twitter.com/kryptostokz" target="_blank" className="w-inline-block" rel="noreferrer">
            <img src={TwitterImg} loading="lazy" alt=""/>
          </a>
          <a href="https://www.youtube.com/channel/UCcZg-y8Rq0gyiBcNw-kzBEQ" target="_blank" className="w-inline-block" rel="noreferrer">
            <img src={YoutubeImg} loading="lazy" alt=""/>
          </a>
          <a href="https://www.instagram.com/krypto_wealthy/" target="_blank" className="w-inline-block" rel="noreferrer">
            <img src={InstagramImg} loading="lazy" alt=""/>
          </a>
          <a href="https://t.me/+561qZ6x2mqg1NGYx" target="_blank" className="w-inline-block" rel="noreferrer">
            <img src={TelegramImg} loading="lazy" alt=""/>
          </a>
        </div>
      </div>
      
    </>
  
  )
}
export default Home;
