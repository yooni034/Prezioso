import "./Donate.css";
import React from "react";
import unicefM from "./img/unicefM.jpg";
import unicefD1 from "./img/unicefD1.jpg";
import unicefD2 from "./img/unicefD2.jpg";
import unicefD3 from "./img/unicefD3.jpg";
import unicefD4 from "./img/unicefD4.jpg";

function Green() {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs"></section>
      <section id="conteiner" className="login">
        <div className="content1">
          <img src={unicefM} className="unicefM" alt="unicefM" />
          <div className="content2">
            {/*1번 사진*/}
            <div className="content3">
              <img src={unicefD1} className="unicefD1" alt="unicefD1" />
              <div className="adong">
                <span className="text1">
                  아이들의 찬란한 미래를 위해<p>아동교육지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    유니세프는 전 세계 모든 어린이가 필요한 지식과 기술을 익힐
                    수 있도록 교육을 지원합니다.
                    <br />
                    소외되고 배제된 지역에 사는 어린이도 학교에 다닐 수 있도록
                    교육 접근성을 강화하고,
                    <br />
                    떠한 위기 상황에서도 교육을 중단하지 않도록 전문 인력 양성과
                    양질의 교육 프로그램,
                    <br />
                    필요한 학용품을 지원합니다.
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
              <img src={unicefD2} className="unicefD2" alt="unicefD2" />
              <div className="adong">
                <span className="text1">
                  아이들의 보호받을 권리<p>보호지원기부</p>
                </span>
                <p>
                  <span className="text2">
                    유니세프는 정부, 기업, 시민 사회단체 및 지역 사회와 협력하여
                    <br />
                    모든 형태의 폭력을 예방하고 피해 어린이에게 정신건강 및
                    심리치료 서비스를 지원합니다.
                    <br />
                    성인이 되기 전까지 사회보장 서비스를 이용할 수 있도록 어린이
                    보호 시스템 강화를 지원합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  보호지원 기부하기
                </button>
              </div>
            </div>
            {/* 3번 사진 */}
            <div className="content3">
              <img src={unicefD3} className="unicefD3" alt="unicefD3" />
              <div className="adong">
                <span className="text1">
                  어린이들의 안전하고 지속 가능한 환경<p>지속가능한환경지원</p>
                </span>
                <p>
                  <span className="text2">
                    유니세프는 모든 어린이가 안전하고 지속 가능한 환경을 누릴 수
                    있도록 식수와 위생시설을 지원합니다.
                    <br />
                    긴급 상황을 포함하여 농촌과 도시 지역에서 손 씻기와 같이
                    기본적인 위생 습관을 장려합니다.
                    <br />
                    또한 재난 위험은 줄이고 회복력은 높이는 사업을 펼치고,
                    평화를 구축하고 기후 위기 대응에 힘씁니다.
                    <br />
                    효과적인 지원을 위해 유니세프는 정부, 민간 부문, 학계, 시민
                    단체 및 지역사와 긴밀히 협력합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  지속가능한환경 지원하기
                </button>
              </div>
            </div>
            {/* 4번 사진 */}
            <div className="content3">
              <img src={unicefD4} className="unicefD4" alt="unicefD4" />
              <div className="adong">
                <span className="text1">
                  어린이들의 공평한 기회<p>공평한기회지원</p>
                </span>
                <p>
                  <span className="text2">
                    유니세프는 모든 어린이가 공평한 기회를 누리고
                    <br />
                    각자가 자신의 잠재력을 최대한 발휘할 수 있도록 지원합니다.
                    <br />
                    또한 사회적 불평등을 해소하고, 공평한 기회를 나누기 위해
                    노력합니다.
                  </span>
                </p>
                <button
                  className="custom-button"
                  onclick="location.href='Good.jsp'"
                >
                  공평한기회 지원하기
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
