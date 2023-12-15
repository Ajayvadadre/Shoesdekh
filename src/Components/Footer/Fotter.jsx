import React from "react";
import "../Footer/Fotter.css";
import Newsletter from "../Newsletter/Newsletter";
import InstaIcon from "../Assets/images/icons/instagram.png";
import FacebookIcon from "../Assets/images/icons/facebook.png";
import PintersetIcon from "../Assets/images/icons/pinterest.png";
const Fotter = () => {
  return (
    <>
      <div className="main-fotter">
        <div className="fotter">
          <div className="info">
            <h1 className=" font-semibold text-2xl ">Info</h1>
            <ul className=" mt-3">
              <li>Contact us</li>
              <li>Releases</li>
              <li>Brands</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="policies">
            <h1 className=" font-semibold text-2xl ">Policies</h1>
            <ul className=" mt-3">
              <li>Help Center</li>
              <li>Privacy policies</li>
              <li>Returns & Exchange</li>
              <li>Terms & Conditions</li>
              <li>Order & Shiping </li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="socials">
            <h1 className="font-semibold text-2xl">Socials</h1>
            <div className="img">
              <img src={InstaIcon} alt="" height={"45px"} width={"45px"} />
              <img src={FacebookIcon} alt="" height={"45px"} width={"45px"} />
              <img src={PintersetIcon} alt="" height={"45px"} width={"45px"} />
            </div>
          </div>
          <div className="newsletter">
            <Newsletter />
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>Copyright @ 2023 reserved</p>
        </div>
      </div>
    </>
  );
};

export default Fotter;
