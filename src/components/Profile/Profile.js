import axios from 'axios';
import React,{useState,useEffect} from 'react';
import user from '../../images/user.jpg';
import './Profile.css';

const Profile = async () => {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [github,setGithub]=useState();
    const [techstack,setTechstack]=useState();
    const [tags,setTags]=useState();
    const [project,setProject]=useState();
    const [description,setDescription]=useState();

    useEffect(() => {
        async function getData() {
            if(localStorage.getItem("authToken")!==null && localStorage.getItem("authToken")!=="") {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/fetchprofile/${localStorage.getItem("authToken")}`);
                setUsername(res.data.username);
                setEmail(res.data.email);
                setGithub(res.data.github);
                setTechstack(res.data.techstack);
                setProject(res.data.project);
                setDescription(res.data.description);
            }
        }

        getData();
    });

    return (
        <div className="profile">
            <div className="details">
                <h2>Profile Page</h2> <br />
                <img src={user} alt="user" className="user-image" />
                <div className="details-container">
                    <div className="detail">Name</div>
                    <div className="detail">:</div>
                    <div className="detail">{username}</div>
                    <div className="detail">Email ID</div>
                    <div className="detail">:</div>
                    <div className="detail">{email}</div>
                    <div className="detail">Github</div>
                    <div className="detail">:</div>
                    <div className="detail">{github}</div>
                    <div className="detail">Tech Stack</div>
                    <div className="detail">:</div>
                    <div className="detail">{techstack}</div>
                    <div className="detail">Preferred Technologies</div>
                    <div className="detail">:</div>
                    <div className="detail">{tags}</div>
                    <div className="detail">Project URL</div>
                    <div className="detail">:</div>
                    <div className="detail">{project}</div>
                    <div className="detail">Project Description</div>
                    <div className="detail">:</div>
                    <div className="detail">{description}</div>
                </div>

            </div>
        </div>
    )
}

export default Profile;
