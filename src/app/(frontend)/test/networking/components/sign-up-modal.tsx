'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export default function SignUpDialog() {
  const signUpSchema = z.object({ email: z.string().email({ message: 'Невалиден имейл. Трябва да има @ и .' }) });
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          ЗАПИШИ СЕ <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async ({ email }: z.infer<typeof signUpSchema>) => {
              //don't forget error handling
            })}
          >
            <div className="space-y-12">
              <DialogHeader>
                <DialogTitle>Запиши се за нетуъркинг събитието</DialogTitle>
                <DialogDescription>Въведете имейл или кликнете на бутоните долу, за да получите покана.</DialogDescription>
              </DialogHeader>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Имейл</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input id="email" type="email" placeholder="ivanov@gmail.com" {...field} />
                        <Button>Изпрати</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                    <FormDescription>Проверете дали сте получили имейла.</FormDescription>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="#">
                      <Image src="/google-calendar.svg" alt="Google календар покана" className="size-6" width={40} height={40} />
                    </Link>
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="#">
                      <Image src="/Apple_Calendar.svg" alt="Apple календар покана" className="size-6" width={40} height={40} />
                    </Link>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
