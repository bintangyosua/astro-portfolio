import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function BreadcrumbLayout({ link }: { link: string }) {
  const splittedLink = link.split("/");
  let target = "/";
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="mb-3 -mt-1">
      <div className="flex items-center gap-[0.125]">
        {splittedLink.map((val, key) => {
          if (key == 0) {
            return (
              <a className="text-md flex items-center gap-1" href={target}>
                <HiHome />
                <span>Home</span>
              </a>
            );
          }

          const finalVal = val.charAt(0).toUpperCase() + val.slice(1);
          if (key === splittedLink.length - 1) {
            target = target + val;
            return (
              <Breadcrumb.Item className="text-lg" key={key} href={target}>
                {finalVal}
              </Breadcrumb.Item>
            );
          } else {
            target = target + val + "/";
            return (
              <Breadcrumb.Item
                className="text-lg"
                key={key}
                href={target.slice(0, target.length - 1)}>
                {finalVal}
              </Breadcrumb.Item>
            );
          }
        })}
      </div>
    </Breadcrumb>
  );
}
