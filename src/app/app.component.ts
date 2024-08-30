import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'typing';
  randomText = lorem.sentence();
  enteredText:string = '';
  enableSuccess:boolean=false;

  onInput(event: any) {
    this.enteredText = event.target.value;
    if(this.enteredText === this.randomText){
      this.enableSuccess=true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
      if(!enteredLetter){
        return 'pending';
      }

      return randomLetter === enteredLetter ? 'correct':'incorrect';
    }
    
}
