import React from 'react';

export type Icon = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;

export type Lesson = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string,
  datetime: string;
  icon: Icon;
};
