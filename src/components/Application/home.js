import React, {useState} from 'react'
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';

import mainbannerImg from '../../assets/images/mainbanner.png'
import imgIcon1 from '../../assets/images/icon1.png'
import imgIcon2 from '../../assets/images/icon2.png'
import imgIcon3 from '../../assets/images/icon3.png'
import imgIcon4 from '../../assets/images/icon4.png'
import imgIcon5 from '../../assets/images/icon5.png'
import imgIcon6 from '../../assets/images/icon6.png'
import imgDocver from '../../assets/images/doc-ver.png'
import imgChatex from '../../assets/images/chat-experts.png'
import imgMirgation from '../../assets/images/mirgation.png'
import imgPublicview from '../../assets/images/public-view.png'
import imgEmployment from '../../assets/images/employment.png'


const Home = ()=>{
    const [openPanel, setOpenPanel] = useState(false);
    return(
    <div className="container">
         <div className="d-flex pt-3 px-2 py-3 align-items-baseline">
            <div className="menu_bar">
            <div>
                <button onClick={() => setOpenPanel(true)}>Open</button>
            </div>
            <SlidingPanel
                type={'left'}
                isOpen={openPanel}
                size={200}
            >
                <div>
                <div>My Panel Content</div>
                <button onClick={() => setOpenPanel(false)}>close</button>
                </div>
            </SlidingPanel>
                 <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>                
            </div>
            <h1 className="text-center w-100">Take Me Abroad</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-4"> <img src={mainbannerImg} alt="Banner 1" className="w-100"/> </div>
        <h2 className="mb-4">Top Categories</h2>
        <div className="d-flex justify-content-around text-center flex-wrap mb-2">
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon1}  alt="Banner 2" /></div>
            </div>
            <h4 className="pt-2">Climbing</h4>
            </div>
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon2} alt="Banner 3"/></div>
            </div>
            <h4 className="pt-2">Study</h4>
            </div>
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon3} alt="Banner 4" /></div>
            </div>
            <h4 className="pt-2">Visit visa</h4>
            </div>
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon4} alt="Banner 5" /></div>
            </div>
            <h4 className="pt-2">Updates</h4>
            </div>
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon5} alt="Icon 5" /></div>
            </div>
            <h4 className="pt-2">Recruiters</h4>
            </div>
            <div className="cate_box mx-auto mb-4">
            <div className="cate_item d-block ">
                <div className="item_icon d-flex justify-content-center align-items-center"><img src={imgIcon6} alt="Icon 6" /></div>
            </div>
            <h4 className="pt-2">Scam</h4>
            </div>
        </div>
        <h2 className="mb-4 pb-2">Need Assistance!</h2>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-6 mb-4"> <img src={imgDocver} alt="" className="w-100"/></div>
            <div className="col-sm-6 mb-4"> <img src={imgChatex} alt="" className="w-100"/> </div>
        </div>
        <div className="d-flex flex-wrap mb-5"> <img src={imgMirgation} alt="" className="w-100"/> </div>
        <h2 className="mb-5">Public Community</h2>
        <div className="d-flex text-center flex-wrap mb-5"> <img src={imgPublicview} alt="Public View" className="w-100"/> </div>
        <h2 className="mb-5">What Happening Now</h2>
        <div className="d-flex text-center flex-wrap mb-5"> <img src={imgEmployment} alt="Employment" className="w-100"/> </div>
    </div>
)
}

export default Home;