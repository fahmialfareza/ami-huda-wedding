/* eslint-disable @next/next/no-img-element */
function Header() {
  return (
    <section>
      <header>
        <div className="container ">
          <div className="row justify-content-md-center header-name text-center mt-7 pt-5">
            <div className="col col-lg-2 name-text-right">
              <h1
                className="play-title"
                data-aos="fade-up-right"
                data-aos-delay="150"
              >
                Ami
              </h1>
            </div>
            <div className="col-md-auto col-sm-auto">
              <img
                className="and-grad"
                data-aos="flip-left"
                src="./img/and-grad.svg"
                alt=""
              />
            </div>
            <div className="col col-lg-2">
              <h1
                className="play-title"
                data-aos="fade-up-left"
                data-aos-delay="200"
              >
                Huda
              </h1>
            </div>
          </div>

          <div className="text-center mt-5">
            <p
              className="text-header"
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.5",
                
              }}
            >
              Dengan mengharap keberkahan dan keridhoan Allah SWT, mohon doa
              restu untuk kami
            </p>
          </div>
        </div>

        <div className="text-center">
          <img
            className="center-img and-img"
            data-aos="fade-up"
            data-aos-delay="300"
            src="./img/and.png"
            alt=""
          />
        </div>

        <img
          className="img-responsive left-image"
          data-aos="fade-right"
          data-aos-delay="200"
          src="./img/left-flower.png"
          alt=""
        />
        <img
          className="img-responsive right-image"
          data-aos="fade-left"
          data-aos-delay="200"
          src="./img/right-flowers.png"
          alt=""
        />
      </header>
    </section>
  );
}

export default Header;
