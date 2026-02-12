import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

type SidebarTriggerProps = {
    className?: string;
}
const SidebarTrigger = ({ className }: SidebarTriggerProps) => {
    const { toggleSidebar, state } = useSidebar();

    return (
        <Button
            className={className}
            variant="outline"
            size="icon"
            onClick={toggleSidebar}>
            {state === 'expanded' && <ArrowLeft />}
            {state === 'collapsed' && <ArrowRight />}
        </Button>
    );
};

export default SidebarTrigger;
