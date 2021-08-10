/* eslint-disable @next/next/no-img-element */
function Mempelai() {
  return (
    <section id="about">
      <div className="text-center mt-5">
        <img
          className=""
          src="./img/ornament-1.png"
          data-aos="fade-up"
          data-aos-delay="250"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row flex-md-nowrap flex-lg-nowrap ">
          <div className="col  align-self-center">
            <div className="d-flex flex-row mb-3" data-aos="fade-right">
              <div className="align-self-center">
                <img src="./img/swirl-aboutus.svg" alt="" />
              </div>
              <div className="text-left align-self-center font-play ml-2">
                <h2 className="dark-gray">Ami</h2>
                <h3 className="light-gray">Masturoh</h3>
              </div>
              <div>
                <img src="./img/swirl-aboutus2.svg" alt="" />
              </div>
            </div>
            <div
              className="text-left font-play "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>
                Anak bungsu dari Bapak Sukono dan Ibu Awing (Almh) & Bapak
                Sahori (Alm) dan Ibu Saiyah (Almh)
              </p>
            </div>
          </div>
          <div
            className="col mb-5 order-illustrasi align-self-center"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <img
              className="img-responsive illustrasi"
              src="./img/illustration.svg"
              alt=""
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/ami.masturoh"
              className="ig-btn font-play masturoh"
              data-aos="zoom-in-right"
              data-aos-delay="200"
            >
              <i className="fab fa-instagram mr-2"></i>@ami.masturoh
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/hudagraph"
              className="ig-btn font-play huda"
              data-aos="zoom-in-left"
              data-aos-delay="400"
            >
              <i className="fab fa-instagram mr-2"></i>@hudagraph
            </a>
          </div>
          <div className="col align-self-center">
            <div className="d-flex flex-row mb-2" data-aos="fade-left">
              <div className="align-self-center">
                <img src="./img/swirl-aboutus.svg" alt="" />
              </div>
              <div className="text-right align-self-center font-play mr-2">
                <h3 className="light-gray">Masykur</h3>
                <h2 className="dark-gray">Huda</h2>
              </div>
              <div>
                <img src="./img/swirl-aboutus2.svg" alt="" />
              </div>
            </div>

            <div
              className="text-right font-play"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <p>Anak kedua dari Bapak Amirojan dan Ibu Sri Dwi Arianingsih</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <img
            className=""
            src="./img/ornament-2.png"
            data-aos="fade-up"
            data-aos-delay="300"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Mempelai;
