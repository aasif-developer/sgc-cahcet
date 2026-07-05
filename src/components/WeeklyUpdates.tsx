"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface Session {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface CurrentWeek {
  week: string;
  sessions: Session[];
}

// TODO: Move this into a separate data file once Daily Sessions is finalized.
const currentWeek: CurrentWeek = {
  week: "29 June – 3 July 2026",

  sessions: [
    {
      id: 1,
      title: "SGC Sessions 2026–27 Commenced",
      image: "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783242170/IMG-20260630-WA0011_eczb2q.jpg",
      description:
        "The Student Guidance Cell officially commenced the 2026–27 session with an orientation for new and existing members. Participants were introduced to the year's objectives, planned activities, and the vision of building communication, leadership, and teamwork skills."
    },

    {
      id: 2,
      title: "Title: Debate Session – Mornings vs Nights",
      image: "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783242296/IMG-20260701-WA0049_izzgf6.jpg",
      description:
        "Members participated in an engaging debate on 'Mornings vs Nights – Which is Better?'. The session encouraged logical reasoning, confident public speaking, and respectful exchange of opinions."
    },

    {
      id: 3,
      title: "Title: Secret Word Challenge",
      image: "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783242442/IMG-20260422-WA0010_lkjxaq.jpg",
      description:
        "Participants worked in teams to identify a hidden word using only Yes/No questions, promoting teamwork, communication, critical thinking, and strategic questioning."
    },

    {
      id: 4,
      title: "Title: Dialogue vs Action Challenge",
      image: "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783242619/IMG-20260417-WA0010_rkh9yr.jpg",
      description:
        "An interactive team activity designed to strengthen communication, coordination, quick decision-making, and teamwork through engaging challenges."
    }
  ]
};

// FIXED: the side-card offset is now a small constant number of pixels,
// not a percentage of the card's own width. For two similar-sized
// overlapping cards, the visible "peek" of the side card equals the
// offset itself — so this number IS your peek amount. Tune it directly.
const SIDE_OFFSET_PX = 36;
const SIDE_ROTATE_DEG = 7;
const SIDE_SCALE = 0.88;
const SIDE_OPACITY = 0.6;
const SWIPE_THRESHOLD = 60;

const WeeklyUpdates = () => {
  const [weeklyUpdates, setWeeklyUpdates] = useState<Session[]>(currentWeek.sessions);
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const weeklyUpdatesRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startUpdateTimer();

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
    
  }, [weeklyUpdates, isHovering]);

  const startUpdateTimer = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    autoScrollTimerRef.current = setInterval(() => {
      if (!isHovering && weeklyUpdates.length > 0) {
        setCurrentUpdateIndex((prev) => (prev + 1) % weeklyUpdates.length);
      }
    }, 5000);
  };

  const stopUpdateTimer = () => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  };

  const scrollToUpdate = (index: number) => {
    setCurrentUpdateIndex(index);
  };

  const handleUpdateNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentUpdateIndex((prev) => (prev === 0 ? weeklyUpdates.length - 1 : prev - 1));
    } else {
      setCurrentUpdateIndex((prev) => (prev + 1) % weeklyUpdates.length);
    }

    startUpdateTimer();
  };

  const getCircularDistance = (i: number) => {
    const length = weeklyUpdates.length;
    let diff = i - currentUpdateIndex;
    if (diff > length / 2) diff -= length;
    if (diff < -length / 2) diff += length;
    return diff;
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -500) {
      handleUpdateNavigation('next');
    } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 500) {
      handleUpdateNavigation('prev');
    }
  };

  const handleNavigate = (path: string) => {
    stopUpdateTimer();
    setIsHovering(true);
    router.push(path);
  };

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-6 md:py-10 px-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-black dark:border-gray-700"
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="inline-block mb-4 md:mb-6"
      >
        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-blue-500 dark:text-yellow-400" />
      </motion.div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white">
  🚀 SGC Updates Coming Soon
</h3>

<p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2">
  SGC activities for the 2026–27 academic year have begun.
</p>

<p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
  Regular updates, event highlights, and important announcements will be available here soon.
</p>
    </motion.div>
  );

  return (
    <section className="bg-white dark:bg-gray-900 p-4 md:p-8 rounded-lg border-2 border-black dark:border-gray-700 space-y-4 md:space-y-8">
      <div className="flex justify-between items-start md:items-center mb-4 md:mb-8">
        <div>
          <h2 className="text-lg md:text-3xl font-bold font-poppins text-black dark:text-white">
            This Week at SGC
          </h2>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
            📅 Week: {currentWeek.week}
          </p>
        </div>

        <Link
          href="/daily-sessions/week-1"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/daily-sessions/week-1");
          }}
          className="group flex items-center gap-1 md:gap-2 text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
        >
          View Details
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
          </motion.span>
        </Link>
      </div>

      {weeklyUpdates.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Arrows + dots — now shown at every breakpoint since the
              center-focused stack replaces both the old mobile scroller
              and the old desktop grid. */}
          <div className="flex justify-between mb-3">
            <motion.button
              onClick={() => handleUpdateNavigation('prev')}
              className="bg-black dark:bg-white text-white dark:text-black p-1 rounded-lg border-2 border-black dark:border-white z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex space-x-1 items-center">
              {weeklyUpdates.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    scrollToUpdate(index);
                    startUpdateTimer();
                  }}
                  className={`h-2 w-2 rounded-full border border-black dark:border-white ${
                    currentUpdateIndex === index 
                      ? 'bg-pink-500 dark:bg-pink-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => handleUpdateNavigation('next')}
              className="bg-black dark:bg-white text-white dark:text-black p-1 rounded-lg border-2 border-black dark:border-white z-40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Center-focused stacked carousel */}
          <div
            ref={weeklyUpdatesRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
           className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-full mx-auto h-72 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden"
          >
            {weeklyUpdates.map((session, index) => {
              const diff = getCircularDistance(index);
              const isCenter = diff === 0;
              const isSide = Math.abs(diff) === 1;
              const clampedDiff = Math.max(-1, Math.min(1, diff));
              const xOffset = `calc(-50% + ${clampedDiff * SIDE_OFFSET_PX}px)`;
              const yOffset = isCenter ? '-50%' : 'calc(-50% + 6px)';
              const rotate = isCenter ? 0 : clampedDiff * SIDE_ROTATE_DEG;
              const CENTER_SCALE = 1.07;
              const scale = isCenter ? CENTER_SCALE : SIDE_SCALE;
              const opacity = isCenter ? 1 : isSide ? SIDE_OPACITY : 0;
              const zIndex = isCenter ? 30 : isSide ? 20 : 0;

              const cardInner = (
                <motion.div
                  key={session.id}
                  className="absolute top-1/2 left-1/2 w-[82%]"
                  style={{ zIndex }}
                  animate={{ x: xOffset, y: yOffset, rotate, scale, opacity }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={isCenter ? handleDragEnd : undefined}
                >
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-black dark:border-gray-600 transform transition-shadow duration-300 ${
                      isCenter
                        ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]'
                        : 'shadow-md pointer-events-none'
                    }`}
                  >
                    <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-80">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 78vw, (max-width: 1200px) 45vw, 30vw"
                      />
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-base md:text-xl font-semibold text-black dark:text-white line-clamp-2">
                        {session.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );

              return isCenter ? (
                <div
                  key={session.id}
                  className="block cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate("/daily-sessions/week-1");
                  }}
                >
                  {cardInner}
                </div>
              ) : (
                cardInner
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default WeeklyUpdates;