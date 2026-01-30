import Link from "next/link"

const Footer = () => {
  return (
    <div className="hidden md:flex w-full items-center justify-between mt-2 px-6 py-4 bg-gray-100 border-t border-gray-100">
      <p className="size-3 leading-4 w-30 text-gray-500">© 2026 SnowUI</p>
      <nav className="flex gap-2">
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</Link>
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Support</Link>
        <Link href='#' className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
      </nav>
    </div>
  )
}

export default Footer
