// App bar at the bottom of page
// usages: everywhere
'use client';

import Link from "next/link";
import LinkIcon from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import nav from "react";

//Probably could have this populate from the DB but its static so...
const links = [
    { name: 'Home', href: '/home', icon: 'HomeIcon' },
    { name: 'Meta Hub', href: '/meta', icon: 'MetaIcon' },
    { name: 'Creators', href: '/creators', icon: 'CreatorsIcon' },
    { name: 'TTK Tool', href: '/ttk', icon: 'TtkToolIcon' },
    { name: 'Hub', href: '/hub', icon: 'HubIcon' },
];

export default function AppBar() {
    const pathName = usePathname();

    return (
        <nav className="AppBar">
            {links.map((link) => {
                return (
                    <Link key={link.name} href={link.href}
                          className={clsx(
                              "flex gap-2 text-gray-400 hover:text-green-600 bg-black p-3 text-xs",
                              {
                                  "text-green-600" : pathName === link.href,
                              },
                          )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </ul>
    );
}