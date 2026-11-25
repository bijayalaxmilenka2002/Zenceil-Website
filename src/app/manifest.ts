import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zenceil Stretch Ceiling Systems',
    short_name: 'Zenceil',
    description: 'Luxury Architectural Stretch Ceilings & Integrated Lighting Systems India',
    start_url: '/',
    display: 'standalone',
    background_color: '#EDE7DC',
    theme_color: '#302820',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

