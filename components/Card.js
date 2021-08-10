/* eslint-disable @next/next/no-img-element */
function Card() {
  return (
    <section id="ourstory">
      <div className="container">
        <div className="card">
          <div className="row ">
            <div className="col-lg-8 mr-0">
              <div className="card-block px-6 ml-4 mt-4">
                <div className="d-flex flex-row mb-3">
                  <div className="align-self-center ">
                    <h4 className="card-title text-uppercase font-play font-weight-bold dark-gray">
                      Our Story
                    </h4>
                  </div>
                  <div id="btn-ami" className="align-self-center ml-4">
                    <a className="cs-btn dark-gray font-play" href="#">
                      Versi Ami
                    </a>
                  </div>
                  <div id="btn-huda" className="align-self-center ml-4">
                    <a className="cs-btn dark-gray font-play" href="#">
                      Versi Huda
                    </a>
                  </div>
                </div>

                <p className="card-text font-play dark-gray">
                  Kisah pertemuan kami berawal di Etos ID, program beasiswa
                  Lembaga Pengembangan Insani Dompet Dhuafa. Sebagai fasilitator
                  program di dua wilayah berbeda, Ami di Sumedang, saya di
                  Malang. <br /> <br /> Pertemuan kami sebagai rekan kerja
                  selalu bertemu dalam virtual zoom, aktifitas kami tidak selalu
                  bersinggungan langsung karena kerja regional berbeda. Selama 1
                  tahun pun tak pernah ada agenda offline untuk mempertemukan
                  kami. <br /> <br /> Waktu berlalu, selepas ramadhan 2021
                  istikharah dan bersiap diri untuk membuka obrolan dengan orang
                  tua. Orang tua dengan bijak mengizinkan saya untuk berani
                  mengambil keputusan besar untuk meminang anak orang. Saya
                  menghubungi Murabbi dan memproses ta’aruf. tak bisa offline
                  online virtualpun jadi. <br /> <br /> Jarak, kondisi keluarga,
                  dan perbedaan suku tak meruntuhkan niat baik didasari
                  permohonan magfirah dan ridho Allah untuk menjalankan sunnah
                  Rasulullah SAW. <br /> <br /> Semoga Allah beri kelancaran,
                  dan keberkahan menuju pernikahan kami yang di langsungkan
                  masih dalam suasana pandemi. Mohon doa dan restunya.
                </p>

                <img src="./img/diamond.svg" alt="" className="diamond" />
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="img-responsive img-card d-block"
                src="./img/img-card.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
