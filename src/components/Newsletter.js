"use client";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const copy = () => {
    const currentYear = new Date().getFullYear();
    const companyName = "PublicTrades, LLC.";

    return (
      <span>
        A product of {companyName}, &copy; {currentYear} {companyName}. All
        rights reserved.{" "}
        <Link href="/privacy" className="text-slate-400 hover:text-slate-300">
          Privacy Policy
        </Link>
        <span className="text-slate-400"> | </span>
        <Link href="/contact" className="text-slate-400 hover:text-slate-300">
          Contact Us
        </Link>
      </span>
    );
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setSubmitMessage("Yippie! See you soon in you inbox");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-black py-4 sm:py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Get the latest information about cool products and services we are
              working on, industry trends, and interesting tools/gadgets.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={email}
                  required
                  className="min-w-0 mr-4 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none mt-1 rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-3">
                <p className="text-white">{submitMessage}</p>
              </div>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Subscribe to our weekly newsletter for the latest news and
                updates.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We respect your inbox. We will never spam you, and you can
                unsubscribe anytime.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#181114] to-[#2a2a2b] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mt-6 pt-3 border-t border-gray-200">
        <p className="text-base flex justify-center text-gray-400 xl:text-center">
          {copy()}
        </p>
      </div>
    </div>
  );
}
