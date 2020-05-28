import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import Router from 'next/router';

const Index = (): ReactElement => {
  let loginStatus: string | null = '';

  useEffect(() => {
    loginStatus = localStorage.getItem('email');
    if (!loginStatus) Router.replace('/registration', 'registration');
  }, []);

  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
    </>
  );
};

export default Index;
