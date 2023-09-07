import React from "react";
import vampireKid from "./../img/vampire.png";

export default function AboutMe() {
  return (
    <div className="about animate__animated animate__headShake mx-3">
      <h2 className="mt-4 mb-2 heading2">About me</h2>
      <hr />
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <p>
                I'm an inquisitive Software Engineer with a diverse background
                and passion for science that fuels my enthusiasm for continuous
                learning. My journey has granted me a unique perspective, which
                I weave into my work to elevate project quality and discover
                innovative solutions to complex problems. I eagerly embrace
                challenges, whether navigating them independently or as an
                integral part of a team. <br />
                <br />
                At PupPod, I'm currently engaged in developing and deploying a
                cross-platform game app that caters to iOS, Android, and Web
                users. By optimizing the app for different screen sizes, I've
                ensured a seamless user experience across various devices. My
                work also involves designing an intricate game progression
                system with multiple levels, badges, and escalating challenges.
                Additionally, I've contributed to the visual aspect of the app
                by creating and enhancing image and GIF assets. <br />
                <br />
                During my time at Business Solution Network, I initiated and
                successfully executed the migration of a legacy web application
                to a modern React-based architecture. This transformation led to
                a 50% reduction in page load times. My responsibilities extended
                to designing and implementing dynamic employee onboarding
                processes, leveraging JavaScript and CSS animations, thereby
                boosting engagement by 40%. My commitment to responsive design
                principles resulted in a 20% increase in mobile traffic and
                ensured a consistent user experience across devices.
              </p>
              <img className="float" src={vampireKid} alt="vampire kid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
