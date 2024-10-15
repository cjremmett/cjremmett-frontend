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
  //Need to use angular template instead
  // @ViewChild('email_address') emailAddressElement: ElementRef;
  
  // ngAfterViewInit()
  // {
  //   console.log(this.emailAddressElement);
  // }
  
}

async function updateSettings(email_address: string, secret_key:string, monday_checkin: boolean, tuesday_checkin: boolean, wednesday_checkin: boolean, thursday_checkin: boolean, friday_checkin: boolean) {
  const json_body = JSON.parse('{"email_address": "' + email_address + '", "secret_key": "' + secret_key + '", "monday_checkin": "' + monday_checkin + '", "tuesday_checkin": "' + tuesday_checkin + '", "wednesday_checkin": "' + wednesday_checkin + '", "thursday_checkin": "' + thursday_checkin + '", "friday_checkin": "' + friday_checkin + '"}');
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
    // document.getElementById('email_address').value = '';
    // document.getElementById('secret_key').value = '';
  }
  else
  {
    window.alert("Settings update failed! Error message:\n\n" + res_text);
  }
}; 

