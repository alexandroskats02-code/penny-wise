import React from "react";

const lessons = [
  {
    id: 1,
    title: "What is Money?",
    description:
      "Learn what classifies a currency and where the idea of currency came from.",
    duration: 5,
  },
  {
    id: 2,
    title: "Why do we use Money?",
    description:
      "Understand the purposes and benefits of using money in daily life.",
    duration: 6,
  },
  {
    id: 3,
    title: "Where does it come from?",
    description:
      "Learn where money comes from, including how it's created and circulated in the economy.",
    duration: 4,
  },
  {
    id: 4,
    title: "Where does it go?",
    description:
      "Understand where money goes, including common expenses and how to manage your spending.",
    duration: 4,
  },
  {
    id: 5,
    title: "How do we stay in Charge?",
    description:
      "Learn how to take control of your finances, set goals, and make informed decisions.",
    duration: 10,
  },
];

const modules = [
  {
    id: 1,
    name: "Money Basics",
    description:
      "Learn what money does, where it goes, and how to stay in charge.",
  },
  {
    id: 2,
    name: "Smart Spending",
    description:
      "Spot trade-offs, compare choices, and spend without the regret.",
  },
  {
    id: 3,
    name: "Saving Goals",
    description:
      "Turn big dreams into small steps you can actually stick with.",
  },
  {
    id: 4,
    name: "Earning & Work",
    description:
      "Explore ways to earn and understand what your time is worth.",
  },
];

const ModulesPage = () => {
  return (
    <main className="p-4 max-w-7xl mx-auto text-left bg-[var(--bg)] flex flex-col gap-8">
      <section>
        <h1>Modules</h1>
        <p className="text-gray-600">
          Browse modules and choose a topic to learn next.
        </p>
      </section>

      {modules.map((module) => (
        <section key={module.id} className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h2>{module.name}</h2>
              <p className="text-gray-600">{module.description}</p>
            </div>

            <p className="text-sm text-gray-600 cursor-pointer hover:underline">
              view all {lessons.length} →
            </p>
          </div>

          <div className="lessonCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="lessonCard p-6 m-2 rounded shadow-md text-left bg-[var(--accent-bg)] hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105"
              >
                <h3 className="text-lg font-bold">{lesson.title}</h3>
                <p className="text-sm text-gray-600">
                  {lesson.description}
                </p>
                <p className="font-bold">{lesson.duration} minutes →</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default ModulesPage;