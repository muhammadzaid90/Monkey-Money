"use client";

import { motion } from "framer-motion";
import { academyCourses } from "@/data/academy";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AcademyPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <div className="flex items-center justify-between">
                <SectionHeader icon={<GraduationCap size={14} />} title="Monkey Money Academy" color="pink" />
        <button className="text-[11px] font-medium text-muted hover:text-foreground">
          View All →
        </button>
      </div>
      <p className="mt-0.5 text-[11px] text-muted">Continue Learning</p>

      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {academyCourses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
            className="cursor-pointer overflow-hidden rounded-lg border border-border transition-colors hover:border-accent/40"
          >
            <div
              className={`h-20 bg-gradient-to-br ${course.gradient} bg-surface-hover`}
            />
            <div className="p-2.5">
              <p className="text-[12px] font-medium leading-snug">
                {course.title}
              </p>
              <p className="mt-1 text-[10px] text-muted">{course.lessons}</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}