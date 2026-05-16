import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  title: "Matteo Zanatta's blog",
  description: 'Notes, thoughts and reflections on my software engineering journey.',
  siteUrl: 'https://matteozanatta.dev',
  author: {
    name: 'Matteo Zanatta',
    bio: 'Back-end GIS software engineer, always ready to learn and find elegant solutions to complex problems.',
  },
  nav: [
    { label: 'Writing', href: '/' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
  ],
  socials: {
    github: 'https://github.com/matteozanatta',
    linkedin: 'https://www.linkedin.com/in/matteo-zanatta-669443153',
  },
  postsPerPage: 5,
  analytics: {
    umami: {
      websiteId: '',
      src: '',
    },
  },
  rss: {
    title: "Matteo Zanattas's Blog",
    description: 'Notes, thoughts and reflections on my software engineering journey.',
  },
};
