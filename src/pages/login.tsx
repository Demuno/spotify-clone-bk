import React from 'react';
import { GrSpotify } from 'react-icons/gr';
import { getSession, signIn } from 'next-auth/react';

import styles from './login.module.scss';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Streetfy</title>
      </Head>

      <main className={styles.loginPage}>
        <div>
          <h1>Streetfy</h1>
          <p>Quer uma música para dançar enquanto limpa a casa? faça o login e começe a mexer!!</p>
        </div>
        <button onClick={() => signIn('spotify')} type="button"> <a href='http://localhost:8888'>
          Login com o Spotify
          {' '}
          <GrSpotify />
        </a></button>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/', 
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
}