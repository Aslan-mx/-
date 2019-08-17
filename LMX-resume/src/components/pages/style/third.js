import styled from 'styled-components';
import AI from '../../../statics/image/AI.jpg';


import AZ from '../../../statics/image/AI-1.jpg';

import TA from '../../../statics/image/1.jpg';
import TB from '../../../statics/image/2.jpg';
import TC from '../../../statics/image/3.jpg';
import TCA from '../../../statics/image/4.jpg';
import TCB from '../../../statics/image/5.jpg';
import TCC from '../../../statics/image/6.jpg';
import TCD from '../../../statics/image/7.jpg';
import TCE from '../../../statics/image/8.jpg';
import TCF from '../../../statics/image/9.jpg';

import TD from '../../../statics/image/01.gif';
import TE from '../../../statics/image/02.gif';
import TF from '../../../statics/image/03.gif';
import TG from '../../../statics/image/04.gif';

import THA from '../../../statics/image/PS-1.jpg';
import THB from '../../../statics/image/PS-2.jpg';
import THC from '../../../statics/image/PS-3.jpg';
import THD from '../../../statics/image/PS-4.jpg';
import THE from '../../../statics/image/PS-5.jpg';
import THF from '../../../statics/image/PS-6.jpg';
import THG from '../../../statics/image/PS-7.jpg';
import THH from '../../../statics/image/PS-8.jpg';

import KA from '../../../statics/image/SAI-1.jpg';
import KB from '../../../statics/image/SAI-2.jpg';
import KC from '../../../statics/image/SAI-3.jpg';
import KD from '../../../statics/image/SAI-4.jpg';
import KE from '../../../statics/image/SAI-5.jpg';

import VA from '../../../statics/image/T-1.jpg';
import VB from '../../../statics/image/T-2.jpg';
import VC from '../../../statics/image/T-3.jpg';
import VD from '../../../statics/image/T-4.jpg';
import VE from '../../../statics/image/T-5.jpg';
import VF from '../../../statics/image/T-6.jpg';

import CA from '../../../statics/image/CD-1.png';
import CB from '../../../statics/image/CD-2.png';
import CC from '../../../statics/image/CD-3.png';

import TI from '../../../statics/image/06.png';

import TJ from '../../../statics/image/L-1.jpg';
import TK from '../../../statics/image/L-2.jpg';
import TL from '../../../statics/image/L-3.jpg';
import TM from '../../../statics/image/L-4.jpg';

import TN from '../../../statics/image/HTML5.jpg';
import TO from '../../../statics/image/CSS.jpg';
import TP from '../../../statics/image/JS.jpg';
import TQ from '../../../statics/image/JQ.jpg';
import TR from '../../../statics/image/SAI.jpg';
import TS from '../../../statics/image/AE.jpg';
import TT from '../../../statics/image/AIl.jpg';
import TU from '../../../statics/image/PS.jpg';
import TV from '../../../statics/image/PR.jpg';
import TW from '../../../statics/image/CAD.jpg';

import TX from '../../../statics/image/L.jpg';
import TY from '../../../statics/image/M.jpg';
import TZ from '../../../statics/image/X.jpg';

