"use client"
import { motion } from "framer-motion"
import { Clock, Bell , Users, Mail, MessageCircle } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-slate-100 dark:bg-slate-700 rounded-full mb-5 sm:mb-6">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-slate-600 dark:text-slate-300" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-2">
              Join SGC
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Become a part of the Student Guidance Cell and contribute
              meaningfully to leadership, service, and student development
              across our campus community.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 px-8 py-4 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
  <Bell className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

  <span className="flex flex-col items-center leading-tight gap-2">
    <span>Recruitment Drive 2027</span>
    <span className="text-green-600 dark:text-green-400">
      Coming Soon
    </span>
  </span>
</div>
          </motion.div>

          {/* Recruitment Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-5 sm:p-8 mb-10 sm:mb-12"
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8 gap-2 sm:gap-3">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 dark:text-slate-300 shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Recruitment Notice
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-left">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-7 sm:leading-8 mb-6 sm:mb-8">
                We are pleased to announce that the{" "}
                <strong>First-Year SGC Recruitment Drive – 2027</strong> will
                commence shortly. The recruitment schedule and venue details
                will be published through the official Student Guidance Cell
                website and communication channels.
              </p>

              <div className="max-w-xl mx-auto mb-6 sm:mb-8 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="flex justify-between items-center gap-3 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Category
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-right">
                    First-Year Students
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Start Date
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-right">
                    TBD
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    End Date
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-right">
                    TBD
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Venue
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-right">
                    TBD
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 px-4 py-3">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Time
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-right">
                    TBD
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-6 sm:leading-7">
                  Students interested in joining the Student Guidance Cell are
                  encouraged to stay connected with our official announcements.
                  We look forward to welcoming enthusiastic, responsible, and
                  committed students into the SGC family.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Need Assistance?
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              For recruitment-related queries or additional information, feel
              free to reach out to the Student Guidance Cell.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:contact@teamsgc.in"
                className="bg-white dark:bg-gray-700 text-slate-700 dark:text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center border border-slate-200 dark:border-transparent"
              >
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                Contact via Email
              </a>

              <a
                href="/contact"
                className="border border-slate-500 dark:border-slate-500 text-slate-700 dark:text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                Visit Contact Page
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}