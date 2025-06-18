'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Annual Business Summit 2024',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Downtown Convention Center',
    description: "Join industry leaders for a full day of networking, keynote presentations, and workshops focused on business growth and innovation. This premier event brings together entrepreneurs, executives, and thought leaders to share insights and strategies for success in today's competitive market.",
    image: '/placeholder.svg?height=400&width=711',
  },
  {
    id: 2,
    title: 'Digital Marketing Workshop',
    date: 'March 22, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Tech Hub Building A',
    description: 'Learn the latest digital marketing strategies and tools to grow your business online. This hands-on workshop covers social media marketing, email campaigns, SEO basics, and analytics. Perfect for small business owners and marketing professionals looking to enhance their digital presence.',
    image: '/placeholder.svg?height=400&width=711',
  },
  {
    id: 3,
    title: 'Networking Mixer',
    date: 'March 29, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Rooftop Lounge',
    description: 'Connect with fellow business professionals in a relaxed, social atmosphere. Enjoy appetizers and drinks while building valuable relationships that can help grow your business. This informal networking event is perfect for making new connections and strengthening existing partnerships.',
    image: '/placeholder.svg?height=400&width=711',
  },
];

export default function UpcomingEvents() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const selectedEvent = events[selectedEventIndex];

  const goToPrevious = () => {
    setSelectedEventIndex(prev => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedEventIndex(prev => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handleEventChange = (eventId: string) => {
    const index = events.findIndex(event => event.id.toString() === eventId);
    if (index !== -1) {
      setSelectedEventIndex(index);
    }
  };

  return (
    <section className="bg-background w-full py-12">
      <div className="container">
          {/* Tab Navigation */}
          <Tabs value={selectedEvent.id.toString()} onValueChange={handleEventChange} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="h-auto bg-transparent space-x-2">
                {events.map(event => (
                  <TabsTrigger key={event.id} value={event.id.toString()} className="bg-background data-[state=active]:border-brand-accent min-w-[200px] inset-shadow-sm rounded-md border-b-2 px-8 py-4 cursor-pointer data-[state=active]:border-b-2">
                    <p className="text-foreground text-sm font-medium whitespace-nowrap">{event.title}</p>
                    <time className="text-muted-foreground mt-1 text-xs whitespace-nowrap">{event.date}</time>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
          </Tabs>
          {/* Event Content */}
          <div className="grid xl:grid-cols-12 gap-8 xl:gap-12">
            <div className="flex xl:col-span-8 pt-6">
              <div className="w-full">
                  <Link href="#">
                    <Image src={selectedEvent.image || '/placeholder.svg'} alt={selectedEvent.title} width={1920} height={1080}  className="object-cover aspect-video rounded-md" />
                  </Link>
                  <div className='mt-2 space-x-2'>
                    <Button variant="secondary" size="icon" onClick={goToPrevious} aria-label="Previous event">
                      <ChevronLeft />
                    </Button>
                    <Button variant="secondary" size="icon" onClick={goToNext} className="" aria-label="Next event">
                      <ChevronRight  />
                    </Button>
                  </div>
              </div>
            </div>

            <div className="xl:col-span-4 xl:pt-6 prose dark:prose-invert">
              <h3 className="text-xl font-bold lg:text-3xl">{selectedEvent.title}</h3>

              <div className="mb-6 space-y-2">
                <div className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="text-brand-accent h-4 w-4" />
                  <span className="font-medium">{selectedEvent.date}</span>
                </div>

                <div className="text-muted-foreground flex items-center gap-2">
                  <Clock className="text-brand-accent h-4 w-4" />
                  <span className="font-medium">{selectedEvent.time}</span>
                </div>

                  <Link href='#' className="flex items-center gap-2 text-muted-foreground underline-offset-4 hover:underline no-underline">
                    <MapPin className="text-brand-accent h-4 w-4" />
                    <span className="font-medium">{selectedEvent.location}</span>
                  </Link>
              </div>

              <p>{selectedEvent.description}</p>

              <Button size="lg" className="w-full lg:w-auto mt-8">
                Register for This Event
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
}
