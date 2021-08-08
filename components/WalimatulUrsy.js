/* eslint-disable @next/next/no-img-element */
function WalimatulUrsy() {
  return (
    <section id="wedding">
      <div className="container mt-5">
        <div className="text-center">
          <h1
            className="font-play dark-gray"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Walimatul ‘Ursy
          </h1>
          <div className="row d-flex mt-5">
            <div className="col-sm align-self-center">
              <img
                src="./img/swirl2-cntdwn-left.svg"
                data-aos="fade-right"
                data-aos-delay="300"
                alt=""
              />
            </div>
            <div className="col-sm align-self-center bg-tanggal pt-2 pb-2">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h5 className="text-white pt-1">Sabtu, 28 Agustus 2021</h5>
              </div>
              {/* <!-- <img className="bg-tanggal" src="./img/bg-tanggal.svg" alt=""> --> */}
            </div>
            <div className="col-sm align-self-center">
              <img
                src="./img/swirl2-cntdwn-right.svg"
                data-aos="fade-left"
                data-aos-delay="300"
                alt=""
              />
            </div>
          </div>
        </div>

        <img
          className="rsvp-left"
          data-aos="fade-up-right"
          data-aos-delay="500"
          src="./img/floral1-rsvp-left.png"
          alt=""
        />
        <img
          className="rsvp-right"
          data-aos="fade-up-left"
          data-aos-delay="500"
          src="./img/floral2-rsvp-right.png"
          alt=""
        />
      </div>

      <div className="container">
        <div className="text-center mt-5">
          <div className="row ">
            {/* <!-- <div id="space-1" className="col space"></div> --> */}
            <div
              className="col-sm-3 waktu mb-3 "
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div className="hari time ">
                <h1 className="font-play dark display-3">24</h1>
                <p>Hari</p>
              </div>
            </div>
            <div
              className="col-sm-3 waktu  mb-3 "
              data-aos="flip-right"
              data-aos-delay="800"
            >
              <div className="hari time">
                <h1 className="font-play dark display-3">24</h1>
                <p>Hari</p>
              </div>
            </div>
            <div
              className="col-sm-3 waktu  mb-3 "
              data-aos="flip-left"
              data-aos-delay="1000"
            >
              <div className="hari time">
                <h1 className="font-play dark display-3">24</h1>
                <p>Hari</p>
              </div>
            </div>
            <div
              className="col-sm-3 waktu mb-3 "
              data-aos="flip-right"
              data-aos-delay="1200"
            >
              <div className="hari time">
                <h1 className="font-play dark display-3">24</h1>
                <p>Hari</p>
              </div>
            </div>

            {/* <!-- <div id="space-2" className="col"></div> --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WalimatulUrsy;
