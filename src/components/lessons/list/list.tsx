import React from 'react';

import { Lesson } from '../../types';
import Item from './item';

type ListInput = {
  lessons: Lesson[] | null;
};

const List = ({ lessons }: ListInput) => (
  lessons?.map((lesson) => (
    <Item key={lesson.id} item={lesson} />
  ))
);

export default List;
