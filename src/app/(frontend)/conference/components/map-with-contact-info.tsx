'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { SocialIconsOnly } from '@/components/SocialLinks';
import { ContactsProps } from '@/payload-types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from './types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { sendInquiry } from '../../contact/actions/send-inquiry';
import { useState } from 'react';

export default function MapWithContactInfo({ contactsData }: { contactsData: ContactsProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });
  return (
    <section className="container py-16">
      <div className="mb-8 text-center">
        <h3 id="локация" className="text-h3-size mb-2">
          {contactsData.title || 'Контакти'}
        </h3>
        <p className="text-muted-foreground mx-auto max-w-2xl">{contactsData.subheading || 'Свържете се с нас'}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Map Section - 3/5 width on large screens */}
        <div className="bg-muted h-[400px] overflow-hidden rounded-lg lg:col-span-3 lg:h-full">
          <iframe src={contactsData.gmaps || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948552!3d37.75781499651705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619806204562!5m2!1sen!2sus'} className="h-full w-full border-0" loading="lazy" title="Карта" allowFullScreen></iframe>
        </div>

        {/* Contact Information - 2/5 width on large screens */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardContent>
              <h4 className="my-6 text-xl font-semibold">Контакти</h4>

              <div className="mb-8 space-y-4">
                {contactsData.address && (
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 size-5 flex-shrink-0" />
                    <div className="ml-3">
                      <h5 className="font-medium">Адрес</h5>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{contactsData.address}</p>
                    </div>
                  </div>
                )}

                {contactsData.phones && contactsData.phones.length > 0 && (
                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 size-5 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium">Телефон</h4>
                      {contactsData.phones
                        .filter(phone => phone.phone)
                        .map((phone, index) => (
                          <a key={index} href={`tel:${phone.phone}`} className="text-muted-foreground hover:text-primary block text-sm transition-colors">
                            {phone.phone}
                          </a>
                        ))}
                    </div>
                  </div>
                )}

                {contactsData.emails && contactsData.emails.length > 0 && (
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 size-5 flex-shrink-0" />
                    <div className="ml-3">
                      <h5 className="font-medium">Имейл</h5>
                      {contactsData.emails
                        .filter(email => email.email)
                        .map((email, index) => (
                          <a key={index} href={`mailto:${email.email}`} className="text-muted-foreground hover:text-primary block text-sm transition-colors">
                            {email.email}
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mini Contact Form */}
              <div className="border-t pt-6">
                <h5 className="mb-4 font-medium">{contactsData.cta || 'Изпратете съобщение'}</h5>
                <Form {...form}>
                  <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(async (formData: z.infer<typeof contactSchema>) => {
                      //don't forget error handling
                      setIsLoading(true);
                      const result = await sendInquiry(formData);
                      console.log('result :', result);
                      if (!result.success) {
                        const { error } = result;
                        form.setError('message', { message: error });
                        console.error(error);
                        setIsLoading(false);
                        return;
                      }
                      setSuccessMsg(result.message);
                      setIsLoading(false);
                    })}
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only" htmlFor="email">
                            Имейл
                          </FormLabel>
                          <FormControl>
                            <Input type="email" required id="email" placeholder="Вашия имейл" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only" htmlFor="message">
                            Съобщение
                          </FormLabel>
                          <FormControl>
                            <Textarea id="message" placeholder="Вашето съобщение" rows={3} className="resize-none" required {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button disabled={isLoading || !!successMsg} type="submit" className="w-full">
                      {isLoading ? <LoaderCircle className="animate-spin" /> : successMsg || contactsData.cta || 'Изпрати'}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Social Links */}
              {contactsData.socials && contactsData.socials.length > 0 && (
                <div className="mt-6 border-t pt-6">
                  <SocialIconsOnly
                    socials={contactsData.socials
                      .filter(social => social.platform && social.url)
                      .map(social => ({
                        platform: social.platform!,
                        url: social.url!,
                      }))}
                    className="justify-center"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
