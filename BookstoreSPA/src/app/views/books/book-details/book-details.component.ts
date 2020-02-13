import { Component, OnInit } from '@angular/core'

enum BookVersion {
    Paper = 'Paper',
    Electronic = 'Electronic',
    Mp3 = 'Mp3'
}

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
    constructor() {}

    selectedVersion: BookVersion;

    ngOnInit() {}

    book = {
        id: '1',
        authorId: '1',
        title: 'In the Heart of the Fire',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41GU9ufax6L.jpg',
        authorAvatar:
            'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
        author: 'Dean Koontz',
        shortDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        newPrice: 2.09,
        oldPrice: 0,
    }

    onVersionSelected(value: string) {
        this.selectedVersion = BookVersion[value];
    }
}
