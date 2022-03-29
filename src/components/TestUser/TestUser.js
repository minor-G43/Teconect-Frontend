import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import './TestUser.css';
import axios from 'axios';

// async add krdena
const TestUser = () => {

    let [users,setUsers] = useState([]);
    const db = firebase.firestore();
    const login_id = localStorage.getItem("login_id"); 
    const userRef = db.collection(`${login_id}`).doc("collection");

    useEffect(() => {
        Aos.init({duration: 2000})

        const getData = async () => {
            try {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/userlist/${localStorage.getItem("authToken")}`);
                // console.log(res.data.data);
                let newData = [];
                // const userData = res.data.data;
                res.data.data.forEach((user) => {
                    newData.push({
                    id: user._id,
                    username: user.username,
                    description: user.description,
                    email: user.email,
                    github: user.github,
                    techStack: user.techStack,
                    tags: user.tags
                })
                // console.log(newData);
            });
    
                setUsers(newData);
            } catch(err) {
                console.log(err);
            }
        }
    
        getData();
    },[])
    
    


    const connectUser = async (id) => {
        const reqRef = db.collection(id).doc("collection");
        
        userRef.update({
            outreq: firebase.firestore.FieldValue.arrayUnion(`${id}`)
        });

        reqRef.update({
            inreq: firebase.firestore.FieldValue.arrayUnion(`${login_id}`)
        });

    }


    return (
        <div className="testuser">
            
            {
                users.filter(fil => fil.id !== login_id).map(user => {
                    return (
                    <div data-aos="fade-up" className="testuser-list" key={user.id}>
                        <h3>{user.username}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc"><span className="sub-head">Description:</span> {user.description}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Email:</span> {user.email}</div> <br />
                            <div className="pro-desc"><span className="sub-head">Github:</span> <a href={user.github} target="_blank">{user.github}</a>   </div> <br />
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> </div> {user.techStack} <br /><br />
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
                            <button className="con-link" onClick={async () => await connectUser(user.id)}>Connect <i className="far fa-user"/>+</button>

                        </div>
                    </div>

                    )
                })
            }



            {/* <div data-aos="fade-up" className="testuser-list">
                <h3>Abhir</h3> <br />
                <div className="project-details">
                <div className="pro-desc"><span className="sub-head">Description:</span>I am a full stack developer and ML enthusiast. </div> <br />
                    <div className="pro-desc"><span className="sub-head">Email:</span>abhir@gmail.com </div> <br />
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
                    <button className="con-link">Connect <i className="far fa-user"/>+</button>

                </div>
            </div>

            <div data-aos="fade-up" className="testuser-list">
                <h3>Somya</h3> <br />
                <div className="project-details">
                    <div className="pro-desc"><span className="sub-head">Description:</span>I am a full stack web developer and freelancer </div> <br />
                    <div className="pro-desc"><span className="sub-head">Email:</span>somya@gmail.com </div> <br />
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
                    <Link to='#' onClick className="con-link">Connect <i className="far fa-user"/>+</Link>

                </div>
            </div> */}

            

            

        </div>
    )
}

export default TestUser;
