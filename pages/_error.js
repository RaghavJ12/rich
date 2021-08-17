import React from 'react';



export async function getServerSideProps(context) {
  return {
    props: {value:'x-error'},
  }
}


function Error({ statusCode }) {
  return (
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
}