export type Courses = {
    courses: Course[];
};

export type Course = {
    id: string,
    title: string,
    description: string,
    tableOfContents: [
        {
            id: string,
            title: string,
            description: string,
            prevLesson: string,
            nextLesson: string,
        }
    ]
};
