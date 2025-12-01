"use client"

interface ComingSoonProps {
    title?: string;
}

export function ComingSoon({ title = "Coming Soon" }: ComingSoonProps) {
    return (
        <div className="flex-1 p-4 lg:p-8 overflow-auto flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <div className="mb-6">
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto"
                    >
                        <circle cx="60" cy="60" r="60" fill="#2B2B2B" />
                        <path
                            d="M60 30C43.4315 30 30 43.4315 30 60C30 76.5685 43.4315 90 60 90C76.5685 90 90 76.5685 90 60C90 43.4315 76.5685 30 60 30ZM60 80C48.9543 80 40 71.0457 40 60C40 48.9543 48.9543 40 60 40C71.0457 40 80 48.9543 80 60C80 71.0457 71.0457 80 60 80Z"
                            fill="#BB984C"
                        />
                        <path
                            d="M60 50V70M50 60H70"
                            stroke="#BB984C"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <h2 className="text-white font-['Poppins'] text-2xl sm:text-3xl font-bold mb-3">
                    {title}
                </h2>
                <p className="text-[#717579] font-['Poppins'] text-base sm:text-lg">
                    This feature is under development and will be available soon.
                </p>
            </div>
        </div>
    );
}

