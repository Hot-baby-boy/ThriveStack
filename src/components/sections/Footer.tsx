import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/lib/site-data";
import { ExternalLinkIcon } from "@/components/primitives/ExternalLinkIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-dark">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/thrivestack-logo.svg"
              alt="Trivestack"
              width={780}
              height={176}
              className="h-6 w-auto"
            />
            <p className="max-w-[220px] text-sm text-gray-2">
              Helping businesses build, grow, and scale online.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-teal">
                {col.title}
              </span>
              {col.links.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-2 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ExternalLinkIcon className="text-gray-2" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-2 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-gray-2 md:flex-row">
          <span>© {year} Trivestack. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/start-a-project" className="text-teal hover:underline">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
