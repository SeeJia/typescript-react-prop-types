import {useState} from "react";
import { login, logout} from "../store";
import {useDispatch} from "react-redux";

export const Login = () =>{
    const [newUsername, setNewUsername] = useState("");
    
    const dispatch = useDispatch();
    
    return(
    <h1>This is the login page.

    <input onChange={(e) =>{setNewUsername(e.target.value)}} />

    <button onClick={() => dispatch(login({username: newUsername}))}>Submit Login</button>
    <button>Logout</button>

    </h1>
    

    );

} 