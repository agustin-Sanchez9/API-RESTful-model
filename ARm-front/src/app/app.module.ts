import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { StudentService } from "./services/student.service";
import { TeacherService } from "./services/teacher.service";
import { TopicService } from "./services/topic.service";
import { CourseService } from "./services/course.service";
import { StudentComponent } from "./components/student/student.component";
import { TeacherComponent } from "./components/teacher/teacher.component";
import { CourseComponent } from "./components/course/course.component";
import { TopicComponent } from "./components/topic/topic.component";


@NgModule({
    declarations:[
        AppComponent,
        StudentComponent,
        TeacherComponent,
        CourseComponent,
        TopicComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule
    ],
    providers: [
        StudentService,
        TeacherService,
        TopicService,
        CourseService
    ],
    bootstrap: [AppComponent]  
})
export class AppModule {}