import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SingleCertificate from '../../Components/SingleCertificate';

function CertificateScreen() {
  return (
    <>
      <Header hideInput />
      <SingleCertificate />
      <Footer />
    </>
  );
}

export default CertificateScreen;
