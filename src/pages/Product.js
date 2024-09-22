import NetworkImg from './../images/network.svg';
import './../styles/product.scss';
export const Product = () => {
  return(
    <>
      <div className="section-6 wf-section">
        <img src={NetworkImg} loading="lazy" alt="" className="image-22"/>
        <h1 className="heading-12">Providing a <span className="text-span">game changing,</span> <span className="text-span-2">blockchain based solution</span> <br/>for harnessing the ultimate <span className="text-span-3">Green energy production</span> and storage technology.</h1>
        <div className="text-block-10">Our unique concept combining the use of solar energy, wind energy, gravity energy storage, together with blockchain integration will disrupt the Green Energy Production market. We are providing direct participation in the energy production and retail process via blockchain-based smart contracts using our KWE token and network. Our ultimate goal is to protect the environment and accelerate the decarbonization of the global economy.</div>
      </div>
      <div className="section-3 wf-section">
        <h1 className="heading-7">KWE Network Green Energy Production and KWE token staking explained</h1>
        <div className='iframe-container'>
          <iframe className='iframe' src="https://www.youtube.com/embed/2xiKMApxxtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; ?rel=0" allowfullscreen></iframe>      </div>

        </div>
    </>
  );
}
export default Product;
