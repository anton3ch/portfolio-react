import React from "react";
import apTrackingImg from "./../img/ap-tracking.webp";

function MainProject() {
  const features = [
    "🔐 WebAuthn passkey authentication with SimpleWebAuthn for passwordless login",
    "🧪 Zod validation for consistent client/server schema enforcement",
    "🔒 Per‑IP and per‑account rate‑limiting (Upstash Redis) to block brute‑force and credential‑stuffing attacks",
    "🛡️ Account creation rate limiting with VPN‑friendly IP and domain‑based protection",
    "📊 User creation limits (100 accounts/products per user) with admin bypass functionality",
    "🔑 Strong‑password policy enforced on both client and API",
    "👤 Role-based access control",
    "🔐 Role-aware UI restrictions for sensitive fields",
    "🧠 Database abstraction with dbConnect for cleaner MongoDB integration",
    "🔍 Regex search across multiple fields via dynamic searchBy",
    "📄 Server-side pagination using limit and skip for scalability",
    "🧭 Keyboard navigation for full accessibility across UI",
    "🔁 Server-side sorting & filtering via useSWR query params",
    "💨 Dynamic component loading to optimize bundle size and performance",
    "🔄 Infinite scroll with auto-fetch as users near the bottom",
    "🎛️ User-customizable display settings persisted per content type",
    "⏳ Skeleton loaders to enhance perceived performance during async fetches",
    "🌀 Framer Motion animations for smooth transitions and interactivity",
    "🔄 Real-time data synchronization with SWR cache invalidation",
    "🎨 Adaptive theming with system preference detection and persistence",
    "📱 Mobile-first responsive design with touch-optimized interactions",
    "🔗 Complex relational data management between accounts and products",
    "🛡️ Comprehensive error boundaries with graceful degradation",
    "🎭 OAuth integration with Google",
    "📊 Advanced data visualization with interactive product distribution grids",
    "🎪 Sample data population system for demo environments"
  ];

  const technologies = [
    { name: "Next.js", link: "https://nextjs.org" },
    { name: "React", link: "https://reactjs.org" },
    { name: "TypeScript", link: "https://www.typescriptlang.org" },
    { name: "MongoDB", link: "https://www.mongodb.com" },
    { name: "Tailwind CSS", link: "https://tailwindcss.com" },
    { name: "WebAuthn", link: "https://webauthn.io" },
    { name: "SimpleWebAuthn", link: "https://simplewebauthn.dev" },
    { name: "Zod", link: "https://zod.dev" },
    { name: "SWR", link: "https://swr.vercel.app" },
    { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    { name: "Upstash Redis", link: "https://upstash.com" }
  ];

  return (
    <div className="mainProjectContainer">
      <h2 className="sectionTitle">FEATURED PROJECT</h2>
      <div className="mainProject">
        <div className="mainProjectCard">
          <div className="mainProjectImageContainer">
            <img
              className="mainProjectImage"
              src={apTrackingImg}
              alt="AP Tracking Platform screenshot"
            />
          </div>
          <div className="mainProjectContent">
            <h3 className="mainProjectTitle">
              <a href="https://ap-tracking.netlify.app" target="_blank" rel="noreferrer">
                AP Tracking Platform
              </a>
            </h3>
            <p className="mainProjectDescription">
              A comprehensive full-stack platform for account and product management featuring advanced security, 
              real-time data synchronization, and enterprise-grade authentication. Built with modern web technologies 
              and security best practices for scalable business operations.
            </p>
            <div className="mainProjectLinks">
              <a href="https://ap-tracking.netlify.app" target="_blank" rel="noreferrer">
                View Live Demo
              </a>
            </div>
            <h5 className="mainProjectSubtitle">Key Features:</h5>
            <div className="mainProjectFeatures">
              {features.map((feature, index) => (
                <div key={index} className="mainProjectFeature">
                  {feature}
                </div>
              ))}
            </div>
            
            <h5 className="mainProjectSubtitle">Technologies Used:</h5>
            <div className="mainProjectTechList">
              {technologies.map((technology, i) => (
                <a 
                  key={i}
                  href={technology.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mainProjectTech"
                >
                  {technology.name}
                </a>
              ))}
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProject; 