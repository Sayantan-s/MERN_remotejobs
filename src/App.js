import { useEffect } from "react";
import http from "utils/http";
import { Layout } from "components";
import Styles from "styles/Styles";
import { themeDark, themeLight } from "styles/theme";
import { useToggle } from "hooks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "pages/Home";
import Jobs from "pages/Jobs";
import AppliedJobs from "pages/AppliedJobs";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";

function App() {

  const [ toggle, handleToggle ] = useToggle();

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/api/jobs/available-jobs');
      console.log(data)
    })()
  },[])

  console.log(process.env)

  return (
    <Styles theme={toggle ? themeDark : themeLight}>
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/find-jobs" component={Jobs} />
              <Route path="/applied-jobs" component={AppliedJobs} />
              <Route path="/auth/register" component={Register} />
              <Route path="/auth/login" component={Login} />
            </Switch>
        </Layout>
      </Router>
    </Styles>
  );
}

export default App;
   