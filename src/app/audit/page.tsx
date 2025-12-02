"use client"
import { Card } from "@/components/Card";
import { InfoCard } from "@/components/InfoCard";
import { Button } from "@/components/Button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import { Download } from "lucide-react";

const chartData = [
    { month: "Jan", value: 85000 },
    { month: "Feb", value: 92000 },
    { month: "Mar", value: 88000 },
    { month: "Apr", value: 105364 },
    { month: "Jun", value: 98000 },
    { month: "Jul", value: 95000 },
    { month: "Aug", value: 102000 },
    { month: "Sep", value: 99000 },
    { month: "Oct", value: 108000 },
    { month: "Nov", value: 487098.32 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#202020] border border-white/10 rounded-[10px] p-3 shadow-lg">
                <p className="text-white font-['Poppins'] text-sm mb-2">{label}</p>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#BB984C]" />
                    <p className="text-[#BB984C] font-['Poppins'] text-sm font-semibold">
                        {payload[0].value.toLocaleString('en-US', { maximumFractionDigits: 2 })} g
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

export default function Audit() {
    const handleDownload = () => {
        console.log("Downloading audit report...");
    };

    return (
        <div className="p-4 sm:p-6 lg:p-[46px] max-w-[1484px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <InfoCard
                    title="LAST AUDIT"
                    value="Oct 15, 2025"
                    subtitle="Third-party verified"
                />
                <InfoCard
                    title="CERTIFICATE NUMBER"
                    value="ORE-2025-Q4-001"
                    subtitle="Blockchain verified"
                />
                <InfoCard
                    title="CUSTODIAN"
                    value="The Wyoming Reserve"
                    subtitle="Casper, WY LBMA accredited"
                />
            </div>

            <Card padding="lg" className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-white font-['Poppins'] text-xl font-semibold mb-2">
                            Total Gold in Oreium Vault
                        </h2>
                        <p className="text-white font-['Poppins'] text-3xl sm:text-4xl font-bold">
                            487,098.3212 g
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-[#419F75] font-['Poppins'] text-lg font-semibold">
                            +288.9% YTD
                        </p>
                    </div>
                </div>

                <div className="w-full h-[300px] sm:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2B2B2B" />
                            <XAxis
                                dataKey="month"
                                stroke="#717579"
                                tick={{ fill: "#717579", fontSize: 12, fontFamily: "Poppins" }}
                            />
                            <YAxis
                                stroke="#717579"
                                tick={{ fill: "#717579", fontSize: 12, fontFamily: "Poppins" }}
                                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#BB984C"
                                strokeWidth={2}
                                dot={{ fill: "#BB984C", r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <Card padding="md">
                <h2 className="text-white font-['Poppins'] text-xl font-semibold mb-6">
                    Audit Information
                </h2>
                <div className="space-y-4 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 pb-2 ">
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Audit Firm:
                        </span>
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Deloitte & Touche LLP
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 pb-2 ">
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Vault Location:
                        </span>
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            London, United Kingdom
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 pb-2 ">
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Storage Type:
                        </span>
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Fully Allocated & Segregated
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                        <span className="text-white/60 font-['Poppins'] text-sm">
                            Blockchain Hash:
                        </span>
                        <span className="text-white/60 font-['Poppins'] text-sm break-all">
                            0x7faddfe0-98u7eqndafquwr8ad0afaf0fadsfdfa0987
                        </span>
                    </div>
                </div>
                <Button
                    variant="primary"
                    icon={<Download className="w-5 h-5" />}
                    iconPosition="left"
                    onClick={handleDownload}
                    className="text-white sm:text-sm text-xs"
                >
                    Download Full Audit Report (PDF)
                </Button>
            </Card>
        </div>
    );
}
