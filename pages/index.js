import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import Mempelai from '../components/Mempelai';
import WalimatulUrsy from '../components/WalimatulUrsy';
import Akad from '../components/Akad';
import Chat from '../components/Chat';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Backsound from '../components/Backsound';

export default function Home({ messages }) {
  return (
    <>
      <Head>
        <title>Ami & Huda Wedding</title>
        <meta name="title" content="Ami & Huda Wedding" />
      </Head>

      <ToastContainer />

      <Header />

      <Mempelai />

      <WalimatulUrsy />

      <Akad />

      <Chat data={messages} />

      <Card />

      <Backsound />

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.API_URL);
  let messages = await res.json();
  messages = messages.data;

  return {
    props: {
      messages,
    },
  };
}
