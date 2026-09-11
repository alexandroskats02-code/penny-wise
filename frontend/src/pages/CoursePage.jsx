import React from "react";

const this_course = {
    id: 1,
    name: "Money Basics",
    description: "Learn what money does, where it goes, and how to stay in charge.",
    lessons: [{
            id: 1,
            title: "What is Money?",
            duration: 5,
            description: "Learn what classifies a currency and where the idea of currency came from."
        },
        {
            id: 2,
            title: "Why do we use Money?",
            duration: 6,
            description: "Understand the purposes and benefits of using money in daily life."
        },
        {
            id: 3,
            title: "Where does it come from?",
            duration: 4,
            description: "Learn where money comes from, including how it's created and circulated in the economy."
        },
        {
            id: 4,
            title: "Where does it go?",
            duration: 4,
            description: "Understand where money goes, including common expenses and how to manage your spending."
        },
        {
            id: 5,
            title: "How do we stay in Charge?",
            duration: 10,
            description: "Learn how to take control of your finances, set goals, and make informed decisions."
        }],
};

const CoursePage = () => {
  return (
    <>
      <main className="p-4 max-w-7xl mx-auto text-left bg-[var(--bg)] flex flex-col gap-4 md:gap-8">
        
        <section className="courseTitle">
            <div>
                <h3 className="text-sm text-gray-600">Course #{this_course.id.toString().padStart(4, "0")}</h3>
                <h1>{this_course.name}</h1>
                <p>{this_course.description}</p>
            </div>
        </section>

        <section className="lessonSelection">
            <div className="flex justify-between items-center">
                <h2>Lessons</h2>
                <p className="text-sm text-gray-600 cursor-pointer hover:underline">view all {this_course.lessons?.length || 0} →</p>
            </div>
            <div className="lessonCards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    this_course.lessons && (
                        this_course.lessons.map((lesson) => {
                            return (
                                <div key={lesson.id} className="lessonCard p-6 m-2 rounded shadow-md text-left bg-[var(--accent-bg)] hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105">
                                <h2 className="text-lg font-bold">{lesson.title}</h2>
                                <p className="text-sm text-gray-600">{lesson.description}</p>
                                <p className="font-bold">{lesson.duration} minutes →</p>
                            </div>
                            )
                        })
                    )
                }
            </div>
        </section>
      </main>
    </>
  );
};

export default CoursePage;
