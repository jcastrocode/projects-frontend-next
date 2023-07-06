import { AUTH_PAGES } from "@/constant/auth";



export const isAuthPages = (url:string) => AUTH_PAGES.some((page) => page.startsWith(url));