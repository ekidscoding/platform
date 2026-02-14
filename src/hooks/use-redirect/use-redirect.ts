import { useEffect } from "react";
import { useNavigate } from "react-router";

const BASENAME = '/platform';

const useRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectedFrom = params.get('redirectedFrom');
        if (redirectedFrom) {
            let targetPath;
            if (redirectedFrom.startsWith(BASENAME)) {
                targetPath = redirectedFrom.slice(BASENAME.length) || '/';
            } else {
                targetPath = redirectedFrom;
            }
            window.history.replaceState({}, '', BASENAME + targetPath);
            navigate(targetPath, { replace: true });
        }
    }, [navigate]);
}

export default useRedirect;
