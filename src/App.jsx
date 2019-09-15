import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

import Login from '@conts/login';
import NotMatch from '@comps/not-match';
import BasicLayout from '@comps/basic-layout';
import routes from './config/routes';

class App extends Component {
    render() {
        // Suspense用于懒加载
        return <Suspense fallback={<Spin size="large"/>}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <BasicLayout>
                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route {...route} key={index}/>;
                                })
                            }
                            <Route component={NotMatch}/>
                        </Switch>
                    </BasicLayout>
                </Switch>
            </Router>;
        </Suspense>
    }
}

export default App;