import { Link } from 'react-router';
import React from 'react';

import { Lesson } from '../../../types';

type ItemInput = {
  item: Lesson | null;
};

const Item = ({ item }: ItemInput) => (
  <article key={item?.id} className="flex max-w-xl flex-col items-start justify-between">
    <div className="flex items-center gap-x-4 text-xs">
      <time dateTime={item?.datetime}>
        {item?.date}
      </time>
    </div>
    <div className="group relative grow">
      <h3 className="mt-3 text-lg/6 font-semibold group-hover:underline">
        <Link className="-m-1.5 p-1.5 flex" to={`${item?.href}`}>
          {item && <item.icon aria-hidden="true" className="size-6 mr-5"/>}
          {item?.title}
        </Link>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm/6">{item?.description}</p>
    </div>
  </article>
);

export default Item;
