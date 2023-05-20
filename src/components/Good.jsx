import "./Donate.css";
import React from "react";
import goodM from "./img/goodM.jpg";
import goodD1 from "./img/goodD1.jpg";
import goodD2 from "./img/goodD2.jpg";
import goodD3 from "./img/goodD3.jpg";

function Good() {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs"></section>
      <section id="conteiner" className="login">
        <div className="content1">
          <img src={goodM} className="goodM" alt="gooM" />
          <div className="content2">
            {/*1번 사진*/}
            <div className="content3">
              <img src={goodD3} className="goodD3" alt="goodD3" />
              <div className="adong">
                <span className="text1">
                  소녀들이 별처럼 빛날 수 있도록<p>국내여아후원</p>
                </span>
                <p>
                  <span className="text2">
                    열악한 환경으로 인해 어려움을 겪고 있는 소녀들에게
                    <br />
                    생리대와 위생용품이 담긴 생리대 키트를 지원합니다.
                    <br />
                    정서적 어려움이 있는 소녀들에게 심리상담을 지원합니다.
                    <br />
                    저소득가정에 생계비와 교육비 및 주거환경 개선을 지원합니다.
                    <br />
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  국내여아 후원하기
                </button>
              </div>
            </div>
            {/*1번 사진*/}
            <div className="content3">
              <img src={goodD1} className="goodD1" alt="goodD1" />
              <div className="adong">
                <span className="text1">
                  아이들을 지키는 든든한 울타리<p>아동권리보호기부</p>
                </span>
                <p>
                  <span className="text2">
                    학대, 빈곤 및 심리 정서적 어려움에 처한 국내 아동과
                    <br />
                    소외된 이웃들이 건강한 사회 구성원으로 성장 할 수 있도록
                    기부를 수행합니다.
                    <br />
                    아동, 부모, 가족을 대상으로 가족역량지원을 진행하며
                    <br />
                    지역사회 네트워크 확장을 위해 다양한 지원을 실시합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  아동권리보호 기부하기
                </button>
              </div>
            </div>
            {/* 2번 사진 */}
            <div className="content3">
              <img src={goodD2} className="goodD2" alt="goodD2" />
              <div className="adong">
                <span className="text1">
                  건강한 삶, 건강한 사회를 만드는<p>보건의료지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    열악한 보건/의료 환경으로 인해 어려움을 겪고 있는 지역에
                    <br />
                    보건의료서비스를 제공하여 지역주민 및 아동들의 건강을
                    증진합니다.
                    <br />
                    경제적으로 어려운 이웃에게 의료비 및 물품을 지원함으로써
                    <br />
                    의료사각지대 해소와 보건의료 증진에 기여합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  보건의료지원 기부하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Good;
