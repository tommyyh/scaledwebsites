import React, { useEffect, useState } from 'react';
import 'assets/scss/resets.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import Loading from 'components/Loading/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (lang) {
      setLoading(false); // Set to true to edit Loading screen
    }
  }, [lang]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar lang={lang} langCode={langCode} isDesktop={isDesktop} />
      <Landing lang={lang} langCode={langCode} isDesktop={isDesktop} />
    </>
  )
}

export default Home