/* istanbul ignore file */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { appSelector } from '../../Redux/App/App.selectors';
import { CertificateProps } from '../../Components/Certificate/index.types';
import { fetchCertificates } from '../../Redux/App/App.actions';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loading from '../../Components/Loading';
import SingleCertificate from '../../Components/SingleCertificate';

function CertificateScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { certificates, loading } = useSelector(appSelector);

  const [certificate, setCertificate] = React.useState<CertificateProps>();
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (certificates.length === 0) {
      dispatch(fetchCertificates);
    } else {
      setCertificate(certificates.find((c) => c.id === id));
      setLoaded(true);
    }
  }, [dispatch, certificates, id]);

  const renderUndefinedCertificate = () => <Navigate to="/" replace />;

  const renderContent = () =>
    !certificate && loaded ? (
      renderUndefinedCertificate()
    ) : (
      <>{certificate && <SingleCertificate certificate={certificate} />})</>
    );

  return (
    <>
      <Header hideInput />
      {loading ? <Loading /> : renderContent()}
      <Footer />
    </>
  );
}

export default CertificateScreen;
