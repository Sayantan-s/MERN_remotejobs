import { useContext, useEffect } from "react";
import http from "utils/http";
import { PrivateRoute, Layout, Toasts } from "components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "pages/Home";
import Jobs from "pages/Jobs";
import AppliedJobs from "pages/AppliedJobs";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import { AuthContext, NavHeightContext, AlertContext } from 'context'
import Qna from "pages/Qna";
import ForgotPassword from "pages/auth/ForgotPassword";
import Job from "pages/dynamic/Job";
import Company from "pages/dynamic/Company";


function App() {

  const { isAuthenticated } = useContext(AuthContext)

  const { toasts, dispatchToast } = useContext(AlertContext)

  useEffect(() => {
    (async() => {
      try{
        const res = await http.get('/utils/refresh');
      }
      catch(err){
        dispatchToast({
          variant : 'danger',
          text : err.response.data.message,
          hasIcon : true
      })
      } 
    })()
  },[])

  /*useEffect(() => {
    (async() => {
      const res = await http.get('/csrf');
      const { csrfToken } = res.data;
      http.defaults.headers['X-CSRF-token'] = csrfToken;
    })()
  },[])*/

  /*useEffect(() => {
    
  },[])*/


 
  return (
      <Router>
         <NavHeightContext>
            <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/jobs" component={Jobs} />
                  <Route path="/companies" component={AppliedJobs} />
                  <Route path="/qna" component={Qna} />
                  <PrivateRoute path="/auth/register" condition={!isAuthenticated()} redirectTo="/">
                    <Register />
                  </PrivateRoute>
                  <Route path="/auth/login" component={Login} />
                  <Route path="/auth/forgotpassword" component={ForgotPassword} />
                  <Route path="/jobs/:id" component={Job} />
                  <Route path="/company/:company" component={Company} />
                </Switch>
            </Layout>
            <Toasts toasts={toasts} />
          </NavHeightContext>
      </Router>
  );
}

export default App;
   

  /*useEffect(() => {
    document.addEventListener('click', () => {
      document.documentElement.requestFullscreen().catch( e => console.log(e));
    })

    return _ => document.removeEventListener('click', () => {
      document.documentElement.requestFullscreen().catch( e => console.log(e));
    })
  },[]) */