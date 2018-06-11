import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edir',
  templateUrl: './shopping-edir.component.html',
  styleUrls: ['./shopping-edir.component.css']
})
export class ShoppingEdirComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInpuRef: ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.nameInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
