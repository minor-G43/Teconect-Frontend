import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import './Projects.css';
import axios from 'axios';

const Projects = () => {

    const [projects,setProjects]=useState ([]);

    useEffect(() => {
        Aos.init({duration: 2000});
        
        const getProjects = async () => {
            try {
                const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/fetchproject/${localStorage.getItem("authToken")}`);
                console.log(res);
                let newProject = [];
                res.data.data.forEach((user) => {
                    newProject.push({
                    id: user._id,
                    title: user.title,
                    description: user.description,
                    url: user.url,
                    tags: user.tags
                })
                // console.log(newData);
            });
                setProjects(newProject);
    
            } catch(err) {
                console.log(err);
            }
        }
    
        getProjects();
    },[]);
    
    

    return (
        <div className="projects">
            <h2 className="project-head">Trending Projects</h2>

            {
                projects.map(user => {
                    return (
                    <div data-aos="fade-up" className="project-list" key={user._id}>
                        <h3>{user.title}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc">{user.description}</div> <br />

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
                            <a href={user.url} className="pro-link" target="_blank">View Project</a>

                        </div>
                    </div>

                    )
                })
            }


            {/* <div data-aos="fade-up" className="project-list">
                <h3>DevChat</h3> <br />
                <div className="project-details">
                    <div className="pro-desc">A chatting web app made with React and Firebase</div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        React js</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Node js</span> <br /><br />
                    <Link to='#' className="pro-link">View Project</Link>

                </div>
            </div>

            <div data-aos="fade-up" className="project-list">
                <h3>We Conference</h3> <br />
                <div className="project-details">
                    <div className="pro-desc">A video conferencing app</div> <br />
                    <span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        MERN Stack</span><span className="tag-space"></span><span className="tag" style={{
                        backgroundColor: randomColor(),
                        padding: "6px",
                        fontWeight: 'bold',
                        borderRadius: "5px"
                    }}>
                        Firebase</span> <br /><br />
                    <Link to='#' className="pro-link">View Project</Link>

                </div>
            </div> */}

            

            {/* <div data-aos="fade-up" className="project-list">
                <h3>Project Name</h3>
                <div className="project-details">
                    <div className="pro-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci.</div>
                    <span className="tag">Javascript</span> <br /><br />
                    <Link to='#' className="pro-link">View Project</Link>

                </div>
            </div> */}
        </div>
    )
}

export default Projects;
