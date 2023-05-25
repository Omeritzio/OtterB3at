import {  useState } from "react";
import { Dialog,  Popover } from "@headlessui/react";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between  p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <p className="f3 text-white bold">OtterBeat</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          ></button>
        </div>
        <Popover className="hidden lg:flex lg:gap-x-12">
          <a
            href="/songs"
            className="text-sm font-semibold leading-6 text-white"
          >
            Songs
          </a>
          <a
            href="/favorites"
            className="text-sm font-semibold leading-6 text-white"
          >
            Favorites
          </a>
        </Popover>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">OtterBeat</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <div className="py-6">
                <button target="_blank">
                <a
                  href="/songs"
                  className="text-sm font-semibold leading-6 text-cyan-600" 
                >
                  Songs
                </a>
                </button>
                <br />
                <a
                  href="/favorites"
                  className="text-sm font-semibold leading-6 text-cyan-600"
                >
                  Favorites
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
