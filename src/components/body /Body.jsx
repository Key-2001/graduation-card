import React, { useState } from "react";
import thanglongImg from '../../imgs/thanglong-uni.jpeg'
import hoitruongImg from '../../imgs/hoitruong.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Body = () => {
  //! Props

  //! State
  const [activeImg, setActiveImg] = useState(0);
  //! Function
  const handleChangeImg = (type) => {
    if(type === 'prev'){
      setActiveImg(activeImg === 0 ? 1 : 0)
    }else{
      setActiveImg(activeImg === 1 ? 0 : 1)
    }
  }
  //! Effect

  //! Render
  const renderInfo = (
    <div className="info-homie">
      <div data-aos="flip-right">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMA3JqK5JUrqdgiIrwTope45gjYLel8fbCEmiCUpqMPzm29tc2r4GmSWdFZEyfAhmtv4M&usqp=CAU"
          alt="avatar"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-left"
      >
        <p className="fs-2 fw-bold text-center text-uppercase">Chủ toạ</p>
        <div className="d-flex flex-column px-3">
          <div className="d-flex" data-aos="fade-up">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              họ và tên:{" "}
            </p>
            <p className="fs-3 text-capitalize">Đỗ Thị Thu</p>
          </div>
          <div className="d-flex " data-aos="fade-up">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              ngày sinh:{" "}
            </p>
            <p className="fs-3 text-capitalize">01/09/2001</p>
          </div>
          <div className="d-flex " data-aos="fade-up">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              Cung:{" "}
            </p>
            <p className="fs-3 text-capitalize">Xử Nữ</p>
          </div>
          <div className="d-flex " data-aos="fade-up">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              Thần số học:{" "}
            </p>
            <p className="fs-3 text-capitalize">4</p>
          </div>
          <div className="d-flex" data-aos="fade-up">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              Tính cách:{" "}
            </p>
            <p className="fs-3 text-capitalize">
              Là một người năng động, ham đi chơi (tháng ít thì cụng 2,3 lần
              nhìu thì 6,7 lần). Đy làm như đy chơi :V.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocation = (
    <div className="location">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        data-aos="zoom-in-right"
      >
        <p className="fs-2 fw-bold text-center text-uppercase">Địa điểm diễn ra sự kiện</p>
        <div className="d-flex flex-column px-3">
          <div className="d-flex" data-aos="fade-up-right">
            <p className="fs-3 text-capitalize fw-normal">Hội trường Tạ Quang Bửu</p>
          </div>
          <div className="d-flex" data-aos="fade-up-right">
            <p className="fs-3 text-capitalize fw-normal">trường đại học thăng long</p>
          </div>
          <div className="d-flex" data-aos="fade-up-right">
            <p className="fs-3 text-capitalize fw-bolder me-3 text-nowrap">
              Địa chỉ: 
            </p>
            <p className="fs-3 text-capitalize">nghiêm xuân yêm - đại kim - hoàng mai - hà nội</p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left">
        <Carousel>
          <div>
            <img src={thanglongImg} alt='thanglong-uni' style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            <p className="legend">Thang Long University</p>
          </div>
          <div>
            <img src={hoitruongImg} alt='hoitruong-tl' style={{width: "100%", height: "100%", objectFit: "contain"}}/>
            <p className="legend">Hội trường Tạ Quang Bửu</p>
          </div>
        </Carousel>
      </div>
    </div>
  );

  const renderTimeInfo = (
    <div className="time-info">
      
    </div>
  )

  return (
    <div id="body-card">
      {renderInfo}
      {renderLocation}
    </div>
  );
};

export default Body;
