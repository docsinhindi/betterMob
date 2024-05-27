"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LOGIN_FORM_SCHEMA } from "@/lib/contact-validation";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterForm = () => {
  const form = useForm<z.infer<typeof LOGIN_FORM_SCHEMA>>({
    resolver: zodResolver(LOGIN_FORM_SCHEMA),
    defaultValues: {
      gmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof LOGIN_FORM_SCHEMA>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="gmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter here*"
                  className="bg-transparent border-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-custom-yellow-start to-custom-yellow-end py-5 px-9 font-semibold"
          >
            Send Now
          </button>
          <div className="flex items-center gap-3">
            <Link className="text-xl text-white" href={""}>
              <FaLinkedin />
            </Link>
            <Link className="text-xl text-white" href={""}>
              <FaTwitter />
            </Link>
            <Link className="text-xl text-white" href={""}>
              <FaFacebook />
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FooterForm;
