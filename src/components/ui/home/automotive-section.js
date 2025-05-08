"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function AutoSection() {
  // State for active vehicle type and view
  const [activeVehicle, setActiveVehicle] = useState("passenger")
  const [activeView, setActiveView] = useState("complete")
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  // For scroll animation of heading - keeping it in center
  const { scrollY } = useScroll()
  const headingScale = useTransform(scrollY, [0, 200], [1, 0.9])
  const headingOpacity = useTransform(scrollY, [0, 100], [1, 0.9])

  // Define slides for presentation mode
  const slides = [
    { vehicle: "passenger", view: "complete" },
    { vehicle: "passenger", view: "front" },
    { vehicle: "passenger", view: "cabin" },
    { vehicle: "passenger", view: "trunk" },
    { vehicle: "passenger", view: "exterior" },
    { vehicle: "commercial", view: "complete" },
    { vehicle: "commercial", view: "front" },
    { vehicle: "commercial", view: "cabin" },
    { vehicle: "commercial", view: "trunk" },
    { vehicle: "commercial", view: "exterior" },
  ]

  // SVG icon paths
  const iconPaths = {
    complete: "/icons/complete-body.png",
    front: "/icons/front.png",
    cabin: "/icons/cabin.png",
    trunk: "/icons/trunk.png",
    exterior: "/icons/exterior.png",
  }

  // Handle click anywhere to advance slide
  const advanceSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length
    setCurrentSlide(nextSlide)
    setActiveVehicle(slides[nextSlide].vehicle)
    setActiveView(slides[nextSlide].view)
  }

  // Vehicle type data
  const vehicleTypes = {
    passenger: {
      title: "Passenger vehicles",
      description: "Revving up innovation from interior to exterior.",
      videos: {
        complete: "/videos/passenger-alpha.mp4",
        front: "/videos/front.mp4",
        cabin: "/videos/cabin.mp4",
        trunk: "/videos/trunk.mp4",
        exterior: "/videos/exterior.mp4"
      },
    },

    commercial: {
      title: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles.",
      videos: {
        complete: "/videos/commercial-alpha.mp4",
        front: "/videos/front.mp4",
        cabin: "/videos/cabin.mp4",
        trunk: "/videos/trunk.mp4",
        exterior: "/videos/exterior.mp4"
      },
    },
  }

  // Reset video playback when view changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((e) => console.log("Video play error:", e))
    }
  }, [activeView, activeVehicle])

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white min-h-screen w-full grid grid-rows-[auto_1fr] p-4 sm:p-6 md:p-8"
      onClick={advanceSlide}
    >
      {/* Main heading */}
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
        style={{
          scale: headingScale,
          opacity: headingOpacity,
        }}
        className={`text-center justify-self-center self-center mb-8 sm:mb-12 md:mb-16 max-w-5xl px-2 transition-all duration-300 ${scrolled ? "h-screen flex flex-col justify-center" : ""
          }`}
      >
        <motion.p
          className="text-xl sm:text-2xl md:text-4xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Evolving the drive with <span className="font-bold">360-degree</span>
        </motion.p>
        <motion.p
          className="text-xl sm:text-2xl md:text-4xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          comprehensive solutions
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Left side - Vehicle type selection */}
        <div className="col-span-1">
          <div className="border-l-2 border-gray-700 pl-4 sm:pl-6 space-y-8 sm:space-y-12">
            {/* Passenger vehicles option */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVehicle("passenger");
              }}
              className={`text-left w-full transition-all duration-300 ${activeVehicle === "passenger" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-1 sm:mb-2">Passenger vehicles</h2>
              <p className="text-xs sm:text-sm text-gray-400">Revving up innovation from interior to exterior.</p>
            </motion.button>

            {/* Commercial vehicles option */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVehicle("commercial");
              }}
              className={`text-left w-full transition-all duration-300 ${activeVehicle === "commercial" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-1 sm:mb-2">Commercial vehicles</h2>
              <p className="text-xs sm:text-sm text-gray-400">Advancing engineering for heavy-duty vehicles.</p>
            </motion.button>
          </div>
        </div>

        {/* Right side - Vehicle visualization */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          {/* Vehicle video */}
          <motion.div
            className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-6 sm:mb-8 flex items-center justify-center overflow-hidden bg-black/30 rounded-lg"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.video
              ref={videoRef}
              key={`${activeVehicle}-${activeView}`} // Force re-render when changing view
              src={vehicleTypes[activeVehicle].videos[activeView]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* View selection buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 flex-wrap">
            <ViewButton
              name="Complete body"
              isActive={activeView === "complete"}
              onClick={(e) => {
                e.stopPropagation();
                setActiveView("complete");
              }}
              iconPath={iconPaths.complete}
            />
            <ViewButton
              name="Front"
              isActive={activeView === "front"}
              onClick={(e) => {
                e.stopPropagation();
                setActiveView("front");
              }}
              iconPath={iconPaths.front}
            />
            <ViewButton
              name="Cabin"
              isActive={activeView === "cabin"}
              onClick={(e) => {
                e.stopPropagation();
                setActiveView("cabin");
              }}
              iconPath={iconPaths.cabin}
            />
            <ViewButton
              name="Trunk"
              isActive={activeView === "trunk"}
              onClick={(e) => {
                e.stopPropagation();
                setActiveView("trunk");
              }}
              iconPath={iconPaths.trunk}
            />
            <ViewButton
              name="Exterior"
              isActive={activeView === "exterior"}
              onClick={(e) => {
                e.stopPropagation();
                setActiveView("exterior");
              }}
              iconPath={iconPaths.exterior}
            />
          </div>

          {/* Play button */}
          <div className="flex justify-end mt-6 sm:mt-8">
            <motion.button
              className="rounded-full border-2 border-white p-2 sm:p-3 hover:bg-white hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                  } else {
                    videoRef.current.pause();
                  }
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white w-6' : 'bg-gray-500 w-2'}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
              setActiveVehicle(slides[index].vehicle);
              setActiveView(slides[index].view);
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>

    </div>
  )
}

function ViewButton({ name, isActive, onClick, iconPath }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-1 sm:gap-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={``}
        animate={{
          color: isActive ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
        }}
      >
        <Image
          src={iconPath}
          alt={name}
          width={24}
          height={24}
          className="w-16 h-16"
        />
      </motion.div>
      <motion.span
        className={`text-[10px] sm:text-xs ${isActive ? "opacity-100" : "opacity-70"}`}
        animate={{ opacity: isActive ? 1 : 0.7 }}
      >
        {name}
      </motion.span>
    </motion.button>
  )
}