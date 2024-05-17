"use client"

import React from "react";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/components/Icons";

import { useForm } from "react-hook-form";
import Link from "next/link";
const Footer = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">Interesting Stories | Updates | Guides</h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength:80 })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-0"
        />

        <input type="submit" className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1" />
      </form>
      <div className="flex items-center mt-8">
        <a href='/' className='inline-block h-6 w-6 mr-4 '><LinkedinIcon  className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href='/' className='inline-block h-6 w-6 mr-4 ' ><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href='/' className='inline-block h-6 w-6 mr-4 fill-light'><GithubIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href='/' className='inline-block h-6 w-6 mr-4 '><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>
      <div className="w-full mt-24 font-medium border-t border-solid border-light px-8 py-6 flex flex-row items-center justify-between">
        <span className="text-center">
            &copy;© 2024 Biz4group. All rights reserved.
        </span>
        <Link href="/sitemap.xml" className="text-center underline">
            sitemap.xml
        </Link>
        <div className="text-center">
            Made with &hearts; by Prashant
        </div>
      </div>
    </footer>
  );
};

export default Footer;
