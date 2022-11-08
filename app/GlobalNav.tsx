'use client'

import { menus } from "../lib/menus";
import clsx from 'clsx';
import { useSelectedLayoutSegments } from "next/navigation";
import Link from 'next/link';

export default function GlobalNav() {
    const [selectedLayoutSegments] = useSelectedLayoutSegments();
    console.log(`selectedLayoutSegments: ${selectedLayoutSegments}`)

    return (
        <div className="space-y-5">
            {menus.map((menu) => {
                return (
                    <div key={menu.name}>
                        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            <div>{menu.name}</div>
                        </div>

                        {menu.items.map((item) => {
                            const isActive = item.slug === selectedLayoutSegments;
                            console.log(`item.slug: ${item.slug}`)

                            return (
                                <div key={item.slug}>
                                    {item.isDisabled ? (
                                        <div
                                            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                                            title="Coming Soon"
                                        >
                                            {item.name}
                                        </div>
                                    ) : (
                                        <Link
                                            href={`/${item.slug}`}
                                            className={clsx(
                                                'block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-gray-100',
                                                { 'text-gray-400': !isActive, 'text-white': isActive },
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}