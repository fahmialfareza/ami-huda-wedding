/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { io } from 'socket.io-client';
const socket = io();

function Chat({ data }) {
  const [messages, setMessages] = useState(data);

  socket.on('message', (data) => {
    setMessages(data);
  });

  return (
    <section className="pb-7">
      <div className="container">
        <div className="text-center">
          <img
            className="chat-ornament-top mr-2"
            src="/img/live-chatornament.svg"
            alt=""
          />
          <div
            className="row "
            style={{ overflowY: 'scroll', height: '400px' }}
          >
            <div className="col mx-auto col-md-9 col-sm-3 chat">
              {messages?.length > 0 &&
                messages.map((data) => (
                  <div key={data._id} className="ml-3 mt-3 d-flex flex-row">
                    <img
                      className="align-items-center"
                      src="./img/iconchat.svg"
                      alt=""
                    />
                    <div className="chat ml-5 mr-7 align-items-center">
                      <div className="isipesan bg-pink text-left text-white p-3 rounded">
                        {data.message}
                      </div>
                      <h6 className="text-left pt-3 dark-gray">{data.name}</h6>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <img
            className="chat-ornament-bottom mr-2 "
            src="/img/live-chatornament.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Chat;
