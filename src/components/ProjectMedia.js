import React, { useRef, useState } from "react";
import { track } from "../lib/analytics";

/*
 * Media slot for a project card.
 *
 * Each project declares its own `media` descriptor, including orientation, so a
 * portrait asset never forces a layout change on the landscape projects:
 *
 *   { type: "image", src, alt }
 *   { type: "video", src, poster, alt, orientation: "portrait" | "landscape" }
 *
 * Portrait media keeps the card's existing landscape footprint. The asset is
 * centered at its native aspect ratio and a blurred copy of the poster fills
 * the space either side, so the card never changes size or crops the subject.
 *
 * Video is click-to-play with preload="none" — the file is not fetched until
 * someone actually asks for it. Only the poster loads on page view.
 */
function ProjectMedia({ media, projectName }) {
  const videoRef = useRef(null);

  // `requested` is set the moment the viewer asks for playback and never
  // reverts. It gates both the native controls and the poster overlay.
  //
  // Deliberately NOT derived from the play() promise: that promise can reject
  // transiently (autoplay policy, a load starting, a re-render landing mid-call)
  // and reverting on rejection strands the viewer under an overlay with no
  // controls and no poster. If play() does fail, the native controls are already
  // showing, so they can simply press play again.
  const [requested, setRequested] = useState(false);

  const orientation = media.orientation === "portrait" ? "portrait" : "landscape";
  const containerClass = `mainProjectImageContainer mainProjectMedia--${orientation}`;

  if (media.type !== "video") {
    return (
      <div className={containerClass}>
        <img className="mainProjectImage" src={media.src} alt={media.alt} />
      </div>
    );
  }

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video || requested) return;

    track("demo_play", { project: projectName, media: "video" });
    setRequested(true);

    const started = video.play();
    if (started && typeof started.catch === "function") {
      started.catch(() => {
        /* native controls are visible; the viewer can retry */
      });
    }
  };

  return (
    <div className={containerClass}>
      {orientation === "portrait" && (
        <div
          className="mainProjectMediaBackdrop"
          style={{ backgroundImage: `url(${media.poster})` }}
          aria-hidden="true"
        />
      )}

      <div className="mainProjectMediaStage">
        <video
          ref={videoRef}
          className="mainProjectVideo"
          poster={media.poster}
          preload="none"
          playsInline
          controls={requested}
          aria-label={media.alt}
          onEnded={() =>
            track("demo_complete", { project: projectName, media: "video" })
          }
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>

        {!requested && (
          <button
            type="button"
            className="mainProjectPlayButton"
            onClick={handlePlay}
            aria-label={`Play the ${projectName} demo`}
          >
            <span className="mainProjectPlayIcon" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectMedia;
