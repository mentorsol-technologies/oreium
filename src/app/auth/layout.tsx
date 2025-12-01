export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#161717] flex">
            <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
                {children}
            </div>

            <div className="hidden lg:flex lg:w-[670px] bg-[#202020] items-center justify-center">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/feb67bfa280be0094b8c8795286736f20874551c?width=908"
                    alt="Oreium Logo"
                    className="w-[454px] h-[454px] object-contain"
                />
            </div>
        </div>
    );
}

