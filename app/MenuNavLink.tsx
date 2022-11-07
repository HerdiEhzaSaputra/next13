'use client';

import Link from 'next/link';
import { usePathname  } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function MenuNavLink() {
    // Navigating to `/blog/hello` will return 'hello' for the
    // selected layout segment
    // const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    // const isActive = href === segment;
    
    const menu = [
        { title: 'Home', path: '/home' },
        { title: 'Notes', path: '/notes' },
        { title: 'Notifications', path: '/notifications' },
    ]

    // const isActive = menu.path === pathname;

    return (
        <>
            {/* <Link
                href={`/blog/${slug}`}
                // Change style depending on whether the link is active
                style={{ fontWeight: isActive ? 'bold' : 'normal' }}
            >
                {children}
            </Link> */}

            {menu.map((item, index) => { 
                <li >
                    {/* <Menu href={item.path}>{item.title}</Menu> */}
                    <Link key={index} href={item.path} className="block md:px-3" legacyBehavior>
                        <a
                            className={`cursor-pointer relative ${pathname === item.path
                                    ? 'relative text-yellow-800 dark:text-yellow-300 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800'
                                    : 'relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
                                }`}
                        >
                            <span>
                                {item.title}
                            </span>
                        </a>
                        {/* <div
                            className="relative text-yellow-800 dark:text-yellow-300 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
                            <span>Home</span>
                        </div> */}
                    </Link>
                </li>
            })}
        </>
    );
}

// export function Menu({
//     href,
//     children,
// }: {
//     href: string,
//     children: React.ReactNode,
// }) {

//     // const { href, children } = menu || [];
//     const pathname = usePathname();

//     const isActive = href === pathname;

//     <Link href={href} className="block md:px-3" legacyBehavior>
//         <a
//             className={`cursor-pointer relative ${isActive
//                     ? 'relative text-yellow-800 dark:text-yellow-300 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800'
//                     : 'relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
//                 }`}
//         >
//             <span>
//                 {children}
//             </span>
//         </a>
//         {/* <div
//             className="relative text-yellow-800 dark:text-yellow-300 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
//             <span>Home</span>
//         </div> */}
//     </Link>
// }