import React from "react";

export default function ContactInfo() {
  return (
    <div className="flex-1 bg-brand p-10 rounded-lg">
      <h2 className="font-bold text-lg">Contact Info</h2>

      <ul className="mt-5 space-y-5">
        <li>
          <h3 className="font-semibold">Our Loacation</h3>
          <address>
            18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav.
            18, Jakarta Selatan ,12520
          </address>
        </li>
        <li>
          <h3 className="font-semibold">Quick Contact</h3>
          <p>
            Call Us: (+62 877-2469-7246) <br />
            Email: contact@me.com
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Opening Hours</h3>
          <p>
            Monday - Friday <br />
            09:00 AM - 06:00 PM
          </p>
        </li>
        <p className="font-semibold">
          Do You Have Any Question,
          <br /> Just Contact Us To Help!
        </p>
        <button
          type="button"
          className="px-5 py-2 w-full bg-brand-dark hover:bg-black col-span-2 rounded"
        >
          Contact Us
        </button>
      </ul>
    </div>
  );
}
