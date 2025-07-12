"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/import",
    label: "Import Syllabus",
    icon: FileText,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <svg
            className="h-8 w-8"
            viewBox="0 0 72 72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                fill="#00569D"
              ></path>
              <path
                d="M32.3572903,18.4043458 C32.212129,19.9651199 32.3282581,21.9486038 32.2806452,23.5616361 C32.2295484,25.2617651 32.1645161,26.8922167 31.9914839,28.5737651 C31.5536774,32.825249 30.4597419,37.1324748 28.1452903,40.5385393 C24.5952258,45.7620232 20.7455484,47.3448619 20,48.1647329 C20.7687742,49.6326038 24.392,53.2999587 25.7820645,53.6657651 C27.8270968,52.4243458 30.0219355,50.6336361 31.6105806,48.8359587 L33.9308387,45.7759587 C34.2141935,45.3114425 35.804,42.6300232 35.9944516,42.4639587 C36.3695484,42.8913135 36.6772903,43.6008619 36.9873548,44.101378 L39.1043871,47.2542812 C39.2994839,47.4969909 39.5270968,47.7838296 39.6966452,47.9789264 C39.9985806,48.3296361 40.0694194,48.4771199 40.3225806,48.7837006 C40.5316129,49.0368619 40.7580645,49.185507 40.9833548,49.4363458 L42.3049032,50.7509264 C42.868129,51.3698941 45.4183226,53.209378 46.208,53.6738941 C47.5597419,53.289507 51.1957419,49.6639587 51.9796129,48.1647329 L49.0101935,46.0244748 C47.8245161,45.2069264 45.9536774,43.3082167 44.9851613,42.1411199 C44.5926452,41.6673135 44.2732903,41.1586683 43.8854194,40.601249 C43.2107097,39.6304103 42.5139355,38.3611199 42.0273548,37.189378 C39.6385806,31.4479587 39.6594839,25.1282167 39.656,18.5146683 C39.4643871,17.8329909 33.3548387,17.8620232 32.3572903,18.4043458"
                fill="#FFF"
              ></path>
            </g>
          </svg>
          <span className="text-lg font-semibold">myAakash App</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                  className={cn(
                    "w-full justify-start",
                    "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.label}</span>
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
