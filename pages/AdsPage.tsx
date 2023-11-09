/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

const AdsPage: NextPage = () => {
  return (
    <div>
      {/* Aquí puedes definir la estructura de tu página de anuncios */}
      <p>Contenido de la página de anuncios.</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Obtener la ruta solicitada
  const { url } = req;

  // Verificar si la solicitud es para /ads.txt
  if (url === '/ads.txt') {
    // Establecer el contenido para /ads.txt
    res.setHeader('Content-Type', 'text/plain');
    res.write('google.com, pub-7217160576021116, DIRECT, f08c47fec0942fa0');
    res.end();

    // Devolver un objeto vacío ya que no hay datos para cargar en la página /ads
    return {
      props: {},
    };
  }

  // Si la solicitud no es para /ads.txt, se carga la página normal
  return {
    props: {},
  };
};

export default AdsPage;
