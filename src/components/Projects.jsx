import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const projectsData = [
  {
    fileName: "ofys.tsx",
    title: "OFYS",
    description:
      "Company website for a construction and development company. Design and development.",
    techStack: [
      { name: "Next.js", icon: "/reactIcon.png" },
      { name: "TypeScript", icon: "/tsIcon.png" },
      { name: "Tailwind", icon: "/tailwindIcon.png" },
      { name: "Vercel", icon: "/vercelIcon.png" },
    ],
    link: "https://ofys.cr",
    visitText: "visit",
  },
  {
    fileName: "comilla-inc.tsx",
    title: "comilla inc.",
    description:
      "Custom electrical contracting firm website with secure admin interface.",
    techStack: [
      { name: "React", icon: "/reactIcon.png" },
      { name: "Express.js", icon: "/expressJSIcon.png" },
      { name: "MongoDB", icon: "/mongoDBIcon.png" },
      { name: "AWS", icon: "/awsIcon.png" },
    ],
    link: "https://comillainc.com",
    visitText: "visit",
  },
  {
    fileName: "bead-boutique.tsx",
    title: "the bead boutique",
    description: "Full-stack e-commerce app with Auth & Stripe payment.",
    techStack: [
      { name: "React", icon: "/reactIcon.png" },
      { name: "Node.js", icon: "/nodeJSIcon.png" },
      { name: "Stripe", icon: "/stripeIcon.png" },
      { name: "AWS", icon: "/awsIcon.png" },
    ],
    link: "https://ecommerce-bead-store.onrender.com",
    visitText: "visit",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [activeFile, setActiveFile] = useState(projectsData[0]);

  return (
    <div className="overflow-hidden">
      <NavBar active="projects" />

      {/* Main Content Area */}
      <div className="w-full p-2 lg:p-8 flex flex-col items-center justify-center min-h-[calc(100vh-150px)]">
        <div className="w-full border-4 border-black flex flex-col lg:flex-row shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] lg:shadow-[8px_8px_0px_0px_#000000] overflow-hidden bg-white h-full flex-1">
          <div className="w-full lg:w-[350px] flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white shrink-0 h-full lg:h-full z-20">
            <div className="p-3 lg:p-6 border-b-2 border-dashed border-gray-300 flex justify-between items-center bg-gray-50 shrink-0 min-h-[70px]">
              {/* Increased min-h to 70px to prevent vertical clipping */}
              <div className="typing-projects text-xl lg:text-2xl font-bold pr-2 tracking-tight leading-relaxed py-1">
                &lt;projects&gt;
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 lg:p-4 flex flex-col gap-3 custom-scrollbar">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFile(project)}
                  className={`cursor-pointer rounded-lg p-3 lg:p-4 transition-all duration-200 border-2 relative overflow-hidden group shrink-0 ${activeFile.title === project.title ? "lg:border-black lg:bg-black lg:text-white lg:shadow-[2px_2px_0px_0px_#389cdc] border-gray-200 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]" : "border-gray-200 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm lg:text-lg font-bold truncate pr-2">
                      {project.title}
                    </h3>
                    {activeFile.title === project.title && (
                      <div className="hidden lg:block w-2 h-2 rounded-full bg-[#389cdc] animate-pulse shrink-0"></div>
                    )}
                  </div>

                  <p
                    className={`text-[10px] lg:text-xs line-clamp-2 ${activeFile.title === project.title ? "lg:text-gray-300 text-gray-500" : "text-gray-500"}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2 lg:mt-3">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-1.5 py-0.5 rounded border ${activeFile.title === project.title ? "lg:border-gray-700 lg:bg-gray-900 lg:text-gray-300 border-gray-200 bg-gray-50 text-gray-600" : "border-gray-200 bg-gray-50 text-gray-600"}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Only: Visit Site Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex lg:hidden items-center justify-center gap-2 mt-4 w-full bg-[#389cdc] text-white py-2 rounded font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Preview Window - Hidden on Mobile */}
          <div className="hidden lg:flex flex-1 flex-col bg-gray-100 relative h-full w-full min-w-0 overflow-hidden">
            {/* Browser Toolbar */}
            <div className="h-8 lg:h-12 bg-white border-b-4 border-black flex items-center px-2 lg:px-4 gap-2 lg:gap-4 shrink-0 shadow-sm z-10 min-w-0">
              <div className="flex gap-1.5 lg:gap-2 shrink-0">
                {/* Permanently Colored Traffic Lights */}
                <div className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full border-2 border-black bg-red-400 shrink-0"></div>
                <div className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full border-2 border-black bg-yellow-400 shrink-0"></div>
                <div className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full border-2 border-black bg-green-400 shrink-0"></div>
              </div>

              {/* Address Bar */}
              <div className="flex-1 flex justify-center min-w-0 overflow-hidden">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-md px-2 lg:px-4 py-0.5 lg:py-1.5 text-[10px] lg:text-xs text-gray-500 flex items-center gap-2 w-full max-w-2xl font-mono group hover:border-[#389cdc] transition-colors cursor-text">
                  <span className="text-gray-400 shrink-0">🔒</span>
                  <span className="truncate min-w-0">
                    {activeFile?.link || "select a project"}
                  </span>
                  <a
                    href={activeFile?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto opacity-0 group-hover:opacity-100 text-[#389cdc] hover:underline whitespace-nowrap hidden sm:inline"
                  >
                    Open ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Iframe Preview Container */}
            <div className="flex-1 relative bg-white w-full h-full overflow-hidden">
              {activeFile && (
                <iframe
                  key={activeFile.title}
                  src={activeFile.link}
                  title={activeFile.title}
                  className="w-full h-full border-0 absolute inset-0 z-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              )}

              {/* Persistent Open Button - Mobile Optimized */}
              <a
                href={activeFile?.link}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#389cdc] text-white px-3 py-1.5 lg:px-6 lg:py-3 rounded-full font-bold shadow-[2px_2px_0px_0px_#000000] lg:shadow-[4px_4px_0px_0px_#000000] border-2 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-20 flex items-center gap-2 text-[10px] lg:text-sm active:scale-95 whitespace-nowrap"
              >
                Visit Site
                <svg
                  className="w-3 h-3 lg:w-4 lg:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
