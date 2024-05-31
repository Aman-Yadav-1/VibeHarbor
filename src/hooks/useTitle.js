import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | VibeHarbor`;
  }, [title]);

  return null;
};
