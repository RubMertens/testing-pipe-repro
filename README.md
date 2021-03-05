# TestingPipe

running tests in app.component.spec.ts fails with a strange error:

```
 Failed: NG0302: The pipe 'displayValue' could not be found!. Find more at https://angular.io/errors/NG0302
        error properties: Object({ code: '302' })
        Error: NG0302: The pipe 'displayValue' could not be found!. Find more at https://angular.io/errors/NG0302
            at getPipeDef$1 (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:25738:1)
            at ɵɵpipe (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:25695:1)
            at UsesPipeComponent_Template (ng:///UsesPipeComponent.js:7:9)
            at executeTemplate (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:9544:1)
            at renderView (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:9351:1)
            at renderComponent (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:10626:1)
            at renderChildComponents (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:9216:1)
            at renderView (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:9376:1)
            at ComponentFactory$1.create (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:25079:1)
            at ViewContainerRef.createComponent (node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:23118:1)
Chrome 88.0.4324.190 (Windows 10): Executed 1 of 1 (1 FAILED) (0.082 secs / 0.074 secs)
```

It can be fixed by importing the generated component, but the test should not know about the underlying pipe?