import YA from '../../../statics/image/preview-3.jpg';
import YB from '../../../statics/image/midground.png';
import YC from '../../../statics/image/foreground.png';
export const HeaderWrapper = styled.div`
width:1130px;
height:590px;
margin:-180px auto;
box-sizing: border-box;
.wall{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
div#background{
  background: url(${YA})no-repeat;
  z-index:-1;
    -webkit-animation: dd 100s linear infinite;
    -moz-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: dd 100s linear infinite;
    background-size: cover;
}
div#midground{
    background: url(${YB});
    z-index: -1;
    -webkit-animation: cc 100s linear infinite;
    -moz-animation: cc 100s linear infinite;
    -o-animation: cc 100s linear infinite;
    animation: cc 100s linear infinite;
}
div#foreground{
    background: url(${YC});
    z-index: -1;
    -webkit-animation: cc 153s linear infinite;
    -o-animation: cc 153s linear infinite;
    -moz-animation: cc 153s linear infinite;
    animation: cc 153s linear infinite;
}
div#top{
    background: url(${YB});
    z-index: -1;
    -webkit-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: da 100s linear infinite;
}
@-webkit-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-o-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-moz-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@keyframes cc {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 600% 0;
    }
}

@keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-webkit-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-moz-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-ms-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
`;
export const Nav = styled.div`
position:relative;
width:1130px;
height:590px;
margin:0 auto;

`;
export const NavItem = styled.div`
height:590px;
position:absolute;
	top:0;
	left:0;
li{
    width:76px;
    height:76px;
    text-align:center;
    &.sex{
    margin-top:58px;
}
}
a{
	display:block;
	background:#e2e2e2;
	opacity:0.7;
	color:#000;
	text-decoration:none;
	text-align:center;
	}
a:hover{color:#fff;opacity:0.9;}
svg{
font-size:40px;
margin-top:18px;
}
`;

export const Main = styled.div`
    height:590px;
    width:750px;
    overflow:hidden;
    position: absolute;
   
    right:0;
    cite{
    height:606px;
    width:770px;
    display:block;
    overflow-y: scroll;
    }
 
h1{
font-size:20px;
line-height:30px;
color:#84f5fb;
border-bottom:1px dashed pink;
}
`;
export const SubNav = styled.div`
position:relative;
left:0;
width:720px;
height:460px;

h2{
    font-size:30px;
    color:#f5f5f5;
    line-height:35px;
border-bottom:1px dashed blue;
}
`;
export const Hot = styled.div`

    li{
    margin:20px;
   
border-bottom:1px dashed #e2e2e2;
    i{
    color:#84f5fb;
    margin-right:10px;
     line-height:20px;
    }
    b{
    color:#84f5fb;
    }
    b:hover{
     cursor:pointer;
    color:fff;
    font-size:15px;
    }
    
    label{
    color:#84f5fb;
    width:100px;
padding-right:20px;
    }
   
}


`;
export const SideBar = styled.div`
position:absolute;
top:0;
right:0;

div{
width:350px;
height:460px;

&.T1{
background:url(${TA});
background-size:350px 460px;
}
&.T2{
background:url(${TB});
background-size:350px 460px;
}
&.T3{
background:url(${TC});
background-size:350px 460px;
}
&.T4{
background:url(${TCA});
background-size:350px 460px;
}
&.T5{
background:url(${TCB});
background-size:350px 460px;
}
&.T6{
background:url(${TCC});
background-size:350px 460px;
}
&.T7{
background:url(${TCD});
background-size:350px 460px;
}
&.T8{
background:url(${TCE});
background-size:350px 460px;
}
}
`;
export const News = styled.div`

.img{
background:url(${AZ});
 background-size:200px ;
}
*{list-style-type:none;}
.case-content{overflow:hidden;}
.case-item{float:left;margin:0 15px;margin-bottom:20px}
.ih-item{position:relative;-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;transition:all .35s ease-in-out}
.ih-item,.ih-item *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
.ih-item a{color:#e2e2e2}
.ih-item a:hover{text-decoration:none}
.ih-item img{width:100%;height:100%}
.ih-item.circle,.ih-item.circle .img{position:relative;width:210px;height:210px;border-radius:50%}
.ih-item.circle .img:before{position:absolute;display:block;content:'';width:100%;height:100%;border-radius:50%;box-shadow:inset 0 0 0 16px rgba(255,255,255,.6),0 1px 2px rgba(0,0,0,.3);-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;transition:all .35s ease-in-out}
.ih-item.circle .img img{border-radius:50%}
.ih-item.circle .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.ih-item.square{position:relative;width:316px;height:216px;border:8px solid #fff;box-shadow:1px 1px 3px rgba(0,0,0,.3)}
.ih-item.square .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;-webkit-backface-visibility:hidden;backface-visibility:hidden}
.ih-item.circle.effect1 .spinner{width:220px;height:220px;border:10px solid #e2e2e2;border-right-color:#bdfff0;border-bottom-color:#5890fd;border-radius:50%;-webkit-transition:all .8s ease-in-out;-moz-transition:all .8s ease-in-out;transition:all .8s ease-in-out}
.ih-item.circle.effect1 .img{position:absolute;top:10px;bottom:0;left:10px;right:0;width:auto;height:auto}
.ih-item.circle.effect1 .img:before{display:none}
.ih-item.circle.effect1.colored .info{background:#1a4a72;background:rgba(26,74,114,.6)}
.ih-item.circle.effect1 .info{top:10px;bottom:0;left:10px;right:0;background:#333;background:rgba(0,0,0,.6);opacity:0;-webkit-transition:all .8s ease-in-out;-moz-transition:all .8s ease-in-out;transition:all .8s ease-in-out}
.ih-item.circle.effect1 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:24px;margin:0 30px;padding:55px 0 0;height:110px;text-shadow:0 0 1px white,0 1px 2px rgba(0,0,0,.3)}
.ih-item.circle.effect1 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,.5)}
.ih-item.circle.effect1 a:hover .spinner{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}
.ih-item.circle.effect1 a:hover .info{opacity:1}
`;
export const Apse = styled.div`


`;

