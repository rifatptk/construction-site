import React from "react";

export default function Container({ children }) {
  return <div className="px-5 md:px-0 container mx-auto">{children}</div>;
}
