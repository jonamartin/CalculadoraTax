import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tax-calculator';
  
  public focusOnTax: boolean;
  public arrayForTax: Array<any> = [];
  public numberForTax: number;
  public arrayForPrice: Array<any> = [];
  public numberForPrice: number;
  public resultado: number;

  focusTax(boolean)
  {
    this.focusOnTax = boolean;
  }
  write(x)
  {
    if(this.focusOnTax)
    {
      this.arrayForTax.push(x);
      this.numberForTax = parseFloat(this.arrayForTax.join(''));
      this.calcular();
    }
    else
    {
      this.arrayForPrice.push(x);
      this.numberForPrice = parseFloat(this.arrayForPrice.join(''));
      this.calcular();
    }
  }
  del()
  {
    if(this.focusOnTax)
    {
      this.arrayForTax.pop();
      this.numberForTax = parseFloat(this.arrayForTax.join(''));
      if(this.numberForTax === NaN) {this.numberForTax = 0}
      this.calcular();
    }
    else
    {
      this.arrayForPrice.pop();
      this.numberForPrice = parseFloat(this.arrayForPrice.join(''));
      if(this.numberForTax === NaN) {this.numberForTax = 0}
      this.calcular();
    }

  }

  calcular()
  {
    this.resultado = (this.numberForPrice*(this.numberForTax+100))/100 
  }
}
