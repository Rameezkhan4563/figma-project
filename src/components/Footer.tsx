import Link from "next/link"
export default function Footer(){
    return(
        <div>
        <footer className="bg-black shadow">
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex gap-10 text-white'>
            <ul className='px-5 text-lg'>
              <h2 className='font-bold underline'>Links:</h2>
              <li className='hover:text-blue-600'><Link href="/">Home</Link></li>
              <li className='hover:text-blue-600'><Link href="/cart">Cart</Link></li>
              <li className='hover:text-blue-600'><Link href="/about-us">About</Link></li>
              <li className='hover:text-blue-600'><Link href="/contact-us">Contact</Link></li>
            </ul>
            <ul className='px-5 text-lg'>
              <h2 className='font-bold underline'>Follow Us:</h2>
              <li className='hover:text-blue-600'>Facebook</li>
              <li className='hover:text-blue-600'>Twitter</li>
              <li className='hover:text-blue-600'>Instagram</li>
            </ul>
          </div>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">&copy; 2024 Fashion Sale Ecommerce Website. All rights reserved.</p>
            <p className="text-center text-gray-500">Powered by Next.js</p>
          </div>
        </footer>
      </div>
    )
}