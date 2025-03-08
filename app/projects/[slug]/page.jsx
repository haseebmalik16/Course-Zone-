"use client";

import React from "react";
import { IoMdTime } from "react-icons/io";
import { courseDetails } from "@/components/data";
import { FaLayerGroup, FaArrowLeft } from "react-icons/fa6";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { slug } = useParams(); // ✅ Correct way to get dynamic params in Client Component
  const router = useRouter();

  // ✅ Ensure course exists before rendering
  const course = courseDetails.find((course) =>
    course.title.toLowerCase().includes(slug.toLowerCase())
  );

  if (!course) {
    return <p className="text-center text-red-500">Course not found</p>;
  }

  return (
    <div className="p-10">
      <div className="max-w-2xl flex flex-col items-center gap-4 mx-auto rounded-md border-gray-300 border p-5">
        <h1 className="text-xl font-black capitalize">{course.title}</h1>

        {/* Buttons */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center rounded-md px-4 py-1 border hover:bg-gray-900 hover:text-white font-medium">
            <IoMdTime />
            <button className="ml-2 cursor-pointer">{course.duration}</button>
          </div>
          <div className="flex rounded-md px-4 py-1 bg-gray-800 text-white hover:bg-gray-900 font-medium items-center">
            <FaLayerGroup />
            <button className="ml-2 cursor-pointer capitalize">
              {course.level}
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className="rounded-md bg-gray-100 w-full flex flex-col items-center">
          {course.projects.map((project) => (
            <div className="py-2" key={project.id}>
              <h3 className="font-medium capitalize">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center px-4 py-1 font-medium rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <FaArrowLeft /> Back to Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
