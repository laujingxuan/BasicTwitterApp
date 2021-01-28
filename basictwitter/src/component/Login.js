import React, {useState} from 'react';
import Modal from '../component/Modal';
import { useHistory } from 'react-router-dom';
// import auth from './Auth'
import UserDataService from "../Services/UserService";

const Login = (props) => {
    ////user will be saved in session, hence dont need callback
    // const sendUser = (user) =>{
    //     props.userCallback(user);
    // }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [modal, setModal] = useState({
        isModalOpen: false,
        modalContent: ""
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username && password){
            let user = {username: username, password: password};
            UserDataService.authentication(user).then((response) => {
                if (response.data === true){
                    setUsername("");
                    setPassword("");
                    ////user will be saved in session   
                    // sendUser(username);                    
                    sessionStorage.setItem('name', username)
                    console.log("Login"+sessionStorage.getItem("name"));
                    //another way is to pass history.push function into auth.login(), can refer to how logout is done
                    // auth.login();
                    //Navigate to the other page
                    history.push('/home');  
                }else{
                    //Implement wrong username/password
                    setModal({...modal, isModalOpen: true, modalContent: "Username/Password is incorrect" })
                }
            }).catch(e => {
            console.log(e);
            });    
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