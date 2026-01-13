import {
  VariableIcon,
  CodeBracketSquareIcon,
  ArrowPathRoundedSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

export const products = [
  { name: 'Programming', description: '', href: '#', icon: CodeBracketSquareIcon },
  { name: 'Variables', description: 'Variables are containers for storing data values', href: '#', icon: VariableIcon },
  { name: 'Conditions and Loops', description: 'If Statements, For, While and Nested Loops', href: '#', icon: ArrowPathRoundedSquareIcon },
  { name: 'Functions', description: 'Connect with third-party tools', href: '#', icon: CodeBracketIcon },
  { name: 'Classes and Objects', description: 'Build strategic funnels that will convert', href: '#', icon: CodeBracketIcon },
];

export const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact admin', href: '#', icon: PhoneIcon },
];
