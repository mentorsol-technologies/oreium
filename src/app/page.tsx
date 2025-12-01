"use client"
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, TooltipProps } from "recharts";

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

export default function Dashboard() {
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
            <button className="w-fit px-4 sm:px-6 py-1.5 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm font-medium hover:bg-white/90 transition-colors">
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
            <button className="w-fit px-4 sm:px-6 py-1.5 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm font-medium hover:bg-white/90 transition-colors">
              Invite & Earn
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
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

        <div className="rounded-[20px] border border-[#2B2B2B] bg-[#202020] p-4 sm:p-6 lg:p-[37px] relative overflow-hidden">
          <h2 className="text-white font-['Poppins'] text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            My Gold Location
          </h2>

          <div className="relative h-[250px] sm:h-[346px] mb-4 sm:mb-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/feb2f031722e39d2d675d3ee529fdafd30f422ea?width=1530"
              alt="Map"
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="95" height="96" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="47.4027" cy="47.4026" r="12.6407" fill="#F6BB02" />
                <circle cx="47.4026" cy="47.4026" r="47.4026" fill="url(#paint0_radial_16_559)" />
                <circle cx="47.4027" cy="47.4026" r="15.0108" fill="#F6BB02" stroke="white" strokeWidth="4.74026" />
                <defs>
                  <radialGradient id="paint0_radial_16_559" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.4026 47.4026) rotate(90) scale(47.4026)">
                    <stop offset="0.447115" stopColor="#F6BB02" />
                    <stop offset="1" stopColor="#FFEDA5" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <button className="w-full py-3 px-6 rounded-full bg-white text-[#0D0A04] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium hover:bg-white/90 transition-colors">
            Show my gold location
          </button>
        </div>
      </div>
    </div>
  );
}