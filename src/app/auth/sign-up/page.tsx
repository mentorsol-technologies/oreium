"use client"
import Link from "next/link";
import { useState } from "react";
import PasswordField from "@/components/PasswordField";

export default function Signup() {
    const [name, setName] = useState("Perry Wilson");
    const [email, setEmail] = useState("perry.wilson@example.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(true);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signup submitted");
    };

    return (
        <div className="w-full max-w-[520px] flex flex-col gap-6 py-12">
            <div className="flex flex-col gap-1">
                <h1 className="text-[36px] font-semibold leading-[129%] text-white">
                    Open Your Vault
                </h1>
                <p className="text-sm leading-[140%] tracking-[-0.28px] text-[#A1A1A1]">
                    Get secure access to U.S.- Vaulted gold. Create your credentials, Then verify your
                    identity and link your bank.
                </p>
            </div>

            <form onSubmit={handleSignup} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <label className="text-sm leading-[140%] tracking-[-0.28px] text-[#A1A1A1]">
                        Name
                    </label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] min-h-[48px]">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 bg-transparent text-white text-base leading-[150%] outline-none placeholder:text-white"
                            placeholder="Perry Wilson"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm leading-[140%] tracking-[-0.28px] text-[#A1A1A1]">
                        Email Address
                    </label>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] min-h-[48px]">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent text-white text-base leading-[150%] outline-none placeholder:text-white"
                            placeholder="perry.wilson@example.com"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <PasswordField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="•••••••••••"
                        label="Password"
                    />

                    <PasswordField
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="•••••••••••"
                        label="Confirm Password"
                    />

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={() => setAgreeToTerms(!agreeToTerms)}
                            className="w-6 h-6 flex items-center justify-center"
                        >
                            <div className="relative w-6 h-6">
                                <div
                                    className={`w-4 h-4 rounded ${agreeToTerms ? "bg-white" : "bg-transparent border border-[#A1A1A1]"
                                        } absolute left-1 top-1`}
                                ></div>
                                {agreeToTerms && (
                                    <svg
                                        className="absolute left-[7px] top-2 w-2.5 h-2"
                                        width="10"
                                        height="8"
                                        viewBox="0 0 10 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.85063 0.207011C8.91267 0.141469 8.98672 0.0894006 9.06844 0.0538547C9.15016 0.0183089 9.23791 0 9.32655 0C9.41519 0 9.50293 0.0183089 9.58465 0.0538547C9.66637 0.0894006 9.74042 0.141469 9.80247 0.207011C10.0625 0.47903 10.0661 0.918591 9.81156 1.19532L4.43599 7.7746C4.37496 7.84399 4.3009 7.89976 4.21833 7.93849C4.13577 7.97723 4.04644 7.99812 3.95581 7.99988C3.86518 8.00164 3.77515 7.98424 3.69124 7.94874C3.60733 7.91324 3.5313 7.86039 3.46779 7.79343L0.196815 4.36166C0.0706642 4.22846 0 4.04935 0 3.8628C0 3.67625 0.0706642 3.49714 0.196815 3.36394C0.258858 3.2984 0.332907 3.24633 0.414627 3.21078C0.496347 3.17524 0.584095 3.15693 0.672734 3.15693C0.761373 3.15693 0.849121 3.17524 0.930841 3.21078C1.01256 3.24633 1.08661 3.2984 1.14865 3.36394L3.92325 6.2752L8.83245 0.227719C8.8381 0.220444 8.84417 0.213529 8.85063 0.207011Z"
                                            fill="#BB984C"
                                        />
                                    </svg>
                                )}
                            </div>
                        </button>
                        <span className="text-base leading-[150%] text-white">
                            I Agree the{" "}
                            <button type="button" className="text-[#BB984C] font-semibold underline">
                                Terms & Conditions
                            </button>
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#BB984C] text-[#0D0A04] text-base leading-[150%] font-normal text-center transition-opacity hover:opacity-90"
                >
                    Signup
                </button>
            </form>

            <div className="text-center text-base leading-[150%]">
                <span className="text-[#A1A1A1]">Already have an account? </span>
                <Link href="/auth/login" className="text-[#BB984C] font-semibold underline decoration-[#BB984C] underline-offset-2">
                    Login
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-center text-base leading-[150%] text-[#A1A1A1]">
                    For your security, you'll need to verify your identity and link a U.S. bank account before making your first purchase.
                </p>
                <p className="text-center text-base leading-[150%]">
                    <span className="text-[#A1A1A1]">We never share your credentials. </span>
                    <button type="button" className="text-[#BB984C] font-semibold underline">
                        Learn how we keep your data secure
                    </button>
                </p>
            </div>
        </div>
    );
}
