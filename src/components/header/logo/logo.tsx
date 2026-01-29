import React from "react";
import { Link } from "react-router";

const Logo = () => (
    <Link className='-m-1.5 p-1.5' to="/">
        <span className="sr-only">Your Company</span>
        <img
            alt="Logo"
            src="https://ekidscoding.github.io/python-dovidnyk/assets/logo.png"
            className="h-8 w-auto"
        />
    </Link>
);

export default Logo;
