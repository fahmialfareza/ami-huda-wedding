/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import parse from 'html-react-parser';

function Card() {
  const huda =
    'Kisah pertemuan kami berawal di Etos ID, program beasiswa Lembaga Pengembangan Insani Dompet Dhuafa. Sebagai fasilitator program di dua wilayah berbeda, Ami di Sumedang, saya di Malang. <br /> <br /> Pertemuan kami sebagai rekan kerja selalu bertemu dalam virtual zoom, aktifitas kami tidak selalu bersinggungan langsung karena kerja regional berbeda. Selama 1 tahun pun tak pernah ada agenda offline untuk mempertemukan kami. <br /> <br /> Waktu berlalu, selepas ramadhan 2021 istikharah dan bersiap diri untuk membuka obrolan dengan orang tua. Orang tua dengan bijak mengizinkan saya untuk berani mengambil keputusan besar untuk meminang anak orang. Saya menghubungi Murabbi dan memproses ta’aruf. tak bisa offline online virtualpun jadi. <br /> <br /> Jarak, kondisi keluarga, dan perbedaan suku tak meruntuhkan niat baik didasari permohonan magfirah dan ridho Allah untuk menjalankan sunnah Rasulullah SAW. <br /> <br /> Semoga Allah beri kelancaran, dan keberkahan menuju pernikahan kami yang di langsungkan masih dalam suasana pandemi. Mohon doa dan restunya.';
  const ami =
    'Awal perjumpaan kami adalah ketika menjadi fasilitator Etos ID, program beasiswa yang diluncurkan oleh Dompet Dhuafa. Saya yang menjadi fasilitator regional Sumedang dan Huda fasilitator regional Malang. <br /> <br /> Selama menjadi fasilitator, kami lebih banyak bertemu secara virtual. Huda adalah salah satu fasilitator yang menurut saya paling aktif diantara fasilitator seluruh Indonesia. Huda juga mengajarkan para fasilitator tentang mengelola sosial media dan saat itu menjadi kesempatan juga bagi saya untuk menimba ilmu dari Huda. <br /> <br /> Waktu pun berlalu. Tepat beberapa hari setelah Idul Fitri dan dikuranginya jatah umur saya hidup di dunia, datanglah kabar yang membuat saya kaget bahwa Huda mempunyai niat baik terhadap saya. MasyaaAllah Alhamdulillah, semua proses telah dilalui hingga saat ini melalui perantara kami berdua. Hingga saat ini memiliki tujuan yg sama untuk ke depannya. <br /> <br /> Walaupun di dalam masa pandemi, namun hal tersebut tidak mengalangi niat baik kami. Jarak dan waktu yang memang masih belum bisa mempertemukan kami secara langsung, maka semua proses dilakukan secara virtual. Semoga tidak mengurangi keberkahan atas proses yang telah kami jalani. Kami mohon doa dan restunya, semoga Allah memberkahi setiap proses yang kami lewati.';
  const [version, setVersion] = useState(huda);

  const toggleVersionHuda = (event) => {
    event.preventDefault();

    setVersion(huda);
  };

  const toggleVersionAmi = (event) => {
    event.preventDefault();

    setVersion(ami);
  };

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
                  {version === ami ? (
                    <div id="btn-ami" className="align-self-center ml-4">
                      <a
                        className="cs-btn font-play"
                        onClick={toggleVersionAmi}
                        style={{
                          color: '#fff',
                          border: '0px',
                          backgroundColor: '#DD838F',
                        }}
                      >
                        Versi Ami
                      </a>
                    </div>
                  ) : (
                    <div id="btn-ami" className="align-self-center ml-4">
                      <a
                        className="cs-btn dark-gray font-play"
                        onClick={toggleVersionAmi}
                      >
                        Versi Ami
                      </a>
                    </div>
                  )}

                  {version === huda ? (
                    <div id="btn-huda" className="align-self-center ml-4">
                      <a
                        className={'cs-btn font-play'}
                        onClick={toggleVersionHuda}
                        style={{
                          color: '#fff',
                          border: '0px',
                          backgroundColor: '#DD838F',
                        }}
                      >
                        Versi Huda
                      </a>
                    </div>
                  ) : (
                    <div id="btn-huda" className="align-self-center ml-4">
                      <a
                        className={'cs-btn dark-gray font-play'}
                        onClick={toggleVersionHuda}
                      >
                        Versi Huda
                      </a>
                    </div>
                  )}
                </div>

                <p className="card-text font-play dark-gray">
                  {parse(version)}
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
