export type ThumbColor = 'wishin' | 'hctp' | 'crafty';

export interface Project {
  id: string;
  title: string;
  thumbColor: ThumbColor;
  repoUrl: string;
  liveUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'wishin',
    title: 'Wishin',
    thumbColor: 'wishin',
    repoUrl: 'https://github.com/ZoePorta/wishin',
    liveUrl: 'https://wishin.es',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Clean Architecture',
      'TDD',
      'DDD',
      'CI/CD',
    ],
  },
  {
    id: 'hctp',
    title: 'Here Comes The Pain',
    thumbColor: 'hctp',
    repoUrl: 'https://github.com/ZoePorta/hctp-web-v2',
    liveUrl: 'https://hctp.band',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Cloudinary', 'SEO'],
  },
  {
    id: 'crafty',
    title: 'Crafty',
    thumbColor: 'crafty',
    repoUrl: 'https://github.com/ZoePorta/Crafty',
    tags: ['Vue.js', 'Express', 'MySQL', 'REST API', 'Full-Stack'],
  },
];
