import "./Main.css";
import Headerimg from "./img/Header.jpg";
import Mainsecond from "./Mainsecond";

function Mainfirst() {
  return (
    <div>
      <img src={Headerimg} className="Headerimg" alt="HeaderImg" />
      <div id="about" className="about">
        <div className="container">
          <div className="row content">
            <div className="col-lg-6">
              <h2>PREZIOSO</h2>
              <h3>Good Change for the World</h3>
              <h3>with PREZIOSO</h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                우리는 시대를 거듭하며 많은 역경과 고난을 이겨내며 평화로운
                시대를 이룩했습니다. 하지만 여전히 많은 사람들이 고통 속에서
                도움의 손길을 기다리고 있고, 이들을 돕기 위해 더욱더 많은
                사람들이 기꺼이 손길을 내밀고 있습니다. 저희는 이들이 내미는
                손길을 '조금' 도와주고자 합니다. Prezioso, 저희는 모든 사람들이
                더 이상 아프지 않길 바랍니다.
              </p>
              <p className="fst-italic">
                PREZIOSO는 아동과 지역사회의 좋은 변화를 위해 투명하고 성실하게
                사업을 수행하고있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mainsecond />
    </div>
  );
}

export default Mainfirst;