export const Software = styled.div`
height:580px;
width:730px;
 display: flex;
 justify-content:space-between;
`;
export const Technology = styled.div`


*{box-sizing: border-box};
width:400px;
height:580px;
    p{
    font-size:18px;
    color:#eb37c6;
    }
p:hover{
    color:#19bfc2;
}
.container {
  width: 100%;
  background-color: #ddd;
}
.skills {
  text-align: right;
  padding-right: 20px;
  line-height: 20px;
  color: white;
}
.html {width: 95%; background-color: #4CAF50;}
.css {width: 85%; background-color: #2196F3;}
.js {width: 70%; background-color: #f44336;}
.jquery {width: 80%; background-color: #808080;}
.sai{width: 95%; background-color: #f0e68c;}
.photoshop{width: 85%; background-color: #8b3a3a;}
.effects{width: 65%; background-color: #daa520;}
.illustrator{width: 45%; background-color: #ee1289;}
.premiere{width: 65%; background-color: #c1ffc1;}
.cad{width: 70%; background-color: #ff7256;}


.NA{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TN});
 background-size:150px 150px ;
}
.NB{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TO});
 background-size:150px 150px ;
}
.NC{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TP});
 background-size:150px 150px ;
}
.ND{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TQ});
 background-size:150px 150px ;
}
.NE{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TR});
 background-size:150px 150px ;
}
.NF{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TS});
 background-size:150px 150px ;
}
.NG{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TT});
 background-size:150px 150px ;
}
.NH{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TU});
 background-size:150px 150px ;
}
.NI{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TV});
 background-size:150px 150px ;
}
.NJ{
width:150px;
height:150px;
margin:10px 10px;
background:url(${TW});
 background-size:150px 150px ;
}
.free{ width:400px;  height:400px;}
.free .view{ width:170px; height:170px; overflow:hidden; position:relative; margin:30px 15px; float:left;}
.free .hover{
	width:150px; background:rgba(0, 0 ,0 ,0.5); position:absolute; top:40px; left:10px; text-align:center; color:#fff;
	transform:rotate(55deg);
	-moz-transform:rotate(55deg);
	-webkit-transform:rotate(55deg);
	transition:all 0.5s;
	-moz-transition:all 0.5s;
	-webkit-transition:all 0.5s;
	overflow:hidden; height:0; z-index:4;}
.free .hover h3{color:#fff; border-bottom:2px solid rgba(255, 255 ,255, 0.5); padding-bottom:10px;padding-top: 10px;}
.free .hover p{line-height: 20px;padding: 5px 0;}
.free .view:hover .hover{height:100px;transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);}
.free .view:before{
	content:""; position:absolute; top:-240px; right:0;width:360px; height:360px; background:rgba( 150, 50, 100,0.5);
	transform:rotate(55deg) translateX(60px);
	-moz-transform:rotate(55deg) translateX(60px);
	-webkit-transform:rotate(55deg) translateX(60px);
	transform-origin:100% 0%;
	-moz-transform-origin:100% 0%;
	-webkit-transform-origin:100% 0%;
	transition:all 0.5s ease 0.3s;
	-moz-transition:all 0.5s ease 0.3s;
	-webkit-transition:all 0.5s ease 0.3s;

}
.free .view:hover:before{ top:0;}
.free .view:after{
	content:""; position:absolute;bottom:-240px; left:0;width:360px; height:360px; background:rgba( 150, 50, 100,0.5);
	transform:rotate(55deg) translateX(-60px);
	-moz-transform:rotate(55deg) translateX(-60px);
	-webkit-transform:rotate(55deg) translateX(-60px);
	transform-origin:0% 100%;
	-moz-transform-origin:0% 100%;
	-webkit-transform-origin:0% 100%;
	transition:all 0.5s ease 0.3s;
	-moz-transition:all 0.5s ease 0.3s;
	-webkit-transition:all 0.5s ease 0.3s;
}
.free .view:hover:after{ bottom:0px;}

`;
export const Experience = styled.div`
width:500px;
 margin-left:15px;
    h1{
        margin-top:15px;
        font-size:16px;
        color:#020f50;
    }
    b{
     font-size:18px;
    color:#020f50;
    }
    p{
    font-size:14px;
    color:#020f50;
    }
    .container {
      width: 200px;
      background-color: #ddd;
    }
    
    .skills {
      text-align: right;
      padding-right: 20px;
      line-height: 10px;
      color: white;
    }
    .vue{width: 85%; background-color: #9932CC;}
    .vue-router{width: 80%; background-color: #00BFFF;}
    .vuex{width: 87%; background-color: #00FF7F;}
    .ui{width: 94%; background-color: #FFFF00;}
    
    .react{width: 92%; background-color: #FFA500;}
    .react-router{width: 70%; background-color: #8B4513;}
    .redux{width: 80%; background-color: #FF4500;}
    .styled{width: 97%; background-color: #8A2BE2;}
    .js {width: 70%; background-color: #f44336;}
    .jquery{width: 75%; background-color: #00BFFF;}
    .group{width: 55%; background-color: #00FF7F;}
    .flex{width: 75%; background-color: #FFFF00;}
    .design{width: 65%; background-color: #808080;}
`;
export const Section = styled.div`
width:730px;
height:2800px;
overflow:hidden;
ul{
    li:hover{
    z-index: 5;
    transform: scale(1.8); 
    }
    li{
    float:left;
    width:210px;
    height:250px;
    margin:10px 15px;
    transition: all 0.3s ease-out;
     background-size:210px 250px ;
    &.F1{
        background-image:url(${TD});
    }
    &.F2{
        background-image:url(${TE});
    }
    &.F3{
        background-image:url(${TF});
    }
    &.F4{
        background-image:url(${TG});
    }
    &.F5{
        background-image:url(${TI});
    }
    &.P1{
        background-image:url(${THA});
    }
    &.P2{
        background-image:url(${THB});
    }
    &.P3{
        background-image:url(${THC});
    }
    &.P4{
        background-image:url(${THD});
    }
    &.P5{
        background-image:url(${THE});
    }
    &.P6{
        background-image:url(${THF});
    }
    &.P7{
        background-image:url(${THG});
    }
    &.P8{
        background-image:url(${THH});
    }
    &.K1{
        background-image:url(${KA});
    }
    &.K2{
        background-image:url(${KB});
    }
    &.K3{
        background-image:url(${KC});
    }
    &.K4{
        background-image:url(${KD});
    }
    &.K5{
    background-image:url(${KE});
    }
     &.T1{
    background-image:url(${VA});
    }
     &.T2{
    background-image:url(${VB});
    }
     &.T3{
    background-image:url(${VC});
    }
     &.T4{
    background-image:url(${VD});
    }
     &.T5{
    background-image:url(${VE});
    }
     &.T6{
    background-image:url(${VF});
    }
     &.C1{
    background-image:url(${CA});
    }
     &.C2{
    background-image:url(${CB});
    }
     &.C3{
    background-image:url(${CC});
    }
  }

}

`;


