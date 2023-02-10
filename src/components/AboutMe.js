import React from 'react';
import vampireKid from "./../img/vampire.jpg";

export default function AboutMe(){
  return (
    <div className="about animate__animated animate__headShake mx-3">
    <h2 className="mt-4 mb-2">About me</h2>
    <hr/>
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <p>My diverse background and passion for continuous learning bring a unique perspective to my work and enhance the quality of my projects. Having a passion for science and an unceasing thirst for knowledge, I am eager to tackle any challenge, whether working independently or as part of a team. I studied JavaScript, React, and C# at Epicodus, a highly intensive coding boot camp, where I built 60+ projects over a 27-week full-time program.

            I am excited to continue growing my skills and making a positive impact in the technology industry. I am looking for opportunities to collaborate with like-minded individuals, tackle challenging projects, and contribute to shaping the future of technology for the betterment of all.</p>
            <img className ="float" src={vampireKid} alt="vampire kid" />
          </div>
        </div>
      </div>
    </div>  
    </div>   
  );
}
