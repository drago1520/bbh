"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { LoaderCircle, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "../types";
import { FloatingLabelInput } from "@/components/ui/floating-label";
import { ReactNode, useState } from "react";
import { addAttendee } from "../actions/add-attendee";

export default function SignUpDialog({
  eventId,
  children,
}: {
  eventId: string;
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(
              async (user: z.infer<typeof signUpSchema>) => {
                //don't forget error handling
                setIsLoading(true);
                const result = await addAttendee({ ...user, eventId });
                console.log("result :", result);
                if (!result.success) {
                  setIsLoading(false);
                  form.setError("email", { message: result.error });
                }
                setIsLoading(false);
              },
            )}
          >
            <div className="space-y-8">
              <DialogHeader>
                <DialogTitle>Запиши се за нетуъркинг събитието</DialogTitle>
                <DialogDescription>
                  Въведете имейл или кликнете на бутоните долу, за да получите
                  покана.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          error={fieldState.invalid}
                          disabled={isLoading}
                          id="name"
                          label="Име"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-4">
                          <FloatingLabelInput
                            error={fieldState.invalid}
                            disabled={isLoading}
                            label="Имейл"
                            id="email"
                            type="email"
                            {...field}
                          />
                          <Button className="min-w-24" disabled={isLoading}>
                            {!isLoading ? (
                              "Изпрати"
                            ) : (
                              <LoaderCircle className="animate-spin" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                      <FormDescription>
                        Проверете дали сте получили имейла.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="flex-row justify-end gap-6 saturate-80">
                <DialogClose asChild>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="#">
                      <Image
                        src="/google-calendar.svg"
                        alt="Google календар покана"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button asChild variant="ghost" size="icon">
                    <Link href="#">
                      <Image
                        src="/apple-calendar.png"
                        alt="Apple календар покана"
                        width={40}
                        height={40}
                      />
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
