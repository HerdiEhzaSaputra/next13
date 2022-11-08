'use client';

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async () => {
        // const db = new PocketBase('http://127.0.0.1:8090');

        // await db.records.create('notes', {
        //   title,
        //   content,
        // });

        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setContent('');
        setTitle('');

        router.refresh();
    }

    return (
        <form onSubmit={create}>

            <h3>Create a new Note</h3>

            <div className="space-y-6 bg-white py-5 justify-center">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Title</label>
                        <input 
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        ></input>
                    </div>
                </div>

                <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">Content</label>
                    <div className="mt-1">
                        <textarea 
                            id="about"
                            name="about"
                            // rows="3"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Content goes here...."
                        ></textarea>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Note</button>
            </div>
        </form>
    );
}