export const Rotate = styled.div`
.ant-carousel .slick-slide {
  text-align: center;
  width:500px;
  height: 350px;
  line-height: 350px;
  overflow: hidden;
}

.ant-carousel .slick-slide .V1 {
 background-image:url(${TJ});
 background-size:800px 350px ;
}
.ant-carousel .slick-slide .V2 {
 background-image:url(${TK});
 background-size:800px 350px ;
}
.ant-carousel .slick-slide .V3 {
 background-image:url(${TL});
 background-size:800px 350px ;
}
.ant-carousel .slick-slide .V4 {
 background-image:url(${TM});
 background-size:800px 350px ;
}
`;
export const Frames = styled.div`
width:750px;
height:100%;
display: flex;
flex-wrap:wrap;

h2{
margin:10px 10px;
font-size:20px;
color:#ee4498;
}
  .Frames-List{
  width:680px;
  height:300px;
  margin:0 0 0 70px;
  background:url(${TCF});

    }
  .Frames-Item{
      li{
        margin-top:9px;
  
    }
    width:360px;
    height:400px;
    margin:20px 0 0 40px;
    a{
    color:#ee4498	;
    margin-left:10px;
    }
    a:hover{
    color:#000;
    }
    
    label{
    color:#ee4498;
    }
    b{
    color:#ee4498;
    }
    }
.Frames-Icof{
 width:350px;
    height:400px;

    }
`;
export const Steam = styled.div`
ul{
width:400px;
    li{
    width:700px;
    height:1122px
     &.MZ{
        background-image:url(${TX});
        }
     &.MX{
        background-image:url(${TY});
        }
     &.MN{
        background-image:url(${TZ});
    }
    }
}
    
`;

