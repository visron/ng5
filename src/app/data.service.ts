import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(['The initial Goal','Another Goal']);
  goal = this.goals.asObservable();

  constructor() { }
  changeGoal(goal:string[]){
    this.goals.next(goal);
  }
}
