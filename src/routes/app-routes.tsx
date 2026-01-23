import { Routes, Route } from 'react-router';

import HomePage from '@/pages/home';
import LessonsPage from '@/pages/lessons';
import LessonPage from '@/pages/lesson';
import CoursesPage from '@/pages/courses';
import CoursePage from '@/pages/course';
import StoryModePage from '@/pages/story-mode';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import NotFound from '@/pages/404';
import { ROUTES } from '@/routes/constants';

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path={ROUTES.LESSONS} element={<LessonsPage />} />
    <Route path={ROUTES.LESSON} element={<LessonPage />} />
    <Route path={ROUTES.COURSES} element={<CoursesPage />} />
    <Route path={ROUTES.COURSE} element={<CoursePage />} />
    <Route path={ROUTES.STORY_MODE} element={<StoryModePage />} />
    <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
    <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
