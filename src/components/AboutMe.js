import React from "react";
import { Typography } from "@mui/material";

const aboutMeText =
  `I'm a full-stack software engineer. I've been shipping web and mobile products end to end since 2017. I take a vague idea through architecture, implementation, and deployment. I own the whole feature: the UI, the API, the data model, and the AWS infrastructure under it. TypeScript, React, Next.js, and Node.js on the web. Swift and SwiftUI on iOS.

Lately most of that work has been production AI infrastructure. Pyrra is my solo iOS app, built in SwiftUI with The Composable Architecture. It's in TestFlight now, with the App Store release pending. The backend is 100% AWS serverless, and I built and own all of it. Recipe text streams token by token from Claude over a Lambda Function URL. Dish images generate asynchronously: SQS, a container Lambda, an image model, then S3/CloudFront. Two cache layers keep most requests off the expensive model path (fingerprinted recipe templates with content-hash dedup, and per-dish image caching).

I run that AI path like any other production system. There's an eval harness for LLM output, plus a scheduled eval that fails open and alarms on the fail-open rate. An AWS Cost Explorer job tracks cost per active user against budget and spike thresholds. There are 27 CloudWatch alarms, including anomaly-detection bands. On the client side: a centralized design-token system and a 60+ component shared UI library with in-app component labs for live token tuning.

As a freelance engineer I've delivered 20+ custom web and mobile products end to end. I work directly with stakeholders, from ambiguous requirements through deployment. Standardizing reusable component libraries, scaffolding, and repeatable deployment workflows cut my delivery time by roughly 30%. I use AI coding tools daily (Claude Code, Cursor, Copilot) under strict review and test guardrails. AI drafts, I verify and own.

At an insurance payment provider I migrated customer-facing payment pages from ASP.NET Razor MVC to React. I also caught a fraud vector there: raw processor errors were being handed straight to the consumer UI. The fix shipped in one sprint, with decline reasons logged server-side. At PupPod I led a cross-platform game app in React Native, shipping to iOS, Android, and Web from one codebase. The user base grew ~25% and ratings lifted ~20%. Over three years at Business Solution Network I spearheaded the migration of a legacy web app to React and MUI with a cohesive design system. Page loads dropped ~50%. I ran deployment and scaling on AWS.

When I'm not coding I build hardware. My reverse-osmosis water filter runs on an ESP32 controller over MQTT. A solenoid valve, flow sensors, and TDS meters measure water quality before and after filtration. It's tied into HomeKit and housed in enclosures I modeled and 3D printed myself. Outside tech I travel, hike, scuba dive, and photograph wildlife and nature with my Canon 5D Mark IV.`.trim();

export default function AboutMe() {
  const paragraphs = aboutMeText.split("\n\n");

  return (
    <div className="about animate__animated animate__headShake mx-3">
      <h2 className="sectionTitle">ABOUT</h2>
      <div className="card cardAbout">
        <div className="card-body aboutText">
          <Typography variant="body1" className="" component="div">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  marginTop: idx === 0 ? "0" : undefined,
                  marginBottom: idx === paragraphs.length - 1 ? "0" : undefined,
                }}
              >
                {paragraph}
              </p>
            ))}
          </Typography>
        </div>
      </div>
    </div>
  );
}
