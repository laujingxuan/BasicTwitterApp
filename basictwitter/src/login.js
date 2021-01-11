import React, {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
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
    </>);
};

export default Login;