import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaFacebook, FaReact, FaNode, FaBootstrap, FaHtml5, FaCss3, FaFigma } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTailwindcss, SiPrisma, SiPostman } from 'react-icons/si';
import { IoLogoGithub, IoMdGlobe } from 'react-icons/io';
import { VscVscode } from 'react-icons/vsc';

export type IconProps = React.SVGProps<SVGSVGElement>;

export const icons = {
  globe: (props: IconProps) => <IoMdGlobe {...props} />,
  github: (props: IconProps) => <IoLogoGithub {...props} />,
  figma: (props: IconProps) => <FaFigma {...props} />,
};

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

  skills: [
    { name: 'JavaScript', icon: DiJavascript },
    { name: 'TypeScript', icon: BiLogoTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3 },
    { name: 'Git', icon: IoLogoGithub },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Vscode', icon: VscVscode },
    { name: 'Postman', icon: SiPostman },
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
  works: [
    {
      company: 'Quijano & Virtudazo Law Office',
      title: 'Secretary',
      location: 'Dapa, Siargao Surigao del Norte',
      start: 'May 2024',
      end: 'Present',
      description:
        'I am responsible for managing correspondence, scheduling appointments, maintaining files, and assisting with legal document preparation.',
      logo: '/csu.png',
      href: '#',
    },
    {
      company: 'Megasoft Hygienic Products, Inc',
      title: 'Roving Merchandizer',
      location: 'Surigao del Norte',
      start: 'July 2022',
      end: 'April 2024',
      description:
        'As a roving merchandiser, I improve product displays, keep shelves stocked, help customers, and follow company rules. I also research market trends, travel to different stores, and teach staff effective merchandising techniques.',
      logo: '/megasoft.jpg',
      href: 'https://megasoft.com.ph/',
    },
    {
      company: 'FoodPanda Rider | Partime (during the pandemic)',
      title: 'Delivery Rider',
      location: 'Surigao del Norte',
      start: 'October 2021',
      end: 'April 2022',
      description:
        'As a Foodpanda rider, I collect and deliver orders on time, communicate with customers, handle payments, maintain equipment, follow safety protocols, manage orders via the app, and keep delivery records.',
      logo: '/foodpanda.png',
      href: 'https://megasoft.com.ph/',
    },
    {
      company: 'Sumaylo Roofing',
      title: 'Roofer or Sub Contractor | Rool Up Door Fabricator',
      location: 'Surigao del Norte',
      start: 'October 2015',
      end: 'September 2021',
      description:
        'Supply and install roof and siding materials for residential, commercial and industrial projects. Fabricate Roll Up Doors.',
      logo: '/sumaylo.jpg',
      href: 'https://www.facebook.com/profile.php?id=100077688507351',
    },
    {
      company: 'Cacayan Roofing',
      title: 'Roofer or Sub Contractor ',
      location: 'Brgy. Luna, Surigao del Norte',
      start: 'March 2011',
      end: 'November 2009',
      description:
        'Supply and install roof and siding materials for residential, commercial and industrial projects',
      logo: '/cacayan.jpg',
      href: 'https://www.facebook.com/cacayanroofingspecialist',
    },
  ],

  projects: [
    {
      title: 'Gadgets E-Shop',
      href: 'https://gadget-e-shop.vercel.app/',
      date: 'June 17 2024',
      description:
        'Ongoing project for Gadget E-Shop with NextJs fully responsive and transform Figma design into code',
      tech: ['React', 'Next Js', 'JavaScript', 'GitHub', 'Vercel', 'Tailwindcss', 'Shadcn Ui'],
      links: [
        {
          type: 'Website',
          href: 'https://gadget-e-shop.vercel.app/',
          icon: <icons.globe />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/dharylovey/Mobile-E-Shop/tree/master',
          icon: <icons.github />,
        },
        {
          type: 'Figma',
          href: 'https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie',
          icon: <icons.figma />,
        },
      ],
      image: '',
      video: '/gadgetshop.mp4',
    },
    {
      title: 'Megasoft Hygienic Products, Inc',
      href: 'https://megasoft-shop.vercel.app/',
      date: 'May 4 2024',
      description: 'Full Stack E-Commerce Shop with NextJs, Sanity.io, and Stripe',
      tech: [
        'React',
        'Next Js',
        'JavaScript',
        'GitHub',
        'Vercel',
        'Tailwindcss',
        'Sanity.io',
        'Stripe',
        'Shadcn Ui',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://megasoft-shop.vercel.app/',
          icon: <icons.globe />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/dharylovey/megasoft-ecommerce/tree/master',
          icon: <icons.github />,
        },
      ],
      image: '',
      video: '/megasoft.mp4',
    },
    {
      title: 'UI/UX Landing Page',
      href: 'https://dharyl-ui-ux.vercel.app/',
      date: 'April 29 2024',
      description: 'UI/UX Landing Page with NextJs, and Tailwindcss',
      tech: ['React', 'Next Js', 'JavaScript', 'GitHub', 'Vercel', 'Tailwindcss'],
      links: [
        {
          type: 'Website',
          href: 'https://dharyl-ui-ux.vercel.app/',
          icon: <icons.globe />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/dharylovey/nextjs-ui-ux/tree/master',
          icon: <icons.github />,
        },
      ],
      image: '',
      video: '/landingpageuiux.mp4',
    },
    {
      title: 'Blog',
      href: 'https://dharyl-blog.vercel.app/',
      date: 'April 20 2024',
      description: 'First Blog with NextJs, Tailwindcss and Sanity.io',
      tech: ['React', 'Next Js', 'JavaScript', 'GitHub', 'Vercel', 'Tailwindcss', 'Sanity.io'],
      links: [
        {
          type: 'Website',
          href: 'https://dharyl-blog.vercel.app/',
          icon: <icons.globe />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/dharylovey/nextjs-blog-web/tree/master',
          icon: <icons.github />,
        },
      ],
      image: '',
      video: '/dharylblog.mp4',
    },
    {
      title: 'Tik Tak Toe',
      href: 'https://tik-tak-toe-delta.vercel.app/',
      date: 'December 28, 2023',
      description: 'First test for react library for learning purposes.',
      tech: ['React', 'JavaScript', 'GitHub', 'Vercel', 'tailwindcss', 'ViteJs'],
      links: [
        {
          type: 'Website',
          href: 'https://tik-tak-toe-delta.vercel.app/',
          icon: <icons.globe />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/dharylovey/tik-tak-toe/tree/master',
          icon: <icons.github />,
        },
      ],
      image: '',
      video: '/tiktaktoe.mp4',
    },
    {
      title: 'Siargao Gateway',
      href: 'https://siargaogateway.onrender.com/',
      date: 'November 2023 - December 2023',
      description:
        'Develop a website to showcase Siargao, enabling tourist to share their vacation experiences. This was my first fullstack project during the bootcamp at KodegoPh.',
      tech: [
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'EJS',
        'MongoDB',
        'Express.js',
        'Node.js',
        'GitHub',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://siargaogateway.onrender.com/',
          icon: <icons.globe />,
        },
      ],
      image: '/siargao-gateway.png',
      video: '',
    },
    {
      title: 'Sumaylo Roofing',
      href: 'https://sumaylo-roofing.pages.dev/',
      date: 'July 2023 - August 2023',
      description: 'I built a static website for Sumaylo Roofing, where I worked before.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'GitHub', 'Cloudflare'],
      links: [
        {
          type: 'Website',
          href: 'https://sumaylo-roofing.pages.dev/',
          icon: <icons.globe />,
        },
      ],
      image: '',
      video: '/sumayloroofing.mp4',
    },
  ],
};
