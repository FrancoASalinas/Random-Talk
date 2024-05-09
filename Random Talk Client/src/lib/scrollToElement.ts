import { RefObject } from "react";

function scrollToElement(ref: RefObject<HTMLElement> | null) {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  export default scrollToElement