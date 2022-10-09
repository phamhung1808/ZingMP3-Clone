import React from 'react';
import styled from 'styled-components';
import Navbar from '../views/navbar';
import '../styles/theodoi.scss'


const Container = styled.div`
    position: absolute;
    top: 0;
    right:0 ;
    background: #800064;
    width: 83%;
    height: calc(100vh - 89px);;
`

class Theodoi extends React.Component {
    render() {

        return (
            <Container>
                <Navbar />
                <div className="content">
                    <div className="top-singer">
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png" alt="" /></div>
                        <div className='singer'><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png" alt="" /></div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Theodoi;