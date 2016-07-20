import { Component } from 'angular2/core';

@Component({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
        <div>Hello World</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'EOS: EVE OPERATIONS SUITE';
}