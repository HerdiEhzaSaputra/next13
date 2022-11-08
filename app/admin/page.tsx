import Image from 'next/image'

export default function Home() {
    return (
        <main className="">
            <h1 className="">
                Welcome to <a href="https://nextjs.org">Next.js 13!</a>
            </h1>

            <p className="">
                Get started by editing{' '}
                <code className="">app/page.tsx</code>
            </p>

            <div className="">
                <a href="https://beta.nextjs.org/docs" className="">
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js 13</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/canary/examples"
                    className=""
                >
                    <h2>Examples &rarr;</h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <h2>Deploy &rarr;</h2>
                    <p>Deploy your Next.js site to a public URL with Vercel.</p>
                </a>
            </div>
        </main>
    )
}
