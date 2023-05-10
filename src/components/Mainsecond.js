import "./Mainsecond.css";

function Mainsecond() {
  return (
    <div id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>There are the features provided by this website</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <h4 className="title">
              <a href="http://localhost:3000/">Show Group Information</a>
            </h4>
            <p className="description">후원 단체에 대한 안내를 제공합니다.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-card-checklist"></i>
            </div>
            <h4 className="title">
              <a href="http://localhost:3000/">Providing Sponsorship</a>
            </h4>
            <p className="description">
              희망하는 단체에 후원 신청 기능을 제공합니다.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h4 className="title">
              <a href="http://localhost:3000/">View Sponsorship Status</a>
            </h4>
            <p className="description">
              나의 후원 현황을 확인할 수 있는 기능을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainsecond;
