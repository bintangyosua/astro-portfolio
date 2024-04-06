import { Box, Card as RxCard, Flex, Avatar, Text } from "@radix-ui/themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGlobe } from "react-icons/fa";

interface Props {
  title: string;
  body: string;
  href: string;
}

export function Card({
  title,
  github,
  website,
  desc,
}: {
  title: string;
  github: string;
  website: string;
  desc: string;
}) {
  const paragraph =
    "Deserunt laborum proident adipisicing mollit fugiat quis irure proident excepteur ad magna. Exercitation aute cupidatat officia eiusmod aliqua. Dolor officia id Lorem magna culpa minim dolore minim in elit aliqua eiusmod incididunt. Quis ipsum id ad Lorem fugiat aliquip in esse sit elit est amet veniam irure. Eu ullamco irure excepteur commodo non.";
  return (
    <div className="max-w-[350px] border rounded-lg shadow-sm">
      <div className="flex flex-col">
        <img src="/projects/skyla-discordjs.webp" width={"350px"} alt="" />
        <div className="px-2 py-4">
          <h3 className="text-xl">Skyla Discord Bot Dashboard</h3>
          <p>
            {paragraph.length > 70
              ? `${paragraph.slice(0, 70)} ....`
              : paragraph}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <a href="#" className="flex items-center gap-1">
                <GitHubLogoIcon /> Github
              </a>
              <a href="#" className="flex items-center gap-1">
                <FaGlobe /> Website
              </a>
            </div>
            <a href="#" className="block text-right text-blue-800">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
