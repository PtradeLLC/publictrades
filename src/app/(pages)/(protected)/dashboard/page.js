'use client';
import React from 'react'
import Protected from '../../../../components/Protected';
import useAuth from "../../../../context/useAuth";
import SignIn from "../../../../components/SignIn";

const Dashboard = () => {
    const { authStatus } = useAuth();
    return (
        <>
            {authStatus ? (<div>
                < Protected />
            </div >) : <SignIn />
            }
        </>
    )
}

export default Dashboard