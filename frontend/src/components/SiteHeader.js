import React from "react";
import { Link } from "react-router-dom";

/**
 * This function returns a div element with a link to the home page and a h1 element with the text
 * "Ninja Reviews"
 * @returns A div with a class of site-header.
 */
export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>
    </div>
  );
}
