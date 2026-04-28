import NavBar from '@/components/shared/NavBar';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="min-h-screen flex flex-col justify-center items-center px-4 font-sans">
            <div className="text-center max-w-md">
                <div className="text-gray-300 mb-6">
                    <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                </div>

                <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-8">
                    The page your are looking for might have been moved or does not exist in our archives.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors duration-200"
                >
                    Back to Home
                </Link>
            </div>

            <footer className="absolute bottom-4 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} The Dragon News
            </footer>
        </div>
        </>
    );
};

export default NotFoundPage;