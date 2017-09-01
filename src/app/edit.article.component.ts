import { Component, OnInit, trigger, state, style, animate, transition} from '@angular/core';

@Component({
    selector: 'edit-article',
    templateUrl: './edit.article.component.html',
    styleUrls: [],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class EditArticleComponent {
    constructor() {

    }
}
