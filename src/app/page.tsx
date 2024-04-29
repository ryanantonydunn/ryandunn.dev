import { IconGithub, IconImage, IconVideo } from "@/components/icons/Icons";
import { ShootyNameDynamic } from "@/components/shooty-name/ShootyNameDynamic";
import Link from "next/link";
import colors from "tailwindcss/colors";
import { DefaultColors } from "tailwindcss/types/generated/colors";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-screen-sm mx-auto p-2 pb-6 pt-0">
      <div className="relative">
        <div className="text-4xl text-cyan-600 p-3">rd</div>
      </div>
      <div className="bg-white w-full border border-slate-200 rounded-2xl px-6">
        {list.map((item, i) => {
          const colorKey = colorList[i] as keyof DefaultColors;
          return (
            <div key={i} className="border-b border-slate-200 py-6 flex">
              <div className="flex-grow">
                <h2
                  className="text-2xl mb-2 lowercase"
                  style={{ color: colors[colorKey]["600"] }}
                >
                  {item.name}
                </h2>
                <div className="text-rg text-slate-600 mb-2">
                  {item.description}
                </div>
                <div className="flex">
                  {item.tags?.map((tag, i) => (
                    <div
                      key={i}
                      className="py-1 px-2 mt-2 mr-2 text-xs text-slate-600 border rounded-xl"
                      style={{ borderColor: colors[colorKey]["400"] }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start flex-nowrap ml-2">
                {item.demoVideo && (
                  <button title="View demo video" className="ml-2">
                    <IconVideo
                      style={{ width: 24, height: 24 }}
                      color={colors[colorKey]["600"]}
                    />
                  </button>
                )}
                {!!item.screenshots?.length && (
                  <button title="View screenshots" className="ml-2">
                    <IconImage
                      style={{ width: 24, height: 24 }}
                      color={colors[colorKey]["600"]}
                    />
                  </button>
                )}
                {item.github && (
                  <Link
                    href={item.github}
                    title="View project on GitHub"
                    className="ml-2"
                  >
                    <IconGithub
                      style={{ width: 24, height: 24 }}
                      color={colors[colorKey]["600"]}
                    />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

interface Project {
  name: string;
  description: string;
  tags?: string[];
  github?: string;
  web?: string;
  screenshots?: string[];
  demoVideo?: string;
}

const list: Project[] = [
  {
    name: "Project Ants",
    description:
      "Action game with custom physics and collision engine, objects, weapons, random destroyable gravity-based terrain.",
    tags: ["Game Development"],
    github: "https://github.com/ryanantonydunn/project-ants",
    demoVideo: "https://www.youtube.com/watch?v=7dCMg6u2Qug",
    web: "https://ryanantonydunn.github.io/project-ants/",
    screenshots: ["projectants-1.png"],
  },
  {
    name: "Track Whatever",
    description: "Self-track any custom data metric in a straightforward way.",
    tags: ["React", "TypeScript", "Material UI", "PouchDB"],
    github: "https://github.com/ryanantonydunn/track-whatever",
    web: "https://trackwhatever.ryandunn.dev/",
    screenshots: [
      "trackwhatever-1.webp",
      "trackwhatever-2.webp",
      "trackwhatever-3.webp",
      "trackwhatever-4.webp",
      "trackwhatever-5.webp",
      "trackwhatever-6.webp",
    ],
  },
  {
    name: "Know My Values",
    description:
      "Clarify your core values with a simple rank sorting exercise.",
    tags: ["Svelte", "Rollup"],
    github: "https://github.com/ryanantonydunn/know-my-values",
    web: "https://knowmyvalues.ryandunn.dev/",
    screenshots: [
      "knowmyvalues-1.png",
      "knowmyvalues-2.png",
      "knowmyvalues-3.png",
    ],
  },
  {
    name: "Climb Finder",
    description: "Complex search for any climbing route in the UK.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "MySQL"],
    github: "https://github.com/ryanantonydunn/climb-finder",
    screenshots: ["climbfinder-1.png"],
  },
  {
    name: "Get To Ten",
    description:
      "Game where you try to get to ten by merging numbered tiles together.",
    tags: ["Game Development", "Cordova"],
    github: "https://github.com/ryanantonydunn/get-to-ten",
    web: "https://ryanantonydunn.github.io/get-to-ten/",
    screenshots: ["gettoten-1.png"],
  },
  {
    name: "Spotify Playlist Backup",
    description: "Create CSV files with contents of Spotify playlists.",
    tags: ["node.js"],
    github: "https://github.com/ryanantonydunn/spotify-playlist-backup",
  },
  {
    name: "Peak Ticker",
    description: "Map viewer and ticklist for major peaks and walks in the UK.",
    tags: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/ryanantonydunn/peak-ticker",
    web: "https://peakticker.ryandunn.dev/",
    screenshots: ["peakticker-1.png"],
  },
  {
    name: "Grid Draw",
    description: "Simple web app for drawing with lines on a grid.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/ryanantonydunn/grid-draw",
    web: "https://griddraw.ryandunn.dev/",
    screenshots: ["griddraw-1.png"],
  },
  {
    name: "Snooker Stats",
    description: "Experiments with the snooker.org API data set.",
    tags: ["node.js", "TypeScript", "Vite"],
    github: "https://github.com/ryanantonydunn/snooker-stats",
    screenshots: [
      "snooker-1.webp",
      "snooker-2.webp",
      "snooker-3.webp",
      "snooker-4.webp",
    ],
  },
  {
    name: "Zelda Canvas",
    description:
      "Top down 2d game engine with integrated map editor. Made with graphics from Zelda 3.",
    github: "https://github.com/ryanantonydunn/zelda-canvas",
    web: "https://ryanantonydunn.github.io/zelda-canvas/",
    tags: ["Game Development"],
    screenshots: ["zeldacanvas-1.png"],
  },
];

const colorList = [
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "red",
  "rose",
  "pink",
  "fuschia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
];
