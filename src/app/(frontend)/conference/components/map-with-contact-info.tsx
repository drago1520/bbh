import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SocialIconsOnly } from '@/components/SocialLinks';

interface ContactsData {
  title?: string | null;
  subheading?: string | null;
  gmaps?: string | null;
  cta?: string | null;
  address?: string | null;
  phones?: Array<{ phone?: string | null; id?: string | null }> | null;
  emails?: Array<{ email?: string | null; id?: string | null }> | null;
  socials?: Array<{ platform?: string | null; url?: string | null; id?: string | null }> | null;
}

interface MapWithContactInfoProps {
  contactsData: ContactsData;
}

export default function MapWithContactInfo({ contactsData }: MapWithContactInfoProps) {
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
          <iframe src={contactsData.gmaps || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948552!3d37.75781499651705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619806204562!5m2!1sen!2sus'} className="h-full w-full border-0" loading="lazy" title="Location map" allowFullScreen></iframe>
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
                      <h5 className="font-medium">Address</h5>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{contactsData.address}</p>
                    </div>
                  </div>
                )}

                {contactsData.phones && contactsData.phones.length > 0 && (
                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 size-5 flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium">Phone</h4>
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
                      <h5 className="font-medium">Email</h5>
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
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="quick-email" className="sr-only">
                      Email
                    </Label>
                    <Input id="quick-email" type="email" placeholder="Вашия имейл" required />
                  </div>
                  <div>
                    <Label htmlFor="quick-message" className="sr-only">
                      Message
                    </Label>
                    <Textarea id="quick-message" placeholder="Вашето съобщение" rows={3} className="resize-none" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send
                  </Button>
                </form>
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
