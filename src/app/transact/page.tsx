"use client"
import { useState } from "react";
import { Tabs } from "@/components/Tabs";
import { Button } from "@/components/Button";

export default function Transact() {
    const [activeTab, setActiveTab] = useState<"buy" | "redeem">("buy");
    const [orderBy, setOrderBy] = useState<"usd" | "grams">("usd");
    const [amount, setAmount] = useState(1000);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const pricePerGram = 85.58;
    const goldAmount = amount / pricePerGram;

    const handleIncrement = () => setAmount(prev => prev + 100);
    const handleDecrement = () => setAmount(prev => Math.max(100, prev - 100));

    const handlePurchase = () => {
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        setShowConfirmation(false);
        // Handle actual purchase logic here
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const tabs = [
        { id: "buy", label: "Buy Gold" },
        { id: "redeem", label: "Redeem" },
    ];

    return (
        <div className="p-6 lg:p-[46px] flex justify-center">
            <div className="w-full max-w-[670px] flex flex-col gap-10">
                {!showConfirmation ? (
                    <>
                        {/* Tabs */}
                        <Tabs
                            tabs={tabs}
                            activeTab={activeTab}
                            onTabChange={(tabId) => setActiveTab(tabId as "buy" | "redeem")}
                        />

                        {/* Form Card */}
                        <div className="bg-[#202020] rounded-[20px] shadow-sm p-6 lg:p-[42px] flex flex-col gap-10">
                            {/* Order Type Toggle */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant={orderBy === "usd" ? "primary" : "secondary"}
                                    onClick={() => setOrderBy("usd")}
                                    fullWidth
                                    className="!rounded-[12px]"
                                >
                                    Order By USD
                                </Button>
                                <Button
                                    variant={orderBy === "grams" ? "primary" : "secondary"}
                                    onClick={() => setOrderBy("grams")}
                                    fullWidth
                                    className="!rounded-[12px]"
                                >
                                    Order By Grams
                                </Button>
                            </div>

                            {/* Amount Input with Controls */}
                            <div className="flex items-end gap-4">
                                <button
                                    onClick={handleDecrement}
                                    className="w-[45px] h-12 flex items-center justify-center rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] text-white text-base hover:bg-[#3A3B3F] transition-colors"
                                >
                                    -
                                </button>

                                <div className="flex-1">
                                    <label className="block text-[#A1A1A1] font-['Plus_Jakarta_Sans'] text-sm mb-1 tracking-[-0.28px]">
                                        Amount (USD)
                                    </label>
                                    <input
                                        type="text"
                                        value={`$ ${amount.toFixed(2)}`}
                                        onChange={(e) => {
                                            const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
                                            if (!isNaN(val)) setAmount(val);
                                        }}
                                        className="w-full px-4 py-3 rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] text-white font-['Plus_Jakarta_Sans'] text-base outline-none focus:border-[#BB984C] transition-colors"
                                    />
                                </div>

                                <button
                                    onClick={handleIncrement}
                                    className="w-[45px] h-12 flex items-center justify-center rounded-2xl border border-[#3A3B3F] bg-[#2A2A2A] text-white text-base hover:bg-[#3A3B3F] transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            {/* Summary Box */}
                            <div className="bg-[#383632] rounded-2xl p-4 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">Gold Amount</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">{goldAmount.toFixed(4)}g</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">Your Buy Price</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">${pricePerGram.toFixed(2)}/g</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base font-bold">Total</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base font-bold">${amount.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Purchase Button */}
                            <Button
                                onClick={handlePurchase}
                                fullWidth
                            >
                                Purchase Gold
                            </Button>

                            {/* Minimum Purchase Note */}
                            <p className="text-[#A1A1A1] font-['Plus_Jakarta_Sans'] text-base text-center">
                                Minimum Purchase $100.00 | Instant settlement
                            </p>
                        </div>
                    </>
                ) : (
                    /* Confirmation View */
                    <div className="flex flex-col items-center gap-10">
                        {/* Success Icon */}
                        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34 66C51.6731 66 66 51.6731 66 34C66 16.3269 51.6731 2 34 2C16.3269 2 2 16.3269 2 34C2 51.6731 16.3269 66 34 66Z" stroke="#63CC3E" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.52 34.0003L26.72 39.2003C28.24 40.7203 30.72 40.8003 32.24 39.2803L46.48 26.1603" stroke="#63CC3E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        {/* Title */}
                        <div className="text-center">
                            <h2 className="text-white font-['Poppins'] text-[32px] font-bold mb-2">
                                Confirm Your Purchase
                            </h2>
                            <p className="text-white font-['Plus_Jakarta_Sans'] text-base">
                                Review your order details before completing your purchase
                            </p>
                        </div>

                        {/* Confirmation Card */}
                        <div className="w-full bg-[#202020] rounded-[20px] shadow-lg p-6 lg:p-[42px] flex flex-col gap-6">
                            {/* Order Summary Title */}
                            <h3 className="text-white font-['Poppins'] text-[32px] font-bold text-center">
                                Order Summary
                            </h3>

                            {/* Summary Box */}
                            <div className="bg-[#383632] rounded-2xl p-3 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">Gold Amount</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">{goldAmount.toFixed(4)}g</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">Your Buy Price</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base">${pricePerGram.toFixed(2)}/g</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base font-bold">Total</span>
                                    <span className="text-white font-['Plus_Jakarta_Sans'] text-base font-bold">${amount.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* What Happens Next */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-white font-['Poppins'] text-lg">What Happens Next</h4>
                                <ul className="text-white font-['Poppins'] text-base leading-7 list-none space-y-1">
                                    <li>• Your payment will be processed securely</li>
                                    <li>• Gold will be allocated to your vault immediately</li>
                                    <li>• You'll receive a confirmation email with transaction details</li>
                                </ul>
                            </div>

                            {/* Confirm Button */}
                            <Button
                                onClick={handleConfirm}
                                fullWidth
                            >
                                Confirm & Pay ${amount.toFixed(2)}
                            </Button>

                            {/* Cancel Button */}
                            <Button
                                onClick={handleCancel}
                                variant="outline"
                                fullWidth
                            >
                                Cancel
                            </Button>

                            {/* Terms */}
                            <p className="text-white/60 font-['Poppins'] text-sm text-center leading-6">
                                By confirming, you agree to purchase {goldAmount.toFixed(4)}g of gold at ${pricePerGram.toFixed(2)}/g. All transactions are secure and encrypted.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}