import React,{ Component , Fragment}from 'react';
import{ GlobalStyle } from './style/style.js';
import {IconfontStyle} from './statics/iconfont/iconfont';

import {BrowserRouter, Route } from 'react-router-dom';
import Set from './components/common/Set/Set.js';
import First from './components/pages/Home/First.js';
import Second from './components/pages/Home/Second.js';
import Third from './components/pages/Home/Third.js';

import Files from './components/pages/Home/components/Files';
import store from './store';
import{ Provider } from 'react-redux';
class App extends Component {
    render(){
        return(
            <Fragment>
                <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Set/>
                    <Route path={'/'} exact component={Files}/>
                    <Route path={'/First'} exact component={First}/>
                    <Route path={'/Second'} exact component={Second}/>
                    <Route path={'/Third'} exact component={Third}/>
                </BrowserRouter>
                    <IconfontStyle/>
                </Provider>
            </Fragment>
        )
    }
}

export default App;
