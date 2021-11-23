import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import './TestUser.css';
import axios from 'axios';

const TestUser = () => {

    const [users,setUser]=([]);
    
    const getUser = async () => {
        const res = await axios.post('https://tconectapi.herokuapp.com/api/auth/fetchprofile');
        setUser(res);
    }

    useEffect(() => {
        getUser();
        Aos.init({duration: 2000});
    });

    return (
        <div className="testuser">
            
            {/* {
                users.map(user => {
                    return (
                    <div data-aos="fade-up" className="testuser-list">
                        <h3>{user.username}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc"><span className="sub-head">Email:</span> {user.email}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Github:</span> <a href={user.github} target="_blank">{user.github}</a>   </div> <br />
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> </div> {user.techstack}<br />
                            <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />

                            {
                                user.tags.map(tag => {
                                    return (
                                        <>
                                        <span className="tag" style={{
                                            backgroundColor: randomColor(),
                                            padding: "6px",
                                            fontWeight: 'bold',
                                            borderRadius: "5px"
                                        }}>
                                            {tag}</span><span className="tag-space"></span>
                                        </>
                                    )
                                })
                            }
                            <br /><br />
                            <Link to='#' className="con-link">Connect <i className="far fa-user"/>+</Link>

                        </div>
                    </div>

                    )
                })
            } */}



            <div data-aos="fade-up" className="testuser-list">
                <h3>Name</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Email:</span>abc@gmail.com </div> <br />
                    <div className="pro-desc"><span className="sub-head">Github:</span> <a href="https://github.com/Anon123" target="_blank">https://github.com/Anon123</a>   </div> <br />
                    <div className="pro-desc"><span className="sub-head">Tech Stack:</span> Web Development</div> <br />
                    <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Javascript</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Javascript</span> <br /><br />
                    <Link to='#' className="con-link">Connect <i className="far fa-user"/>+</Link>

                </div>
            </div>

            <div data-aos="fade-up" className="testuser-list">
                <h3>Name</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Email:</span>abc@gmail.com </div> <br />
                    <div className="pro-desc"><span className="sub-head">Github:</span> <a href="https://github.com/Anon123" target="_blank">https://github.com/Anon123</a>   </div> <br />
                    <div className="pro-desc"><span className="sub-head">Tech Stack:</span> Web Development</div> <br />
                    <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Javascript</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Javascript</span> <br /><br />
                    <Link to='#' className="con-link">Connect <i className="far fa-user"/>+</Link>

                </div>
            </div>

            

            

        </div>
    )
}

export default TestUser;
