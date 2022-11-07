import styles from '../Notes.module.css';

async function getNote(noteId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return (
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="w-full h-64 flex flex-col justify-between items-start bg-white rounded-lg border border-gray-200 mb-6 py-5 px-4">
                <h1>notes/{note.id}</h1>
                <div>
                    <h4 className="text-gray-800 font-bold mb-3">{note.title}</h4>
                    <p className="text-gray-800 text-sm">{note.content}</p>
                </div>
                <div className="w-full flex flex-col items-start">
                    <div className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center" aria-label="Due on" role="contentinfo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="12" cy="13" r="7"></circle>
                            <polyline points="12 10 12 13 14 13"></polyline>
                            <line x1="7" y1="4" x2="4.25" y2="6"></line>
                            <line x1="17" y1="4" x2="19.75" y2="6"></line>
                        </svg>
                        <p className="ml-2">7 Sept, 23:00</p>
                    </div>
                    <div className="flex items-center justify-between text-gray-800 w-full">
                        <p className="text-sm">{note.created}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}