import {useEffect, useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoCloseSharp} from "react-icons/io5";
import logo from "@/assets/images/logo.svg";
// import image_url2 from "@/assets/images/pexels-luis-gomes-166706-546819.jpg?url";
import image_url from "@/assets/images/pexels-patricia-luquet-293443066-16272040.jpg"
import {Blog, dummyData} from "@/components/models/blog.ts";

const menus: { name: string, path: string }[] = [
    {name: "Home", path: "/home"},
    {name: "Blog", path: "/blog"},
    {name: "About", path: "/about"},
    {name: "Contact", path: "/contact"},
]

function Navbar({isOpen, setIsOpen}: { isSticky: boolean, isOpen: boolean, setIsOpen: any }) {

    let barClasses = isOpen ? "-translate-x-[320px] min-h-dvh md:min-h-fit" : "";

    return (
        <nav
            className={`absolute md:static z-10 px-2 py-2 bg-back  max-w-[320px] top-0 -right-[320px] transition ${barClasses}`}>

            <div className="md:hidden flex justify-between items-center">
                <a href="#" className="logo">
                    <img src={logo} width="119" height="37" alt="Wren logo"/>
                </a>

                <button className="p-4 text-2xl cursor-pointer" onClick={() => setIsOpen(false)}
                        aria-label="close menu">
                    <IoCloseSharp/>
                </button>
            </div>

            <ul className="flex flex-col md:flex-row gap-2">
                {menus.map((menu, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-primary">
                        <a href={menu.path} className="">{menu.name}</a>
                    </li>
                ))}
            </ul>

            <p className="md:hidden mt-8">
                Copyright 2022 © Wren - Personal Blog Template.
                Developed by codewithsadee
            </p>
        </nav>
    )
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    const stickyThreshold = 100;
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > stickyThreshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let headerClasses = isSticky ? "fixed top-0 left-0 bg-back shadow-md" : "absolute";
    headerClasses += " z-10";

    return (
        <header className={"bg-back top-0 left-0 right-0 flex justify-between items-center py-2"}>
            <a href="#" className="inline-block h-full">
                <img src={logo} width="119" height="37" alt="Wren logo"/>
            </a>

            <Navbar isSticky={isSticky} isOpen={isOpen} setIsOpen={setIsOpen}/>

            <button className="inline-block p-2 text-2xl cursor-pointer md:hidden" onClick={toggleNavbar}
                    aria-label="open menu">
                <GiHamburgerMenu aria-hidden="true"></GiHamburgerMenu>
            </button>

        </header>

    )
}


function Hero() {
    return (
        <section className="flex mt-[60px] mx-auto m-h-[490px] p-8">
            <div className="flex flex-col justify-center flex-1">
                <p>안녕하세요!</p>
                <h1 className="text-3xl md:text-6xl font-bold mb-4">
                    <span className={"text-accent"}>이준환</span>입니다.
                </h1>
                <p>행복하고 싶은 소프트웨어 개발자의 개인 웹사이트입니다.</p>
            </div>
            <div className="w-[250px] h-[250px]">
                <img className="m-auto flex-1 object-cover w-full h-full rounded-full"
                     src={image_url} alt="Placeholder"/>
            </div>
            <Gradient x="100px" y="100px" width="800px" height="800px"/>
        </section>
    )
}

function Gradient({x, y, width, height}: { x: string, y: string, width: string, height: string }) {

    return (
        <div className="absolute" style={{left: x, top: y, width: width, height: height}}>
            <div className="z-10 w-[50%] h-[50%] c-gradient"></div>
        </div>
    )
}

function BlogLatest({data}: { data: Blog[] }) {

    return (
        <div className="flex flex-col justify-center items-center min-h-dvh">
            <ul>
                {data.map((blog, index) => {
                    return (
                        <li key={index} className={"flex flex-row items-stretch my-4 border-2 border-primary rounded-md"}>
                            <div  className={"flex-1 flex flex-col md:flex-row min-h-[240px] gap-4 p-4 md:gap-8 items-center"}>
                                <div className={"flex-1 flex flex-col pr-8 h-full"}>
                                    <h2 className={"text-2xl md:text-4xl font-bold"}>{blog.title}</h2>
                                    <p className={"my-1"}>
                                        {blog.tags.map((tag, ti) =>
                                            <span key={ti} className={"bg-primary px-1  rounded-md mr-1"}>{tag}</span>)}
                                    </p>
                                    <p className={"mt-8 flex-1 overflow-ellipsis"}>{blog.content}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-[150px]">
                                {
                                    blog.image 
                                    ? <img className="w-full h-full object-cover text-xs" src={blog.image} alt={blog.title}/>
                                    : <div className={"grid place-items-center w-full h-full bg-gray-400 rounded-md"}>No Image</div>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default function Home({blogs}: { blogs: Blog[] }) {
    if (!blogs || blogs.length === 0) {
        blogs = dummyData
    }
    return (
        <div className="">
            <Header/>
            <Hero/>
            <BlogLatest data={blogs}/>
        </div>
    );
}
