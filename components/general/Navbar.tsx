import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
             {/* <Link href="/">
                             <h1 className="text-3xl flex items-center gap-6">
                    <span className="text-blue-500">SMVM</span>
                </h1>
             </Link> */}
             <div className="hidden sm:flex items-center gap-6">
                <Link href="/" className="text sm font-medium hover:text-blue-500 transition-colors">
                Home 
                </Link>
                 <Link href="https://codegit-ftq2.vercel.app/" className="text sm font-medium hover:text-blue-500 transition-colors">
                CodeGit
                </Link>
                 <Link href="/books" className="text sm font-medium hover:text-blue-500 transition-colors">
                Books
                </Link>

             </div>
             </div>


          {user ? (
            <div>
                <p className="flex items-center gap-4">{user.given_name}</p>
                <LogoutLink className={buttonVariants({ variant: 'secondary'})}>Logout</LogoutLink>
            </div>
          ): (
                        <div className="flex items-center gap-6">
                <LoginLink className={buttonVariants()}>Log in</LoginLink>
                <RegisterLink className={buttonVariants()}>Sign up</RegisterLink>

             </div>
          )}
        </nav>
    )
}