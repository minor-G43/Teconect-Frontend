import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import user from '../../images/user.jpg';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import '../TestUser/TestUser.css';
import axios from 'axios';

const TestProfile = async () => {

    let details;
    let tags = [];

        async function getProfile() {
            try {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/fetchprofile/${localStorage.getItem("authToken")}`);
                // console.log(res.data.data);
                if(res.data.data._id)
                localStorage.setItem("login_id", res.data.data._id);
                // const userData = res.data.data;
                details = {
                    id: res.data.data._id,
                    username: res.data.data.username,
                    description: res.data.data.description,
                    email: res.data.data.email,
                    PhoneNo: res.data.data.PhoneNo,
                    techStack: res.data.data.techStack,
                    github: res.data.data.github,
                    project: res.data.data.project
                }

                res.data.data.tags.forEach(tag => {
                    tags.push(tag);
                })

                console.log(details);
            } catch(err) {
                console.log(err);
            }
        }

        await getProfile();


    return (
        <div className="testprofile">
            <h2 className="project-head">Profile</h2>
            {/* {
                    <div className="testuser-list" key={details.id}>
                        <img src={user} alt="user" className="user-image" /> <br /><br /><br />
                        <div className="project-details">
                        <div className="pro-desc"><span className="sub-head">Name:</span> {details.username}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Description:</span> {details.description}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Email:</span> {details.email}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Phone Number:</span> {details.PhoneNo}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> </div> {details.techstack}<br />
                            <div className="pro-desc"><span className="sub-head">Github:</span> <a href={details.github} target="_blank">{details.github}</a>   </div> <br />
                            <div className="pro-desc"><span className="sub-head">Project URL:</span> </div> {details.project}<br />
                            <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />

                            {
                                tags.map(tag => {
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
                        </div>
                    </div>
            } */}

                        <div className="testuser-list">
                        <img src={user} alt="user" className="user-image" /> <br /><br /><br />
                        <div className="project-details">
                        <div className="pro-desc"><span className="sub-head">Name:</span> Megha</div> <br />
                            <div className="pro-desc"><span className="sub-head">Description:</span> I am a web developer</div> <br />
                            <div className="pro-desc"><span className="sub-head">Email:</span> megha@gmail.com</div> <br />
                            <div className="pro-desc"><span className="sub-head">Phone Number:</span> 7915971571</div> <br />
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> </div> Web Development<br />
                            <div className="pro-desc"><span className="sub-head">Github:</span> <a href="https://github.com/megha" target="_blank">https://github.com/megha</a>   </div> <br />
                            <div className="pro-desc"><span className="sub-head">Project URL:</span> <a href="https://github.com/Darklord009/Expense-Tracker" target="_blank">https://github.com/Darklord009/Expense-Tracker</a> </div><br />
                            <div className="pro-desc"><span className="sub-head">Preferred Technologies:</span></div> <br />

                                        <span className="tag" style={{
                                            backgroundColor: randomColor(),
                                            padding: "6px",
                                            fontWeight: 'bold',
                                            borderRadius: "5px"
                                        }}>
                                            nodejs</span><span className="tag-space"></span>

                                            <span className="tag" style={{
                                            backgroundColor: randomColor(),
                                            padding: "6px",
                                            fontWeight: 'bold',
                                            borderRadius: "5px"
                                        }}>
                                            react js</span><span className="tag-space"></span>
                    
                            <br /><br />
                        </div>
                    </div>


         

            

        </div>
    )
}

export default TestProfile;
