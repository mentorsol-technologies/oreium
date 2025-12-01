"use client"
import { useState } from "react";

interface HeaderProps {
    sidebarOpen: boolean;
    onSidebarToggle: () => void;
    notifications?: number;
    title?: string;
}

export function Header({ sidebarOpen, onSidebarToggle, notifications = 23, title = "Vault" }: HeaderProps) {
    return (
        <nav className="h-[80px] bg-[#161717]  flex items-center justify-between px-4 sm:px-8 lg:px-[46px]">
            <div className="flex items-center gap-4 sm:gap-[72px]">
                {/* Mobile Menu Button */}
                <button
                    onClick={onSidebarToggle}
                    className="lg:hidden text-[#717579] hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.375 25.75H4.62509C3.7276 25.75 3.00009 25.0224 3.00009 24.125C3.00009 23.2276 3.7276 22.5 4.62509 22.5H17.375C18.2725 22.5 19 23.2276 19 24.125C19 25.0224 18.2725 25.75 17.375 25.75Z" fill="currentColor" />
                        <path d="M27.375 17.6249H4.62509C3.7276 17.6249 3.00009 16.8974 3.00009 16C3.00009 15.1026 3.7276 14.375 4.62509 14.375H27.375C28.2725 14.375 29 15.1025 29 16C29 16.8975 28.2725 17.6249 27.375 17.6249Z" fill="currentColor" />
                        <path d="M27.375 9.49999H4.62509C3.7276 9.49999 3.00009 8.77248 3.00009 7.87498C3.00009 6.97749 3.7276 6.24998 4.62509 6.24998H27.375C28.2725 6.24998 29 6.97749 29 7.87498C29 8.77248 28.2725 9.49999 27.375 9.49999Z" fill="currentColor" />
                    </svg>
                </button>

                {/* Desktop Menu Button */}
                <button
                    onClick={onSidebarToggle}
                    className="hidden lg:block text-[#717579] hover:text-white transition-colors"
                    aria-label="Toggle sidebar"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.375 25.75H4.62509C3.7276 25.75 3.00009 25.0224 3.00009 24.125C3.00009 23.2276 3.7276 22.5 4.62509 22.5H17.375C18.2725 22.5 19 23.2276 19 24.125C19 25.0224 18.2725 25.75 17.375 25.75Z" fill="currentColor" />
                        <path d="M27.375 17.6249H4.62509C3.7276 17.6249 3.00009 16.8974 3.00009 16C3.00009 15.1026 3.7276 14.375 4.62509 14.375H27.375C28.2725 14.375 29 15.1025 29 16C29 16.8975 28.2725 17.6249 27.375 17.6249Z" fill="currentColor" />
                        <path d="M27.375 9.49999H4.62509C3.7276 9.49999 3.00009 8.77248 3.00009 7.87498C3.00009 6.97749 3.7276 6.24998 4.62509 6.24998H27.375C28.2725 6.24998 29 6.97749 29 7.87498C29 8.77248 28.2725 9.49999 27.375 9.49999Z" fill="currentColor" />
                    </svg>
                </button>

                <h1 className="text-white font-['Poppins'] text-xl sm:text-[32px] font-semibold">
                    {title}
                </h1>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
                {/* Notifications */}
                <div className="relative">
                    <button className="relative">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:opacity-80 transition-opacity">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6667 6.76267V4C14.6667 3.264 15.264 2.66666 16 2.66666C16.7347 2.66666 17.3333 3.264 17.3333 4V6.76267C19.3147 7.048 21.1667 7.968 22.5987 9.4C24.3493 11.1507 25.3333 13.5253 25.3333 16V21.0187L26.412 23.176C26.928 24.2093 26.8733 25.436 26.2653 26.4187C25.6587 27.4013 24.5853 28 23.4307 28H17.3333C17.3333 28.736 16.7347 29.3333 16 29.3333C15.264 29.3333 14.6667 28.736 14.6667 28H8.56933C7.41333 28 6.34002 27.4013 5.73336 26.4187C5.12536 25.436 5.07068 24.2093 5.58801 23.176L6.66666 21.0187V16C6.66666 13.5253 7.64936 11.1507 9.40002 9.4C10.8334 7.968 12.684 7.048 14.6667 6.76267V6.76267ZM16 9.33333C14.2307 9.33333 12.536 10.036 11.2854 11.2867C10.0347 12.536 9.33333 14.232 9.33333 16V21.3333C9.33333 21.54 9.28401 21.744 9.19201 21.9293C9.19201 21.9293 8.59867 23.116 7.972 24.368C7.86934 24.5747 7.88001 24.8213 8.00134 25.0173C8.12267 25.2133 8.33733 25.3333 8.56933 25.3333H23.4307C23.6613 25.3333 23.876 25.2133 23.9974 25.0173C24.1187 24.8213 24.1294 24.5747 24.0267 24.368C23.4 23.116 22.8067 21.9293 22.8067 21.9293C22.7147 21.744 22.6667 21.54 22.6667 21.3333V16C22.6667 14.232 21.964 12.536 20.7133 11.2867C19.4627 10.036 17.768 9.33333 16 9.33333V9.33333Z" fill="#717579" />
                        </svg>
                        {notifications > 0 && (
                            <div className="absolute -top-1 -right-1 w-[31px] h-[31px] rounded-full border-4 border-[#161717] bg-[#FDBF2F] flex items-center justify-center">
                                <span className="text-[#202020] font-['Poppins'] text-sm font-bold">{notifications}</span>
                            </div>
                        )}
                    </button>
                </div>

                <div className="hidden sm:block w-px h-[34px] bg-[#2B2B2B]" />

                {/* User Profile */}
                <div className="flex items-center gap-3 sm:gap-5">
                    <div className="hidden sm:block text-right">
                        <p className="text-white font-['Poppins'] text-lg font-bold">James Supardi</p>
                        <p className="text-[#717579] font-['Poppins'] text-xs">@ilhamsupardi</p>
                    </div>
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/b403e0bc506bf9c4c52e61de86794cff3bb9f8b8?width=114"
                        alt="User"
                        className="w-[45px] h-[45px] sm:w-[57px] sm:h-[57px] rounded-full"
                    />
                    <button
                        className="w-[45px] h-[45px] sm:w-[57px] sm:h-[57px] rounded-full bg-[rgba(253,83,83,0.15)] flex items-center justify-center hover:bg-[rgba(253,83,83,0.25)] transition-colors"
                        aria-label="Logout"
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.044 6.64269C9.04936 7.16802 8.12935 7.84267 7.31868 8.652C5.19335 10.7773 4 13.6613 4 16.6667V18C4 21.0053 5.19335 23.888 7.31868 26.0134C9.44402 28.1387 12.3267 29.3333 15.3333 29.3333H16.6667C19.672 29.3333 22.5547 28.1387 24.68 26.0134C26.8053 23.888 28 21.0053 28 18V16.6667C28 13.6613 26.8053 10.7773 24.68 8.652C23.8693 7.84267 22.9493 7.16802 21.9547 6.64269C21.304 6.30002 20.4974 6.54935 20.1534 7.20002C19.8107 7.85068 20.06 8.65735 20.7107 9.00135C21.472 9.40268 22.1747 9.91868 22.7947 10.5387C24.42 12.164 25.3333 14.368 25.3333 16.6667V18C25.3333 20.2987 24.42 22.5027 22.7947 24.128C21.1693 25.7534 18.964 26.6667 16.6667 26.6667H15.3333C13.0347 26.6667 10.8294 25.7534 9.20402 24.128C7.57869 22.5027 6.66667 20.2987 6.66667 18V16.6667C6.66667 14.368 7.57869 12.164 9.20402 10.5387C9.82402 9.91868 10.528 9.40268 11.288 9.00135C11.9387 8.65735 12.1893 7.85068 11.8453 7.20002C11.5013 6.54935 10.6947 6.30002 10.044 6.64269V6.64269ZM14.6667 4.00001V14.6667C14.6667 15.4027 15.264 16 16 16C16.736 16 17.3333 15.4027 17.3333 14.6667V4.00001C17.3333 3.26401 16.7347 2.66667 16 2.66667C15.264 2.66667 14.6667 3.26401 14.6667 4.00001Z" fill="#FD5353" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

