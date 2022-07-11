import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent } from 'angular-cd-timer';

const SOUND_PATH = "../../../assets/completed.wav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /** Timer ref */
  @ViewChild('timer', { static: true }) basicTimer!: CdTimerComponent;

  /** How many minutes are left */
  clock: number = 1;

  /** Completed sound effect audio */
  soundEffect = new Audio();

  /** Flag to indicate that timer is running */
  running = true;

  /** On init lifecycle hook */
  ngOnInit() {
    this.soundEffect.src = SOUND_PATH;
    this.soundEffect.load();
    this.soundEffect.volume = 0.3;
  }

  /** Add time to the timer */
  setTimer(minutes: number) {
    this.clock = minutes;
    this.basicTimer.start();
  }

  /** Triggered when timer completes */
  completed() {
    this.soundEffect.play();
    console.log('completed');
  }

  /** Start timer */
  start() {
    this.basicTimer.resume();
    this.running = true;
  }

  /** Stop timer */
  stop() {
    this.basicTimer.stop();
    this.running = false;
  }
}
