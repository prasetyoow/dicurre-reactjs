import React from "react";


function Footer() {
  return (
    <>
    <div className="d-flex flex-column p-3 p-md-4 gap-3 gap-md-0 flex-md-row justify-content-md-between footer-wrap">
          <div>
            <span className="fw-bold footer-text">2020 Zwallet. All right reserved.</span>
          </div>

          <div className="d-flex flex-row gap-3">
            <span className="fw-bold footer-cont">+62 5637 8882 9901</span>
            <span className="fw-bold footer-cont">contact@zwallet.com</span>
          </div>
    </div>
    </>
  )
}

export default Footer