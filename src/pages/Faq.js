import './../styles/faq.scss';
import PlusCircle from './../images/li_plus-circle.png';

export const Faq = () => {
  return(
    <>
      <div className="wf-section">
        <div className="w-container">
          <h1 className="heading-9">Frequently Asked Questions</h1>
          <div className="text-block-8">Have some questions? We&#x27;re here to help. Please visit the extended FAQ under Ecosystem/Documentation tab</div>
        </div>
      </div>
      <div className="wf-section"></div>
      <div className="wf-section">
        <div className="w-container">
          <div className="html-embed w-embed w-script">
            <div className="accordion">
              <div className="accordion_item">
                <div className="accordion_title">
                  <h5>What Is Gravity Storage?</h5>
                  <div className="pluscircle"><img src={PlusCircle}/></div>
                </div>
                <div className="accordion_desc">
                  <p>Gravity storage is a form of energy storage that uses the force of gravity to store potential energy. This is done by storing objects at high elevations, where the potential energy created by the stored objects’ weight is converted into kinetic energy when released. This type of storage is used to generate electricity when needed, such as during peak demand periods or at night when other forms of energy, such as solar is not available.</p>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title">
                  <h5>What is green energy?</h5>
                  <div className="pluscircle"><img src={PlusCircle}/></div>
                </div>
                <div className="accordion_desc">
                  <p>Green energy is energy that is derived from renewable and sustainable sources such as the sun, wind, water, and the earth’s natural heat. It is considered a clean, renewable, and non-polluting form of energy. Green energy is also commonly referred to as clean energy, renewable energy, and sustainable energy.</p>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title">
                  <h5>What is the current model of the electricity market?</h5>
                  <div className="pluscircle"><img src={PlusCircle}/></div>
                </div>
                <div className="accordion_desc">
                  <p>The electricity market is an organized system in which electricity is traded as a commodity and where buyers and sellers of electricity can transact in a competitive environment. The electricity market is composed of multiple stakeholders, including electricity generators, transmission systems, distribution systems, and consumers. The electricity market is regulated by government bodies and utilities, and is governed by market rules and regulations. Electricity prices are determined by the interaction of supply and demand, and are affected by weather, economic conditions, and other factors. Please not that except the physical infrastructure that produces electricity, all the other players are an artifice that simulates competition.</p>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title">
                  <h5>What is a crypto token?</h5>
                  <div className="pluscircle"><img src={PlusCircle}/></div>
                </div>
                <div className="accordion_desc">
                  <p>A crypto token is a digital asset that is built on top of an existing blockchain and is used as a unit of account within a certain virtual economy. Crypto tokens typically represent a fungible and tradeable asset or a utility that is often found on a blockchain. They are commonly used to raise capital in an Initial Coin Offering (ICO) and may also be used to power decentralized applications (DApps).</p>
                </div>
              </div>
              <div className="accordion_item">
                <div className="accordion_title">
                  <h5>What is crypto staking?</h5>
                  <div className="pluscircle"><img src={PlusCircle}/></div>
                </div>
                <div className="accordion_desc">
                  <p>Crypto staking is a process where investors can put their cryptocurrencies into a pool to help process transactions on a blockchain network. Staking involves holding a certain amount of coins in a wallet and voting on the validity of transactions. In return for staking their coins, the investors are rewarded with newly minted coins or transaction fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
