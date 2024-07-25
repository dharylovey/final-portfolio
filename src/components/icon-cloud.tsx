import IconCloud from '@/components/magicui/icon-cloud';
import BlurFade from './magicui/blur-fade';

const skill = [
  'typescript',
  'javascript',
  'react',
  'android',
  'html5',
  'css3',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'figma',
  'mysql',
  'tailwindcss',
  'bootstrap',
  'nodejs',
  'heroku',
];

export function IconCloudSkill() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-screen-lg items-center justify-center overflow-hidden bg-background px-20 pb-20">
      <BlurFade delay={0.5}>
        <IconCloud iconSlugs={skill} />
      </BlurFade>
    </div>
  );
}
