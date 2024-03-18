import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { TodoAppComponent } from "./todo-app/todo-app.component";
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        HeaderComponent,
        TodoListComponent,
        FooterComponent,
        SignupComponent,
        TodoAppComponent,
        RouterOutlet,
        CommonModule
    ]
})
export class AppComponent {
    userName : string =null;
    userData = new BehaviorSubject<{}>({});
    constructor(private auth:AuthService,private router: Router){
  
    }
  
  
    signOut(){
      this.auth.signOut();
      this.router.navigate(['/signup']);
      this.userName=null;
    }

     ngOnInit() {
      this.auth.currentUser.subscribe((user) => {
        if (user) {
          debugger;
          const username = user?.user_metadata?.['user_name']; // Access username
          this.userData.next(username);
          this.userName=username; // Update BehaviorSubject with username only
        } else {
          this.userData.next(null); // Set to null if not signed in
        }
      });
      console.log("user data "+this.userData);
    }
}
