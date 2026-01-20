import React from 'react';

import List from '../../components/lessons/list';
import Empty from '../../components/lessons/empty';

import { lessons } from './constants';

const Lessons = () => (
  <div className="container">
    <h1 className='text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl mb-10'>Lessons page</h1>
    <div className='bg-gray-900 py-10'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 text-lg/8 text-gray-300">Learn how to grow in python topics quickly.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {lessons.length > 0 ? <List lessons={lessons}/> : <Empty />}
        </div>
      </div>
    </div>
  </div>
);

export default Lessons;
