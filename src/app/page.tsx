import Image from 'next/image';

export default function Home(){
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Fashion Sale Ecommerce Website</h1>
          <ul className="font-bold text-gray-900 flex gap-5 py-3 text-lg">
            <li className='hover:text-blue-600'>Home</li>
            <li className='hover:text-blue-600'>Cart</li>
            <li className='hover:text-blue-600'>About</li>
            <li className='hover:text-blue-600'>Contact</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-between">
              
              <div className="py-20 px-10 bg-white rounded-lg">
                <h2 className="text-4xl font-bold">Minimal Menz Style</h2>
                <p className="mt-4 text-gray-600">
                  This is a sample ecommerce website
                </p>
                <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-blue-600 hover:text-white">
                  SHOP NOW
                </button>
              </div>
              <div>
                <Image src="/men fashion banner.jpg" width={820} height={1080} alt="hero image" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <Image src="/man fashion.jpg" width={400} height={300} alt="Men's Fashion" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold hover:text-blue-600">Men's Fashion</h3>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <Image src="/woman fashion.jpg" width={400} height={300} alt="Women's Fashion" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold hover:text-blue-600">Women's Fashion</h3>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <Image src="/kids fashion.jpg" width={400} height={300} alt="kid's Fashion" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-bold hover:text-blue-600">Kids Fashion</h3>
            </div>
          </div>
        </div>
      </main>
      <div>
        <footer className="bg-black shadow">
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex gap-10 text-white'>
            <ul className='px-5 text-lg'>
              <h2 className='font-bold underline'>Links:</h2>
              <li className='hover:text-blue-600'>Home</li>
              <li className='hover:text-blue-600'>Cart</li>
              <li className='hover:text-blue-600'>About</li>
              <li className='hover:text-blue-600'>Contact</li>
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
    </div>
  );
};


