import { weeklySessions } from "@/data/week_sessions/weekly_sessions_data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DailySessionsPage() {
  return (
    <main className="min-h-screen bg-[#24386F] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Daily Sessions
        </h1>

        <p className="text-lg text-gray-300">
          Browse all SGC daily sessions, activities, and weekly highlights.
        </p>

        <div className="mt-12 space-y-8">
          {weeklySessions.map((week) => {
            const Card = (
              <div className="rounded-2xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div
                  className={`flex items-start ${
                    week.status === "published"
                      ? "justify-between"
                      : "justify-start"
                  }`}
                >
                  {/* Left Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-black">
                      {week.weekTitle}
                    </h2>

                    <p className="text-gray-600 mt-1">
                      {week.dateRange}
                    </p>

                    <span
                      className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-semibold ${
                        week.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {week.status === "published"
                        ? "Published"
                        : "Coming Soon"}
                    </span>
                  </div>

                  {/* Right Action - Only for Published Weeks */}
                  {week.status === "published" && (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#24386F] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                        <ArrowRight size={18} />
                      </div>

                      <span className="text-xs font-semibold text-[#24386F] group-hover:underline whitespace-nowrap">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            return week.status === "published" ? (
              <Link
                key={week.id}
                href={`/daily-sessions/week-${week.id}`}
                className="block group"
              >
                {Card}
              </Link>
            ) : (
              <div key={week.id}>
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}