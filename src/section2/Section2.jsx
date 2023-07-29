import "./section2.css";
import img1 from "../assets/art1.jpg";
import img2 from "../assets/art2.jpg";
import img3 from "../assets/art3.jpg";
const Section2 = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__items1">
          <span>
            {" "}
            <img src={img1} alt="footer-img" />
          </span>
          <div>
            <p>01</p>
            <p>Reviving Retro Pcs</p>
            <p>What happens when old PC's are given modern upgrade?</p>
          </div>
        </div>
        <div className="footer__container__items1">
          <span>
            <img src={img2} alt="footer-img" />
          </span>
          <div>
            <p>02</p>
            <p>Top 10 Laptops of 2022</p>
            <p>Our best picks for various needs and budgets</p>
          </div>
        </div>
        <div className="footer__container__items1">
          <span>
            <img src={img3} alt="footer-img" />
          </span>
          <div>
            <p>03</p>
            <p>The Growth of Gaming</p>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Section2;
