import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumber = false;
  includeSymbols = false;
  length = 0;
  password = '';
  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'asdfghjklqwertyuiopzxcvbnm';
    const symbols = '!@#$%^&&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumber) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0;i<this.length;i++){
      let index=Math.floor(Math.random()*validChars.length)
      generatedPassword+=validChars[index]
    }
    this.password=generatedPassword
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumber = !this.includeNumber;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log(this.length);
  }
}
