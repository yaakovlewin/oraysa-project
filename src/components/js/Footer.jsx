import React from "react";

export default function Footer() {
    return (
        <>
            {/* site links */}
            <section className="flex justify-around p-7">
                <a href="/" className="text-blue-500">
                    About
                </a>
                <a href="/" className="text-blue-500">
                    Contact
                </a>
                <a href="/" className="text-blue-500">
                    Privacy
                </a>
                <a href="/" className="text-blue-500">
                    Terms
                </a>
            </section>
            <p className="text-center text-gray-400 text-xs p-6">
                {" "}
                &copy; 2023 Study Schedule
            </p>
            <section className="p-3">
                <p className="text-center text-gray-400 text-xs">
                    Created by{" "}
                    <a href="tel:+447548091286" className="text-blue-500">
                        @Yanki F +44 7548 091 286
                    </a>
                </p>
                <p className="text-center text-gray-400 text-xs">
                    Powered by{" "}
                    <a href="/" className="text-blue-500">
                        @react
                    </a>
                </p>
            </section>
        </>
    );
}
