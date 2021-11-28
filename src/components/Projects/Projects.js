import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import randomColor from "randomcolor";
import './Projects.css';
import axios from 'axios';

const Projects = async () => {

    const [projects,setProjects]=useState ([]);
    
    const getProjects = async () => {
        const res = await axios.post(`https://tconectapi.herokuapp.com/api/auth/fetchproject/${localStorage.getItem("authToken")}`);
        // console.log(res);
        setProjects(res);
    }

    await getProjects();
    useEffect(() => {
        Aos.init({duration: 2000});
    });

    return (
        <div className="projects">
            <h2 className="project-head">Trending Projects</h2>

            {
                projects.map(user => {
                    return (
                    <div data-aos="fade-up" className="project-list" id={user._id}>
                        <h3>{user.title}</h3> <br />
                        <div className="project-details">
                            <div className="pro-desc">{user.description}</div> <br />

                            {
                                user.tags.map(tag => {
                                    return (
                                    <div>
                                    <span className="tag" style={{
                                        backgroundColor: randomColor(),
                                        padding: "6px",
                                        fontWeight: 'bold',
                                        borderRadius: "5px"
                                    }}>
                                        {tag}</span><span className="tag-space"></span>
                                    </div>
                                    )
                                })
                            }
                            <br /><br />
                            <Link to={user.url} className="pro-link">View Project</Link>

                        </div>
                    </div>

                    )
                })
            }


            {/* <div data-aos="fade-up" className="project-list">
                <h3>Project Name</h3> <br />
                <div className="project-details">
                    <div className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam!</div> <br />
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
                    <Link to='#' className="pro-link">View Project</Link>

                </div>
            </div>

            <div data-aos="fade-up" className="project-list">
                <h3>Project Name</h3> <br />
                <div className="project-details">
                    <div className="pro-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veniam!</div> <br />
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
