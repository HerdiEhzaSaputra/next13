'use client'

import AdminNav from "./AdminNav";
import { useSelectedLayoutSegments } from 'next/navigation';
import GlobalNav from "../GlobalNav";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const selectedLayoutSegments = useSelectedLayoutSegments();

    return (
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
            <div className="col-start-2">
                {/* <AdminNav /> */}
                <GlobalNav/>
            </div>
            <ul>
                {selectedLayoutSegments.map((segment, index) => (
                    <li key={index}>{segment}</li>
                ))}
            </ul>

            <div className="col-start-3 space-y-6">
                {/* <AddressBar /> */}

                <div className="rounded-xl border border-gray-800 p-8">
                    {children}
                </div>
            </div>
        </div>
    )
};
