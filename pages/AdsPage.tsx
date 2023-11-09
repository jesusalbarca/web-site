/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '@src/containers/framerAnimations'
import Icons from '../src/components/Icons/Icons'

const AdsPage: NextPage = ({ isTxtRequest }: { isTxtRequest?: boolean }) => {
    // Si se está solicitando el archivo ads.txt, devuelve el contenido necesario
    if (isTxtRequest) {
      return (
        <div>
          google.com, pub-7217160576021116, DIRECT, f08c47fec0942fa0
        </div>
      );
    }
  
    // Si no es una solicitud de ads.txt, puedes renderizar otro contenido o componente
    return (
      <>
        {/* Aquí se puede colocar el contenido o la estructura de la página para la ruta /ads */}
      </>
    );
  };
  
  AdsPage.getInitialProps = ({ req }: any) => {
    // Verificar si la solicitud es para /ads.txt
    const isTxtRequest = req && req.url === '/ads.txt';
  
    return { isTxtRequest };
  };
  
  export default AdsPage;
