import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decoder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './decoder.component.html',
  styleUrl: './decoder.component.css'
})
export class DecoderComponent {
  readonly morseCode = signal('');
  decodedText: string = '';
  errorMessage: string = '';
  isMorseCodeValid: boolean = true;

  decode(): void {
    const morseToText: { [key: string]: string } = {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
      '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
      '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
      '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
      '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
      '--..': 'Z'
    };

    const morsePattern = /^[.\s-]+$/;
    if (!morsePattern.test(this.morseCode())) {
      this.errorMessage = 'Invalid Morse code. Only dots, dashes, and spaces are allowed.';
      this.decodedText = '';
      return;
    }

    const morseCharacters = this.morseCode().trim().split(' ');
    let decodedMessage = '';

    for (const morseChar of morseCharacters) {
      if (morseToText[morseChar] !== undefined) {
        decodedMessage += morseToText[morseChar];
      } else {
        this.errorMessage = `Unknown Morse code: ${morseChar}`;
        this.decodedText = '';
        return;
      }
    }

    this.decodedText = decodedMessage;
    this.errorMessage = '';
  }
}
