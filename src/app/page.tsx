import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import TypingAnimation from '@/components/magicui/typing-animation';
import { Particle } from '@/components/particles';
import { MyCard } from '@/components/my-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center space-y-8 py-36">
      <Particle />
      <section id="hero">
        <div className="mx-auto w-full max-w-screen-lg space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-4">
              <BlurFade>
                <TypingAnimation
                  text={`Hi, I'm ${DATA.name.split(' ')[0]} `}
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
                // badges={work.badges}
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
                <Badge className="dark:text-invert">{skill.name}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
