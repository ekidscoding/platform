import React from 'react';
import { Link } from 'react-router';

import { courses } from './constants';

const Courses = () => (
  <div className="container">
    <h1 className='text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl mb-10'>Courses page</h1>
    <div className='bg-gray-900 py-10'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 text-lg/8 text-gray-300">Learn how to grow in python topics quickly.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={course.datetime} className="text-gray-400">
                  {course.date}
                </time>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <Link className='-m-1.5 p-1.5 flex' to={`${course.href}`}>
                    <course.icon aria-hidden='true' className='size-6 text-gray-400 group-hover:text-white mr-5' />
                    {course.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{course.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Courses;
