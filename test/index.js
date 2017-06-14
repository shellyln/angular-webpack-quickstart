
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting }
    from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());


// require all modules ending in ".spec" from the
// current directory and all subdirectories by webpack.
var testsContext = require.context("../src", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
