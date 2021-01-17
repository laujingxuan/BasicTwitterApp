import React, {useState} from 'react';
import {data} from '../data/userData';
import Modal from '../component/Modal';
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    const sendUser = (user) =>{
        props.userCallback(user);
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(data);
    const history = useHistory();
    const [modal, setModal] = useState({
        isModalOpen: false,
        modalContent: ""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username && password){
            let user = users.find(user => user.username === username);
            if (typeof user !== "undefined"){
                if (user.password === password){
                    setUsername("");
                    setPassword("");
                    sendUser(username);
                    history.push('/home');
                    //Need to use Router to navigate to the other page
                }
            }else{
                //Implement wrong username/password
                setModal({...modal, isModalOpen: true, modalContent: "Username/Password is incorrect" })
            }
        }
        else{
            //Implement need to fill all fields.
            setModal({...modal, isModalOpen: true, modalContent: "Please fill in both Username and Password" })
        }
    }

    const closeModal = () => {
        setModal({...modal, isModalOpen: false});
    }

    return (
    <>
        <div className="title center text-center"><h3 className="text-center">Basic Twitter App</h3></div>
        <form className = 'form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
        </form>
        <div>{modal.isModalOpen && (
            <Modal closeModal = {closeModal} modalContent = {modal.modalContent} />
        )}</div>
    </>);
};

export default Login;