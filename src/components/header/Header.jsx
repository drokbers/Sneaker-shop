
import { useState } from "react";
import { toggleCart } from "../../store/toggleSlice";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import Link from "next/link";

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    dispatch(toggleCart());
  };

  return (
    <header className="border-b">
      <nav className="flex justify-between items-center px-4 py-6  ">
        <div className="grid grid-cols-2">
          <div className="md:hidden md:w-auto">
            {!isBurgerOpen && (
              <button onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                <Image
                  src="/images/icon-menu.svg"
                  alt="avatar"
                  width={25}
                  height={25}
                />
              </button>
            )}
            {isBurgerOpen && (
              <div className="fixed left-0 h-screen w-[200px]  bg-black-200  ">
                <div className="flex flex-col   text-bodys font-bold bg-white  px-6 h-screen gap-4">
                  <button onClick={() => setIsBurgerOpen(!isBurgerOpen)}  className="flex items-center justify-start">
                    <Image
                      src="/images/icon-close.svg"
                      alt="icon-close"
                      width={10}
                      height={10}
                      
                    />
                  </button>

                  <Link href="#">Collection</Link>
                  <Link href="#">Men</Link>
                  <Link href="#">Woman</Link>
                  <Link href="#">About</Link>
                  <Link href="#">Contact</Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={145} height={30} />
          </div>
          <div id="menu" className="hidden md:flex items-center space-x-4 ">
            <Link href="#">Collection</Link>
            <Link href="#">Men</Link>
            <Link href="#">Woman</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        <div id="cart" className="flex items-start space-x-7 mr-7 ">
          <div className="relative">
            <button onClick={toggleModal} className="">
              <Image
                src="/images/icon-cart.svg"
                width={50}
                height={50}
                alt="icon-cart"
                className="h-full rounded-md absolute"
              />
            </button>
            <span className="absolute top-0 right-0 bg-primary-orange text-white px-2 py-1 text-xs rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <Image
            src="/images/image-avatar.png"
            alt="avatar"
            width={50}
            height={50}
            className=""
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;

