"use client";
import { PropagateLoader } from "react-spinners";

export default function Loading({ className }) {
    return (
        <div className={`h-screen flex-center py-10 ${className}`}>
            <PropagateLoader color="#0372F5" />
        </div>
    );
}
