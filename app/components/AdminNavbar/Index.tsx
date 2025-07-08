"use client"

import ClientSideLink from '@/app/(admin)/admin/client-side-link';
import React, { useState } from 'react'
import {
    HomeIcon,
    UserGroupIcon,
    EnvelopeIcon,
    CheckBadgeIcon,
    PresentationChartBarIcon,
    PaperClipIcon,
    BriefcaseIcon,
  } from "@heroicons/react/24/outline";
import { CodeIcon, FilesIcon, FlowerIcon } from 'lucide-react';
import { MdCardMembership, MdEmail } from 'react-icons/md';
import { FaInfo } from 'react-icons/fa';


const AdminNavbar = () => {

    const [openLink, setOpenLink] = useState<string | null>(null);

    const navItems = [
        { name: "Home", href: "/admin/home", icon: HomeIcon },
        { name: "About", href: "/admin/about", icon: UserGroupIcon },
        { name: "Blogs", href: "/admin/blogs", icon: PresentationChartBarIcon },
        { name: "News", href: "/admin/news", icon: EnvelopeIcon },
        { name: "Gallery", href: "/admin/gallery", icon: FlowerIcon },
        { name: "Certifications", href: "/admin/certifications", icon: PaperClipIcon },
        // { name: "Industries", href: "/admin/industries", icon: BriefcaseIcon },
        { name: "Products", href: "/admin/products", icon: CheckBadgeIcon },
        // { name: "Systems", href: "/admin/systems", icon: CheckBadgeIcon },
        // { name: "Partners", href: "/admin/partners", icon: UserGroupIcon },
        { name: "Careers", href: "/admin/careers", icon:BriefcaseIcon },
        { name: "Contact", href: "/admin/contact", icon: EnvelopeIcon },
        { name: "Resources", href: "/admin/resources", icon: FilesIcon },
        { name: "Job Requests", href: "/admin/job-requests", icon: MdCardMembership },
        { name: "Enquiries", href: "/admin/enquiry", icon: FaInfo },
        { name: "News Letter", href: "/admin/news-letter", icon: MdEmail },
        { name: "Tag Codes", href: "/admin/codes", icon: CodeIcon},
      ];

      return (
        navItems.map((item) => {
            const Icon = item.icon;
            return (
              <ClientSideLink
                key={item.href}
                href={item.href}
                name={item.name}
                icon={<Icon className="h-5 w-5" />}
                isOpen={openLink === item.href}
                setOpenLink={setOpenLink}
              />
            );
          })
      )
}

export default AdminNavbar