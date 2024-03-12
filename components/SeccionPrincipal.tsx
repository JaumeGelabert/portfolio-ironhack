import { SeccionPrincipalProps } from "@/types";
import { Github } from "lucide-react";
import Link from "next/link";

export const SeccionPrincipal = ({
  name,
  description,
  linkGithub
}: SeccionPrincipalProps) => {
  return (
    <div className="flex flex-col justify-start items-start pt-4">
      <div className="flex flex-row justify-start items-center gap-4">
        <p className="text-lg font-semibold">{name}</p>
        <div>
          <Link href={linkGithub} target="_blank">
            <Github className="h-4 w-4 text-neutral-600 hover:text-black transition-all" />
          </Link>
        </div>
      </div>
      <p className="text-neutral-500 text-sm">{description}</p>
    </div>
  );
};
