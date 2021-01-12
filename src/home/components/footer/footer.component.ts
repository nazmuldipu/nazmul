import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([this.sum + i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown() {
    console.log('scrolled down!!');

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  onUp() {
    console.log('scrolled up!');
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }
  generateWord() {
    return 'abc';
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
