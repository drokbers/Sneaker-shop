// components/Header.js

import React from "react";
import { toggleCart } from '../../store/toggleSlice';
import { useSelector,useDispatch } from 'react-redux';

import Image from "next/image";
import Link from "next/link";


function Header() {

  const dispatch = useDispatch();
  const cartIsOpen = useSelector(state => state.toggle);
  const handleToggleCart = () => {
    dispatch(toggleCart());
    console.log(cartIsOpen)
  };
  return (
    <header className="border-b">
      <nav className="flex justify-between items-center px-4 py-6 ">
        <div className="grid grid-cols-2">
        <div className="flex items-center ml-20">
          <Image src="/images/logo.svg" alt="Logo" width={145} height={30} />
        </div>
        <div className="flex items-center space-x-4 " >
          <Link href="#">Collection</Link>
          <Link href="#">Men</Link>
          <Link href="#">Woman</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>

        </div>
 
        <div className="flex items-center space-x-8 mr-10">
          <button onClick={handleToggleCart}>
          <Image
            src= '/images/icon-cart.svg'
            width={25}
            height={25}
            alt="DENME"
            className=" h-full rounded-md"
          />
          </button>

          <Image
            src="/images/image-avatar.png"
            alt="avatar"
            width={50}
            height={50}
          />
        </div>
      </nav>
    </header>
  );
  
}

export default Header;
