/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Akad() {
  const [name, setName] = useState('');
  const [attended, setAttended] = useState('false');
  const [message, setMessage] = useState('');

  const onSubmitMessage = async (event) => {
    event.preventDefault();

    if (!name || !attended || !message) {
      toast.error('Nama dan Pesan Harus diisi!');

      return;
    }

    const data = JSON.stringify({ name, attended, message });

    const config = {
      method: 'post',
      url: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      await axios(config);

      setName('');
      setMessage('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section id="rsvp">
        <div className="container mt-12 ">
          <div className="text-center">
            <div className="row ">
              <div className="col-sm-4">
                <div className="d-flex flex-row">
                  <div className="align-self-center mr-5">
                    <img src="./img/swirl-aboutus.svg" alt="" />
                  </div>
                  <div className="text-left align-self-center font-play ml-2">
                    <h2 className="dark-gray">Akad</h2>
                    <h3 className="light-gray">08:00 WIB</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 d-flex flex-row">
                <div className=" align-self-center">
                  <div className="text-left align-self-center font-play ml-2">
                    <h2 className="dark-gray">
                      Live On <img src="./img/ig-color.svg" alt="" />{' '}
                    </h2>
                    <h6 className="light-gray">@hudagraph & @ami.masturoh</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex flex-row">
                  <div className="text-left align-self-center font-play ml-2">
                    <h2 className="dark-gray">
                      Lokasi{' '}
                      <a className="cs-btn dark-gray " href="#">
                        Lihat Map
                      </a>{' '}
                    </h2>
                    <h4 className="light-gray">Kuningan, Jawa Barat</h4>
                  </div>
                  <div className="align-self-center ml-5">
                    <img src="./img/swirl-aboutus2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-7">
        <div className="container">
          <div className="row ">
            <div className="pesan-rspv mb-5 text-center mr-3">
              <div id="rsvp" className="d-flex flex-row align-self-center mb-4">
                <img src="./img/floral-rsvp-img-1.svg" alt="" />
                <h1 className="font-play dark-gray mr-3 ml-3">RSVP</h1>
                <img src="./img/floral-rsvp-img-2.svg" alt="" />
              </div>
              <div className="align-self-center">
                <input
                  className="font-play text-center"
                  type="text"
                  placeholder="Tulis Nama Kamu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="col  pesan-rspv">
              <div className="form-group ">
                <textarea
                  className="form-control font-play"
                  id="exampleFormControlTextarea1"
                  placeholder="Tulis doa dan pesan untuk calon pengantin"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="send-btn" onClick={onSubmitMessage}>
                <img src="./img/message.svg" alt="" />
              </button>
            </div>

            <div className="col pesan-rspv">
              <div className="col d-flex flex-column">
                <div className="d-flex flex-row align-self-center mb-4">
                  <img src="./img/floral-rsvp-img-1.svg" alt="" />
                  <h1 className="font-play dark-gray mr-3 ml-3">
                    Khataman Online
                  </h1>
                  <img src="./img/floral-rsvp-img-2.svg" alt="" />
                </div>
                <div className="align-self-center">
                  <p className="font-play dark-gray">
                    Yuk gabung grup nambah berkah
                  </p>
                </div>
                <div className="d-flex flex-row align-self-center mb-4">
                  <img
                    className="mr-5 ml-4"
                    src="./img/emoji-ikhwan.svg"
                    alt=""
                  />
                  <img
                    className="mr-5 ml-4"
                    src="./img/emoji-akhwat.svg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row align-self-center mb-4">
                  <a className="group-btn dark-gray font-play mr-3" href="#">
                    Gabung Grup
                    <img
                      className="ml-1"
                      src="./img/wa-green.svg"
                      width="24px"
                      alt=""
                    />
                  </a>
                  <a className="group-btn dark-gray font-play" href="#">
                    Gabung Grup
                    <img
                      className="ml-1"
                      width="24px"
                      src="./img/wa-green.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Akad;
