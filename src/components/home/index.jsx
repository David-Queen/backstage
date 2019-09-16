import React, {Component} from 'react';
import './index.less';

import withCheckLogin from '@conts/with-check-login';

@withCheckLogin

class Home extends Component {
    render() {
        return <div className='home'>
            欢迎使用硅谷后台管理系统!
        </div>;
    }
}

export default Home;