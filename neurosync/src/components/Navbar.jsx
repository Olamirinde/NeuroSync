import {Menu, X } from "lucide-react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { useState } from "react"

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        setDrawerOpen(!drawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo-image" />
                    <span className="text-xl tracking-tight">NeuroSync</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a className="py-2 px-3 border rounded-md" href="">Sign In</a>
                    <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md" href="">Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavBar}>
                    {drawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {drawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-500 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li className="py-4" key={index}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a className="py-2 px-3 border rounded-md" href="#">Sign In</a>
                         <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md" href="">Create an account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar