import {
  ArrowPathRoundedSquareIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  VariableIcon,
} from '@heroicons/react/24/outline';

export const courses = [
  {
    id: 1,
    title: 'Programming',
    href: 'programming',
    description: '',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    icon: CodeBracketSquareIcon
  },
  {
    id: 2,
    title: 'Variables',
    href: 'variables',
    description: 'Variables are containers for storing data values',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    icon: VariableIcon,
  },
  {
    id: 3,
    title: 'Conditions and Loops',
    href: 'conditions-and-loops',
    description: 'If Statements, For, While and Nested Loops',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    id: 4,
    title: 'Functions',
    href: 'functions',
    description: 'Block of code which only runs when it is called',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    icon: CodeBracketIcon,
  },
  {
    id: 5,
    title: 'Classes and Objects',
    href: 'classes-and-objects',
    description: 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.A Class is like an object constructor, or a "blueprint" for creating objects.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    icon: CodeBracketIcon,
  },
];
