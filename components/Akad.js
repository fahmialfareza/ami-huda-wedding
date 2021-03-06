/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Akad() {
  const [name, setName] = useState("");
  const [attended, setAttended] = useState("false");
  const [message, setMessage] = useState("");

  const onSubmitMessage = async (event) => {
    event.preventDefault();

    if (!name || !attended || !message) {
      toast.error("Nama dan Pesan Harus diisi!");

      return;
    }

    const data = JSON.stringify({ name, attended, message });

    const config = {
      method: "post",
      url: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      await axios(config);

      toast.success("Pesan dan doa kamu terkirim!");

      setName("");
      setMessage("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section id="rsvp">
        <div className="container mt-12 ">
          {/* <div className="text-center"> */}
          <div className="d-flex flex-row justify-content-around justify-content-sm-center flex-col">
            {/* <div className="col-sm-auto mb-4 ">
              <div className="row justify-content-center mx-auto">
                <div className="align-self-center  mr-1">
                  <img
                    className="swirl "
                    src="./img/swirl-aboutus.svg"
                    alt=""
                  />
                </div>
                <div className="akad font-play mr-5 ml-5">
                  <h2 className="dark-gray text-center">Akad</h2>
                  <h3 className="text-center light-gray">08:00 WIB</h3>
                </div>
                <div className="align-self-center ml-1">
                  <img
                    className="swirl swirl-akad"
                    src="./img/swirl-aboutus2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div> */}

            <div className="col-sm-auto mb-4">
              <div className="d-flex flex-row justify-content-center mx-auto">
                <div className="align-self-center  mr-1">
                  <img className="swirl" src="./img/swirl-aboutus.svg" alt="" />
                </div>
                <div className="text-center akad align-self-center font-play mr-5 ml-5">
                  <h2 className="dark-gray">Akad</h2>
                  <h4 className="light-gray">08:00 WIB</h4>
                </div>
                <div className="align-self-center ml-1">
                  <img
                    className="swirl"
                    src="./img/swirl-aboutus2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-auto mb-4">
              <div className="d-flex flex-row justify-content-center mx-auto">
                <div className="align-self-center  mr-1">
                  <img className="swirl" src="./img/swirl-aboutus.svg" alt="" />
                </div>
                <div className="text-center akad align-self-center font-play mr-5 ml-5">
                  <h2 className="dark-gray">Live On</h2>
                  <h4 className="light-gray">Instagram</h4>
                </div>
                <div className="align-self-center ml-1">
                  <img
                    className="swirl"
                    src="./img/swirl-aboutus2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-auto">
              <div className="d-flex flex-row justify-content-center mx-auto">
                <div className="align-self-center  mr-1">
                  <img className="swirl" src="./img/swirl-aboutus.svg" alt="" />
                </div>
                <div className="text-center akad align-self-center font-play mr-5 ml-5">
                  <h2 className="dark-gray">
                    Lokasi{" "}
                    <a
                      className="cs-btn dark-gray "
                      href="https://goo.gl/maps/7mE7c1teMhunp8WBA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lihat Map
                    </a>{" "}
                  </h2>
                  <h4 className="light-gray">Kuningan, Jawa Barat</h4>
                </div>
                <div className="align-self-center ml-1">
                  <img
                    className="swirl"
                    src="./img/swirl-aboutus2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row ">
            <div
              id="col-rsvp"
              className="col d-flex flex-col  flex-column pesan-rspv mb-5  mr-3"
            >
              <div id="rsvp" className="row flex-nowrap  mx-auto mb-4">
                <img src="./img/floral-rsvp-img-1.svg" alt="" />
                <h1 className="font-play text-center dark-gray mr-3 ml-3 ">
                  Doa & Pesan
                </h1>
                <img src="./img/floral-rsvp-img-2.svg" alt="" />
              </div>
              <div className="align-self-center mb-5 mt-4">
                <input
                  className="font-play text-center text-name"
                  type="text"
                  placeholder="Tulis Nama Kamu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="pesan-rspv col-sm-12 mt-2">
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
            </div>

            <div className="col pesan-rspv">
              <div className="col d-flex flex-column">
                <div className="d-flex flex-row align-self-center mb-4">
                  <img src="./img/floral-rsvp-img-1.svg" alt="" />
                  <h1 className="font-play text-center dark-gray mr-3 ml-3">
                    Khataman Online
                  </h1>
                  <img src="./img/floral-rsvp-img-2.svg" alt="" />
                </div>
                <div className="align-self-center">
                  <h3 className="font-play dark-gray text-center mb-5">
                    Untuk menambah keberkahan, kami mengundang rekan-rekan untuk
                    online melalui grup
                  </h3>
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
                  <a
                    className="group-btn dark-gray font-play mr-3"
                    href="https://s.id/grupikhwan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gabung Grup
                    <img
                      className="ml-1"
                      src="./img/wa-green.svg"
                      width="24px"
                      alt=""
                    />
                  </a>
                  <a
                    className="group-btn dark-gray font-play"
                    href="https://s.id/grupakhwat"
                    rel="noreferrer"
                    target="_blank"
                  >
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
