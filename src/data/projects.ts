export type ThumbColor = 'wishin' | 'hctp' | 'crafty';

export interface Project {
  id: string;
  title: string;
  thumbColor: ThumbColor;
  thumbnail: string;
  repoUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'wishin',
    title: 'Wishin',
    thumbColor: 'wishin',
    thumbnail: '../assets/images/wishin.webp',
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
    thumbnail: '../assets/images/hctp.webp',
    repoUrl: 'https://github.com/ZoePorta/hctp-web-v2',
    liveUrl: 'https://hctp.band',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Cloudinary', 'SEO'],
  },
  {
    id: 'crafty',
    title: 'Crafty',
    thumbColor: 'crafty',
    thumbnail: '../assets/images/crafty.webp',
    repoUrl: 'https://github.com/ZoePorta/Crafty',
    videoUrl: 'youtube.com/watch?v=IW_JL3xhFac&feature=youtu.be',
    tags: ['Vue.js', 'Express', 'MySQL', 'REST API', 'Full-Stack'],
  },
];
