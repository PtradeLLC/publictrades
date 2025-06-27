"use client";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/themes";
import Projects from "../../components/Projects";
import Newsletter from "../../components/Newsletter";
import ProjectList from "../../components/ProjectList";
import AllProjects from "../../components/AllProjects";

export default function Dashboard() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleShowAllProjects = () => setShowAllProjects(true);
  const handleBackToCategories = () => setShowAllProjects(false);
  return (
    <div className="relative overflow-hidden bg-gray-100  ">
      <div
        className="hidden sm:absolute sm:inset-0 sm:block"
        aria-hidden="true"
      ></div>
      <div className="relative pt-6">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="">
                  <div className="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                    <Link
                      href="#"
                      className="flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-slate-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        Partner with us
                      </span>
                      <span className="ml-4 text-sm">Work with us</span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                    Developing overlooked ideas into Useable products
                  </h1>
                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Ever had a need for an app service that does not exist and
                    wished someone had it built already - We do too.
                  </p>
                  <p className="mt-8 text-base font-semibold text-slate-500 sm:mt-10">
                    Our products are used by
                  </p>
                  <span className="flex justify-between">
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-2xl lg:ml-0">
                      <div className="flex flex-wrap items-start justify-between">
                        <div className="flex justify-center px-1">
                          <span className="font-extrabold text-blue-800">
                            <button onClick={handleShowAllProjects}>
                              All Projects
                            </button>
                          </span>
                        </div>
                        <div className="flex justify-center px-1">
                          <span className="font-extrabold text-slate-600">
                            Private Sector
                          </span>
                        </div>
                        <div className="flex justify-center px-1">
                          <span className="font-extrabold text-slate-600">
                            Government Agencies
                          </span>
                        </div>
                        <div className="flex justify-center px-1">
                          <span className="font-extrabold text-slate-600">
                            Consumer Markets
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <AspectRatio ratio={16 / 8}>
                    <img
                      id="heroimg"
                      src="/images/image0ne.png"
                      alt="hero-image"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        borderRadius: "var(--radius-2)",
                      }}
                    />
                  </AspectRatio>
                  <div className="border-t-2 border-gray-200 bg-gray-50 px-6 py-6 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <Link
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Terms
                      </Link>
                      <Link
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Data Policy
                      </Link>
                      and
                      <Link
                        href="#"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Cookies Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {showAllProjects ? (
                <AllProjects
                  projects={ProjectList}
                  onBack={handleBackToCategories}
                />
              ) : (
                <Projects />
              )}
            </div>
            <div>
              <Newsletter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
