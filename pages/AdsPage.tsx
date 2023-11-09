import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const AdsPage: React.FC = () => {
  const router = useRouter();

  // Cuando la página AdsPage se carga, verifica si la ruta es /ads y redirige a /ads.txt
  React.useEffect(() => {
    if (router.pathname === '/ads') {
      window.location.href = '/ads.txt';
    }
  }, [router.pathname]);

  return (
    <div>
      {/* Aquí puedes definir la estructura de tu página de anuncios */}
      <p>Contenido de la página de anuncios.</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Establecer el contenido para /ads.txt
  res.setHeader('Content-Type', 'text/plain');
  res.write('google.com, pub-7217160576021116, DIRECT, f08c47fec0942fa0');
  res.end();

  // Devolver un objeto vacío ya que no hay datos para cargar en la página /ads
  return {
    props: {},
  };
};

export default AdsPage;
