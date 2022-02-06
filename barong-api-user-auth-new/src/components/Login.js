
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  //  const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    // const navigate = useNavigate();
    // const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            // history.push("/add")
            // navigate('/product');
        }
    }, [navigate]);
   async function login(){
        console.warn(email,password)
        let item = {email,password}
        let result = await fetch("https://cp.btfd.cc/api/v2/barong/identity/users",

        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json()
        console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        // navigate('/product');

 
    }

    return (

        <div className="col-sm-6 offset-sm-3">

            <h3> Login Page</h3>

            <br />

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />

            <button onClick={login} className="btn btn-primary">Login</button>
        </div>

    )
};

export default Login;


