import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CoursesService} from './services/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Observable
  // courses$: Observable<Course[]>;
  courses = COURSES;
  coursesTotal = COURSES.length;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
  }

  onEditCourse() {
    // this.courses = [undefined];
    const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    };
    this.courses[0].description = newCourse;
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(() => console.log('Course saved!'));
  }

}