export const Column = styled.div`
position: absolute;
top:0;
right:760px;
width:285px;
height:590px;

    h1{
        font-size:50px;
        color:#84f5fb;
        text-align:center;
         font-family:"微软雅黑";
    }
    h1:hover{
    color:#e2e2e2;
    }
    
    span{
    width:285px;
    color:#84f5fb;
    display:block;
     text-align:center;
    }
    span:hover{
        color:#e2e2e2;
        }
    p{
    height:120px;
    font-size:18px;
    color:#84f5fb;
    margin:15px auto;
    border-top:1px solid yellow;
    border-bottom:1px solid yellow;
    }
     p:hover{
        color:#e2e2e2;
    }
    i{
        h2{
        text-align:center; 
        font-size:20px;
        color:#84f5fb;
        }
        h2:hover{
        font-size:19px;
        color:#55cde2;
        }
    a{
        color:#84f5fb;
    } 
    a:hover{
    color:#191970;
    }   
    }
`;


export const Portrait = styled.div`
width:200px;
height:200px;
border-radius:50%;
transition: all 0.6s;
background-image:url(${AI});
background-size:200px 200px ;
margin:15px auto;
&.hour:hover{
    transform: scale(1.2)
}
`;
export const Desks = styled.div`
h1{
font-size:35px;
color:#e2e2e2;
}

`;
// export const Desks = styled.div`


// `;