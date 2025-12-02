"use client"
import { useState } from "react";
import { Card } from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { CopyButton } from "@/components/CopyButton";
import { Tabs } from "@/components/Tabs";
import { Table, TableColumn } from "@/components/Table";
import { StatusBadge } from "@/components/Activity/StatusBadge";
import { Info } from "lucide-react";

interface InvitedMember {
    email: string;
    status: "verified" | "pending";
    earnedCredits: string;
    date: string;
}

const invitedMembers: InvitedMember[] = [
    { email: "abc@mail.com", status: "verified", earnedCredits: "$1,024", date: "Oct 15, 2025" },
    { email: "abc@mail.com", status: "verified", earnedCredits: "$1,024", date: "Oct 15, 2025" },
    { email: "abc@mail.com", status: "verified", earnedCredits: "$1,024", date: "Oct 15, 2025" },
];

export default function Invite() {
    const [activeTab, setActiveTab] = useState<"circle" | "history">("circle");
    const referralLink = "https://oreium.vault/ref/ORE-Perry";

    // Calculate progress (example: need 3 more verified members)
    const verifiedCount = invitedMembers.filter(m => m.status === "verified").length;
    const membersNeeded = 3;
    // Progress: if we need 3 more, total target is current + 3
    const totalTarget = verifiedCount + membersNeeded;
    const progress = totalTarget > 0 ? (verifiedCount / totalTarget) * 100 : 0;

    const columns: TableColumn<InvitedMember>[] = [
        {
            key: "email",
            header: "Email",
            minWidth: "200px",
        },
        {
            key: "status",
            header: "Status",
            minWidth: "120px",
            render: (item) => <StatusBadge status={item.status} />,
        },
        {
            key: "earnedCredits",
            header: "Earned Credits",
            minWidth: "150px",
        },
        {
            key: "date",
            header: "Date",
            minWidth: "150px",
        },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-[46px] max-w-[1484px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Invite To The Circle Card */}
                <Card padding="lg">
                    <h2 className="text-white font-['Poppins'] text-xl font-semibold mb-6">
                        Invite To The Circle
                    </h2>
                    <div className="flex flex-col items-start">
                        <div className="text-white font-['Poppins'] text-4xl sm:text-5xl font-bold mb-2">
                            0.0000
                        </div>
                        <p className="text-[#717579] font-['Poppins'] text-sm">
                            Your ORE Credits
                        </p>
                    </div>
                </Card>

                {/* Next Milestone Card */}
                <Card padding="lg">
                    <h2 className="text-white font-['Poppins'] text-xl font-semibold mb-6">
                        Next Milestone
                    </h2>
                    <div className="space-y-4">
                        <ProgressBar value={progress} />
                        <p className="text-white font-['Poppins'] text-sm">
                            Invite <strong className="text-[#BB984C]">3 more</strong> verified members to earn <strong className="text-[#BB984C]">+0.1000 ORE</strong>
                        </p>
                        <div>
                            <label className="text-[#717579] font-['Poppins'] text-sm mb-2 block">
                                Your Referral Link
                            </label>
                            <div className="flex items-center gap-2 bg-[#161717] rounded-[10px] p-3 border border-white/10">
                                <input
                                    type="text"
                                    value={referralLink}
                                    readOnly
                                    className="flex-1 bg-transparent text-white font-['Poppins'] text-sm outline-none"
                                />
                                <CopyButton text={referralLink} size="md" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* How Gold Credits Work Card */}
            <Card padding="lg" className="mb-6 sm:mb-8">
                <h2 className="text-white font-['Poppins'] text-xl font-semibold mb-6">
                    How Gold Credits Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-white font-['Poppins'] text-base font-semibold mb-4">
                            Tiered Reward Structure
                        </h3>
                        <ul className="space-y-3 text-[#717579] font-['Poppins'] text-sm">
                            <li>
                                First <strong className="text-white">1.0000g</strong> of purchases: Earn <strong className="text-[#BB984C]">0.001g</strong> per gram purchased by your invitee (<strong className="text-[#BB984C]">0.1%</strong> reward)
                            </li>
                            <li>
                                Beyond <strong className="text-white">1.0000g</strong>: Earn <strong className="text-[#BB984C]">0.0001g</strong> per gram purchased by your invitee (<strong className="text-[#BB984C]">0.01%</strong> reward)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-['Poppins'] text-base font-semibold mb-4">
                            Important Terms
                        </h3>
                        <ul className="space-y-3 text-[#717579] font-['Poppins'] text-sm">
                            <li>Rewards credited only when invitee purchases settle</li>
                            <li>Credits auto-apply to your purchases (toggle available)</li>
                            <li>14-day clawback period if invitee sells early</li>
                            <li>Anti-fraud checks prevent self-referrals</li>
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Your Circle / Rewards History Section */}
            <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <Tabs
                        tabs={[
                            { id: "circle", label: "Your Circle" },
                            { id: "history", label: "Rewards History" },
                        ]}
                        activeTab={activeTab}
                        onTabChange={(tabId) => setActiveTab(tabId as "circle" | "history")}
                        className="w-full sm:w-auto"
                    />
                    <div className="flex items-center gap-2 text-[#717579] font-['Poppins'] text-sm">
                        <Info className="w-4 h-4" />
                        <span>About ORE Credits</span>
                    </div>
                </div>
            </div>


            {activeTab === "circle" && (
                <div className="w-full flex flex-col gap-2.5">
                    <Table
                        columns={columns}
                        data={invitedMembers}
                        keyExtractor={(item, index) => `${item.email}-${index}`}
                    />
                </div>
            )}

            {activeTab === "history" && (
                <div className="text-center py-8">
                    <p className="text-white/50 font-['Poppins'] text-base">
                        No rewards history available
                    </p>
                </div>
            )}
        </div>
    );
}
