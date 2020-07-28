import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} Cookies - Cookie Clicker Game`;
    return () => {
      document.title = "Cookie Clicker Game";
    };
  }, [title]);
};

export default useDocumentTitle;
