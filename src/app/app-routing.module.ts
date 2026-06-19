import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourierComponent } from './courier/courier.component';
import { CandidateComponent } from './candidate/candidate.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CandidateListComponent } from './candidate/candidate-list.component';
import { CourierListComponent } from './courier/courier-list.component';

const routes: Routes = [

 {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
   {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  },
  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'courier',
    component: CourierComponent
  },
  {
    path: 'courier/:id',
    component: CourierComponent
  },
  {
    path: 'candidate',
    component: CandidateComponent
  },
  {
    path: 'candidate/:id',
    component: CandidateComponent
  },
  {
    path: 'roleList',
    component: RoleListComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'collegeList',
    component: CollegeListComponent
  },
  {
    path: 'courseList',
    component: CourseListComponent
  },
  {
    path: 'facultyList',
    component: FacultyListComponent
  },
  {
    path: 'marksheetList',
    component: MarksheetListComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  },
  {
    path: 'subjectList',
    component: SubjectListComponent
  },
  {
    path: 'timetableList',
    component: TimetableListComponent
  },
  {
    path: 'candidateList',
    component: CandidateListComponent
  },
  {
    path: 'courierList',
    component: CourierListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
