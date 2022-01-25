import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex space-x-5 item-center">
        <Link href="/">
          <img
            className="object-contain cursor-pointer w-44"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="items-center hidden space-x-5 md:inline-flex">
          <div>About</div>
          <div>Contact</div>
          <div className="px-4 py-1 text-white bg-green-600 rounded-full">
            Follow
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="px-4 py-1 border border-green-600 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
