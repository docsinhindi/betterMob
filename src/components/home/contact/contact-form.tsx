"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { LOGIN_FORM_SCHEMA } from "@/lib/contact-validation";
import { Textarea } from "../../ui/textarea";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";


interface ContactFormType extends z.infer<typeof LOGIN_FORM_SCHEMA> {
  feedback: string;
}

const AuthLoginForm = () => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: {
      gmail: "",
      name: "",
      feedback: " ",
    },
  });

  const [successMessage, setSuccessMessage] = useState(false); // State variable to manage success message display

 async function onSubmit(values: ContactFormType) {
    console.log(values);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
    });
   form.reset();
   if (response.ok) {
    setSuccessMessage(true); // Set success message state to true if the message is sent successfully
      form.reset(); // Reset the form after the message is sent
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
   } else {

   }
  }

  return (
    <div>
      {successMessage && (
        <div className="mb-3 bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded-md shadow-md">
        <p>Message sent successfully!</p>
      </div>
      )}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-md border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="rounded-md border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="rounded-md border-none h-96"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="bg-dark-blue py-4 px-6 rounded-lg flex items-center gap-5 text-white"
        >
          Send message <IoIosArrowForward />
        </button>
      </form>
    </Form>
    </div>
  );
};

export default AuthLoginForm;
