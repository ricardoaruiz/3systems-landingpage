"use client";

import { ChevronsUp } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function GoToTopButtonView() {
  const { isOnTop } = useScroll();

  const handleButtonClick = () => {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-4 bottom-4 z-50"
      data-aos={isOnTop ? "fade-left" : "fade-right"}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="voltar ao topo da página"
            className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-zinc-500 bg-primary-3systems p-2 text-zinc-100 shadow-lg shadow-zinc-800 transition-all hover:bg-primary-2-3systems md:size-16"
            onClick={handleButtonClick}
            type="button"
          >
            <ChevronsUp className="size-10" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Voltar ao início</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
