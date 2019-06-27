import { Injectable } from "@angular/core";

@Injectable()
export class IntermediaryService {
  public booleansYears: Array<boolean> = [];
  public numbers: Array<number> = [];

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.booleansYears.push(true);
      this.numbers.push(i);
    }
  }

}