'use client'
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/authContext';
import appwriteService from '../../appwrite/config';
import { Theme } from '@radix-ui/themes';

const Layout = ({ children }) => {
    const { authStatus, setAuthStatus } = useAuth();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        appwriteService.isLoggedIn()
            .then(setAuthStatus)
            .finally(() => setLoader(false));
    }, []);

    return (
        <div>
            <Theme>
                <Navbar />
                {!loader && (
                    <main className="py-4">
                        {children}
                    </main>
                )}
            </Theme>
        </div>
    );
}

export default Layout;
