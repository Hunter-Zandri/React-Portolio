import React from 'react';
import photo from '/Users/hunterzandri/Desktop/Bootcamp/React-Portolio/src/assets/cover/IMG_6190.jpeg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
        <img className="profile-img" src={photo}></img>
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
          My Name is HUnter Zandri, I'm Kennebunk Maine and im currently enrolled in UNH full stack coding bootcamp. 
          I work at an engineeering startup were we build gas delivery systems for the semiconductor Industry. 
          I want to use what I what i learn in class in work and continue learning and practicing daily.

</p>
      </div>
    </section>
  );
}

export default About;
