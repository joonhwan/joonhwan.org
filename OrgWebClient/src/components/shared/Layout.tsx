﻿import {Head} from "@inertiajs/react";
// import siteStyleUrl from "@/site.css?url";

export default function Layout({children}: any) {
    return (
        <>
            <Head>
                <title>"Joonhwan's Personal Page"</title>
                <meta name="description" content="Inertia App 에 대한 정보" head-key={"description"}/>
                {/*<link rel="stylesheet" href={siteStyleUrl}/>*/}
            </Head>
            <main className={"container m-auto"}>
                {children}
            </main>
        </>
    );
}