import { Component, OnInit, Input } from '@angular/core';
import { Alert, AlertType } from './alet';
import { AlertService } from './alet.service';


@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    
  @Input() id: string;

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.alertService.getAlert(this.id).subscribe((alert: Alert) => {
        // add alert to array
        this.alerts.push(alert);

        // remove alert after 5 seconds
        setTimeout(() => this.removeAlert(alert), 5000);
      });
  }

  removeAlert(alert: Alert) {
      this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
        return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
          return 'alert alert-success';
      case AlertType.Error:
          return 'alert alert-danger';
      case AlertType.Info:
          return 'alert alert-info';
      case AlertType.Warning:
          return 'alert alert-warning';
    }
  }

}
