'use client';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CarpenterRoundedIcon from '@mui/icons-material/CarpenterRounded';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import { usePathname, useRouter } from 'next/navigation';
import React from "react";
import clsx from "clsx";

//Probably could have this populate from the DB but its static so...
const links = [
    { name: 'Home', href: '/', icon: HomeRoundedIcon },
    { name: 'Meta Hub', href: '/MetaHub', icon: CarpenterRoundedIcon }, // There's no icon in MUI for a gun :P
    { name: 'Creators', href: '/Creators', icon: GroupsRoundedIcon },
    { name: 'TTK Tool', href: '/TTKTools', icon: EqualizerRoundedIcon },
    { name: 'Hub', href: '/Hub', icon: GridViewRoundedIcon },
];

export default function AppBar() {
    const pathName = usePathname();
    const router = useRouter();

// Paper is pretty handy here for z-indexing I think, there might be a better way to do this though
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                className="bg-black"
                showLabels
                value={pathName}
            >
                {links.map(({name, icon: Icon, href}) =>
                    <BottomNavigationAction
                        key={name}
                        label={name}
                        icon={<Icon/>}
                        className={clsx("text-gray-400", {"text-lime-500": pathName === href})}
                        onClick={() => router.push(href)}
                    />)}
            </BottomNavigation>
        </Paper>
    );
}
