import React from 'react';
import '../styles/radio.scss'
import styled from 'styled-components';
import Navbar from '../views/navbar';
import { listcd } from '../component/playmusic';
import avatar from '../images/phamanhhung.png';


const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #800064;
    width: 83%;
    height: calc(100vh - 89px);
    max-height: calc(100vh - 89px);
`

class Radio extends React.Component {
    render() {

        return (
            <Container>
                <Navbar />
                <div className="content">
                    <div className="listCD">
                        {listcd.map((item) => (
                            <div className="box">
                                <div className="CD">
                                    <img src={item.image} alt="" />
                                </div>
                                <h3 className='name-CD'>{item.name}</h3>
                                <p className="listens">{item.listen}</p>
                            </div>
                        ))}
                    </div>
                    <div className="shows">
                        <h2 className="title">Đón nghe</h2>
                        <div className="show">
                            <img src="https://photo-zmp3.zmdcdn.me/banner/9/c/3/0/9c306d1b9d6715d9e08fbf35015c71b9.jpg" alt="" />
                            <img src="https://photo-zmp3.zmdcdn.me/banner/7/f/0/e/7f0efe7a295d1b323def8492ea18a80c.jpg" alt="" />
                        </div>
                    </div>
                    <div className="category">
                        <h2 className="title">Thể loại Podcast</h2>
                        <div className="show">
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/2/8/7/0/28700b2057fd36c92742b3015b263b7d.jpg" alt="" />
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/f/6/5/af6588f6d58fbfbb68f4231441801c15.jpg" alt="" />
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/8/6/7/1/8671a1447b5088d30c8dce06a3b2e24c.jpg" alt="" />
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg" alt="" />
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/0/b/f/f/0bff0f141d91ac637556872d0008751f.jpg" alt="" />
                        </div>
                    </div>
                    <div className="content-featured">
                        <h2>Chương Trình Nổi Bật</h2>
                        <div className="featured">
                            <div className="box">
                                <div className="box-show">
                                    <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/b/2/d/7b2d688e31064952f850872b7322e76f.jpg' alt="" />
                                    <div className="text">
                                        <h4>XONE With Stars</h4>
                                        <p>Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer,... Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita Ora…cùng XONE Radio.

                                            Khám phá và thưởng thức âm nhạc đa sắc màu. Phát trực tiếp lúc 18h00 thứ 6, phát lại lúc 19h00 Chủ nhật hàng tuần tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz.

                                            XONE WITH STARS - Dating with Stars

                                            Đừng quên đón nghe bạn nhé!

                                            #XONEwStars #Music</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-show">
                                    <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/c/5/5/0/c55064164b650dfcb4d729035e8c05ac.jpg' alt="" />
                                    <div className="text">
                                        <h4>Đắp chăn nằm nghe Tun kể</h4>
                                        <p>Là series podcast đầu tiên của Tun, nơi Tun và các bạn có thể trải lòng với nhau về những điều mệt mỏi trong cuộc sống, cùng cho nhau những lời khuyên hay ho, cùng chữa lành những tổn thương, đổ vỡ để trái tim tụi mình một lần nữa được ngập tràn yêu thương. Tun hy vọng những chia sẻ của mình có thể mang lại những giây phút thư thái, dễ chịu cho bạn trước khi đi ngủ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Radio;