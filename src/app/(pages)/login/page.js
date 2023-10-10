"use client";
import useAuth from "../../../context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import SignIn from "../../../components/SignIn";

const LoginPage = () => {
    const router = useRouter();
    const { authStatus } = useAuth();

    if (authStatus) {
        router.replace("/dashboard");
        return <></>;
    }

    return (
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <SignIn />
        </section>
    )
}


export default LoginPage;