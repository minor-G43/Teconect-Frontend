import React, {useEffect,useState} from 'react';
import randomColor from "randomcolor";
import Aos from 'aos';
import firebase from '../firebase';
import axios from 'axios';
import '../TestUser/TestUser.css';

const Friends = () => {
    const db = firebase.firestore();
    const login_id = localStorage.getItem("login_id");
    const userRef = db.collection(login_id);
    let [friends,setFriends] = useState([]);
    let [users,setUsers] = useState([]);

    const getFirebaseData = async () => {
    
        userRef.doc('collection').get().then(snapshot => {
            snapshot.data().friend.map(item => setFriends(req => [...req,item])
            )
            
        }).catch(err => console.log(err))

    }

    const removeUser = (id) => {
        const reqRef = db.collection(id).doc("collection");

        userRef.update({
            friend: firebase.firestore.FieldValue.arrayRemove(`${id}`)
        });
        
        reqRef.update({
            friend: firebase.firestore.FieldValue.arrayRemove(`${login_id}`)
        });
    }

    
    useEffect(() => {
        Aos.init({duration: 2000});
        
        const getData = async () => {
            try {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/userlist/${localStorage.getItem("authToken")}`);
                // console.log(res.data.data);
                const newData = [];
                console.log("friends",friends)
                res.data.data.filter(person => friends.includes(person._id)).forEach((user) => {
                    console.log("user",user)
                            newData.push({
                            id: user._id,
                            username: user.username,
                            description: user.description,
                            PhoneNo: user.PhoneNo,
                            email: user.email,
                            github: user.github,
                            techStack: user.techStack,
                            tags: user.tags
                        })     
            });
    
            console.log("newdata",newData);
                setUsers(newData);
            } catch(err) {
                console.log(err);
            }
        }
        
        getFirebaseData().then(() => getData());

    },[])


    return (
        <div className="requests">
            <h2 className="project-head">Friends</h2>
            {
                users.map(user => {
                    return (
                        <div data-aos="fade-up" className="testuser-list" key={user.id}>
                        <h3>{user.username}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc"><span className="sub-head">Tech Stack:</span> {user.techStack}</div> <br />
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

                            <button 
                            className="con-link accept" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`https://wa.me/${user.PhoneNo}`;
                                }}>
                            Chat <i className="fab fa-whatsapp"/></button>

                            <button className="con-link cancel" onClick={() => removeUser(user.id)}>Remove <i className="fas fa-times"/></button>
        
                        </div>
                    </div>

                    )
                })
            }

            {/* <div data-aos="fade-up" className="testuser-list">
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
                    Chat <i className="fab fa-whatsapp"/></button>

                    <button className="con-link cancel">Remove <i className="fas fa-times"/></button>

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
            </div> */}

        </div>
    )
}

export default Friends;
