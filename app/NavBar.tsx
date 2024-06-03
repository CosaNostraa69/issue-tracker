import Link from 'next/link'
import React from 'react'
import { SiBugsnag } from "react-icons/si";


const NavBar = () => {
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
        {links.map(link => <Link key={link.href}className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.href}>{link.label}</Link> )}
        
    </ul>

</nav>  )
}

export default NavBar