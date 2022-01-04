import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseCardComponent implements OnInit, OnDestroy,
  OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(private coursesService: CoursesService) {
    console.log('constructor call..', this.course );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges call..', changes);
  }


  ngOnInit() {
    console.log('ngOnInit call', this.course);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck call..');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call..');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call .....');
    this.course.description = 'ngAfterContentChecked';
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call..');
  }
  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit call.....');
  }

  onSaveClicked(description: string) {

    this.courseEmitter.emit({...this.course, description});

  }



  ngOnDestroy(): void {
    console.log('ng destroy called .....');
  }


}
