import { EDITOR_THEME } from "@/components/editor/constants";
import { Theme } from "@/providers/theme-provider/types";

const getEditorTheme = (inputTheme: Theme) => {
    const resolveTheme = (theme: 'dark' | 'light') =>
        theme === 'dark' ? EDITOR_THEME.DARK : EDITOR_THEME.LIGHT;

    if (inputTheme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return resolveTheme(isDark ? 'dark' : 'light');
    } else {
        return resolveTheme(inputTheme);
    }
};

export default getEditorTheme;
