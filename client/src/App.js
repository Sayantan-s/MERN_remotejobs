import { useContext } from 'react';
import { Layout, Toasts } from 'components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Jobs from 'pages/Jobs';
import AppliedJobs from 'pages/AppliedJobs';
import Register from 'pages/auth/Register';
import Login from 'pages/auth/Login';
import { NavHeightContext, AlertContext } from 'context';
import Qna from 'pages/Qna';
import ForgotPassword from 'pages/auth/ForgotPassword';
import Job from 'pages/dynamic/Job';
import Company from 'pages/dynamic/Company';
import CompanyAuthContext from 'context/CompanyAuthContext';
import CompanyDashboard from 'pages/company/CompanyDashboard';

function App() {
    const { toasts } = useContext(AlertContext);

    return (
        <Router>
            <NavHeightContext>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/jobs" component={Jobs} />
                        <Route path="/home" component={CompanyDashboard} />
                        <Route path="/:company/:job/test" component={Qna} />
                        <Route path="/auth/register" component={Register} />
                        <Route path="/auth/login" component={Login} />
                        <CompanyAuthContext>
                            <Route path="/auth/companies" component={AppliedJobs} />
                        </CompanyAuthContext>
                        <Route path="/auth/forgotpassword" component={ForgotPassword} />
                        <Route path="/jobs/:id" component={Job} />
                        <Route path="/company/:company" component={Company} />
                    </Switch>
                </Layout>
                {toasts.length > 0 && <Toasts toasts={toasts} />}
            </NavHeightContext>
        </Router>
    );
}

export default App;

/*useEffect(() => {
        (async () => {
            const res = await http.get('/csrf');
            const { csrfToken } = res.data;
            http.defaults.headers['X-CSRF-token'] = csrfToken;
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await http.get('/utils/refresh');
            } catch (err) {
                dispatchToast({
                    variant: 'danger',
                    text: err.response.data.message,
                    hasIcon: true
                });
            }
        })();
    }, []);*/
