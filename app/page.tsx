"use client";

import { SeccionPrincipal } from "@/components/SeccionPrincipal";
import { Badge } from "@/components/ui/badge";
import { ContentWrapper } from "@/lib/ContentWrapper";
import Link from "next/link";
// TODO: Fix types
const projects: any = [
  {
    name: "Gym Tonic",
    description: "Create your own workout routines and track your progress.",
    link: "https://gymtonic.vercel.app",
    stack: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    name: "Dog File",
    description: "A social network for dogs.",
    link: "https://dogfile.vercel.app",
    stack: ["MongoDB", "Express", "React", "Node.js"]
  }
];

export default function Home() {
  return (
    <ContentWrapper>
      <SeccionPrincipal
        name="Jaume"
        description="Hola, este es mi portfolio."
        linkGithub="https://www.github.com/jaumecapdevila"
      />
      {/* Proyectos */}
      <div className="flex flex-col justify-start items-start gap-10 mt-10">
        {projects.map(({ name, description, stack, link }: any) => (
          <div className="flex flex-col justify-start items-start">
            <Link
              prefetch
              href={link}
              target="_blank"
              className="text-lg font-medium text-neutral-600"
            >
              {name}
            </Link>
            <p className="text-neutral-400">{description}</p>
            {/* Map over the stack used */}
            <div className="flex flex-row gap-4 mt-6">
              {stack.map((tech: any) => (
                <Badge>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
}
