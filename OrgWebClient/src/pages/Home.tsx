export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-dvh">
            <h1 className="mb-4">Home</h1>
            <ul className="flex flex-row gap-1">
                <li className="flex gap-2">
                    <a href="/blog" className="px-4 py-2 bg-primary text-primary-content rounded-full">
                        Blog
                    </a>
                </li>
                <li className="flex gap-2">
                    <a href="/about" className="px-4 py-2 bg-primary text-primary-content rounded-full">
                        About
                    </a>
                </li>
            </ul>
        </div>
    );
}
