import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TopicComponent } from './components/topic/topic.component';
import { CourseComponent } from './components/course/course.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'students', component: StudentComponent},
    { path: 'teachers', component: TeacherComponent},
    { path: 'topics', component: TopicComponent},
    { path: 'courses', component: CourseComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
