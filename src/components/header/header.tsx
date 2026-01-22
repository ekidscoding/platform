import React, { useState } from 'react';
import { Link, NavLink } from "react-router";
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link className='-m-1.5 p-1.5' to="/">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="https://ekidscoding.github.io/python-dovidnyk/assets/logo.png"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to='/courses'
            className={({ isActive }) =>
              `text-sm/6 font-semibold ${isActive ? 'text-emerald-400' : 'text-white'}`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to='/lessons'
            className={({ isActive }) =>
              `text-sm/6 font-semibold ${isActive ? 'text-emerald-400' : 'text-white'}`
            }
          >
            Lessons
          </NavLink>
          <NavLink
            to='/story-mode'
            className={({ isActive }) =>
              `text-sm/6 font-semibold ${isActive ? 'text-emerald-400' : 'text-white'}`
            }
          >
            Story Mode
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end align-middle">
          <div className="mr-2">
            <ThemeToggle />
          </div>
          <Link className='text-sm/6 font-semibold text-white' to="/login">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://ekidscoding.github.io/python-dovidnyk/assets/logo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to='/courses'
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 ${isActive ? 'text-emerald-400' : 'text-white'}`
                  }
                >
                  Courses
                </NavLink>
                <NavLink
                  to='/lessons'
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 ${isActive ? 'text-emerald-400' : 'text-white'}`
                  }
                >
                  Lessons
                </NavLink>
                <NavLink
                  to='/story-mode'
                  className={({ isActive }) =>
                    `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 ${isActive ? 'text-emerald-400' : 'text-white'}`
                  }
                >
                  Story Mode
                </NavLink>
              </div>
              <div className="py-6">
                <Link className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5' to="/login">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
