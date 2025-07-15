import { Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const team = [
  {
    name: 'David Forren',
    role: 'Founder / CEO',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=533&q=80',
  },
  {
    name: 'Amil Evara',
    role: 'UI/UX Designer',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=533&q=80',
  },
  {
    name: 'Ebele Egbuna',
    role: 'Support Consultant',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=533&q=80',
  },
  {
    name: 'Maria Powers',
    role: 'Director of sales',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=533&q=80',
  },
];

export default function LecturersGrid() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
      {/* Title */}
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">Meet our team</h2>
        <p className="text-muted-foreground mt-1 text-lg">The amazing people behind the scenes</p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map(member => (
          <Card key={member.name} className="group relative overflow-hidden p-0 transition-shadow hover:shadow-lg">
            <CardContent className="!p-0">
              <div className="relative">
                <Image className="aspect-[3/4] w-full object-cover" src={member.image} alt={member.name} width={320} height={420} />
                <div className="from-background/80 to-background/0 absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm">{member.bio}</p>
                  <div className="mt-3 flex gap-1">
                    <Button size="icon" variant="secondary">
                      <Twitter className="size-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Github className="size-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Linkedin className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}
