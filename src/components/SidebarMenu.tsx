import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import SearchIcon from "../assets/icons/search.png";
import HomeIcon from "../assets/icons/home.png";
import TVShows from "../assets/icons/tvShows.png";
import Movies from "../assets/icons/movies.png";
import Genres from "../assets/icons/genres.png";
import WatchLater from "../assets/icons/watchLater.png";
import { UserProfile } from "./UserProfile";

const menuItems = [
  {
    icon: SearchIcon,
    label: "Search",
    href: "/search",
  },
  { icon: HomeIcon, label: "Home", href: "/" },
  {
    icon: TVShows,
    label: "TV Shows",
    href: "/tv-shows",
  },
  {
    icon: Movies,
    label: "Movies",
    href: "/movies",
  },
  {
    icon: Genres,
    label: "Genres",
    href: "/genres",
  },
  {
    icon: WatchLater,
    label: "Watch Later",
    href: "/watch-later",
  },
];

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] =
    useState(1); // Home active by default

  return (
    <motion.div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      animate={{
        width: open ? 600 : 60,
        height: "100%",
        padding: open ? 20 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      className={clsx(
        "flex flex-col items-start justify-around z-10 text-white h-dvh fixed left-0 top-0",
        open
          ? "bg-gradient-to-r from-black via-black/85 to-transparent"
          : "bg-black/90"
      )}
    >
      <div
        className={clsx(
          "text-white h-full flex flex-col",
          open
            ? "items-center justify-around"
            : "items-center justify-center"
        )}
      >
        <div className="flex flex-col items-start justify-center gap-6 w-full">
          <UserProfile
            open={open}
            name="Arusyak"
          />

          {menuItems.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <a
                key={i}
                href={item.href}
                className="w-full"
                onClick={() => setActiveIndex(i)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={clsx(
                    "flex items-center gap-2 cursor-pointer w-full",
                    open && isActive
                      ? "bg-gray-700"
                      : "hover:bg-gray-800"
                  )}
                >
                  <div
                    className={clsx(
                      "content-center place-items-center size-10",
                      isActive
                        ? open
                          ? "bg-transparent filter brightness-125"
                          : "bg-gray-600 rounded-full filter brightness-125"
                        : "bg-transparent rounded-none"
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.label + " Icon"}
                      className="size-3.5 object-contain"
                    />
                  </div>
                  {open && (
                    <span
                      className={clsx(
                        isActive
                          ? "text-white font-semibold"
                          : "text-gray-300",
                        "transition-all duration-300"
                      )}
                    >
                      {item.label}
                    </span>
                  )}
                </motion.div>
              </a>
            );
          })}
        </div>

        {open && (
          <div className="mb-4 text-start uppercase text-sm tracking-[0.1rem] text-neutral-400 hover:text-neutral-300 flex flex-col gap-2 px-2">
            <a href="/translate">Language</a>
            <a href="/get-help">Get Help</a>
            <a href="/logout">Exit</a>
          </div>
        )}
      </div>
      {/* Mobile collapse button */}
      <button
        className="absolute bottom-4 left-0 ml-2 text-white md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "⮜" : "⮞"}
      </button>
    </motion.div>
  );
}
