import { hr, path } from "motion/react-client";

export const myprojects = [
    {
    id: 1,
    title: "ALFANIME",
    description:
      "An anime streaming website called ALFANIME, designed with a modern and responsive interface. At the top, there is an orange navigation bar featuring the site logo and a Sign In button on the top-right corner. Just below it, there is a search feature to help users easily find the anime they are looking for.",
    subDescription: [
      "Created a website using Next js and JSON API with FrameWork Tailwind CSS, with several features such as search feature, core pagination feature, github user login feature and bottom back feature."
    ],
    href: "https://github.com/AditWrdan/ALFANIME",
    logo: "",
    image: "/assets/projects/anime.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tc.png",
      },
    ]
  },
    {
    id: 2,
    title: "Competition Battle Campus",
    description:
      "A website designed to facilitate the competition registration process, equipped with registration and login features for participants. Additionally, it includes an admin panel that enables comprehensive data management, including adding, editing, and deleting participant data and competition information.",
    subDescription: [
      "Created a website using HTML and PHP which is connected using a SQL database with several features such as login features, registration features, and raw features."
    ],
    href: "https://github.com/AditWrdan/COMBAC",
    logo: "",
    image: "/assets/projects/combac.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css.png",
      },
      {
        id: 3,
        name: "PHP",
        path: "/assets/logos/php.png",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/MySQL.png",
      },
    ]
  },
    {
    id: 3,
    title: "Broody Adventure",
    description:
      "Broody Adventure is a management information system application for outdoor equipment rentals located in Sentul City. The user interface design combines nature-themed visual elements with a simple and functional layout. On the left side, there is a gray navigation panel featuring menu buttons such as Dashboard, Item Data, Employee Data, Customer Data, Supplier Data, Rentals, and Report Printing.",
    subDescription: [
      "Created a desktop application using Java NetBeans integrated with a SQL database, designed to manage various data operations efficiently. The application includes essential features such as user login, data entry, update and deletion, as well as report generation using iReport."
    ],
    href: "https://github.com/AditWrdan/Broody-Adventure",
    logo: "",
    image: "/assets/projects/broody.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.png",
      },
      {
        id: 2,
        name: "MySQLL",
        path: "/assets/logos/MySQL.png",
      },
    ]
  },
    {
    id: 4,
    title: "School Library",
    description:
      "This application is designed to assist with efficient data management and book lending processes within a school environment. On the left navigation panel, there are menu buttons with intuitive icons such as Dashboard, Book Data, Teacher Data, Student Data, Supplier Data, Lending, and Report Printing. At the bottom of the panel, there is an Admin account label along with a clearly visible red Logout button.",
    subDescription: [
      "Created a desktop application using Java NetBeans integrated with a SQL database, designed to manage various data operations efficiently. The application includes essential features such as user login, data entry, update and deletion, as well as report generation using iReport."
    ],
    href: "https://github.com/AditWrdan/School-Library",
    logo: "",
    image: "/assets/projects/perpus.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.png",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/MySQL.png",
      },
    ]
  },
    {
    id: 5,
    title: "SPK Calon Karyawan",
    description:
      "The decision support process for employee selection at PT. Inovasi Tangguh Perkasa is presented through a user-friendly interface. On the left side, a vertical navigation panel is equipped with clear icons and labels to access various features such as the dashboard, employee candidate data, assessment team data, admin registration, criteria evaluation, final calculation, and decision letter generation. The main screen displays concise information in the form of informative cards showing the number of candidates, assessors, and nominations. The design adopts a professional blue color scheme with modern and clean visual elements, emphasizing that the system utilizes the Analytical Hierarchy Process (AHP) method as the foundation for decision-making.",
    subDescription: [
      "Created a desktop application using Java NetBeans integrated with a SQL database, designed to manage various data operations efficiently. The application includes essential features such as user login, data entry, update and deletion, as well as report generation using iReport."
    ],
    href: "https://github.com/AditWrdan/SPK-Calon-Karyawan",
    logo: "",
    image: "/assets/projects/spk1.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.png",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/MySQL.png",
      },
    ]
  },
    {
    id: 6,
    title: "SPK Biji Kopi",
    description:
      "The decision support process for coffee bean selection at the café is presented through a user-friendly interface. On the left side, a vertical navigation panel features clear icons and labels to access various functions such as the dashboard, coffee bean data, evaluation team data, admin registration, criteria assessment, final calculation, and recommendation report generation.",
    subDescription: [
      "Created a desktop application using Java NetBeans integrated with a SQL database, designed to manage various data operations efficiently. The application includes essential features such as user login, data entry, update and deletion, as well as report generation using iReport."
    ],
    href: "https://github.com/AditWrdan/SPK-Biji-Kopi",
    logo: "",
    image: "/assets/projects/biji.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.png",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/logos/MySQL.png",
      },
    ]
  },
];
export const mySocials = [
  {
    name: "Email",
    href: "mailto:adityawardana20020707@gmail.com?subject: informasi",
    icon: "/assets/socials/communication.png",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/aditya-wardana-8385601aa/",
    icon: "/assets/socials/linkedin.png",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/aditwrdan/",
    icon: "/assets/socials/instagram.png",
  },
  {
    name: "CV",
    href: "https://drive.google.com/file/d/1agq2hEI4qXRqv33qNcggoLxDgKpNAMNU/view?usp=sharing",
    icon: "/assets/socials/CV.png",
  },
];