"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/primitives/Button";
import { primaryNav, servicePillars } from "@/lib/site-data";

export function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-border-subtle backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" aria-label="Trivestack home" className="block">
          <Image
            src="/thrivestack-logo.svg"
            alt="Trivestack"
            width={780}
            height={176}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="font-body text-sm text-gray transition-colors hover:text-white">
              Services
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4">
                <div className="glass grid grid-cols-4 gap-6 rounded-2xl border border-border-subtle p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
                  {servicePillars.map((pillar) => (
                    <div key={pillar.slug} className="flex flex-col gap-2">
                      <Link
                        href={`/services/${pillar.slug}`}
                        className="font-display text-sm font-bold text-white hover:text-teal"
                      >
                        {pillar.name}
                      </Link>
                      <ul className="flex flex-col gap-1.5">
                        {pillar.subOfferings.slice(0, 3).map((s) => (
                          <li key={s.name} className="text-xs text-gray-2">
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-gray transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/start-a-project" variant="primary">
            Start a Project
          </Button>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="h-[1.5px] w-6 bg-white" />
          <span className="h-[1.5px] w-6 bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="glass border-t border-border-subtle px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/services" className="text-sm text-gray hover:text-white">
              Services
            </Link>
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-gray hover:text-white">
                {item.label}
              </Link>
            ))}
            <Button href="/start-a-project" variant="primary" className="mt-2 w-full">
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
