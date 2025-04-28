"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const CourseSubject = ({ onSetSubject }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  useEffect(() => {
    if (title) {
      onSetSubject(`Course Enrollment: ${title}`);
    }
  }, [title, onSetSubject]);

  return null; // No UI to render
};

export default CourseSubject;
