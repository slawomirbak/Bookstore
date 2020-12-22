import { Book } from "./Book";

export class Author {
  public id: number;
  public name: string;
  public surname: string;
  public authorAvatar: string;
  public books: Book[] = [];
}
