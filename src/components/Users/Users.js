import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import user from '../../images/user.jpg';
import './Users.css';

const Users = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);


    return (
        <div className="users">
            <div className="users-list">
                <div data-aos="fade-up" className="user">
                <img src={user} alt="user" className="users-img" />
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
                    
                </div>           
                </div>



                <div data-aos="fade-up" className="user">
                <img src={user} alt="user" className="users-img" />
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
                    
                </div>           
                </div>


                <div data-aos="fade-up" className="user">
                <img src={user} alt="user" className="users-img" />
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
                    
                </div>           
                </div>
            </div>
        </div>
    )
}

export default Users;
