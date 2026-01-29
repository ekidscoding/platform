import classNames from "classnames";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import ThemeToggle from '@/components/theme-toggle';
import Logo from "./logo";
import Burger from "./burger";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigationClassList = classNames(
        'transition-transform md:translate-x-0!',
        'absolute left-0 top-[64px] w-[50%] h-screen bg-background -translate-x-full',
        'md:static md:w-auto md:h-auto',
        'shadow-[4px_5px_6px_0px_rgba(0,_0,_0,_0.1)] md:shadow-none',
        {
            'translate-x-0': isOpen,
        }
    );

    const navigationListClassList = classNames(
        'block md:flex'
    );

  return (
    <header className="bg-background sticky top-0 z-50 w-full py-3.5 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <Logo />
                </div>
                <div className={navigationClassList}>
                    <NavigationMenu>
                        <NavigationMenuList className={navigationListClassList}>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <NavLink to='/courses'>Courses</NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <NavLink to='/lessons'>Lessons</NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <NavLink to='/story-mode'>Story Mode</NavLink>
                                </NavigationMenuLink>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex flex-1 justify-end items-center">
                    <div className="mr-2">
                        <ThemeToggle />
                    </div>
                    <Link to="/login">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end md:hidden">
                    <Burger
                        isOpen={isOpen}
                        setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
