import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'Vue', 'React'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  userModel = new User('', 'rob@test.com', 45662133, '', 'morning', true);

  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('Success!', data),
      (error) => this.errorMsg = error.statusText
    );
    console.log(this.userModel);
  }
}
