'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { SiBugsnag } from "react-icons/si";
import classNames from 'classnames';


const NavBar = () => {
const currentPath = usePathname();

const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
]

  return (
<nav className='flex space-x-6 border-b mb-5 h-14 items-center'>
    <Link href="/">
        <SiBugsnag />
    </Link>
    <ul className='flex space-x-6'>
        {links.map(link => 
        <Link 
        key={link.href}
        className={classNames({
            'text-zinc-900': link.href === currentPath,
            'text-zinc-500': link.href !== currentPath,
            'hover:text-zinc-800 transition-colors': true
        })} 
        href={link.href}>{link.label}</Link> )}
        
    </ul>

</nav>  )
}

export default NavBar