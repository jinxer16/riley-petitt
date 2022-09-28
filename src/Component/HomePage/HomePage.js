import React from 'react'
import "./HomePage.css";
import otter from "../../Assets/otter no BKG2 1.png"
function HomePage() {
  return (
    <div className=' container-fluid' style={{paddingTop: "50px"}}>
        <div className='row'>
            <div className='col-lg-12'>
                <h2 className='homepageh2'>About The Project</h2>
            </div>
            </div>
            <div className='row d-flex justify-content-center  '>
                <div className='col-lg-12 homepageImage ' >
                    <div className='row d-flex justify-content-around align-items-center'>
                        <div className='col-lg-4'>
                            <img src={otter} className="img-fluid"/>
                        </div>
                       
                        <div className='col-lg-7 text-start '>
                            <h3 className='FullSpend'>Full Spend Yacht Club</h3>
                            <p className='FullSpend-p'>Full Spend Yacht Club is a Kadena mining NFT that focuses on maximizing profitability per dollar spent. We do this by putting 90% of our mint funds directly into mining and utilizing the latest immersion cooling technology to allow us to maximize the profit from each miner. Full Spend Yacht Club is a collection of 9,999 unique NFTs that are generated randomly from over 100 unique traits. By staking your NFT, you can rent real ASIC miners that mine rewards directly into your wallet. Help control the future of the project by utilizing our DAO voting platform and vote on the future actions of the project!</p>

                            <div className='border-Homepage d-flex justify-content-between align-items-center'>
                                <div  className='mt-3'>
                                    <h5 className='border-Homepage-h5'>NFTs</h5>
                                    <span className='border-Homepage-span'>
                                    $51,0062
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <h5 className='border-Homepage-h5'>Owners</h5>
                                    <span className='border-Homepage-span'>
                                    51,0062 KDA
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <button className='btn-set'>Mint</button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                   
                </div>
            </div>
        
    </div>
  )
}

export default HomePage