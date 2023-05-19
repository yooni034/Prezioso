import "./Good.css";
import React from "react";
import goodM from "./img/goodM.jpg";
import goodD1 from "./img/goodD1.jpg";

function Green() {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs"></section>
      <section id="conteiner" className="login">
        <div className="content1">
          <img src={goodM} className="goodM" alt="gooM" />
          <div className="content2">
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
          </div>
        </div>
      </section>
    </main>
  );
}
export default Green;
