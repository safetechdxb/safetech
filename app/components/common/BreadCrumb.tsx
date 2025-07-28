'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split and clean path parts
  const pathParts = pathname.split('/').filter((part) => part);

  // Accumulate paths for links
  const buildHref = (index: number) =>
    '/' + pathParts.slice(0, index + 1).join('/');

  const changeFormats = {
    grc: "GRC",
    grp: "GRP",
    grg: "GRG",
  }

  return (
    <ul className="flex flex-wrap items-center gap-4 text-white text-16 font-medium capitalize pt-6 lg:pt-10">
      <li className="flex items-center gap-4 text-15 leading-[1.2] font-normal group">
        <Link href="/" className="hover:underline">Home</Link>
        {pathParts.length > 0 && (
          <span className="group-last:hidden">
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.64667L5.94949 6.45378L1 11.3533"
                stroke="#E11F27"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </li>

      {pathParts.map((part, index) => {
        const isLast = index === pathParts.length - 1;
        const label = decodeURIComponent(part.replace(/-/g, ' '));
        const href = buildHref(index);

        console.log(label)

        return (
          <li
            key={index}
            className="flex lfex- items-center gap-4  leading-[1.2] font-normal group "
          >
            {!isLast && label !== "products" ? (
              <Link href={href} className="text-15">
                {label.split(" ")[0] in changeFormats
                  ? changeFormats[label.split(" ")[0] as keyof typeof changeFormats] + label.slice(3)
                  : label}
              </Link>
            ) : (
              <span className="">
                {label.split(" ")[0] in changeFormats
                  ? changeFormats[label.split(" ")[0] as keyof typeof changeFormats] + label.slice(3)
                  : label}
              </span>
            )}

            {!isLast && (
              <span className="group-last:hidden">
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.64667L5.94949 6.45378L1 11.3533"
                    stroke="#E11F27"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
