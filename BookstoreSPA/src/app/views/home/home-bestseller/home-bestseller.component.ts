import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';

@Component({
  selector: 'app-home-bestseller',
  templateUrl: './home-bestseller.component.html',
  styleUrls: ['./home-bestseller.component.scss']
})
export class HomeBestsellerComponent implements OnInit {

  constructor() { }


  books: Book[] = [
    {
      title: 'In the Heart of the Fire',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41GU9ufax6L.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Dean Koontz',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 2.09,
      oldPrice: 0
    },
    {
      title: 'Thief River Falls',
      img: 'https://images-na.ssl-images-amazon.com/images/I/5121qEQkIgL.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Brian Freeman',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 5.24,
      oldPrice: 24.29
    },
    {
      title: 'The Likely Resolutions of Oliver Clock',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bm0LRG%2B2L.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Jane Riley',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 5.24,
      oldPrice: 0
    },
    {
      title: 'Profiles in Corruption: Abuse of Power by America\'s Progressive Elite',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51mVFMYSFtL._SX327_BO1,204,203,200_.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Peter Schweizer',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 20.87,
      oldPrice: 29.99
    },
    {
      title: 'Explorer\'s Guide to Wildemount (D&D Campaign Setting and Adventure Book) (Dungeons & Dragons)',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51fDBBqqR-L._SY498_BO1,204,203,200_.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Wizards RPG Team',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 29.97,
      oldPrice: 49.95
    },
    {
      title: 'TWhere the Crawdads Sing',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Jane Riley',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 16.51,
      oldPrice: 9.57
    },
    {
      title: 'The Likely Resolutions of Oliver Clock',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bm0LRG%2B2L.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Jane Riley',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 5.24,
      oldPrice: 0
    },
    {
      title: 'Profiles in Corruption: Abuse of Power by America\'s Progressive Elite',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51mVFMYSFtL._SX327_BO1,204,203,200_.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Peter Schweizer',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      newPrice: 20.87,
      oldPrice: 29.99
    }
  ];

  ngOnInit() {
  }


}
