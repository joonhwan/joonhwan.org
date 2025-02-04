import {Head} from "@inertiajs/react";
// import siteStyleUrl from "@/site.css?url";

export default function Layout({children}: any) {
    return (
        <div className={"@container"}>
            <Head>
                <title>"Joonhwan's Personal Page"</title>
                <meta name="description" content="Inertia App 에 대한 정보" head-key={"description"}/>
                {/*<link rel="stylesheet" href={siteStyleUrl}/>*/}
            </Head>
            <main className={"w-full @md:w-[90cqw] @xl:max-w-[960px] m-auto"}>
                {children}
            </main>
        </div>
    );
}