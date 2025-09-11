import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Logo from '../images/logo.png';

function About() {
    const { auth } = usePage<SharedData>().props;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="About Us - Tingloy Ferry Reservation" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 dark:text-white">

                <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
                    <div className="max-w-4xl py-12">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tingloy Ferry</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            The story of Montenegro Island Ferry Services, Inc. is rooted in the vision of providing safe, reliable, and modern sea transportation for the people of Tingloy and its visitors.
                            <br /><br />
                            On May 31, 2020, the company proudly launched its first two newly built vessels, the MV Island Star and MV Island Pearl, from the shipbuilder’s dockyard. The following day, June 01, 2020, these ships arrived at their homeport in Tingloy, Batangas, marking the official beginning of the company’s journey.
                            <br /><br />
                            With these vessels, Montenegro Island Ferry Services, Inc. introduced a new era of ferry travel—one that combines comfort, safety, and efficiency. The company was established not only to serve as a lifeline for Tingloy commuters but also to boost tourism by providing visitors with convenient access to the island’s natural beauty.
                            <br /><br />
                            Today, Tingloy Ferry stands as a symbol of progress and community pride, continuously striving to improve its services while honoring its humble beginnings.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default About;