import React, {useEffect,useState} from 'react';
import randomColor from "randomcolor";
import Aos from 'aos';

import '../TestUser/TestUser.css';

const Requests = () => {
    const [requests,setRequests] = ('');

    useEffect(() => {
        Aos.init({duration: 2000});
    });


    return (
        <div className="requests">
            <h2 className="project-head">Requests</h2>
            {/* {
                users.map(user => {
                    return (
                    <div data-aos="fade-up" className="testuser-list" id={user._id}>
                        <h3>{user.username}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc"><span className="sub-head">Email:</span> {user.email}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Github:</span> <a href={user.github} target="_blank">{user.github}</a>   </div> <br />
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> </div> {user.techstack}<br />
                            <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                            <button className="con-link" onClick={async () => await connectUser(user._id)}>Connect <i className="far fa-user"/>+</button>

                        </div>
                    </div>

                    )
                })
            } */}

            <div data-aos="fade-up" className="testuser-list">
                <h3>Raunak</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Tech Stack:</span> Android Development</div> <br />
                    <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Java</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Retrofit</span> <br /><br />
                        <button 
                        className="con-link accept" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://wa.me/8287526476';
                        }}>
                    Chat Via Whatsapp <i className="fab fa-whatsapp"/></button>

                </div>
            </div>

            <div data-aos="fade-up" className="testuser-list">
                <h3>Mohit</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Tech Stack:</span> Game Development</div> <br />
                    <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Go</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Ruby</span> <br /><br />
                    <button 
                    className="con-link accept" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://wa.me/7838838817';
                        }}>
                    Chat Via Whatsapp <i className="fab fa-whatsapp"/></button>

                </div>
            </div>

            <div data-aos="fade-up" className="testuser-list">
                <h3>Manas Dalakoti</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Tech Stack:</span> Machine Learning</div> <br />
                    <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        python</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        jupyter notebook</span> <br /><br />
                    <button 
                    className="con-link accept" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://wa.me/7900738893';
                        }}>
                    Chat Via Whatsapp <i className="fab fa-whatsapp"/></button>

                </div>
            </div>

        </div>
    )
}

export default Requests;
