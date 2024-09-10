import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import TypingAnimation from '@/components/magicui/typing-animation';
import { Particle } from '@/components/particles';
import { MyCard } from '@/components/my-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/data';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/components/project';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="mx-auto flex flex-col justify-center space-y-8 py-36">
        <Particle />
        <section id="hero">
          <div className="mx-auto w-full max-w-screen-lg space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col space-y-4">
                <BlurFade>
                  <TypingAnimation
                    text={`Hi, I'm ${DATA.name.split(' ')[0]} ✨`}
                    className="text-start text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  />
                </BlurFade>
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={0.4}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={0.5}>
                <Avatar className="size-28 border md:size-48">
                  <AvatarImage alt={DATA.name} src={DATA.avatar} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="profile">
          <BlurFade delay={0.6}>
            <h2 className="text-xl font-bold">Profile</h2>
          </BlurFade>
          <BlurFade delay={0.7}>
            <p className="max-w-full text-pretty font-sans text-sm text-muted-foreground md:text-lg">
              {DATA.profile}
            </p>
          </BlurFade>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={0.8}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={0.9}>
                <MyCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logo}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={1}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.works.map((work, id) => (
              <BlurFade key={work.company} delay={1}>
                <MyCard
                  key={work.company}
                  logoUrl={work.logo}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  period={`${work.start} - ${work.end ?? 'Present'}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={1}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={1.01}>
                  <div>
                    <Badge className="dark:text-invert h-6 gap-2">
                      {skill.icon && <skill.icon />} {skill.name}
                    </Badge>
                  </div>
                </BlurFade>
              ))}
            </div>
            {/* <IconCloudSkill /> */}
          </div>
        </section>
        <section id="projects">
          <div className="w-full space-y-4 py-12">
            <BlurFade delay={1.1}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="">
                  <div className="text-xl font-bold">My Projects</div>
                  {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web
                  applications. Here are a few of my favorites.
                </p> */}
                </div>
              </div>
            </BlurFade>
            <div className="mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {DATA.projects.map((project) => (
                <BlurFade key={project.title} delay={1.5}>
                  <Project
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.date}
                    tags={project.tech}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
}
