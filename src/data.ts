import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Mariel Kruithoff",
  role: "Developer",
  introduction: "Unity-focused developer with a computer science background, interested in gameplay systems and interactive mechanics.",
  description: "I mainly work with Unity and C#, building small games and interactive projects. My focus is on gameplay logic, interactions, and iterative development, often in collaboration with designers or other developers.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/Mariel986",
    itchIO: "https://marielkruithoff.itch.io/",
    linkedIn: "https://www.linkedin.com/in/mariel-kruithoff-a8a350316/?locale=en_US",
  }
};

export const games: Game[] = [
  {
    name: "BED TIME RUSH",
    description: "Developed as part of a Game Design module with two designers as part of my CS degree. BedTimeRush is a short game where a child must reach a light switch to dispel monsters seen in shadowy objects. The player draws a path and chooses the timing for movement, blending strategy with tension.",
    genres: ["Casual", "Strategy"],
    platforms: [Platform.Android],
    engine: GameEngine.Godot,
    links: [],
    media: [
      { source: "/images/games/BedTimeRush/01.png", type: MediaType.Image },
      { source: "/images/games/BedTimeRush/02.png", type: MediaType.Image },
      { source: "/images/games/BedTimeRush/03.png", type: MediaType.Image },
    ],
  },
  {
    name: "Brain Death Diagnosis",
    description: "Created in collaboration with one designer during the VR Tech & Design module as part of my CS degree. This serious game simulates part of the brain death diagnosis protocol. We implemented an active ragdoll system that supports both predefined animations (e.g., a coughing reflex) and user interaction via VR controllers, balancing realism with interactivity.",
    genres: ["Serious Game"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [],
    media: [
      { source: "/images/games/Brain_Death_Diagnosis/01.png", type: MediaType.Image },
      { source: "/images/games/Brain_Death_Diagnosis/02.png", type: MediaType.Image },
    ],
  },
  {
    name: "medical tr.AI.ning",
    description: "I worked on a VR-based medical training project focused on interactive learning scenarios. My contributions included implementing interaction mechanics in Unity, supporting the development of an authoring tool for creating medical VR scenarios, and integrating a virtual dermatoscope into a skin screening application. The project was developed in close collaboration with medical experts and designers and emphasized usability, realism, and iterative testing.",
    genres: ["Serious Game"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/medical-tr-AI-ning/vr-runtime" },
    ],
    media: [
      { source: "/images/games/medical_tr.AI.ning/01.png", type: MediaType.Image },
      { source: "/images/games/medical_tr.AI.ning/02.png", type: MediaType.Image },
    ],
  },
  {
    name: "Get Them Out",
    description: "Built with another developer in 3 days during a game jam, Get Them Out is a puzzle-simulation game where you play as a poltergeist. You manipulate objects in a room to spook people into fleeing—steering them by triggering their instinct to move away from disturbances, like a shepherd guiding sheep.",
    genres: ["Casual"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://marielkruithoff.itch.io/get-them-out" },
    ],
    media: [
      { source: "/images/games/GetThemOut/01.png", type: MediaType.Image },
      { source: "/images/games/GetThemOut/02.png", type: MediaType.Image },
    ],
  },
  /*{
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }*/
];