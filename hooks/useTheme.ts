import { useCallback, useEffect, useMemo, useState } from "react";

type ThemeKey = 'light' | 'dark';

type ReturnType = {
    theme: ThemeKey;
    isDarkMode: boolean;
    setTheme: (theme: ThemeKey) => void;
    toggleTheme: () => void;
}

const useTheme = (): ReturnType => {
    const [theme, setTheme] = useState<ThemeKey>('light');
    const isDarkMode = useMemo(()=> theme === 'dark', [theme]);

    const initTheme = useCallback(()=> {
        const preferDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initalTheme = (localStorage?.getItem('theme') || (preferDarkMode ? 'dark' : 'light')) as ThemeKey;
        setTheme(initalTheme);
    },[])
    useEffect(()=> {
        initTheme();
    },[]);
    useEffect(()=> {
        localStorage.setItem('theme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    },[]);

    return { theme, isDarkMode, setTheme, toggleTheme};
}

export default useTheme;