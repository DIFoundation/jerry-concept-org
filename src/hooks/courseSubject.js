'use client';
import { useSearchParams } from 'next/navigation';

const CourseSubject = ({ onSetSubject }) => {
  const searchParams = useSearchParams();
  const course = searchParams.get("course");

  if (course) {
    onSetSubject(`Course Enrollment: ${course}`);
  }

  return null; // No UI
};

export default CourseSubject;
