import React from "react";
import { courses } from "../data";
import Link from "next/link";

const CourseList = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold my-3">
        Welcome to CourseZone - Following Courses We Offer
      </h1>

      {/* ✅ Move grid container outside the map function */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            className="text-center flex flex-col items-center cursor-pointer p-4 border border-gray-300 rounded-lg shadow-lg space-y-5"
          >
            <div className="flex items-center gap-2">
              <div className="text-2xl">{course.icon}</div>
              <div>
                <h1 className="font-semibold text-xl capitalize">
                  {course.title}
                </h1>
              </div>
            </div>
            <button className="rounded-full px-4 py-1 cursor-pointer border-gray-200 hover:bg-gray-900 hover:text-white border font-medium">
              <Link href={`/projects/${course.id}`}>Explore Course</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
