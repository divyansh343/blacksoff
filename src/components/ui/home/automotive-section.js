"use client"

import { useState, useRef, useEffect } from "react"

export default function AutoSection() {
  // State for active vehicle type and view
  const [activeVehicle, setActiveVehicle] = useState("passenger")
  const [activeView, setActiveView] = useState("complete")
  const videoRef = useRef(null)

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

  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Main heading */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl px-2">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-2 md:mb-4">
          Evolving the drive with <span className="font-bold">360-degree</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl font-light">comprehensive solutions</p>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16">
        {/* Left side - Vehicle type selection */}
        <div className="w-full md:w-1/3">
          <div className="border-l-2 border-gray-700 pl-4 sm:pl-6 space-y-8 sm:space-y-12">
            {/* Passenger vehicles option */}
            <button
              onClick={() => setActiveVehicle("passenger")}
              className={`text-left w-full transition-all duration-300 ${activeVehicle === "passenger" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-1 sm:mb-2">Passenger vehicles</h2>
              <p className="text-xs sm:text-sm text-gray-400">Revving up innovation from interior to exterior.</p>
            </button>

            {/* Commercial vehicles option */}
            <button
              onClick={() => setActiveVehicle("commercial")}
              className={`text-left w-full transition-all duration-300 ${activeVehicle === "commercial" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-1 sm:mb-2">Commercial vehicles</h2>
              <p className="text-xs sm:text-sm text-gray-400">Advancing engineering for heavy-duty vehicles.</p>
            </button>
          </div>
        </div>

        {/* Right side - Vehicle visualization */}
        <div className="w-full md:w-2/3 flex flex-col">
          {/* Vehicle video */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-6 sm:mb-8 flex items-center justify-center overflow-hidden bg-black/30 rounded-lg">
            <video
              ref={videoRef}
              key={`${activeVehicle}-${activeView}`} // Force re-render when changing view
              src={vehicleTypes[activeVehicle].videos[activeView]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain transition-opacity duration-500"
            />
          </div>

          {/* View selection buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 flex-wrap">
            <ViewButton
              name="Complete body"
              isActive={activeView === "complete"}
              onClick={() => setActiveView("complete")}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor">
                  <path d="M7 5h10M5 9h14M3 13h18M5 17h14M7 21h10" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
            />
            <ViewButton
              name="Front"
              isActive={activeView === "front"}
              onClick={() => setActiveView("front")}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor">
                  <path d="M8 5h8M5 9h14M7 13h10M5 17h14" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
            />
            <ViewButton
              name="Cabin"
              isActive={activeView === "cabin"}
              onClick={() => setActiveView("cabin")}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor">
                  <path d="M4 6h16v12H4z" strokeWidth="1.5" />
                  <path d="M12 6v12" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
            />
            <ViewButton
              name="Trunk"
              isActive={activeView === "trunk"}
              onClick={() => setActiveView("trunk")}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor">
                  <path d="M4 6h16v12H4z" strokeWidth="1.5" />
                  <path d="M16 10h4v4h-4z" strokeWidth="1.5" />
                </svg>
              }
            />
            <ViewButton
              name="Exterior"
              isActive={activeView === "exterior"}
              onClick={() => setActiveView("exterior")}
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor">
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" strokeWidth="1.5" />
                  <path d="M7 12h10" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
            />
          </div>

          {/* Play button */}
          <div className="flex justify-end mt-6 sm:mt-8">
            <button className="rounded-full border-2 border-white p-2 sm:p-3 hover:bg-white hover:text-black transition-colors duration-300">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ViewButton({ name, isActive, onClick, icon }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 sm:gap-2">
      <div
        className={`p-1.5 sm:p-2 rounded-full ${
          isActive ? "bg-white text-black" : "bg-transparent text-white opacity-70"
        } transition-all duration-300`}
      >
        {icon}
      </div>
      <span className={`text-[10px] sm:text-xs ${isActive ? "opacity-100" : "opacity-70"}`}>{name}</span>
    </button>
  )
}
