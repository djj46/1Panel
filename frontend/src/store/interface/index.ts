import { RouteRecordRaw } from 'vue-router';

export interface ThemeConfigProp {
    panelName: string;
    primary: string;
    theme: string; // dark | bright ｜ auto
    footer: boolean;
}

export interface GlobalState {
    isLoading: boolean;
    loadingText: string;
    isLogin: boolean;
    csrfToken: string;
    language: string; // zh | en
    // assemblySize: string; // small | default | large
    themeConfig: ThemeConfigProp;
    isFullScreen: boolean;
}

export interface MenuState {
    isCollapse: boolean;
    menuList: RouteRecordRaw[];
}

export interface AuthState {
    authRouter: string[];
}
