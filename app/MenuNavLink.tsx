'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function MenuNavLink() {
    const pathname = usePathname();

    const menu = [
        { title: 'Home', path: '/home' },
        { title: 'Notes', path: '/notes' },
        { title: 'Notifications', path: '/notifications' },
    ];

    return (

        <>
            <li className="block md:px-3">
                <Link 
                    className={(pathname == '/' ? 'active-menu-link' : 'menu-link')} 
                    href="/"
                >
                    Home
                </Link>
            </li>
            <li className="block md:px-3">
                <Link
                    className={(pathname == '/notes' ? 'active-menu-link' : 'menu-link')} 
                    href="/notes"
                >
                    Notes
                </Link>
            </li>
        </>
    );
}