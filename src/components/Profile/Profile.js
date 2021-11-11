import React from 'react';
import user from '../../images/user.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="details">
                <h2>Profile Page</h2> <br />
                <img src={user} alt="user" className="user-image" />
                <div className="details-container">
                    <div className="detail">Name</div>
                    <div className="detail">:</div>
                    <div className="detail">Abhir Raj Shrivastava</div>
                    <div className="detail">Email ID</div>
                    <div className="detail">:</div>
                    <div className="detail">abhir.raj123@gmail.com</div>
                    <div className="detail">Github</div>
                    <div className="detail">:</div>
                    <div className="detail">https://github.com/Anon123</div>
                    <div className="detail">Tech Stack</div>
                    <div className="detail">:</div>
                    <div className="detail">Web Development</div>
                    <div className="detail">Preferred Technologies</div>
                    <div className="detail">:</div>
                    <div className="detail">Javascript, React</div>
                    <div className="detail">Project URL</div>
                    <div className="detail">:</div>
                    <div className="detail">https://github.com/minor</div>
                    <div className="detail">Project Description</div>
                    <div className="detail">:</div>
                    <div className="detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat amet sed dolores repudiandae commodi dicta tenetur, autem ducimus dolorem ipsam!</div>
                </div>

            </div>
        </div>
    )
}

export default Profile;
