import { week1Sessions } from "@/data/week_sessions/week1_sessions_data";
import {
  CalendarDays,
  Clock3,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function WeekOnePage() {
  return (
    <main className="min-h-screen bg-[#24386F] py-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Back Button */}
        <Link
  href="/daily-sessions"
  className={`inline-flex items-center gap-2 px-5 py-3 mb-8 rounded-xl bg-white border-2 border-black text-black font-semibold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
>
  <ArrowLeft size={18} />
  Back to Weekly Archive
</Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Week 1
          </h1>

          <p className="flex items-center gap-2 text-gray-300 mt-3">
            <CalendarDays size={18} />
            29 June – 3 July 2026
          </p>
        </div>

        {/* Session Cards */}
        <div className="space-y-8">
          {week1Sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-2xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="p-5">

                {/* Session Title */}
                <h2 className="text-l md:text-2xl font-extrabold text-black leading-snug mb-2">
                  {session.title}
                </h2>

                {/* Image */}
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-42 md:h-48 object-cover rounded-xl border-2 border-black mb-1"
                />

                <hr className="border-gray-200 mb-1" />

                {/* Session Details */}
                <div className="space-y-3 mb-2">

                  {/* Date & Time — single horizontal card */}
                  <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-3">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">
                          📅 Date
                        </p>
                        <div className="flex items-center gap-2 text-gray-800 font-medium text-sm">
                          <CalendarDays size={16} />
                          {session.date}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">
                          🕐 Time
                        </p>
                        <div className="flex items-center gap-2 text-gray-800 font-medium text-sm">
                          <Clock3 size={16} />
                          {session.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Session Handler — separate full-width card */}
                  <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-3">
                    <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">
                      👤 Session Handler
                    </p>
                    <div className="flex items-center gap-2 text-gray-800 font-medium text-sm">
                      <User size={16} />
                      {session.handler}
                    </div>
                  </div>

                </div>

                <hr className="border-gray-200 mb-1" />

                {/* Session Overview */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                    Session Overview
                  </p>

                  <p className="text-gray-700 leading-6 text-sm line-clamp-4">
                    {session.overview}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}