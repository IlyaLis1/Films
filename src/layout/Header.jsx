import React from 'react';
import { Layout } from 'antd';
import { AiFillGithub } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';

const Header = () => {
  return (
    <Layout.Header className='h-12'>
      <div className='flex justify-between h-full items-center'>
        <div className='flex justify-between gap-1 items-center'>
          <div className='inline text-white text-2xl'>Movies</div>
          <BiCameraMovie className='text-white text-2xl' />
        </div>
        <AiFillGithub className='text-white text-2xl' />
      </div>
    </Layout.Header>
  );
};

export default Header;