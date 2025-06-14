"use client";

import styles from "./aboutPage.module.css"

const About = () => {
    const handleClick = () => alert('AKU DI KLIK');

  return (
    <>
    <div className="bg-[tomato]">About Page</div>
    <button onClick={() => console.log("lihat user")}>Lihat User

    </button>
    </>
  )
}

export default About