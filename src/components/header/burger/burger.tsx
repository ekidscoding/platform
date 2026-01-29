import { Dispatch, SetStateAction } from "react";
import { Menu, X } from "lucide-react";

type BurgerProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
    const handleOpen = () => {
        setIsOpen((isOpen: boolean) => !isOpen);
    };

    return (
        <button type="button" onClick={handleOpen}>
            {isOpen ? <X /> : <Menu/>}
        </button>
    );
};

export default Burger;
