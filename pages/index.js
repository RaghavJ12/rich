import Head from 'next/head'
import React from 'react';
import { getSession } from 'next-auth/client';
import Login from '../components/Login';

export default function Home({session}) {

  if(!session)
  return <Login />;

  return (
    <Head>
      <title>Welcome</title>
    </Head>
  )
}

export async function getServerSideProps(context){
  const session=await getSession(context);

  return{
    props:{
      session
    }
  }
}