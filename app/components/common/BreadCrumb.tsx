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

  return (
    <ul className="flex items-center gap-4 text-white text-16 font-medium uppercase pt-6 lg:pt-10">
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

        return (
          <li
            key={index}
            className="flex items-center gap-4 text-15 leading-[1.2] font-normal group uppercase"
          >
            {!isLast ? (
              <Link href={href} className="hover:underline uppercase">
                {label}
              </Link>
            ) : (
              <span className="uppercase">{label}</span>
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
