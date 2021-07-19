import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value:any): any {
    let uploadtime= value.getTime();
    let tdate=new Date().getTime();
    var diff= tdate-uploadtime;
    var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
    if(diffHrs==0){
      return  diffMins +' mins Ago';
    }
    else{
      return diffHrs + ' hrs Ago'
    }

  }

}
