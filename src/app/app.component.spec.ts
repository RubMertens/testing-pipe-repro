import { CommonModule } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayValuePipe } from './display-value.pipe';
import { UsesPipeComponent } from './uses-pipe/uses-pipe.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DisplayValuePipe,
        // UsesPipeComponent // this one is required
      ],
      imports: [CommonModule]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.title = 'testing';

    fixture.detectChanges();

    const app = fixture.componentInstance;
    console.log(fixture.nativeElement.innerHTML);
    expect(app).toBeTruthy();
  }));
});
