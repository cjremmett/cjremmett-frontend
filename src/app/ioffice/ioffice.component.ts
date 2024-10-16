import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ioffice',
  standalone: true,
  imports: [],
  templateUrl: './ioffice.component.html',
  styleUrl: './ioffice.component.css'
})
export class IofficeComponent
{
  secretKeyInputText = '';
  emailAddressInputText = '';
  async updateSettings(monday_checkin: boolean, tuesday_checkin: boolean, wednesday_checkin: boolean, thursday_checkin: boolean, friday_checkin: boolean): Promise<void>
  {
    const json_body = JSON.parse('{"email_address": "' + this.emailAddressInputText + '", "secret_key": "' + this.secretKeyInputText + '", "monday_checkin": "' + monday_checkin + '", "tuesday_checkin": "' + tuesday_checkin + '", "wednesday_checkin": "' + wednesday_checkin + '", "thursday_checkin": "' + thursday_checkin + '", "friday_checkin": "' + friday_checkin + '"}');
    const response = await fetch('https://cjremmett.com/flask/gafg-tools/ioffice-checkin-user-update-settings', {
      method: 'PUT',
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json_body)
    });
  
    const res_text = await response.text();
    if(response.status === 200)
    {
      window.alert("Settings updated successfully!");
      this.secretKeyInputText = '';
      this.emailAddressInputText = '';
    }
    else
    {
      window.alert("Settings update failed! Error message:\n\n" + res_text);
    }
  };
}