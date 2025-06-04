import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloUser } from "./hello-user/hello-user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloUser],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'hello-user';
}
