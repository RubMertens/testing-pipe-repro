import { AppModule } from './app.module';
import { TestBed } from '@angular/core/testing';
import { UsesPipeComponent } from './uses-pipe/uses-pipe.component';
import { AfterViewInit, Component, ComponentFactoryResolver, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-root',
  template: `<div>{{"test" | displayValue}}</div><ng-template #control></ng-template>`,
})
export class AppComponent implements AfterViewInit {
  title = 'testing-pipe';

  @ViewChild('control', { read: ViewContainerRef })
  public controlView: ViewContainerRef | undefined;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    const factory = this.factoryResolver.resolveComponentFactory(UsesPipeComponent);
    console.log(factory);
    this.controlView?.clear();
    const comp = this.controlView?.createComponent(factory);
    comp?.changeDetectorRef.detach();
    comp?.changeDetectorRef.detectChanges();
  }
}
