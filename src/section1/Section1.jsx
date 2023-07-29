import "./section1.css";
import desktop from "../assets/desktop.jpg";
import mobile from "../assets/mobile.jpg";
const Section1 = () => {
  return (
    <section className="section1">
      <div className="section1__item1">
        <picture>
          <source srcSet={mobile} media="(max-width:380px)" />
          <img
            src={desktop}
            alt="desktop/mobile img"
            className="section1__item1_img"
          />
        </picture>
      </div>
      <header className="section1__item2">The Bright Future of Web 3.0?</header>
      <article className="section1__item3">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people.But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </article>
      <article className="section1__item4">
        <h2>New</h2>
        <div>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="line"></div>
        <div>
          <h4>The Downsides of AI Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand Ai image
            generation?
          </p>
        </div>
        <div className="line"></div>
        <div>
          <h4>Is VC Funding Drying Up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Section1;
