import axios from 'axios';
import React,{useState,useEffect} from 'react';
import user from '../../images/user.jpg';
import './Profile.css';

const Profile = async () => {
    // const [profile,setProfile] =  useState();
    let details;

        async function getData() {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/fetchprofile/${localStorage.getItem("authToken")}`);
                // console.log(res);
                details = res.data.data;
                // console.log(details);

            if(details._id)
            localStorage.setItem("login_id", details._id);
        }

        await getData();
        console.log(details.tags);

    return (
        <div className="profile">
            <div className="details" key={details._id}>
                <h2>Profile Page</h2> <br />
                <img src={user} alt="user" className="user-image" />
                <div className="details-container">
                    <div className="detail">Name</div>
                    <div className="detail">:</div>
                    <div className="detail">{details.username}</div>
                    <div className="detail">Description</div>
                    <div className="detail">:</div>
                    <div className="detail">{details.description}</div>
                    <div className="detail">Email ID</div>
                    <div className="detail">:</div>
                    <div className="detail">{details.email}</div>
                    <div className="detail">Github</div>
                    <div className="detail">:</div>
                    <div className="detail">details.{details.github}</div>
                    <div className="detail">Tech Stack</div>
                    <div className="detail">:</div>
                    <div className="detail">{details.techStack}</div>
                    <div className="detail">Preferred Technologies</div>
                    <div className="detail">:</div>
                    {
                        details.tags.forEach(tag => {
                            return <div className="detail">{tag}</div>
                        })
                    }
                    
                    <div className="detail">Project URL</div>
                    <div className="detail">:</div>
                    <div className="detail">{details.project}</div>
                </div>

            </div>
        </div>
    )
}

export default Profile;
