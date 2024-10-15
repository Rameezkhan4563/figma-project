import Link from "next/link";

export default function Header(){
    return(
    <div>
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Fashion Sale Ecommerce Website</h1>
          <ul className="font-bold text-gray-900 flex gap-5 py-3 text-lg">
            <li className='hover:text-blue-600'><Link href="/">Home</Link></li>
            <li className='hover:text-blue-600'><Link href="/cart">Cart</Link></li>
            <li className='hover:text-blue-600'><Link href="/about-us">About</Link></li>
            <li className='hover:text-blue-600'><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>
      </header>
    </div>
    )
}