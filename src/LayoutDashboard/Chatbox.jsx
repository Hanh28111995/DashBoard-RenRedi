import React, { useState } from 'react'
import { Avatar } from 'antd'
import {
  HomeOutlined,
  HomeFilled,
  MessageOutlined,
  MessageFilled,
  QuestionCircleOutlined,
  QuestionCircleFilled

} from '@ant-design/icons';
export default function Chatbox() {
  const [toggle, setToggle] = useState(false)
  const [clickIcon, setClickIcon] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  })
  const toggleForm = () => {
    setToggle(!toggle)
  }

  const resetIcon = (obj, value) => {
    Object.keys(obj).forEach(v => obj[v] = value)
  }
  return (
    <div className="chatbox_zone">
      <button className="open-button" onClick={() => toggleForm()}>

        <span>
          <svg className={`${toggle ? 'd-none' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" fill="white" /></svg>
        </span>
        <span>
          <svg className={`${toggle ? '' : 'd-none'}`} width={24} stroke="#fff" height={24} viewBox="0 0 28 32"><path fill="#fff" d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z" /></svg>
        </span>

      </button >

      <div
        className={`chat-popup ${toggle ? '' : 'd-none'}`} id="myForm">
        <div className='chat-popup-content'>
          <ul className="nav nav-pills text-center row w-100" >
            <li className="nav-item col-4 col-md-2 col-lg-2"
              onClick={() => {
                let clone = clickIcon;
                resetIcon(clone, false);
                console.log(clone)
                setClickIcon({ ...clone, btn1: true })
              }}
            >
              <a className='nav-link text-dark' data-toggle="pill" href='#home' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                {clickIcon.btn1 ?
                  <HomeFilled style={{ color: '#3498db' }} />
                  :
                  <HomeOutlined />
                }
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item col-4 col-md-2 col-lg-2"
              onClick={() => {
                let clone = clickIcon;
                resetIcon(clone, false);
                console.log(clone)
                setClickIcon({ ...clone, btn2: true })
              }}
            >
              <a className='nav-link text-dark' data-toggle="pill" href='#messages' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                {
                  clickIcon.btn2 ?
                    <MessageFilled style={{ color: '#3498db' }} />
                    :
                    <MessageOutlined />
                }

                <p>Messages</p>
              </a>
            </li>
            <li className="nav-item col-4 col-md-2 col-lg-2"
              onClick={() => {
                let clone = clickIcon;
                resetIcon(clone, false);
                console.log(clone)
                setClickIcon({ ...clone, btn3: true })
              }}
            >
              <a className='nav-link text-dark' data-toggle="pill" href='#help' role="tab" aria-controls="pills-flamingo" aria-selected="true">
                {
                  clickIcon.btn3 ?
                    <QuestionCircleFilled style={{ color: '#3498db' }} />
                    :
                    <QuestionCircleOutlined />
                }

                <p>Help</p>
              </a>
            </li>
          </ul>
        </div>

        <div className='tab-content'>
          <div id='home' className="tab-pane active"  >
            <div className='home_bg'>
              <div className='home_bg_gradient'></div>
            </div>
            <div className="home_header">
              <div className='img-logo'>
                <img src="https://downloads.intercomcdn.com/i/o/58627/75a08a8134175db6b44bdaaa/81764e49d3c4fd36b3713a6bce9144c9.png" alt="" />
              </div>
              <div className='img-avatar'>
                <div className="img-avatar-content">
                  <Avatar.Group>
                    <Avatar size={40} src="https://static.intercomassets.com/avatars/5420138/square_128/IMG_20220302_102356-1646188138.jpg" alt="Leomen profile" />
                    <Avatar size={40} src="https://static.intercomassets.com/avatars/4950368/square_128/photo_2021-04-30_13-43-58-1619761596.jpg" alt="Estrella profile" />
                    <Avatar size={40} src="https://static.intercomassets.com/avatars/4578636/square_128/68985924_2472553839433295_6628461300370374656_n-1612043317.jpg" alt="Riz profile" />
                  </Avatar.Group>
                </div>

              </div>
            </div>

          </div>
          <div className="home_content">

          </div>

        </div>
      </div>
    </div>
  )
}
