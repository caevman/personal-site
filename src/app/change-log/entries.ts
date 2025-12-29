import type { ChangeLogEntryProps } from './ChangeLogEntry';

export const entries: ChangeLogEntryProps[] = [
  {
    date: 'December 29, 2025',
    summary: 'Improved navigation and layout polish.',
    groups: [
      {
        title: 'Added',
        items: [
          'Navigation bar',
          'Change Log page and contents',
          'prettier formatting',
        ],
      },
      {
        title: 'Improved',
        items: ['CSS project structure'],
      },
      {
        title: 'Fixed',
        items: ['Heading font sizes not applying correctly'],
      },
    ],
  },
  {
    date: 'December 23, 2025',
    summary: 'Removed Next.js bloat, created hero page and deployed site.',
    groups: [
      {
        title: 'Added',
        items: [
          'Hero Page',
          'Change Log page and contents',
          'custom change log entry component',
          'custom websit domain and deployment',
        ],
      },
      {
        title: 'Improved',
        items: ['Project structure, removing extra Next.js bloat'],
      },
      {
        title: 'Fixed',
        items: ['Vulnerabilities'],
      },
    ],
  },
  {
    date: 'November 28, 2025',
    summary: 'Initialize repository.',
    groups: [
      {
        title: 'Added',
        items: ['Initial Next.js app'],
      },
      {
        title: 'Improved',
        items: [
          'Sticky navigation bar on desktop',
          'Spacing adjustments for better readability',
        ],
      },
      {
        title: 'Fixed',
        items: ['Heading font sizes not applying correctly'],
      },
    ],
  },
];
