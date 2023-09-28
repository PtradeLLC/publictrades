import {
    ArrowPathIcon,
    BuildingStorefrontIcon,
    LockClosedIcon,
    UserGroupIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Newsletter from "./Newsletter";
import Link from "next/link";
import { BarChartIcon } from "@radix-ui/react-icons";

const features = [
    {
        name: "Marketing",
        description:
            "Discover marketing tools and services that can help agencies and brands improve their strategies and tactics.",
        icon: BarChartIcon,
        url: "/marketing",
    },
    {
        name: "Cyber Security",
        description:
            "Browse services that helps combat cyber threats, and tools that provides insights to boost cybersecurity.",
        icon: LockClosedIcon,
        url: "/security",
    },
    {
        name: "Artificial Intelligence",
        description:
            "AI-powered tools developed to help boost productivity, automating various processes across multiple industries.",
        icon: ArrowPathIcon,
        url: "/artificialIntelligence",
    },
    {
        name: "Commerce",
        description:
            "Discover tools for eCommerce brands, brick and mortal as well as ones that blurs the lines between the two types.",
        icon: BuildingStorefrontIcon,
        url: "/commerce",
    },
    {
        name: "Consumer",
        description:
            "Consumer products developed for everyday needs. A wide range of SAAS products, from social media to gaming, and entertainment.",
        icon: UserGroupIcon,
        url: "/consumer",
    },
    {
        name: "Government",
        description:
            "Cloud-based software solutions that help government agencies improve their efficiency, effectiveness, and constituent service.",
        icon: BuildingLibraryIcon,
        url: "/govt",
    },
];

export default function Projects() {
    return (
        <div className="mt-4 bg-white">
            <div className="relative overflow-hidden">
                <main>
                    <div id="products" className="relative bg-white py-8 sm:py-16 lg:py-18">
                        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                            <h2 className="text-lg font-semibold text-slate-600">
                                Empowering industries with the software of tomorrow.
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Products for Industry Verticals
                            </p>
                            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                                Discover hidden gems that has been turned into everyday
                                essentials within industries.
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map((feature) => (
                                        <Link key={feature.name} href={feature.url}>
                                            <div className="pt-6">
                                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                                    <div className="-mt-6">
                                                        <div>
                                                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                                                                <feature.icon
                                                                    className="h-6 w-6 text-white"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </div>
                                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                                            {feature.name}
                                                        </h3>
                                                        <p className="mt-5 text-base text-gray-500">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
