import React from "react";
import LessonArtwork from "../assets/Lesson-artwork.svg";
const CourseCatalog = () => {
  const listModules = [
    {
      id: "1",
      name: "Correct Change",
      img:LessonArtwork,
      lessonsNumber: "45 lesson",
      description: "Something  ",
      level:"easy"
    },
    {
      id: "2",
      name: "something",
      img:LessonArtwork,
      lessonsNumber: "34 lesson",
      description: "the lesson",
      level:"easy"
    },
      {
      id: "1",
      name: "money",
      img:LessonArtwork,
      lessonsNumber: "45 lesson",
      description: "something with money",
      level:"easy"
    },
    {
      id: "2",
      name: "something",
      img:LessonArtwork,
      lessonsNumber: "34 lesson",
      description: "the lesson",
       level:"medium"
    },
      {
      id: "1",
      name: "money",
      img:LessonArtwork,
      lessonsNumber: "45 lesson",
      description: "something with money",
      level:"medium"
    },
    {
      id: "2",
      name: "something",
      img:LessonArtwork,
      lessonsNumber: "34 lesson",
      description: "the lesson",
      level:"medium"

    },
      {
      id: "1",
      name: "money",
      img:LessonArtwork,
      lessonsNumber: "45 lesson",
      description: "something with money",
      level:"hard"
    },
    {
      id: "2",
      name: "something",
      img:LessonArtwork,
      lessonsNumber: "34 lesson",
      description: "the lesson",
      level:"hard"
    },
  ];
  return (
    <>
      <h1>Here you can find and take the course you want and need</h1>
      <section className="">
        <ul className="flex flex-wrap gap-4 ">
          {listModules.map((module) => (
            <li key={module.id}>
              {module.name}
              <br />
              <img src={module.img} alt={module.name}
              />
              <br/>
              {module.description}
              <br />
              {module.lessonsNumber}
             <br />
             {module.level} 
             <br/>
             <button>Accept</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default CourseCatalog;
