import { useContext, useEffect } from "react";
import http from "utils/http";
import { Layout, PrivateRoute } from "components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "pages/Home";
import Jobs from "pages/Jobs";
import AppliedJobs from "pages/AppliedJobs";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import { AuthContext } from 'context'

function App() {

  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/api/jobs/available-jobs');
      console.log(data)
    })()
  },[])
 
  return (
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/find-jobs" component={Jobs} />
              <Route path="/applied-jobs" component={AppliedJobs} />
              <PrivateRoute path="/auth/register" condition={!isAuthenticated()} redirectTo="/">
                <Register />
              </PrivateRoute>
              <Route path="/auth/login" component={Login} />
            </Switch>
        </Layout>
      </Router>
  );
}

export default App;
   