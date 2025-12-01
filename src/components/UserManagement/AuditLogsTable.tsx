"use client"

interface AuditLog {
    id: string;
    action: string;
    timestamp: string;
    target: string;
    details: string;
    actorId: string;
}

const mockAuditLogs: AuditLog[] = [
    {
        id: '1',
        action: 'LOGIN_SUCCESS',
        timestamp: '10/11/2025, 14:10:42',
        target: 'founder@oreium.io',
        details: "['email': 'founder@oreium.io', 'ip': '172.31.106.66']",
        actorId: '050a0f8a-477a-4bd5-ae37-a356b3acd08f',
    },
    {
        id: '2',
        action: 'LOGIN_SUCCESS',
        timestamp: '10/11/2025, 14:08:45',
        target: 'founder@oreium.io',
        details: "['email': 'founder@oreium.io', 'ip': '172.31.106.66']",
        actorId: '850a0f8a-477a-4bd5-ae37-a356b3acd08f',
    },
];

export function AuditLogsTable() {
    return (
        <div className="w-full bg-[#202020] border border-[#2B2B2B] rounded-[10px] ">
            <div className="p-4 sm:p-6 border-b-2 border-[#2B2B2B]">
                <h2 className="text-white font-['Poppins'] text-xl sm:text-2xl font-bold mb-2">
                    Audit Logs
                </h2>
                <p className="text-[#717579] font-['Poppins'] text-sm sm:text-base">
                    All user actions are logged for security and compliance purposes.
                </p>
            </div>

            <div className="space-y-4">
                {mockAuditLogs.map((log) => (
                    <div
                        key={log.id}
                        className="p-4 sm:p-6 border-b-2 border-[#2B2B2B] "
                    >
                        <div className="space-y-2">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="text-white font-['Poppins'] text-base sm:text-lg font-semibold">
                                    {log.action}
                                </h3>

                            </div>
                            <div className="space-y-1">
                                <span className="text-[#717579] font-['Poppins'] text-sm">
                                    {log.timestamp}
                                </span>
                                <p className="text-[#717579] font-['Poppins'] text-sm">
                                    <span className="text-white font-medium">Target:</span> {log.target}
                                </p>
                                <p className="text-[#717579] font-['Poppins'] text-sm font-mono">
                                    {log.details}
                                </p>
                                <p className="text-[#717579] font-['Poppins'] text-sm">
                                    <span className="text-white font-medium">Actor ID:</span> {log.actorId}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

