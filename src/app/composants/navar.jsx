"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function Navbar (){
    const pathname = usePathname()
    console.log(pathname)
    const links = [{name:"home",path:"/"},{name:"about",path:"about"},{name:"etudiantsARisques",path:"etudiantsARisques"}]


    return(
        <div>
            {links.map(link=>(
                <Link href={`${link.path}`} key={link.name} className={pathname=link.path?"active":""} >{link.name}</Link>
            ))}

        </div>
    )

}