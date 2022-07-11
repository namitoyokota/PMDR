import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent } from 'angular-cd-timer';

const ALARM_SOUND_PATH = "../../../assets/completed.wav";
const SELECT_SOUND_PATH = "../../../assets/select.wav";

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
  alarm = new Audio();

  /** Set time sound effect audio */
  select = new Audio();

  /** Flag to indicate that timer is running */
  running = true;

  /** Flag to indicate when UI is not ready */
  isLoading = true;

  /** On init lifecycle hook */
  ngOnInit() {
    this.select.src = SELECT_SOUND_PATH;
    this.select.load();
    this.select.volume = 0.1;

    this.alarm.src = ALARM_SOUND_PATH;
    this.alarm.load();
    this.alarm.volume = 0.3;

    setInterval(() => {
      this.isLoading = false;
    }, 3000)
  }

  /** Add time to the timer */
  setTimer(minutes: number) {
    this.select.play();
    this.clock = minutes;
    this.basicTimer.start();
  }

  /** Triggered when timer completes */
  completed() {
    this.alarm.play();
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
