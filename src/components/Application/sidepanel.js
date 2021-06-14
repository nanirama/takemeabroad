import React, {useRef, useContext} from 'react'
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { FirebaseContext } from "../Firebase"
import { FaAdjust, FaSignOutAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { HiShare, HiOutlineMail } from "react-icons/hi";
import { FiStar, FiBell } from "react-icons/fi";
import { AiOutlineFile, AiFillExclamationCircle } from "react-icons/ai";

import userImg from '../../assets/images/profile-default.png'
import close24 from '../../assets/images/closeicon.png'


const SidePanel = ()=>{
	const { firebase, user } = useContext(FirebaseContext)
	console.log('Logged In user data ', user.photoURL);
    const panelside = useRef(null);

    const panelsidetoggle=()=>{
        panelside.current.classList.add('show-sidepanel')  
        document.body.classList.add('overlay');     
    }
    const panelsidehide=()=>{
        panelside.current.classList.remove('show-sidepanel')  
		document.body.classList.remove('overlay');          
    }
	let iconStyles = { color: "#b5b3b3", fontSize: "18px" };
	let closeiconStyles = { color: "#ffffff", fontSize: "24px" };
	
	function handleLogoutClick() {
		document.body.classList.remove('overlay');   
		firebase.logout().then(() => navigate("/"))
	}
    return(
        <div className="menu_bar">  
            <button class="sidepanel-toggle" onClick={panelsidetoggle}>
                    <span></span>
                    <span></span>
                    <span></span>
            </button>
            <aside className="sidepanel" ref={panelside}>
                <div className="container m-0 p-0">
                    <div className="row">
                        <div className="col-xm-12">
                        <div className="d-flex align-items-center flex-column">
                            <div className="text-center top_bg w-100">
								<span onClick={panelsidehide} className="close-btn"><Span img={close24}>&nbsp;</Span></span>
								{user.photoURL && <img src={user.photoURL} alt="" className="mb-2"/>}	
								{!user.photoURL && <img src={userImg} alt="" className="mb-4"/>}								
								{user.displayName && <h2 className="text-white">{user.displayName}</h2>}
								{user.email && <h2 className="text-white">{user.email}</h2>}
								<p className="text-white">Plan Expires in: 42days</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column py-3 px-4 links">
                            <h3 className="mb-1">General</h3>							
                            <ul>
                            <li><HiShare style={iconStyles}/><a href="#">Share</a></li>
                            <li><FiStar style={iconStyles} /><a href="#">Rate Us</a></li>
                            <li><HiOutlineMail style={iconStyles} /><a href="#">Notify Us</a></li>
                            <li><FiBell style={iconStyles} /><a href="#">Notifications</a></li>
                            </ul>
                            <h3 className="mb-1 mt-1">About</h3>
                            <ul>
                            <li><AiOutlineFile style={iconStyles} /><a href="#">Terms & Conditions</a></li>
                            <li><AiFillExclamationCircle style={iconStyles} /><a href="#">Privacy Policy</a></li>
                            </ul>
                            <hr />
                            <ul>
                            <li><FaAdjust style={iconStyles} /><a href="#">Dark Mode</a></li>
                            <li><FaSignOutAlt style={iconStyles} /><span onClick={handleLogoutClick}>Log Out</span></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </aside>
                 {/* <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>                 */}
            </div>
    )
}
const Span = styled.span`
  background-image: url(${props => props.img});
  height:18px;
`;
export default SidePanel