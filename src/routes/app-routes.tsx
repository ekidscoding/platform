import { Routes, Route } from 'react-router';

import HomePage from '../pages/home';
import LessonsPage from '../pages/lessons';
import LessonPage from '../pages/lesson';
import CoursesPage from '../pages/courses';
import CoursePage from '../pages/course';
import StoryModePage from '../pages/story-mode';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='lessons' element={<LessonsPage />} />
    <Route path='lessons/:id' element={<LessonPage />} />
    <Route path='courses' element={<CoursesPage />} />
    <Route path='courses/:id' element={<CoursePage />} />
    <Route path='story-mode' element={<StoryModePage />} />
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
  </Routes>
);

export default AppRoutes;
