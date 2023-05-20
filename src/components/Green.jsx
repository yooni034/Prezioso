import "./Donate.css";
import React from "react";
import greenM from "./img/greenM.jpg";
import greenD1 from "./img/greenD1.jpg";
import greenD2 from "./img/greenD2.jpg";
import greenD3 from "./img/greenD3.jpg";
import greenD4 from "./img/greenD4.jpg";

function Green() {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs"></section>
      <section id="conteiner" className="login">
        <div className="content1">
          <img src={greenM} className="greenM" alt="greenM" />
          <div className="content2">
            {/*1번 사진*/}
            <div className="content3">
              <img src={greenD1} className="greenD1" alt="greenD1" />
              <div className="adong">
                <span className="text1">
                  아이들의 더 밝은 미래를 위해<p>아동교육지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    모든 아동이 교육권을 누릴 수 있도록 다양한 층위의 교육환경을
                    개선합니다.
                    <br />
                    학교 및 기타 교육 서비스지원, 부모와 교사 역량 강화,
                    지역사회 교육 관계자와의 활동을 지원하며
                    <br />
                    더 나아가 정부가 아동의 교육권 강화를 위해 역할과 책임을 다
                    할 수 있도록
                    <br />
                    정부 대상의 옹호활동을 펼침으로써 아동의 교육권이 보장될 수
                    있도록 지원합니다.
                    <br />
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  아동교육지원 기부하기
                </button>
              </div>
            </div>
            {/*2번 사진*/}
            <div className="content3">
              <img src={greenD2} className="greenD2" alt="greenD2" />
              <div className="adong">
                <span className="text1">
                  폭력으로부터 보호받아야하는 아이들<p>아동보호지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    아동들이 폭력, 착취, 학대, 방임으로부터 보호받고 안전한
                    환경에서 성장할 수 있도록 합니다.
                    <br />
                    이를 위해 정부가 아동보호를 위한 법과 제도를 형성할 수
                    있도록 지원하며,
                    <br />
                    지역사회 내 아동보호체계 구축을 통해
                    <br />
                    아동보호이슈 대응과 예방을 위한 아동보호 실천 역량 강화 및
                    서비스 접근성이 향상되도록 지원합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  아동보호지원 기부하기
                </button>
              </div>
            </div>
            {/* 3번 사진 */}
            <div className="content3">
              <img src={greenD3} className="greenD3" alt="greenD3" />
              <div className="adong">
                <span className="text1">
                  건강한 삶, 건강한 사회를 만드는<p>보건의료지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    보건의료 시설과 서비스에 대한 접근성을 향상시키고
                    <br />
                    보건인력의 역량 강화와 기존 보건시설의 개선을 통해
                    보건서비스의 품질을 개선합니다.
                    <br />
                    질병을 예방하고 올바른 건강관리를 잘 실천할 수 있도록
                    지역주민들의 인식 제고 활동을 지원합니다.
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
            {/* 4번 사진 */}
            <div className="content3">
              <img src={greenD4} className="greenD4" alt="greenD4" />
              <div className="adong">
                <span className="text1">
                  더 나은 위생시설을 위해<p>식수위생지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    식수시설을 설치하고 화장실 등의 위생시설을 개선하여
                    <br />
                    깨끗하고 안전한 물과 위생시설에 대한 접근성을 향상시킵니다.
                    <br />
                    또한 이를 지속적으로 유지하기 위해 지역사회의 역량을
                    강화하며,
                    <br />
                    올바를 위생 습관 및 관련 지식을 안내하는 등의 인식 개선을
                    위한 다양한 활동을 지원합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  식수위생지원 기부하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Green;
