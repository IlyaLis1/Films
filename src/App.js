import { Layout } from 'antd';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  return (
    <>
      <Layout className='min-h-[100vh]'>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
