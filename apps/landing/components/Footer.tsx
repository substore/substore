import Link from "next/link"

export default function Footer() {
    return (
            <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/">
                            <a className="flex flex-initial items-center font-bold md:mr-24">
                                <span>Substore</span>
                            </a>
                        </Link>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <ul className="flex flex-initial flex-col md:flex-1">
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        Docs
                                    </a>
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <ul className="flex flex-initial flex-col md:flex-1">
                            <li className="py-3 md:py-0 md:pb-4">
                                <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                                    LEGAL
                                </p>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link href="/">
                                    <a className="text-white hover:text-zinc-200 transition ease-in-out duration-150">
                                        Terms of Use
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
                        <div className="flex space-x-6 items-center h-10">
                            <a
                                aria-label="Github"
                                href="https://github.com/substore"
                                >
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-900">
                    <div>
                        <span>&copy; 2022 Substore. All rights reserved.</span>
                    </div>
                </div>
            </footer>
            );
}