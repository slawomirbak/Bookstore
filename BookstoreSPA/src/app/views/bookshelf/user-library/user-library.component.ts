import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // books: Book[] = [
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'In the Heart of the Fire',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/41GU9ufax6L.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Dean Koontz',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'Thief River Falls',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/5121qEQkIgL.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Brian Freeman',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'The Likely Resolutions of Oliver Clock',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bm0LRG%2B2L.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Jane Riley',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'Profiles in Corruption: Abuse of Power by America\'s Progressive Elite',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/51mVFMYSFtL._SX327_BO1,204,203,200_.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Peter Schweizer',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'Explorer\'s Guide to Wildemount (D&D Campaign Setting and Adventure Book) (Dungeons & Dragons)',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/51fDBBqqR-L._SY498_BO1,204,203,200_.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Wizards RPG Team',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'TWhere the Crawdads Sing',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Jane Riley',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'The Likely Resolutions of Oliver Clock',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bm0LRG%2B2L.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Jane Riley',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     title: 'Profiles in Corruption: Abuse of Power by America\'s Progressive Elite',
  //     img: 'https://images-na.ssl-images-amazon.com/images/I/51mVFMYSFtL._SX327_BO1,204,203,200_.jpg',
  //     authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
  //     author: 'Peter Schweizer',
  //     shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 2.09,
  //     discount: 10,
  //     format: BookFormat.SoftCover
  //   }
  // ];


}
