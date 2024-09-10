'use client';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CarpenterRoundedIcon from '@mui/icons-material/CarpenterRounded';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import Paper from '@mui/material/Paper';
import { usePathname } from 'next/navigation';
import React from "react";
import clsx from "clsx";

//Probably could have this populate from the DB but its static so...
const links = [
    { name: 'Home', href: '/', icon: HomeRoundedIcon },
    { name: 'Meta Hub', href: '/meta', icon: CarpenterRoundedIcon }, // There's no icon in MUI for a gun :P
    { name: 'Creators', href: '/creators', icon: GroupsRoundedIcon },
    { name: 'TTK Tool', href: '/ttk', icon: EqualizerRoundedIcon },
    { name: 'Hub', href: '/hub', icon: GridViewRoundedIcon },
];

export default function AppBar() {
    const pathName = usePathname();

// Paper is pretty handy here for z-indexing I think, there might be a better way to do this though
    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    className="bg-black text-lim"
                    showLabels
                    value={pathName}
                >
                    {links.map((link) => {
                        const LinkIcon = link.icon;

                        return <BottomNavigationAction
                            key={link.name}
                            label={link.name}
                            icon={<LinkIcon />}
                            className={clsx("text-gray-400", {"text-lime-500" : pathName === link.href})}
                        />
                    })}
                </BottomNavigation>
            </Paper>
        </>
    );
}