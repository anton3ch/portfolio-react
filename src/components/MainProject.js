import React from "react";
import ProjectMedia from "./ProjectMedia";

/*
 * The demo is a portrait phone recording (884x1920), while every other project
 * image is landscape 3:2. ProjectMedia handles that difference: the card keeps
 * its landscape footprint and the video is centered at its native aspect ratio,
 * so adding this did not change the size of any other project card.
 *
 * The asset lives in public/media rather than src/img on purpose — a 4 MB file
 * has no business going through the bundler, and preload="none" means it is
 * only fetched when someone clicks play. The poster is 142 KB.
 */
const PYRRA_MEDIA = {
  type: "video",
  orientation: "portrait",
  src: `${process.env.PUBLIC_URL}/media/pyrra-demo.mp4`,
  poster: `${process.env.PUBLIC_URL}/media/pyrra-demo-poster.jpg`,
  alt: "Pyrra app demo: pantry, AI recipes, and nutrition tracking",
};

function MainProject() {
  const features = [
    "A streaming read-path for generation, deliberately split from a transactional write-path for purchase, so slow AI work never blocks checkout",
    "Recipe text streams token by token from Claude over a Lambda Function URL in response-streaming mode, so the recipe starts appearing in a second or two",
    "Dish images generate asynchronously off the critical path: SQS to a container Lambda to an image model to multi-size post-process to S3/CloudFront",
    "Two cache layers (fingerprinted recipe templates with content-hash dedup, plus per-dish image caching) keep most requests off the expensive AI path",
    "Selecting a recipe spends in-app currency through a single atomic DynamoDB transaction, so the ledger can't drift from what was actually generated",
    "100% AWS serverless backend: Lambda, DynamoDB, SQS, S3/CloudFront, and Cognito auth",
    "An eval harness for LLM output, plus a scheduled eval that fails open and raises an alarm on the fail-open rate",
    "An AWS Cost Explorer job tracking cost per active user against budget and spike thresholds",
    "27 CloudWatch alarms, including anomaly-detection bands",
    "A centralized design-token system (spacing, radius, typography, semantic color) driving the whole SwiftUI client",
    "A 60+ component shared UI library with in-app component labs for live token tuning (a Storybook-style workflow for SwiftUI)",
    "Personal logs, body profile, and insights stay on device and sync via iCloud instead of hitting the backend",
  ];

  const technologies = [
    { name: "SwiftUI", link: "https://developer.apple.com/xcode/swiftui/" },
    {
      name: "The Composable Architecture",
      link: "https://github.com/pointfreeco/swift-composable-architecture",
    },
    { name: "Swift", link: "https://swift.org" },
    { name: "AWS Lambda", link: "https://aws.amazon.com/lambda/" },
    { name: "DynamoDB", link: "https://aws.amazon.com/dynamodb/" },
    { name: "Amazon SQS", link: "https://aws.amazon.com/sqs/" },
    { name: "CloudFront", link: "https://aws.amazon.com/cloudfront/" },
    { name: "Amazon Cognito", link: "https://aws.amazon.com/cognito/" },
    { name: "Claude", link: "https://www.anthropic.com/claude" },
    { name: "CloudWatch", link: "https://aws.amazon.com/cloudwatch/" },
  ];

  return (
    <div className="mainProjectContainer">
      <h2 className="sectionTitle">FEATURED PROJECT</h2>
      <div className="mainProject">
        <div className="mainProjectCard">
          <ProjectMedia media={PYRRA_MEDIA} projectName="Pyrra" />
          <div className="mainProjectContent">
            <h3 className="mainProjectTitle">
              <a href="https://pyrra.app" target="_blank" rel="noreferrer">
                Pyrra
              </a>
            </h3>
            <p className="mainProjectDescription">
              A privacy-first AI pantry, recipes, and nutrition app for iPhone
              and iPad, built solo end to end. It keeps a live pantry inventory,
              generates recipes from the ingredients you actually own with
              calculated macros, and tracks 70+ nutrients. I own both sides of
              it: the SwiftUI client and the AWS serverless backend behind it.
              Currently in TestFlight, with the App Store release pending.
            </p>
            <div className="mainProjectLinks">
              <a href="https://pyrra.app" target="_blank" rel="noreferrer">
                Visit pyrra.app
              </a>
            </div>
            <h5 className="mainProjectSubtitle">Engineering highlights:</h5>
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
