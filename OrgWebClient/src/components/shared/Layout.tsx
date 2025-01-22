import {Head} from "@inertiajs/react";

export default function Layout({children}: any) {
    return (
        <div className={"pt-1"}>
            <Head>
                <title>"Joonhwan's Personal Page"</title>
                <meta name="description" content="Inertia App 에 대한 정보" head-key={"description"}/>
            </Head>
            <main className={"container m-auto"}>
                {children}
            </main>
        </div>
    );
}