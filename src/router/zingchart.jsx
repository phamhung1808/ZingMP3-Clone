import React from 'react';
import styled from 'styled-components';
import Navbar from '../views/navbar';
import '../styles/zingchart.scss';
import Chart from '../component/chart';
import { listmusic } from '../component/playmusic';


const Container = styled.div`
    position: absolute;
    top: 0;
    right:0 ;
    width: 83%;
    height: calc(100vh - 89px);
`

class Zingchart extends React.Component {
    render() {

        return (
            <Container>
                <Navbar />
                <div className="content">
                    <img className='thumbnail' src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.38/static/media/bg-chart.fd766403.jpg" alt="" />
                    <h1 className='zingchart'>
                        <span style={{ color: '#f47b20' }}>#</span>zingchart
                        <i className="bi bi-play-fill"></i>
                    </h1>
                    <Chart />
                    <div className="trending">
                        {listmusic.map((item) => (
                            <>
                                <div className="song-trend">
                                    <div className="top">
                                        <h2 className='number'>{item.number}</h2>
                                        <div className="song-item">
                                            <img src={item.image} alt="" />
                                            <div className="title">
                                                <h4 className='name'>{item.name}</h4>
                                                <h5 className='singer'>{item.singer}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="album">{item.album}</div>
                                    <div className="time">{item.time}</div>
                                </div>
                            </>
                        ))}
                    </div>
                    <button className='listdown'>Xem thêm...</button>

                </div>
            </Container>
        )
    }
}

export default Zingchart;