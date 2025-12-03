"use client"
import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal";

const GoldLocationMap = dynamic(() => import("@/components/GoldLocationMap"), {
  ssr: false,
});

const UserLocationsMap = dynamic(() => import("@/components/UserLocationsMap"), {
  ssr: false,
});

const chartData = [
  { month: "Jan", value: 8500 },
  { month: "Feb", value: 9200 },
  { month: "Mar", value: 8800 },
  { month: "Apr", value: 10536.40 },
  { month: "Jun", value: 9800 },
  { month: "Jul", value: 9500 },
  { month: "Aug", value: 10200 },
  { month: "Sep", value: 9900 },
  { month: "Oct", value: 10800 },
  { month: "Nov", value: 10200 },
];

function generateRandomLocations(count: number = 5) {
  const baseLat = 41.1455;
  const baseLng = -104.8020;
  const radius = 0.5;

  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    lat: baseLat + (Math.random() - 0.5) * radius,
    lng: baseLng + (Math.random() - 0.5) * radius,
    name: `User ${i + 1}`,
  }));
}

export default function Dashboard() {
  const [showGoldLocation, setShowGoldLocation] = useState(false);
  const [showLocationsModal, setShowLocationsModal] = useState(false);
  const router = useRouter();

  const userLocations = useMemo(() => generateRandomLocations(5), []);
  return (
    <div className="p-4 sm:p-6 lg:p-[46px] max-w-[1484px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="relative h-[168px] rounded-[20px] bg-[#BB984C] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f2b16e4edc906f7238cda5d01411e79ef20071af?width=1426"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative p-4 sm:p-[30px] flex flex-col h-full justify-between">
            <div>
              <p className="text-white font-['Poppins'] text-sm mb-1">Your Vaulted Gold</p>
              <p className="text-white font-['Poppins']">
                <span className="text-2xl sm:text-[32px] font-bold">65,123.12</span>
                <span className="text-lg sm:text-[22px]"> g</span>
              </p>
            </div>
            <button onClick={() => router.push("/transact")} className="w-fit px-4 sm:px-6 py-1.5 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm font-medium hover:bg-white/90 transition-colors">
              Buy Gold
            </button>
          </div>
        </div>

        <div className="relative h-[168px] rounded-[20px] bg-[#3E84D7] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/72962fc15ae8356418eba739807d99b245686c74?width=526"
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-cover"
          />
          <div className="relative p-4 sm:p-[30px] flex flex-col h-full justify-between z-10">
            <div>
              <p className="text-white font-['Poppins'] text-sm mb-1">Gold Credits</p>
              <p className="text-white font-['Poppins'] mb-1">
                <span className="text-2xl sm:text-[32px] font-bold">23.0000</span>
                <span className="text-lg sm:text-[22px]">g</span><br />
                <span className="text-white font-['Poppins'] text-xs sm:text-sm">
                  Earn Credits by inviting members. Credits auto-apply to purchases.
                </span>
              </p>

            </div>
            <button onClick={() => router.push("/invite")} className="w-fit px-4 sm:px-6 py-1.5 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm font-medium hover:bg-white/90 transition-colors">
              Invite & Earn
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
        <div className="rounded-[20px] border border-[#2B2B2B] bg-[#202020] p-4 sm:p-6 lg:p-[37px]">
          <h2 className="text-white font-['Poppins'] text-lg sm:text-xl font-bold mb-1">Analytics</h2>
          <p className="text-[#717579] font-['Poppins'] text-xs mb-4 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <div className="relative h-[250px] sm:h-[346px] mb-4 sm:mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} baseValue={chartData[4].value}>
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="85.13%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  stroke="#717579"
                  tick={{ fill: "#717579", fontSize: 14, fontFamily: "Poppins" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  active={2 === 2}
                  content={(props) => {
                    const { active, payload } = props;
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#161717] rounded-xl p-4 shadow-lg">
                          <p className="text-[#717579] font-['Poppins'] text-sm mb-1">
                            Jun 29, 2020 05:43 PM
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-[13px] h-[13px] rounded-full bg-[#BA984C]" />
                            <span className="text-[#717579] font-['Poppins'] text-sm">Gold</span>
                          </div>
                          <p className="text-white font-['Poppins'] text-sm font-bold">
                            {payload[0].value.toLocaleString()} USD
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#BB984C"
                  strokeWidth={6}
                  dot={false}
                  activeDot={{
                    r: 11,
                    fill: "#BA984C",
                    stroke: "#202020",
                    strokeWidth: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-[20px] border border-[#2B2B2B] bg-[#202020] relative overflow-hidden h-full">
          <div className="relative h-full min-h-[400px]">
            <div className="absolute inset-0">
              <GoldLocationMap center={[40.7128, -74.0060]} zoom={13} showMarker={showGoldLocation} />
            </div>

            <div className="absolute inset-0 pointer-events-none flex flex-col">
              <div className="p-4 sm:p-6 lg:p-[37px]">
                <h2 className="text-white font-['Poppins'] text-lg sm:text-xl font-bold drop-shadow-lg">
                  My Gold Location
                </h2>
              </div>

              <div className="flex-1"></div>
              <div className="p-4 sm:p-6 lg:p-[37px]">
                <button
                  onClick={() => setShowLocationsModal(true)}
                  className="w-full py-3 px-6 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium hover:bg-white/90 transition-colors shadow-lg pointer-events-auto"
                >
                  Show my gold location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showLocationsModal}
        onClose={() => setShowLocationsModal(false)}
        title="Your Gold Storage Partners"
        subtitle="Your gold is securely vaulted with our trusted institutional partners."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-white font-['Poppins'] text-lg font-bold mb-2">
              The Wyoming Reserve
            </h3>
            <p className="font-['Poppins'] text-sm text-white/70 mb-4">
              Your gold is securely stored in institutional-grade vaults operated by The Wyoming Reserve, providing bank-level security and full segregation of assets.
            </p>
            <div className="mb-4">
              <UserLocationsMap locations={userLocations} />
            </div>

            <a
              href="https://www.scottsdalemint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F6BB02] font-['Poppins'] text-sm hover:underline inline-flex items-center gap-1"
            >
              Visit Scottsdale Mint →
            </a>
          </div>
          <div>
            <h3 className="text-white font-['Poppins'] text-lg font-bold mb-1">
              Scottsdale Mint
            </h3>
            <p className="font-['Poppins'] text-xs text-white/50 mb-2">
              Gold Supplier
            </p>
            <p className="font-['Poppins'] text-sm text-white/70 mb-4">
              We source our premium gold exclusively from Scottsdale Mint, one of the most respected precious metals refiners in North America, ensuring the highest quality standards.
            </p>
            <a
              href="https://www.scottsdalemint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F6BB02] font-['Poppins'] text-sm hover:underline inline-flex items-center gap-1"
            >
              Visit Scottsdale Mint →
            </a>
          </div>

          <div className="bg-muted rounded-[20px] p-4">
            <h3 className="text-white font-['Poppins'] text-lg font-bold mb-1">
              Security & Transparency
            </h3>
            <p className="font-['Poppins'] text-xs text-white/50 mb-2">
              Gold Supplier
            </p>
            <p className="font-['Poppins'] text-sm text-white/70">
              All gold held in the Oreium Vault is fully allocated, segregated, and insured. Regular third-party audits verify our holdings match client balances. Your gold remains your property at all times.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}