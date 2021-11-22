import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import userPic from '../../images/user.jpg';
import './Users.css';
import axios from 'axios';

const Users = () => {

    const [users,setUsers] = useState([]);
    
    const getUsers = async () => {
        const res = await axios.post('https://tconectapi.herokuapp.com/api/auth/fetchprofile');
        setUsers(res);
    }

    useEffect(() => {
        getUsers();
        Aos.init({duration: 2000});
    },[]);

    return (
        <div className="users">
            <div className="users-list">

                {/* {
                    users.map(user => {
                        return (
                            <div data-aos="fade-up" className="user" id={user._id}>
                            <img src={userPic} alt="user" className="users-img" />
                            <div className="users-container">
                                <div className="user-detail">Name</div>
                                <div className="user-detail">:</div>
                                <div className="user-detail">{user.username}</div>
                                <div className="user-detail">Email ID</div>
                                <div className="user-detail">:</div>
                                <div className="user-detail">{user.email}</div>
                                <div className="user-detail">Github</div>
                                <div className="user-detail">:</div>
                                <div className="user-detail">{user.github}</div>
                                <div className="user-detail">Tech Stack</div>
                                <div className="user-detail">:</div>
                                <div className="user-detail">{user.techstack}</div>
                                <div className="user-detail">Preferred Technologies</div>
                                <div className="user-detail">:</div>
                                <div className="user-detail">{user.tags}</div>
                                <div className="user-detail"></div>
                                <div className="user-detail"><button className="connect">Connect</button></div>
                                <div className="user-detail"></div>
                                
                            </div>           
                            </div>

                        )
                    })
                } */}



                <div data-aos="fade-up" className="user">
                <img src={userPic} alt="user" className="users-img" />
                <div className="users-container">
                    <div className="user-detail">Name</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">Abhir Raj Shrivastava</div>
                    <div className="user-detail">Email ID</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">abhir.raj123@gmail.com</div>
                    <div className="user-detail">Github</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">https://github.com/Anon123</div>
                    <div className="user-detail">Tech Stack</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">Web Development</div>
                    <div className="user-detail">Preferred Technologies</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail"><span className="tag" style={{
                                        backgroundColor: randomColor(),
                                        padding: "6px",
                                        fontWeight: 'bold',
                                        borderRadius: "5px"
                                    }}>
                                        Javascript</span><span className="tag-space"></span>
                                        
                                        <span className="tag" style={{
                                        backgroundColor: randomColor(),
                                        padding: "6px",
                                        fontWeight: 'bold',
                                        borderRadius: "5px"
                                    }}>
                                        React</span><span className="tag-space"></span>

                                        <span className="tag" style={{
                                        backgroundColor: randomColor(),
                                        padding: "6px",
                                        fontWeight: 'bold',
                                        borderRadius: "5px"
                                    }}>
                                        Javascript</span><span className="tag-space"></span>
                                        </div>
                    <div className="user-detail"></div>
                    <div className="user-detail"><button className="connect">Connect</button></div>
                    <div className="user-detail"></div>
                    
                    
                </div>           
                </div>


                <div data-aos="fade-up" className="user">
                <img src={userPic} alt="user" className="users-img" />
                <div className="users-container">
                    <div className="user-detail">Name</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">Abhir Raj Shrivastava</div>
                    <div className="user-detail">Email ID</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">abhir.raj123@gmail.com</div>
                    <div className="user-detail">Github</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">https://github.com/Anon123</div>
                    <div className="user-detail">Tech Stack</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">Web Development</div>
                    <div className="user-detail">Preferred Technologies</div>
                    <div className="user-detail">:</div>
                    <div className="user-detail">Javascript, React</div>
                    <div className="user-detail"></div>
                    <div className="user-detail"><button className="connect">Connect</button></div>
                    <div className="user-detail"></div>
                    
                </div>           
                </div>
            </div>
        </div>
    )
}

export default Users;
