import { Card, CardContent } from '@/components/ui/card';
import { LecturersProps } from '@/payload-types';
import Image from 'next/image';

const team: LecturersProps['lecturers'] = [
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

export default function LecturersGrid({ lecturersProps }: { lecturersProps: LecturersProps }) {
  const { title = 'Meet our team', subheading = 'The amazing people behind the scenes', lecturers = team } = lecturersProps;
  return (
    <div className="container py-16">
      {/* Title */}
      <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
        <h3 id="лектори" className="text-h3-size mb-2 text-center">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg">{subheading}</p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:px-40">
        {lecturers.map(({ name, image, bio, role }, index) => (
          <Card key={index} className="group relative overflow-hidden p-0 transition-shadow hover:shadow-lg">
            <CardContent className="!p-0">
              <div className="relative">
                {typeof image !== 'string' && <Image className="aspect-[3/4] w-full object-cover" src={image.url ? image.url : ''} alt={name || 'няма име'} width={image.width || 320} height={image.height || 420} />}
                <div className="from-background/80 to-background/0 absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity group-hover:opacity-100" />
                {bio && (
                  <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm">{bio}</p>
                    {/* <div className="mt-3 flex gap-1">
                    <Button size="icon" variant="secondary">
                      <Twitter className="size-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Github className="size-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Linkedin className="size-4" />
                    </Button>
                  </div> */}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-medium">{name}</h4>
                <p className="text-muted-foreground mt-1 text-sm">{role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}
