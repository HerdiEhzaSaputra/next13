// import PocketBase from 'pocketbase';
import Link from 'next/link';
import CreateNote from './CreateNotes';
import { utcToZonedTime, format } from 'date-fns-tz'
import Image from 'next/image';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


async function getNotes() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <h1>Notes</h1>
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

            <CreateNote />
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, content, user_id, reminder, created } = note || {};
    // const timeZone = 'Asia/Jakarta';
    // const reminderZone = utcToZonedTime(reminder, timeZone);
    // // const createdZone = utcToZonedTime(created, timeZone);

    // const pattern = 'd MMM, HH:mm';
    // // const createdTime = format(createdZone, pattern);
    // const reminderTime = format(reminderZone, pattern);

    // // const date = format(utcToZonedTime(reminder, 'Asia/Jakarta'), 'd MMM, HH:mm');
    // console.log(note)

    return (
        <div className="w-full h-64 flex flex-col justify-between items-start bg-white rounded-lg border border-gray-200 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 font-bold mb-3">{title}</h4>
                <p className="text-gray-800 text-sm">{content}</p>
            </div>
            <div className="w-full flex flex-col items-start">
                {user_id 
                    ?
                    <div className="mb-3 flex items-center flex-no-wrap">
                        {/* <div className="w-6 h-6 bg-cover bg-center rounded-md">
                            <Image src="	https://tailus.io/sources/blocks/bio-link/preview/images/woman1.jpg"
                                alt="read by Alia"
                                width="200"
                                height="200"
                                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                        </div> */}
                        <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                            <Image src="https://tailus.io/sources/blocks/bio-link/preview/images/man.jpg"
                                alt="read by jason"
                                width="200"
                                height="200"
                                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                        </div>
                        {/* <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                            <Image src="	https://tailus.io/sources/blocks/bio-link/preview/images/woman.jpg"
                                alt="read by Kane"
                                width="200"
                                height="200"
                                className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" />
                        </div> */}
                    </div>
                    : null
                }
                {reminder 
                    ?
                    <div className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center" aria-label="Due on" role="contentinfo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="12" cy="13" r="7"></circle>
                            <polyline points="12 10 12 13 14 13"></polyline>
                            <line x1="7" y1="4" x2="4.25" y2="6"></line>
                            <line x1="17" y1="4" x2="19.75" y2="6"></line>
                        </svg>
                        <p className="ml-2 flex">
                            {/* {reminderTime} */}
                            {reminder}
                        </p>
                    </div>
                : null }
                <div className="flex items-center justify-between text-gray-800 w-full">
                    <p className="text-sm">{created}</p>
                    <Link href={`/notes/${id}`} className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black" aria-label="edit note" role="button">
                        <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}