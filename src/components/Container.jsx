import React from "react";

export default function Container({ children }) {
  return <div className="p-5 md:p-0 container mx-auto ">{children}</div>;
}
