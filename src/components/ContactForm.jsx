import React from "react";

export default function ContactForm() {
  return (
    <div className="flex-[2] bg-brand rounded-lg p-5 md:p-10">
      <h3 className="font-semibold">Request A Quote</h3>
      <p>
        Complete control over products allow us to our customers the best
        quality prices and services. We take great pride in everything that we
        do in Jhontraktor{" "}
      </p>

      <form className="text-gray-400 text-sm md:text-base">
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <input type="text" placeholder="Name" className="px-5 py-2 rounded" />
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-5 py-2 rounded"
          />
          <select className="px-5 py-2 rounded">
            <option value="" hidden>
              Select Service
            </option>
            <option value="saab">Construction</option>
            <option value="mercedes">Interior</option>
            <option value="audi">Builing</option>
          </select>

          <textarea
            placeholder="Additional Details"
            className="md:col-span-2 rounded min-h-[160px] px-5 py-2"
          />

          <button
            type="button"
            className="px-5 py-2 bg-brand-dark hover:bg-black md:col-span-2 rounded"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
