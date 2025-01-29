import { auth, signOut, signIn } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {

    const session = await auth()

    return (

        <header className="px-5 py-3 bg-white shadow-sm font-work-sans" >

            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={144}
                        height={30}
                    />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {
                        session && session.user ? (
                            <>
                                <Link href={'/startup/create'}>
                                    <span>Create</span>
                                </Link>

                                <form
                                    action={
                                        async () => {
                                            "use server"

                                            await signOut({ redirectTo: '/' })
                                        }
                                    }
                                >
                                    <button type="submit">
                                        <span>Log Out</span>
                                    </button>
                                </form>

                                <Link href={`/user/${session?.id}`}>
                                    <span>
                                        {session?.user?.name}
                                    </span>
                                </Link>
                            </>

                        ) : (
                            <>
                                <form method="POST" action="/api/auth/signin">
                                    <input type="hidden" name="provider" value="github" />
                                    <button type="submit">
                                        Login
                                    </button>
                                </form>
                            </>
                        )
                    }
                </div>
            </nav>

        </header>
    );
};

export default Navbar;
