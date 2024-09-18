"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { json } from "stream/consumers";

const formSchema = z.object({
  email: z.string().min(1, "Email is required"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Your message is required"),
});
type contactForm = z.infer<typeof formSchema>;

const FormContact = () => {
  const form = useForm<contactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (e: contactForm) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.name,
        email: e.email,
        message: e.message,
      }),
    });
    console.log(await response.json());
  };
  return (
    <div className=" p-[30px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem className="  border-t border-b py-[30px]">
                <FormLabel className=" text-[20px] font-[eczar]">What&apos;s your name?</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className=" border-none shadow-none focus:bg-transparent" placeholder="John Doe*" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="  border-t border-b py-[30px]">
                <FormLabel className=" text-[20px] font-[eczar]">What&apos;s your email?</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className=" border-none shadow-none" placeholder="john@doe.com" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem className=" h-full border-t pt-[30px]">
                <FormLabel className=" text-[20px] font-[eczar]">Your message</FormLabel>
                <FormControl>
                  <Textarea {...field} className="resize-none focus:ring-0 border-none shadow-none" placeholder="Hello Agung, can you help me with ...* " rows={8} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className=" w-full relative border-t h-[1px] mt-[20px]">
            <Button type="submit" className=" absolute top-[-50px] right-10 w-[100px] h-[100px] rounded-full">
              Send it
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
