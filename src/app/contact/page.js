'use client'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

            setSubmitMessage("Thank you. We will get back to you shortly");
            console.log(data);
            // const baseUrl = `/app/contact-route`;
            // const response = await fetch(baseUrl, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ data })
            // });
            // const contactData = await response.json();
            // console.log(contactData);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            Got a question? Use the form to get in touch with us.
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>We are located in:</p>
                                    <p>New York, NY</p>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">info@publictrades.com</span>
                                </dd>
                            </div>
                        </dl>
                        <p className="mt-6 text-base text-gray-500">
                            Looking for careers?{' '}
                            <a href="#" className="font-medium text-gray-700 underline">
                                View all job openings
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    id="phone"
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Message"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className='flex justify-center items-center mt-3'>{submitMessage}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
