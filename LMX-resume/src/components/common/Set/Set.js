import React,{ Component,Fragment }from 'react';
import {connect}from 'react-redux';
import {SetWrapper} from '../style/set.js';

import { Layout, Menu, Icon,Button } from 'antd';
import '../../../../node_modules/antd/dist/antd.css';

import { Link } from 'react-router-dom';

const { Header, Sider } = Layout;


class Set extends Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Fragment>
                <SetWrapper>
                <Layout style={{ background: '#fff',width:0}}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#e2e2e2',opacity: 0.9,
                            position: 'relative', zIndex:1,}} >
                            <Menu.Item key="0">
                                <Icon type="setting" style={{ color: '#0f1257'}} />
                                <span>主题设置</span>
                            </Menu.Item>
                            <p>风格切换</p>
                            <Menu.Item key="1" >
                                <Icon type="user" style={{ color: '#0f1257'}}/>
                                <span>
                                    <Link to="/First">
                                <Button>一</Button>
                            </Link>
                            <Link to="/Second">
                                <Button>二</Button>
                            </Link>
                            <Link to="/Third">
                                <Button>三</Button>
                            </Link>
                                </span>
                            </Menu.Item>
                            <p>有待开发</p>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>有待开发</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>有待开发</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="upload" />
                                <span>有待开发</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                        <Header style={{ background: '#fff',opacity: 0.8, padding:0,height:50,width:50,zIndex:4}}>
                            <Icon
                                className="trigger"
                                style={{ fontSize: '50px',width:'100'}}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                </Layout>

                    <div id="background" className="wall"></div>
                    <div id="midground" className="wall"></div>
                    <div id="foreground" className="wall"></div>
                    <div id="top" className="wall"></div>
                </SetWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps =(state) =>{
    return{
    }
}
const mapDispathToProps =(dispatch) =>{
    return{

    }
}
export default connect(mapStateToProps,mapDispathToProps)(Set);