import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from './alet';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() {     
  }

  // subscribe to alerts
  getAlert(alertId?: string): Observable<any> {
      return this.subject.asObservable().pipe(filter((x: Alert) => x && x.alertId === alertId));
  }

  // convenience methods
  success(message: string) {
      this.alert(new Alert({ message, type: AlertType.Success }));
  }

  error(message: string) {
      this.alert(new Alert({ message, type: AlertType.Error }));
  }

  info(message: string) {
      this.alert(new Alert({ message, type: AlertType.Info }));
  }

  warn(message: string) {
      this.alert(new Alert({ message, type: AlertType.Warning }));
  }

  // main alert method    
  alert(alert: Alert) {
      this.subject.next(alert);
  }

  // clear alerts
  clear(alertId?: string) {
      this.subject.next(new Alert({ alertId }));
  }
}
