import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer className='bg-gray-400 text-center'>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Layout.Footer>
  );
};

export default Footer;