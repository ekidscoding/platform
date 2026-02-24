import { Play } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import { Course } from "@/components/types";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type CourseIntroProps = {
    course: Course;
};

const CourseIntro = ({ course }: CourseIntroProps) => (
    <section>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">{course?.title}</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{course?.description}</p>
        <Accordion
            type="multiple"
            className="max-w-lg"
            defaultValue={["notifications"]}
        >
            {course.tableOfContents.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    </AccordionTrigger>
                    <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
        <Button variant="default" size="lg">
            <Link to={`/lessons/${course.tableOfContents[0].id}?course=${course.id}`}>
                Start Course
            </Link>
            <Play />
        </Button>
    </section>
);

export default CourseIntro;
