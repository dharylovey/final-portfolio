import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';

export const DATA = {
  name: 'Dharyl Carry S. Almora',
  initials: 'DA',
  description:
    "As a junior full stack developer, I'm passionate about crafting seamless web applications, proficient in both front-end and back-end technologies.",
  profile:
    'I am passionate and highly motivated career shifter with a strong desire to excel in the field of web development. With a solid foundation in creating dynamic and responsive web applications. Capable of independently handling projects and working collaboratively with the team members.',
  location: 'https://www.google.com/maps/place/siargao',
  avatar: '/my_photo.webp',
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    {
      href: 'https://www.linkedin.com/in/dharyl-carry-almora',
      icon: LinkedInLogoIcon,
      label: 'LinkedIn',
      color: '#0077b5',
    },
    { href: 'https://github.com/dharylovey', icon: GitHubLogoIcon, label: 'Github', color: '#333' },
    {
      href: 'https://www.facebook.com/dharyl2',
      icon: FaFacebook,
      label: 'Facebook',
      color: '#3b5998',
    },
  ],
  skill: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'TailwindCSS',
    'Bootstrap',
    'HTML',
    'CSS',
    'Git',
  ],
  contact: {
    email: 'mdhar1487@gmail.com',
    phone: '09353609957',
    socialMedia: {
      Linkedin: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/dharyl-carry-almora',
        icon: LinkedInLogoIcon,
      },
      Github: {
        name: 'Github',
        url: 'https://github.com/dharylovey',
        icon: GitHubLogoIcon,
      },
      Facebook: {
        name: 'Facebook',
        url: 'https://www.facebook.com/dharyl2',
        icon: FaFacebook,
      },
    },
  },
  education: [
    {
      school: 'Udemy',
      href: 'https://www.udemy.com/certificate/UC-d78cce37-3163-4e0e-9875-2e527112b68b/',
      degree: 'The Web Developer Bootcamp 2024',
      start: 'March 2024',
      end: 'July 2024',
      logo: '/udemy.png',
    },
    {
      school: 'Coursera',
      href: 'https://coursera.org/share/7d0c3aed467d30f4d01e585f6e2e990b',
      degree: 'Meta Frontend Developer Nanodegree',
      start: 'December 2023',
      end: 'March 2024',
      logo: '/coursera.png',
    },
    {
      school: 'KodeGo PH Bootcamp',
      href: 'https://www.kodego.ph/',
      degree: 'Full Stack Web Development',
      start: 'July 2023',
      end: 'December 2023',
      logo: '/kodego.png',
    },
    {
      school:
        'Northern Mindanao State Institute of Science and Technology | Caraga State University',
      href: 'https://www.carsu.edu.ph/',
      degree: 'Bachelor of Science in Computer Science',
      start: '2005',
      end: '2008',
      logo: '/csu.png',
    },
  ],
};
