import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Vault",
            path: "/",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.37031 11.2522V5.85078" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.37063 2.31287V0.831207C8.37063 0.0594069 8.99633 -0.566293 9.76813 -0.566293H27.074C27.8458 -0.566293 28.4715 0.0594069 28.4715 0.831207V18.1371C28.4715 18.9089 27.8458 19.5346 27.074 19.5346H9.76813C8.99633 19.5346 8.37063 18.9089 8.37063 18.1371V15.4934" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.627 2.40668H25.2151V16.5615H11.627V2.40668Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.4211 13.0576C20.3946 13.0576 21.9945 11.4577 21.9945 9.48415C21.9945 7.51061 20.3946 5.91071 18.4211 5.91071C16.4475 5.91071 14.8477 7.51061 14.8477 9.48415C14.8477 11.4577 16.4475 13.0576 18.4211 13.0576Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.421 10.9782C19.2462 10.9782 19.915 10.3093 19.915 9.48415C19.915 8.65906 19.2462 7.99023 18.421 7.99023C17.5959 7.99023 16.927 8.65906 16.927 9.48415C16.927 10.3093 17.5959 10.9782 18.421 10.9782Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8942 4.93126L14.4644 3.50137" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.4349 15.5598L21.005 14.1299" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8942 14.1299L14.4644 15.5598" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.4349 3.50137L21.005 4.93126" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            name: "Transact",
            path: "/transact",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 17.06H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            name: "Activity",
            path: "/activity",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.37504V8.9375C22 9.62785 21.4404 10.1875 20.75 10.1875H17.1875C16.4972 10.1875 15.9375 9.62785 15.9375 8.9375C15.9375 8.24715 16.4972 7.6875 17.1875 7.6875H18.1426C16.7623 5.70918 14.5003 4.5 12 4.5C8.8891 4.5 6.14656 6.3716 5.01305 9.26809C4.76141 9.91098 4.03625 10.2281 3.39344 9.97656C2.75055 9.72496 2.43336 8.99984 2.68496 8.35699C3.40992 6.50453 4.65945 4.92316 6.29848 3.78383C7.97727 2.61684 9.94879 2 12 2C14.0512 2 16.0227 2.61684 17.7015 3.78379C18.3686 4.24746 18.9711 4.78441 19.5 5.38301V5.37508C19.5 4.68473 20.0596 4.12508 20.75 4.12508C21.4404 4.12508 22 4.68469 22 5.37504V5.37504ZM20.6066 14.0235C19.9637 13.7718 19.2386 14.0891 18.987 14.732C17.8534 17.6284 15.1109 19.5 12 19.5C9.55285 19.5 7.33383 18.3416 5.94648 16.4375H6.81246C7.50281 16.4375 8.06246 15.8779 8.06246 15.1875C8.06246 14.4971 7.50281 13.9375 6.81246 13.9375H3.25C2.55965 13.9375 2 14.4971 2 15.1875V18.75C2 19.4404 2.55965 20 3.25 20C3.94035 20 4.5 19.4404 4.5 18.75V18.617C5.02891 19.2156 5.63145 19.7525 6.29848 20.2162C7.97727 21.3832 9.94879 22 12 22C14.0512 22 16.0227 21.3832 17.7015 20.2162C19.3405 19.0769 20.5901 17.4955 21.315 15.643C21.5666 15.0002 21.2495 14.2751 20.6066 14.0235V14.0235Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: "Audit",
            path: "/audit",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 8.14652H13V6.1465H11V5.14651H8.99998V6.1975C7.85998 6.42948 6.99997 7.4395 6.99997 8.64648C6.99997 10.0245 8.12197 11.1465 9.49995 11.1465H10.5C10.776 11.1465 11 11.3705 11 11.6465C11 11.9225 10.776 12.1465 10.5 12.1465H6.99997V14.1465H8.99998V15.1465H11V14.0955C12.14 13.8635 13 12.8525 13 11.6465C13 10.2685 11.879 9.14655 10.5 9.14655H9.50004C9.22503 9.14655 9.00003 8.92253 9.00003 8.64653C9.00003 8.37053 9.22498 8.14652 9.5 8.14652Z" fill="currentColor" />
                    <path d="M9.06098 18.0865C5.091 17.6195 1.99997 14.2395 1.99997 10.1465C1.99997 5.7355 5.58895 2.14647 9.99998 2.14647C14.411 2.14647 18 5.7355 18 10.1465C18 10.4855 17.972 10.8185 17.931 11.1465H19.95C19.982 10.8175 20 10.4845 20 10.1465C20 4.63253 15.515 0.146545 10 0.146545C4.48598 0.146499 0 4.63253 0 10.1465C0 14.7485 3.12698 18.6225 7.36402 19.7825L9.06098 18.0865Z" fill="currentColor" />
                    <path d="M18 13.1465V15.1465H20.586L17 18.7325L14.707 16.4395C14.316 16.0485 13.684 16.0485 13.293 16.4395L7.29303 22.4395L8.70702 23.8535L14 18.5605L16.293 20.8525C16.684 21.2435 17.316 21.2435 17.707 20.8525L22 16.5605V19.1465H24V13.1465H18Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: "Invite",
            path: "/invite",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.41 22C3.41 18.13 7.26 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.4897 17.98H16.5098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 16.52V19.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            name: "User Management",
            path: "/user-management",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.41 22C3.41 18.13 7.26 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.4897 17.98H16.5098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 16.52V19.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            name: "Settings",
            path: "/settings",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.625 3.853C9.335 2.739 10.581 2 12 2C13.419 2 14.665 2.739 15.375 3.853C16.664 3.567 18.068 3.926 19.071 4.929C20.074 5.933 20.433 7.33599 20.147 8.62599C21.261 9.33599 22 10.582 22 12C22 13.419 21.261 14.665 20.147 15.375C20.433 16.665 20.074 18.068 19.071 19.071C18.068 20.075 16.664 20.433 15.375 20.148C14.665 21.262 13.419 22 12 22C10.581 22 9.335 21.262 8.625 20.148C7.335 20.433 5.932 20.075 4.929 19.071C3.926 18.068 3.56701 16.665 3.85201 15.375C2.73901 14.665 2 13.419 2 12C2 10.582 2.73901 9.33599 3.85201 8.62599C3.56701 7.33599 3.926 5.933 4.929 4.929C5.932 3.926 7.335 3.567 8.625 3.853ZM8.67801 5.98199C8.94001 6.11799 9.24901 6.13099 9.52201 6.01799C9.79501 5.90499 10.004 5.677 10.093 5.396C10.349 4.587 11.106 4 12 4C12.894 4 13.651 4.587 13.907 5.396C13.996 5.677 14.205 5.90499 14.478 6.01799C14.751 6.13099 15.059 6.11799 15.321 5.98199C16.075 5.59099 17.025 5.71099 17.657 6.34399C18.289 6.97599 18.41 7.926 18.019 8.679C17.883 8.941 17.869 9.25 17.982 9.522C18.095 9.795 18.323 10.004 18.604 10.093C19.414 10.349 20 11.106 20 12C20 12.894 19.414 13.652 18.604 13.908C18.323 13.997 18.095 14.206 17.982 14.478C17.869 14.751 17.883 15.06 18.019 15.322C18.41 16.075 18.289 17.025 17.657 17.657C17.025 18.289 16.075 18.41 15.321 18.019C15.059 17.883 14.751 17.87 14.478 17.983C14.205 18.096 13.996 18.324 13.907 18.605C13.651 19.414 12.894 20 12 20C11.106 20 10.349 19.414 10.093 18.605C10.004 18.324 9.79501 18.096 9.52201 17.983C9.24901 17.87 8.94001 17.883 8.67801 18.019C7.92501 18.41 6.97501 18.289 6.34301 17.657C5.71101 17.025 5.59001 16.075 5.98101 15.322C6.11701 15.06 6.13001 14.751 6.01801 14.478C5.90501 14.206 5.67701 13.997 5.39501 13.908C4.58601 13.652 4 12.894 4 12C4 11.106 4.58601 10.349 5.39501 10.093C5.67701 10.004 5.90501 9.795 6.01801 9.522C6.13001 9.25 6.11701 8.941 5.98101 8.679C5.59001 7.926 5.71101 6.97599 6.34301 6.34399C6.97501 5.71099 7.92501 5.59099 8.67801 5.98199ZM12 8C9.792 8 8 9.793 8 12C8 14.208 9.792 16 12 16C14.208 16 16 14.208 16 12C16 9.793 14.208 8 12 8ZM12 10C13.104 10 14 10.897 14 12C14 13.104 13.104 14 12 14C10.896 14 10 13.104 10 12C10 10.897 10.896 10 12 10Z" fill="currentColor" />
                </svg>
            ),
        },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 h-full bg-[#202020] w-[345px] z-50 transition-transform duration-300 flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo */}
                <div className="flex items-center gap-3.5 px-[50px] py-[22px]">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/3eb2ce8b86848e00dc491b66f529e527c536673f?width=114"
                        alt="Oreium Logo Icon"
                        className="w-[57px] h-[57px]"
                    />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/7fd1d9960f89859e5238fd76a3baafcb2d87ba8f?width=252"
                        alt="Oreium"
                        className="w-[126px] h-[27px]"
                    />
                </div>

                {/* Main Menu */}
                <div className="mt-[29px]">
                    <h3 className="text-[#717579] font-['Poppins'] text-lg font-medium px-[50px] mb-4">
                        Main Menu
                    </h3>
                    <nav className="space-y-0">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => onClose()}
                                className={cn(
                                    "flex items-center gap-[32px] px-[50px] h-[60px] relative transition-all duration-200 font-['Poppins'] text-lg font-medium group",
                                    isActive(item.path)
                                        ? "bg-[#BB984C]/10 text-white before:absolute before:right-0 before:w-2 before:h-full before:bg-[#BB984C] before:rounded-l"
                                        : "text-[#717579] hover:text-white hover:bg-[#2B2B2B]"
                                )}
                            >
                                <div className={cn(
                                    "w-6 h-6 flex items-center justify-center transition-transform duration-200",
                                    isActive(item.path)
                                        ? "scale-110"
                                        : "group-hover:scale-110 group-hover:text-white"
                                )}>
                                    {item.icon}
                                </div>
                                <span className="transition-colors duration-200">{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Footer */}
                <div className="mt-auto px-[50px] pb-[51px]">
                    <p className="text-[#717579] font-['Poppins'] text-sm">
                        © 2025 All Rights Reserved
                    </p>
                </div>

                {/* Border */}
                <div className="absolute right-0 top-0 w-px h-full bg-[#2B2B2B]" />
            </aside>
        </>
    );
}
