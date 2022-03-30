import React, {useEffect,useState} from 'react';
import randomColor from "randomcolor";
import firebase from '../firebase';
import Aos from 'aos';
import axios from 'axios';
import '../TestUser/TestUser.css';

const Requests = () => {
    const db = firebase.firestore();
    const login_id = localStorage.getItem("login_id");
    const userRef = db.collection(login_id);
    let [requests,setRequests] = useState([]);
    let [users,setUsers] = useState([]);

    const getFirebaseData = async () => {    
        userRef.doc('collection').get().then(snapshot => {
            snapshot.data().inreq.map(item => setRequests(req => [...req,item])
            )            
        }).catch(err => console.log(err))

    }

    const acceptUser = (id) => {
        const reqRef = db.collection(id).doc("collection");

        userRef.update({
            friend: firebase.firestore.FieldValue.arrayUnion(`${id}`)
        });

        reqRef.update({
            friend: firebase.firestore.FieldValue.arrayUnion(`${login_id}`)
        });

        userRef.update({
            inreq: firebase.firestore.FieldValue.arrayRemove(`${id}`)
        });
        
        reqRef.update({
            outreq: firebase.firestore.FieldValue.arrayRemove(`${login_id}`)
        });
    }

    const cancelUser = (id) => {
        const reqRef = db.collection(id).doc("collection");

        userRef.update({
            inreq: firebase.firestore.FieldValue.arrayRemove(`${id}`)
        });
        
        reqRef.update({
            outreq: firebase.firestore.FieldValue.arrayRemove(`${login_id}`)
        });
    }

    
    useEffect(() => {
        Aos.init({duration: 2000});
        
        const getData = async () => {
            try {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/userlist/${localStorage.getItem("authToken")}`);
                // console.log(res.data.data);
                const newData = [];
                console.log("requests",requests)
                res.data.data.filter(person => requests.includes(person._id)).forEach((user) => {
                    console.log("user",user)
                            newData.push({
                            id: user._id,
                            username: user.username,
                            description: user.description,
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
            <h2 className="project-head">Requests</h2>
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
                                <button className="con-link accept" onClick={() => acceptUser(user.id)}>Accept <i className="fas fa-check"/></button>
                                <button className="con-link cancel" onClick={() => cancelUser(user.id)}>Cancel <i className="fas fa-times"/></button>
            
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
                    <button className="con-link accept">Accept <i className="fas fa-check"/></button>
                    <button className="con-link cancel">Cancel <i class="fas fa-times"/></button>

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
                    <button className="con-link accept">Accept <i className="fas fa-check"/></button>
                    <button className="con-link cancel">Cancel <i class="fas fa-times"/></button>

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
                    <button className="con-link accept">Accept <i className="fas fa-check"/></button>
                    <button className="con-link cancel">Cancel <i class="fas fa-times"/></button>

                </div>
            </div> */}

        </div>
    )
}

export default Requests;
