import { Github } from "lucide-react";
import { BsDiscord, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { DOCS_URL } from "@tryabby/core";

const GITHUB_URL = "https://github.com/tryabby/abby";
const LINKEDIN_URL = "https://www.linkedin.com/company/tryabby/";
const TWITTER_URL = "https://twitter.com/tryabby";
export const DISCORD_INVITE_URL = "https://discord.gg/nk7wKf7Pv2";

export function Footer() {
  return (
    <footer className="bg-accent-background text-accent-foreground">
      <div className="container px-6 py-6 md:px-16 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h1 className="mb-3 text-2xl font-bold">Abby</h1>
            <h2 className="mb-8">
              A simple and easy to use Open-Source Feature Flagging & Remote
              Config tool for developers.
            </h2>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-0">
            <h1 className="mb-2 text-2xl font-bold md:mb-3">Integrations</h1>
            <Link href={`${DOCS_URL}integrations/react`}>React</Link>
            <Link href={`/nextjs`}>Next.js</Link>
            <Link href={`${DOCS_URL}integrations/svelte`}>Svelte</Link>
            <Link href={`${DOCS_URL}integrations/angular`}>Angular</Link>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-0">
            <h1 className="mb-2 text-2xl font-bold md:mb-3">Links</h1>
            <Link href={`/tips-and-insights`}>Tips & Insights</Link>
            <Link href={DOCS_URL}>Documentation</Link>
            <Link href={GITHUB_URL}>Github</Link>
            <Link href={DISCORD_INVITE_URL}>Discord</Link>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-0">
            <h1 className="mb-2 text-2xl font-bold md:mb-3">Legal</h1>
            <Link href="/imprint">Imprint</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col justify-between gap-y-4 border-t border-gray-600 px-6 py-6  sm:flex-row md:px-16">
          <p>© {new Date().getFullYear()} Abby. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href={GITHUB_URL}>
              <Github />
            </a>
            <a href={LINKEDIN_URL}>
              <BsLinkedin size={24} />
            </a>
            <a href={TWITTER_URL}>
              <RiTwitterXLine size={24} />
            </a>
            <a href={DISCORD_INVITE_URL}>
              <BsDiscord size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
