'use client'
import { Fragment } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
    { name: "Products", href: "/#products" },
    { name: "Features", href: "#" },
    { name: "Contact us", href: "/contact" },
];

const Navbar = () => {
    return (
        <div className="h-10 fixed z-20 bg-white w-full flex items-center">
            <Popover>
                <nav
                    className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
                    aria-label="Global"
                >
                    <div className="flex flex-1 items-center">
                        <div className="flex w-full items-center justify-between md:w-auto">
                            <Link href="/">
                                <span className="sr-only">PublicTrades</span>
                                <Image
                                    className="h-8 w-[116px] rounded sm:h-6"
                                    width={100}
                                    height={50}
                                    src="/images/logo.png"
                                    alt="logo"
                                />
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="hidden space-x-10 md:ml-10 md:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-medium text-black hover:text-gray-600"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <Image
                                        className="h-8 w-[170px] rounded"
                                        src="/images/logo.png"
                                        alt="logo"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default Navbar