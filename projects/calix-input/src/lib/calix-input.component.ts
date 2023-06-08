import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calix-input',
  template: './input.component.html',
  styleUrls: ['../assets/input.component.scss']
})
export class CalixInputComponent  implements OnInit, OnChanges{
  @Input('hint')  hintName = '';
  @Input('label')  label = '';
  @Input('error_message') error_message='';
  @Input('type') type='';
  
  value = '';
  ngOnInit() {
    this.checkRequiredFields(this.label,'label');
    this.checkRequiredFields(this.error_message,'error_message');
    this.checkRequiredFields(this.type,'type');

 }

 ngOnChanges(changes:any) {
    this.checkRequiredFields(this.label,'label');
    this.checkRequiredFields(this.error_message,'error_message');
    this.checkRequiredFields(this.type,'type');


 }

 checkRequiredFields(input:any,attribute:string) {
    if(input.length=== 0) {
       throw new Error("Attribute "+attribute+" is required");
    }
 }
  changeFn(e:any) {
    this.value = e.target.value;
  }
  modelChangeFn(value:any) {
    this.value = value;
  }

  addPrefix(){
    if (!this.value.startsWith('calix-')){
      this.value="calix-"+this.value

    }
  }
  
}
