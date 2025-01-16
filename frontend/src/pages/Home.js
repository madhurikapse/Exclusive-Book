

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
function Home(){
    const {state}=useContext(AuthContext);

    return(
        
        <div id="home">
            
            <h1>Welcome to Event mangement- {state?.user?.name}</h1>
           
            
        </div>
    )
}

export default Home;
