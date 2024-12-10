import React from "react";

const EducationCards = () => {
  const cardsData = [
    {
      title: "Pre-Kindergarten (PG)",
      focus: "Early childhood development and foundational skills.",
      subjects: [
        {
          title: "Language and Literacy",
          description:
            "Introduction to letters, basic vocabulary, and storytelling.",
        },
        {
          title: "Mathematics",
          description: "Simple counting, shapes, and patterns.",
        },
        {
          title: "Science",
          description:
            "Basic concepts about the environment, plants, and animals.",
        },
        {
          title: "Social Skills",
          description:
            "Sharing, following instructions, and playing cooperatively.",
        },
        { title: "Creative Arts", description: "Drawing, music, and dance." },
        {
          title: "Physical Development",
          description: "Fine motor skills and gross motor skills.",
        },
      ],
    },
    {
      title: "Kindergarten",
      focus: "Building on early skills and preparing for primary education.",
      subjects: [
        {
          title: "Language Arts",
          description: "Recognizing letters, basic reading and writing skills.",
        },
        {
          title: "Mathematics",
          description:
            "Counting to 20, simple addition and subtraction, understanding shapes.",
        },
        {
          title: "Science",
          description:
            "Exploring the five senses, seasons, and basic life cycles.",
        },
        {
          title: "Social Studies",
          description: "Understanding family roles, community helpers.",
        },
        { title: "Arts", description: "Art projects, music, and movement." },
        {
          title: "Physical Education",
          description: "Developing coordination and motor skills.",
        },
      ],
    },
    {
      title: "Grades 1-2",
      focus:
        "Strengthening basic academic skills and introducing new concepts.",
      subjects: [
        {
          title: "Language Arts",
          description: "Reading comprehension, writing sentences, spelling.",
        },
        {
          title: "Mathematics",
          description:
            "Addition and subtraction, introduction to multiplication, basic geometry.",
        },
        {
          title: "Science",
          description:
            "Simple experiments, understanding animals, plants, and weather.",
        },
        {
          title: "Social Studies",
          description:
            "Understanding neighborhoods, basic history, and cultural traditions.",
        },
        {
          title: "Arts and Crafts",
          description: "Creative projects and musical activities.",
        },
        {
          title: "Physical Education",
          description: "Team games, physical fitness, and motor skills.",
        },
      ],
    },
    {
      title: "Grades 3-5",
      focus: "Developing more advanced skills and critical thinking.",
      subjects: [
        {
          title: "Language Arts",
          description:
            "Advanced reading strategies, essay writing, and grammar.",
        },
        {
          title: "Mathematics",
          description:
            "Multiplication, division, fractions, and problem-solving.",
        },
        {
          title: "Science",
          description:
            "Detailed studies in earth science, life science, and physical science.",
        },
        {
          title: "Social Studies",
          description: "Local and global history, geography, and civics.",
        },
        {
          title: "Arts",
          description: "Exploring different art forms and musical instruments.",
        },
        {
          title: "Physical Education",
          description: "Competitive sports, fitness routines, and teamwork.",
        },
      ],
    },
    {
      title: "Grades 6-8",
      focus: "Preparing for high school with specialized subjects and skills.",
      subjects: [
        {
          title: "Language Arts",
          description:
            "Analyzing literature, writing essays, and research skills.",
        },
        {
          title: "Mathematics",
          description: "Algebra, geometry, and data interpretation.",
        },
        { title: "Science", description: "Biology, chemistry, and physics." },
        {
          title: "Social Studies",
          description: "Ancient civilizations, world geography, and economics.",
        },
        {
          title: "Arts",
          description: "Advanced art techniques, music theory.",
        },
        {
          title: "Physical Education",
          description: "Advanced sports techniques, health education.",
        },
      ],
    },
  {
    title: "Grades 9-10",
    focus:
      "Building on high school foundations, preparing for advanced studies and careers.",
    subjects: [
      {
        title: "Language Arts",
        description:
          "Literary analysis, advanced composition, research papers, and public speaking.",
      },
      {
        title: "Mathematics",
        description:
          "Algebra II, geometry, trigonometry, and introduction to calculus.",
      },
      {
        title: "Science",
        description:
          "Advanced biology, chemistry, and physics with lab work and experiments.",
      },
      {
        title: "Social Studies",
        description: "Modern history, political science, and economics.",
      },
      {
        title: "Foreign Languages",
        description: "Learning a second language such as Spanish, French, etc.",
      },
      {
        title: "Physical Education",
        description: "Physical fitness, health education, and wellness.",
      },
    ],
  },
];


  return (
    <div className="container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-4 d-flex mb-4" key={index}>
            <div
              className="card flex-fill"
              style={{ backgroundColor: "#cfff006e" }}
            >
              <div className="card-header text-center">{card.title}</div>
              <div
                className="card-body d-flex flex-column"
                style={{ backgroundColor: "#cfff006e" }}
              >
                <h5 className="card-title">Focus:</h5>
                <p className="card-text">{card.focus}</p>
                <h5 className="card-title">Subjects:</h5>
                <ul className="list-group flex-fill">
                  {card.subjects.map((subject, index) => (
                    <li
                      className="list-group-item"
                      style={{ backgroundColor: "" }}
                      key={index}
                    >
                      <span>{subject.title}:</span> {subject.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCards;
