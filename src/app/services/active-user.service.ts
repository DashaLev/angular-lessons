import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {

  private activeUser = new BehaviorSubject<number>(0)

  constructor() {
  }

  getActiveUser(): BehaviorSubject<number> {
    return this.activeUser
  }

  setActiveUser(value: number): void {
    this.activeUser.next(value)
  }

  // getActiveUserSnapShot(): number {
  //   return this.activeUser.getValue()
  // }
}
