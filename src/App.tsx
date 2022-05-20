import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Loading from './Components/Loading/Loading';
import { my_context } from './Context';

import { BrowserRouter } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


function App() {

  const user_object: any = useContext(my_context);

  const [page, change_page] = useState("Loading");

  useEffect(() => {

    // user has not logged in
    if (user_object === undefined){
      change_page("Login");
    }

    // no access token
    else if (('access_token' in user_object) === false) {
      change_page("Login");
    }

    // user valid, display home page
    else {
      change_page("Home");
    }

  }, [user_object])

  return (
    <BrowserRouter>
      {(page === "Login") && <Login />}
      {(page === "Home") && <Home />}
      {(page === "Loading") && <Loading />}
    </BrowserRouter>
  );
}

export default App;
