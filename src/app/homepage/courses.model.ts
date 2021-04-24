import { Chapters } from "./chapters.model";

export class Courses{
  constructor(
    public  id?: string,
    public title?: string,
    public imageUrl?:string,
    public description?: string,
    public chapters?: Chapters[]
  ){

  }
}
