import Link from "next/link"
import Image from "next/image"
import home from "../../public/headericons/home.svg"
import setting from "@/public/headericons/settings.svg"
import notification from "../../public/headericons/notification.svg"
import timer from "../../public/headericons/timer.svg"
import Byewind from "../../public/sidebaricons/AvatarByewind.svg"


const Footer = () => {
  return (
    <>
     {/* desktop footer */}
    <div className="hidden md:flex w-full items-center justify-between mt-4 px-6 py-4 bg-gray-100 border-t border-gray-100">
      <p className="size-3 leading-4 w-30 text-gray-500">© 2026 SnowUI</p>
      <nav className="flex gap-2">
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</Link>
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Support</Link>
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
      </nav>
    </div>

    {/* mobile footer */}
     <div className="md:hidden w-full mt-1.5 left-0 right-0 z-50 px-4">
        <div className="bg-gray-100 rounded-3xl px-6 py-3 flex items-center justify-between">
          <Link href="#"><Image src={home} alt="home" width={22} height={22} /></Link>
          <Link href="#"><Image src={timer} alt="history" width={22} height={22} /></Link>
          <Link href="#"><Image src={notification} alt="bell" width={22} height={22} /></Link>
          <Link href="#"><Image src={setting} alt="settings" width={22} height={22} /></Link>
          <Link href="#"><Image src={Byewind} alt="user" width={22} height={22} /></Link>
        </div>
      </div>
    </>
  )
}

export default Footer
