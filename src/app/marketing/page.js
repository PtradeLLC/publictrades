import ProjectList from '../_components/ProjectList';
import Image from 'next/image';
import { AspectRatio } from "@radix-ui/themes";
import { Link1Icon } from "@radix-ui/react-icons";

const Marketing = () => {
    return (
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Marketing
                    </p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Various products and tools that help brand marketers and sales executives find and nurture potential customers.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                    {ProjectList.map((list) => (
                        list.category.name === "marketing" && (
                            <div
                                key={list.id}
                                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                            >
                                <div className="flex-shrink-0 px-2">
                                    <AspectRatio ratio={16 / 8}>
                                        <img
                                            id="marketing"
                                            className="h-48 w-full"
                                            src={list.imageUrl}
                                            alt={list.name}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                                padding: "10px",
                                                borderRadius: "var(--radius-2)",
                                            }}
                                        />
                                    </AspectRatio>
                                </div>
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-cyan-600">
                                            <a
                                                href={list.href}
                                                target="_blank"
                                                className="hover:underline"
                                            >
                                                {list.category.name}
                                            </a>
                                        </p>
                                        <a href={list.href} target="_blank" className="mt-2 block">
                                            <p className="text-xl flex items-center font-semibold text-gray-900">
                                                {list.title} <span className='px-3'><Link1Icon /></span>
                                            </p>
                                            <p className="mt-3 text-base text-gray-500">
                                                {list.preview}
                                            </p>
                                        </a>
                                        <p className="mt-3 flex items-center text-base text-gray-500">
                                            <Image src={list.author.imageUrl} width={20} height={20} /> <span className='px-3'>{list.author.name}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Marketing