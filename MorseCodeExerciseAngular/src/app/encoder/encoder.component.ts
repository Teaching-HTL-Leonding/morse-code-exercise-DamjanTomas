import { Component, signal } from '@angular/core';
import { MorseCodeService } from '../morse-code.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encoder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encoder.component.html',
  styleUrl: './encoder.component.css'
})
export class EncoderComponent{
  readonly userText = signal('');

  encode(): void {
    const morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];
    const resultHTML = document.getElementById('encode-result') as HTMLInputElement;

  const text = this.userText().trim();
  if (text === '' || !/^[A-Za-z]+$/.test(text)) {
    resultHTML!.value = '';
    return;
  }

  const morseResult = text
    .toUpperCase()
    .split('')
    .map((char: string) => morseCode[char.charCodeAt(0) - 65])
    .join(' ');

  resultHTML!.value = morseResult;
}
}
