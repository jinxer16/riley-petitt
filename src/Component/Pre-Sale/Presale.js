import React from 'react'
import nftspic1 from "../../Assets/00000 2.png"
import "./Presale.css"
function Presale() {
  return (
    <div className=' container-fluid' style={{ paddingTop: "50px" }}>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='homepageh2'>Pre-Sale</h2>
        </div>
      </div>

      <div className='row d-flex justify-content-center  '>
        <div className='col-lg-12 presaleImage ' >
          <div className='row d-flex justify-content-around align-items-center flex-lg-row pt-5 pb-4'>

            <div className='col-lg-7 text-start '>
              <div className='row'>
                <div className='col-lg-12 text-start '>
                  <h3 className='FullSpend'>Pre-Sale Mint</h3>
                  <p className='FullSpend-p'>Full Spend Yacht Club will allow the early purchase of 2500 NFTs at a reduced cost of $299. The goal of the presale is to raise funds to launch of our genesis batch of miners that will fund the final developments of the project. By doing so, we maximize our purchasing power for miners that produce rewards for holders without having to sacrifice any developments. The presale mining phase will last 3-6 months and will withhold 50% of the mining power for developments. After this phase, 100% of the mining power will be distributed to holders. In return for withholding 50% of mining power for the development of the project, we are offering numerous benefits on top of the $100 discount. Please read below for more details</p>
                </div>
                {/* <div className='col-lg-12 text-start '>
                                    <h4 className='FullSpendh4'>Mint with KDA, ETH, or Credit Card</h4>
                                    <p className='FullSpend-p'>To fulfill our mission of mining for all, we are accepting a variety of payment methods including KDA, ETH, kwUSDC, and Credit Cards. For assistance minting, please join our Discord and we will support you.</p>
                                </div> */}
              </div>

              <div className=''>
                <div>
                  <button className='btn-presaleMint'>Click here to Mint</button>
                </div>
              </div>
            </div>
            <div className='col-4 ' id="screen-Dispaly" style={{ position: 'relative' }}>
              <img src={nftspic1} className=" image-design-presale " />
            </div>
            <div className='col-lg-4' id='media-display'>
              <img src={nftspic1} className="img-fluid imge-fixed" />
            </div>
          </div>

        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-lg-12'>
          <h2 className='homepageh2'>Pre-Sale Benefits</h2>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 presale-Box '>
          <div className='row d-flex justify-content-center justify-content-around  pb-3'>
            <div className='col-lg-3 col-11 presale-Box text-start pt-3 mt-3'>
              <h5 className='presale-h5'>FREE FSYC MINT</h5>
              <p className='presale-span '>Each pre-Sale purchase will be equivalent to purchasing a FSYC mint. At the time of mint these will be redeemable for 1 FSYC NFT.</p>
            </div>
            <div className='col-lg-3 col-11 presale-Box text-start pt-3 mt-3'>
              <h5 className='presale-h5'>HIGHER APY</h5>
              <p className='presale-span '>Pre-sale NFT's will cost $100 less and will generate the same amount of KDA, however due to them costing less you will generate higher APY and see a faster return.</p>
            </div>
            <div className='col-lg-3 col-11 presale-Box text-start pt-3 mt-3'>
              <h5 className='presale-h5'>EARLY DAO VOTING</h5>
              <p className='presale-span '>Purchasers of the presale will get 1:1 voting in our early DAO and will help decide the early direction we take. This will shape the project for the future</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Presale