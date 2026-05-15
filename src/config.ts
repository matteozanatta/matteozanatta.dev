import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  title: "Matteo's blog",
  description: 'Notes, thoughts and reflections on my software engineering journey.',
  siteUrl: 'https://matteozanatta.dev',
  author: {
    name: 'Matteo Zanatta',
    bio: "Somewhere between a junior and someone who knows what they're doing..",
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
    title: "Matteo's Blog",
    description: 'Notes, thoughts and reflections on my software engineering journey.',
  },
};
