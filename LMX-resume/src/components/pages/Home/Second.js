import React,{ Component , Fragment}from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slider-light';
import '../../../../node_modules/react-slider-light/lib/index.css';
import {
    HeaderWrapper,
    Nav,
    NavItem,
    Main,
    SubNav,
    News,
    Apse,
    SideBar,
    Hot,
    Software,
    Technology,
    Experience,
    Section,
    Rotate,
    Frames,
    Steam,
    Column,
    Portrait,
    Desks,
} from "../style/second.js";

import moment from 'moment';
import { Layout,Icon,Collapse ,Carousel,Input, Upload, message, Button,AutoComplete,Modal,Divider ,Comment, Tooltip, Avatar } from "antd";
const dataSource = ['春花', '夏花', '秋花','胖丫'];
const { confirm } = Modal;
const { Option } = AutoComplete;
const {Content } = Layout;
const { Panel } = Collapse;
const { TextArea } = Input;
const props = {
    name: 'file',
    action: '#',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class Second extends Component{
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleSearch = value => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
    };
    state = {
        visible: false,
        result: [],
        collapsed: false,
        likes: 0,
        dislikes: 0,
        action: null,
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render(){
        function showDeleteConfirm() {
            confirm({
                title: '确定要删除这条信息吗?',
                content: '我也不知道要删除什么···',
                okText: '是的',
                okType: 'danger',
                cancelText: '不了',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }

        const { result, likes, dislikes, action } = this.state;
        const actions = [
            <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
            <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
            <span key="comment-basic-reply-to">Reply to</span>,
        ];
        const children = result.map(email => <Option key={email}>{email}</Option>);
        return(
            <Fragment>
                <HeaderWrapper>
                    <Content>
                        <Nav>
                            <NavItem>
                                <a href="#M1">
                                    <li><Icon type="team" /></li>
                                </a>
                                <a href="#M2">
                                    <li><Icon type="menu" /></li>
                                </a>
                                <a href="#M3">
                                    <li><Icon type="barcode" /></li>
                                </a>
                                <a href="#M4">
                                    <li><Icon type="sound" /></li>
                                </a>
                                <a href="#M5">
                                    <li><Icon type="mail" /></li>
                                </a>
                                <a href="#M6">
                                    <li className={'sex'}>
                                        <Icon type="vertical-align-middle" /></li>
                                </a>
                                <a href="#M7">
                                    <li><Icon type="vertical-align-bottom" /></li>
                                </a>
                            </NavItem>
                            <Main className={'main'}>
                                <cite id={'M1'}>
                                    <h1>+李明轩个人简历</h1>
                                    <SubNav>
                                        <h2>李明轩</h2>
                                        <Hot>
                                            <li className={'iconfont'}>
                                                <i>&#xe650;</i>
                                                <label htmlFor="李明轩">姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <b>李明轩</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe6b5;</i>
                                                <label htmlFor="">求职岗位：</label>
                                                <b>Web前端工程师</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe63e;</i>
                                                <label htmlFor="">工作地点：</label>
                                                <b>杭州</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe62c;</i>
                                                <label htmlFor="">我的邮箱：</label>
                                                <b>aslan_lmx@outlook.com</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe631;</i>
                                                <label htmlFor="">手机号码：</label>
                                                <b>(+86)010-13601144417</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe6e7;</i>
                                                <label htmlFor="">个人网站：</label>
                                                <b><a href="http://aslan-mx.top/first/">http://aslan-mx.top/first/</a></b>
                                            </li>
                                        </Hot>
                                        <SideBar>
                                            <Slider delay={1800} speed={1200} autoPaly='true'>
                                                <div className={'T1'}></div>
                                                <div className={'T2'}></div>
                                                <div className={'T3'}></div>
                                                <div className={'T4'}></div>
                                                <div className={'T5'}></div>
                                                <div className={'T6'}></div>
                                                <div className={'T7'}></div>
                                                <div className={'T8'}></div>
                                            </Slider>
                                        </SideBar>
                                    </SubNav>
                                    <h1>+李明轩个人简历</h1>
                                    <News>
                                        <div className="case-content">
                                            <div className="case-item">
                                                <div className="ih-item circle effect1">
                                                    <a href="http://aslan-mx.top/first/">
                                                        <div className="spinner"></div>
                                                        <div className="img"></div>
                                                        <div className="info">
                                                            <div className="info-back">
                                                                <h3>主题壹号</h3>
                                                                <p>不知道要编写什么内容，</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="case-item">
                                                <div className="ih-item circle effect1">
                                                    <a href="http://aslan-mx.top/first/">
                                                        <div className="spinner"></div>
                                                        <div className="img"></div>
                                                        <div className="info">
                                                            <div className="info-back">
                                                                <h3>主题贰号</h3>
                                                                <p>还是好好学习吧</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="case-item">
                                                <div className="ih-item circle effect1">
                                                    <a href="http://aslan-mx.top/first/">
                                                        <div className="spinner"></div>
                                                        <div className="img"></div>
                                                        <div className="info">
                                                            <div className="info-back">
                                                                <h3>主题叁号</h3>
                                                                <p>争取走向人生巅峰</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </News>
                                    <Apse>
                                        <Collapse defaultActiveKey={['1']} style={{width:750,background:'#F8F8FF',opacity:0.8,}}>
                                            <Panel header="兴趣爱好" key="1">
                                                <p>
                                                    运动类：篮球、羽毛球、兵乓球、足球、滑板、滑旱冰、跑步、跳绳、举重……
                                                    <br/>
                                                    娱乐类：听音乐、看电影、绘画、写小说、看书……
                                                    <br/>
                                                    冒险类：做弹弓玩、做木剑玩、做橡皮枪玩……
                                                    <br/>
                                                    智力类：拼图、拆装（拆小汽车、闹钟、电风扇之类的）……
                                                    <br/>
                                                    收藏类：收藏扑克牌、小汽车、手表、鞋之类的……
                                                    <br/>
                                                    文艺类：折纸（可以尝试无限种折纸飞机的办法）、剪纸、品茶、涂鸦……
                                                </p>
                                            </Panel>
                                            <Panel header="旅行日志" key="2">
                                                <p>
                                                    西北大环线：西宁-门源青石嘴-张掖-酒泉-嘉峪关-瓜州-敦煌-阿克赛-青海雅丹-大柴旦-德令哈-茶卡盐湖-塔尔寺
                                                    <br/>
                                                    湖南：长沙 > 韶山 > 衡山 > 郴州 > 资兴 > 岳阳 > 常德 > 桃源 > 武陵源区 > 张家界 > 武陵源区 > 慈利 > 永顺 > 湘西 > 吉首
                                                    <br/>
                                                    ······
                                                </p>
                                            </Panel>
                                            <Panel header="人文美食" key="3" disabled>
                                                <p>
                                                    万物皆可盘
                                                    <br/>
                                                    万物皆在盘
                                                </p>
                                            </Panel>
                                        </Collapse>
                                    </Apse>
                                </cite>
                                <cite id={'M2'}>
                                    <h1>+李明轩个人工作经历及所会技能</h1>
                                    <Software>
                                        <Technology>
                                            <h1>技能展示</h1>
                                            <br/>
                                            <p>HTML</p>
                                            <div className="container">
                                                <div className="skills html">95%</div>
                                            </div>
                                            <br/>
                                            <p>CSS</p>
                                            <div className="container">
                                                <div className="skills css">85%</div>
                                            </div>
                                            <br/>
                                            <p>JavaScript</p>
                                            <div className="container">
                                                <div className="skills js">70%</div>
                                            </div>
                                            <br/>
                                            <p>JQuery</p>
                                            <div className="container">
                                                <div className="skills jquery">80%</div>
                                            </div>
                                            <br/>
                                            <p>SAI</p>
                                            <div className="container">
                                                <div className="skills sai">95%</div>
                                            </div>
                                            <br/>
                                            <p>Adobe Photoshop</p>
                                            <div className="container">
                                                <div className="skills photoshop">85%</div>
                                            </div>
                                            <br/>
                                            <p>Adobe After Effects</p>
                                            <div className="container">
                                                <div className="skills effects">65%</div>
                                            </div>
                                            <br/>
                                            <p> Adobe Illustrator</p>
                                            <div className="container">
                                                <div className="skills illustrator">45%</div>
                                            </div>
                                            <br/>
                                            <p> Adobe Premiere</p>
                                            <div className="container">
                                                <div className="skills premiere">65%</div>
                                            </div>
                                            <br/>
                                            <p>Auto CAD</p>
                                            <div className="container">
                                                <div className="skills cad">70%</div>
                                            </div>
                                            <br/>
                                            <h1>软件模块展示</h1>
                                            <br/>
                                            <div className="free">
                                                <div className="view">
                                                    <div className='NA'></div>
                                                    <div className="hover">
                                                        <h3>壹号</h3>
                                                        <p>HTML5</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NB'></div>
                                                    <div className="hover">
                                                        <h3>贰号</h3>
                                                        <p>CSS</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NC'></div>
                                                    <div className="hover">
                                                        <h3>叁号</h3>
                                                        <p>JavaScript</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='ND'></div>
                                                    <div className="hover">
                                                        <h3>肆号</h3>
                                                        <p>JQuery</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NE'></div>
                                                    <div className="hover">
                                                        <h3>伍号</h3>
                                                        <p>SAI</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NF'></div>
                                                    <div className="hover">
                                                        <h3>陆号</h3>
                                                        <p>Adobe After Effects</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NG'></div>
                                                    <div className="hover">
                                                        <h3>柒号</h3>
                                                        <p> Adobe Illustrator</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NH'></div>
                                                    <div className="hover">
                                                        <h3>捌号</h3>
                                                        <p>Adobe Photoshop</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NI'></div>
                                                    <div className="hover">
                                                        <h3>玖号</h3>
                                                        <p> Adobe Premiere</p>
                                                    </div>
                                                </div>
                                                <div className="view">
                                                    <div className='NJ'></div>
                                                    <div className="hover">
                                                        <h3>玖号</h3>
                                                        <p>Auto CAD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Technology>
                                        <Experience>
                                            <div>
                                                <Divider orientation="right">工作经历</Divider>
                                                <Divider><Icon type="copy" theme="filled" style={{ fontSize: '26px', color:'#f5f5f5'}}/><b>重庆清禧环保科技有限公司</b></Divider>
                                                <p>
                                                    与UI协作，根据设计图，运用HTML+CSS编写静态页面
                                                    <br/>
                                                    运用JS，Jquery实现动态页面效果
                                                    <br/>
                                                    与后端联合，实现后端接口功能，获取动态数据
                                                    <br/>
                                                    对代码进行优化，并处理浏览器兼容问题等
                                                </p>
                                                <span>项目介绍</span>
                                                <h1>绿色科技商城平台(移动端)</h1>
                                                <p>个人职责：负责项目首页和详情页的编写策划，与UI设计师产品经理等协作完成最优质的web项目；与后台工程师协作，完成各种数据交互，动态展示信息。</p>
                                                <span>应用技术</span>
                                                <p>VUE</p>
                                                <div className="container">
                                                    <div className="skills vue">85%</div>
                                                </div>
                                                <p>VUE-Router</p>
                                                <div className="container">
                                                    <div className="skills vue-router">80%</div>
                                                </div>
                                                <p>VUEX</p>
                                                <div className="container">
                                                    <div className="skills vuex">87%</div>
                                                </div>
                                                <p>Mint UI</p>
                                                <div className="container">
                                                    <div className="skills ui">94%</div>
                                                </div>
                                                <h1>清禧环保（PC端）</h1>
                                                <p>个人职责：负责页面的布局及效果的实现；负责数据交互并与后台接口，共同更新数据，修改 bug，后期维护。</p>
                                                <span>应用技术</span>
                                                <p>React</p>
                                                <div className="container">
                                                    <div className="skills react">92%</div>
                                                </div>
                                                <p>React-Router</p>
                                                <div className="container">
                                                    <div className="skills react-router">70%</div>
                                                </div>
                                                <p>Redux</p>
                                                <div className="container">
                                                    <div className="skills redux">80%</div>
                                                </div>
                                                <p>Styled-Components</p>
                                                <div className="container">
                                                    <div className="skills styled">97%</div>
                                                </div>
                                                <p>JavaScript</p>
                                                <div className="container">
                                                    <div className="skills js">70%</div>
                                                </div>
                                                <p>JQuery</p>
                                                <div className="container">
                                                    <div className="skills jquery">75%</div>
                                                </div>
                                                <Divider><Icon type="copy" theme="filled" style={{ fontSize: '22px'}}/><b>北京寺库商贸有限公司</b></Divider>
                                                <p>
                                                    负责产品的前端设计、开发
                                                    <br/>
                                                    为前端技术改进、网站性能优化、技术选型提供解决方案
                                                    <br/>
                                                    参与寺库网 PC 端、Web App，和商品管理系统的开发
                                                    <br/>
                                                    Web 前沿技术研究和新技术调研
                                                    <br/>
                                                    配合开发人员与 UI 设计师，对功能型页面程序提供与整合
                                                </p>
                                                <span>项目介绍</span>
                                                <h1>寺库网 (PC端)</h1>
                                                <p>个人职责：在该项目中负责负责首页和详情页的开发，配合后端完成各种数据交互，动态展示信息等</p>
                                                <span>应用技术</span>
                                                <p>React</p>
                                                <div className="container">
                                                    <div className="skills react">90%</div>
                                                </div>
                                                <p>React-Router</p>
                                                <div className="container">
                                                    <div className="skills react-router">40%</div>
                                                </div>
                                                <p>Redux</p>
                                                <div className="container">
                                                    <div className="skills redux">40%</div>
                                                </div>
                                                <p>Styled-Components</p>
                                                <div className="container">
                                                    <div className="skills styled">40%</div>
                                                </div>
                                                <p>React-Transition-Group</p>
                                                <div className="container">
                                                    <div className="skills group">40%</div>
                                                </div>
                                                <h1>寺库网 (App)</h1>
                                                <p>个人职责：该项目中负责更新布局、迭代开发。</p>
                                                <span>应用技术</span>
                                                <p>VUE</p>
                                                <div className="container">
                                                    <div className="skills vue">90%</div>
                                                </div>
                                                <p>VUE-Router</p>
                                                <div className="container">
                                                    <div className="skills vue-router">40%</div>
                                                </div>
                                                <p>VUEX</p>
                                                <div className="container">
                                                    <div className="skills vuex">40%</div>
                                                </div>
                                                <p>Flex</p>
                                                <div className="container">
                                                    <div className="skills flex">40%</div>
                                                </div>
                                                <h1>寺库商品管理系统</h1>
                                                <p>个人职责：该项目中负责小部分用户对用户进行集中管理、及相关模块的部分开发。</p>
                                                <span>应用技术</span>
                                                <p>React</p>
                                                <div className="container">
                                                    <div className="skills react">92%</div>
                                                </div>
                                                <p>React-Router</p>
                                                <div className="container">
                                                    <div className="skills react-router">70%</div>
                                                </div>
                                                <p>Redux</p>
                                                <div className="container">
                                                    <div className="skills redux">80%</div>
                                                </div>
                                                <p>Styled-Components</p>
                                                <div className="container">
                                                    <div className="skills styled">97%</div>
                                                </div>
                                                <p>React-Transition-Group</p>
                                                <div className="container">
                                                    <div className="skills group">55%</div>
                                                </div>
                                                <p>Ant Design</p>
                                                <div className="container">
                                                    <div className="skills design">65%</div>
                                                </div>
                                            </div>
                                        </Experience>
                                    </Software>
                                </cite>
                                <cite id={'M3'}>
                                    <h1>设计作品展示</h1>
                                    <h1>+Adobe After Effects设计作品</h1>
                                    <Section>
                                        <ul>
                                            <li className='F1'></li>
                                            <li className='F2'></li>
                                            <li className='F3'></li>
                                            <li className='F4'></li>
                                            <li className='F5'></li>
                                            <li className='F6'></li>
                                            <br/>
                                            <h1>+Adobe Photoshop 设计作品</h1>
                                            <li className='P1'></li>
                                            <li className='P2'></li>
                                            <li className='P3'></li>
                                            <li className='P4'></li>
                                            <li className='P5'></li>
                                            <li className='P6'></li>
                                            <br/>
                                            <h1>+SAI 设计作品</h1>
                                            <li className='K1'></li>
                                            <li className='K2'></li>
                                            <li className='K3'></li>
                                            <li className='K4'></li>
                                            <li className='K5'></li>
                                            <li></li>
                                            <br/>
                                            <h1>+个人涂鸦作品</h1>
                                            <li className='T1'></li>
                                            <li className='T2'></li>
                                            <li className='T3'></li>
                                            <li className='T4'></li>
                                            <li className='T5'></li>
                                            <li className='T6'></li>
                                            <br/>
                                            <h1>+Auto CAD</h1>
                                            <li className='C1'></li>
                                            <li className='C2'></li>
                                            <li className='C3'></li>
                                        </ul>
                                    </Section>


                                </cite>
                                <cite id={'M4'}>
                                    <Rotate>
                                        <Carousel autoplay>
                                            <div className='V1'>
                                                .
                                            </div>
                                            <div className='V2'>
                                                .
                                            </div>
                                            <div className='V3'>
                                                .
                                            </div>
                                            <div className='V4'>
                                                .
                                            </div>
                                        </Carousel>
                                        <Comment
                                            actions={actions}
                                            author={<a href="http://aslan-mx.top/first/"><b style={{color:'#fff',fontSize:14}}>牧云如风</b></a>}
                                            avatar={
                                                <Avatar
                                                    src="http://b-ssl.duitang.com/uploads/item/201707/08/20170708140921_rXd3M.thumb.700_0.jpeg"
                                                    alt="牧云如风"
                                                />
                                            }
                                            content={
                                                <p style={{fontSize:16,color:'#fff'}}>
                                                    喜欢就是你看到一朵花的时候，你就直接把她带走，但爱不一样，爱是当你看到一朵花的时候你会为它遮太阳，你会每天为它浇水，你会保护它。
                                                </p>
                                            }
                                            datetime={
                                                <Tooltip title={moment().format('2019-08-17 HH:mm:ss')}>
                                                    <span>{moment().fromNow()}</span>
                                                </Tooltip>
                                            }
                                        />
                                        <Comment
                                            actions={actions}
                                            author={<a href="http://aslan-mx.top/first/"><b style={{color:'#fff',fontSize:14}}>上官金燕</b></a>}
                                            avatar={
                                                <Avatar
                                                    src="http://image.yy.com/yywebalbumbs2bucket/3e8354d7308d48049a0c3d4ca1877e19_1452435620340.jpg"
                                                    alt="上官金燕"
                                                />
                                            }
                                            content={
                                                <p style={{fontSize:16,color:'#fff'}}>
                                                    所谓岁月静好，好不过能有个人，知你冷暖，懂你悲欢，懂你的人，才配得上你的余生，愿我们彼此默契，走尽千帆，仍能携手相伴。
                                                </p>
                                            }
                                            datetime={
                                                <Tooltip title={moment().format('2019-08-17 HH:mm:ss')}>
                                                    <span>{moment().fromNow()}</span>
                                                </Tooltip>
                                            }
                                        />
                                        <Comment
                                            actions={actions}
                                            author={<a href="http://aslan-mx.top/first/"><b style={{color:'#fff',fontSize:14}}>爱新觉罗·风铃</b></a>}
                                            avatar={
                                                <Avatar
                                                    src="http://www.agri35.com/UploadFiles/img_2_366240747_2663871089_26.jpg"
                                                    alt="爱新觉罗·风铃"
                                                />
                                            }
                                            content={
                                                <p style={{fontSize:16,color:'#fff'}}>
                                                    感情里，总会有分分合合；生命里，总会有来来去去。学会浅浅喜欢，静静爱，深深思索，淡淡释怀。
                                                </p>
                                            }
                                            datetime={
                                                <Tooltip title={moment().format('2019-08-17 HH:mm:ss')}>
                                                    <span>{moment().fromNow()}</span>
                                                </Tooltip>
                                            }
                                        />
                                        <Comment
                                            actions={actions}
                                            author={<a href="http://aslan-mx.top/first/"><b style={{color:'#fff',fontSize:14}}>欧阳少恭</b></a>}
                                            avatar={
                                                <Avatar
                                                    src="http://ku.90sjimg.com/element_origin_min_pic/17/04/01/93d0e42a8ffd4e39314a0164864e8f6c.jpg"
                                                    alt="欧阳少恭"
                                                />
                                            }
                                            content={
                                                <p style={{fontSize:16,color:'#fff'}}>
                                                    微笑和沉默是两个有效的武器，微笑能解决很多问题，沉默能避免许多问题。不被贪婪所诱惑的人最没有负担，因为没有人与他结怨，他也没有心机和别人计较，这种日子最轻松，这样的人生最快乐。
                                                </p>
                                            }
                                            datetime={
                                                <Tooltip title={moment().format('2019-08-17 HH:mm:ss')}>
                                                    <span>{moment().fromNow()}</span>
                                                </Tooltip>
                                            }
                                        />
                                    </Rotate>
                                </cite>
                                <cite id={'M5'}>
                                    <h1>+记得联系我</h1>
                                    <Frames>
                                        <div className='Frames-List'>
                                        </div>
                                        <div className='Frames-Item'>
                                            <li className={'iconfont'}>
                                                <i>&#xe650;</i>
                                                <label htmlFor="李明轩">姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <b>李明轩</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe6b5;</i>
                                                <label htmlFor="">求职岗位：</label>
                                                <b>Web前端工程师</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe63e;</i>
                                                <label htmlFor="">工作地点：</label>
                                                <b>杭州</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe62c;</i>
                                                <label htmlFor="">我的邮箱：</label>
                                                <b>aslan_lmx@outlook.com</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe631;</i>
                                                <label htmlFor="">手机号码：</label>
                                                <b>(+86)010-13601144417</b>
                                            </li>
                                            <li className={'iconfont'}>
                                                <i>&#xe6e7;</i>
                                                <label htmlFor="">个人网站：</label>
                                                <b><a href="http://aslan-mx.top/first/">http://aslan-mx.top/first/</a></b>
                                            </li>
                                            <i>
                                                <h2>我的社交</h2>
                                                <a href="https://www.facebook.com/profile.php?id=100039100906539">
                                                    <Icon type="facebook" style={{ fontSize: '35px', marginLeft:2, color: '' }}/>
                                                </a>
                                                <a href="https://twitter.com/Passerby_LMX">
                                                    <Icon type="twitter" style={{ fontSize: '35px',marginLeft:5, color: '' }}/>
                                                </a>
                                                <a href="https://mashable.com/category/instagram/">
                                                    <Icon type="linkedin" style={{ fontSize: '35px',marginLeft:5, color: '' }} />
                                                </a>
                                                <a href="https://account.microsoft.com/?ref=MeControl">
                                                    <Icon type="windows" style={{ fontSize: '35px', marginLeft:5,color: '' }} />
                                                </a>
                                                <a href="https://weibo.com/WAN9510210827/home?wvr=5&lf=reg">
                                                    <Icon type="weibo" style={{ fontSize: '35px',marginLeft:5, color: '' }}/>
                                                </a>
                                                <a href="https://wx.qq.com">
                                                    <Icon type="wechat" style={{ fontSize: '35px', marginLeft:5,color: '' }}/>
                                                </a>
                                            </i>
                                            <Upload {...props}>
                                                <Button style={{ width:300,marginTop:40,}}>
                                                    <Icon type="upload" /> 上传你的资料
                                                </Button>
                                            </Upload>
                                        </div>
                                        <div className='Frames-Icof'>
                                            <h2>请输入你的名字</h2>
                                            <AutoComplete
                                                style={{ width: 350 }}
                                                dataSource={dataSource}
                                                placeholder="请输入姓名"
                                                filterOption={(inputValue, option) =>
                                                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                                }
                                            />
                                            <h2>请输入你的邮箱</h2>
                                            <AutoComplete style={{ width: 350 }} onSearch={this.handleSearch} placeholder="请输入邮箱">
                                                {children}
                                            </AutoComplete>
                                            <h2>请输入你的信息</h2>
                                            <TextArea rows={6} />
                                            <div style={{float:'left'}}>
                                                <Button type="primary" onClick={this.showModal}>
                                                    提交
                                                </Button>
                                                <Modal
                                                    title="提交"
                                                    visible={this.state.visible}
                                                    onOk={this.handleOk}
                                                    onCancel={this.handleCancel}
                                                >
                                                    <p>还有待完善······</p>
                                                    <p>还有待完善······</p>
                                                    <p>还有待完善······</p>
                                                </Modal>
                                            </div>

                                            <Button style={{float:'left'}} onClick={showDeleteConfirm} type="删除">
                                                删除
                                            </Button>
                                        </div>
                                    </Frames>
                                </cite>
                                <cite id={'M6'}>
                                    <Desks>
                                        <br/>
                                        <h1>正在开发</h1>
                                        <br/>
                                    </Desks>
                                </cite>
                                <cite id={'M7'}>
                                    <h1>简历预览</h1>
                                    <Steam>
                                        <ul>
                                            <li className='MZ'></li>
                                            <li className='MX'></li>
                                            <li className='MN'></li>
                                        </ul>
                                    </Steam>
                                </cite>
                            </Main>
                            <Column>
                                <Portrait className='hour'></Portrait>
                                <h1>李明轩</h1>
                                <span><Icon type="environment" />所在地：浙江省 杭州市</span>
                                <p>热爱生活、喜欢旅游、喜欢画画、喜爱阅读、对未来充满无限期望···</p>
                                <i>
                                    <h2>我的社交</h2>
                                    <a href="https://www.facebook.com/profile.php?id=100039100906539">
                                        <Icon type="facebook" style={{ fontSize: '42px', marginLeft:2, color: '' }}/>
                                    </a>
                                    <a href="https://twitter.com/Passerby_LMX">
                                        <Icon type="twitter" style={{ fontSize: '42px',marginLeft:5, color: '' }}/>
                                    </a>
                                    <a href="https://mashable.com/category/instagram/">
                                        <Icon type="linkedin" style={{ fontSize: '42px',marginLeft:5, color: '' }} />
                                    </a>
                                    <a href="https://account.microsoft.com/?ref=MeControl">
                                        <Icon type="windows" style={{ fontSize: '42px', marginLeft:5,color: '' }} />
                                    </a>
                                    <a href="https://weibo.com/WAN9510210827/home?wvr=5&lf=reg">
                                        <Icon type="weibo" style={{ fontSize: '42px',marginLeft:5, color: '' }}/>
                                    </a>
                                    <a href="https://wx.qq.com">
                                        <Icon type="wechat" style={{ fontSize: '42px', marginLeft:5,color: '' }}/>
                                    </a>
                                </i>
                            </Column>
                        </Nav>
                    </Content>
                    <div id="background" className="wall"></div>
                    <div id="midground" className="wall"></div>
                    <div id="foreground" className="wall"></div>
                    <div id="top" className="wall"></div>
                </HeaderWrapper>
            </Fragment>
        )
    }


}
export default Second;