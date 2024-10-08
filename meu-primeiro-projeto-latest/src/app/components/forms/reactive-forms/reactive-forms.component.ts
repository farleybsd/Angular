import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';


function textValidator() : ValidatorFn{
  return (control : AbstractControl) => {
    
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);
    
    if(hasUpperCase && hasNumber){
      return null;
    }

    return {textValidator:true}
  }
}
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: `./reactive-forms.component.html`,
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder);

//constructor(private _fb: FormBuilder){}

 // public profileForm = new FormGroup({
  public profileForm = this.#fb.group({
    //name: ['',[[Validators.minLength(5),Validators.maxLength(7)]]],//new FormControl(''),
    name: ['',[Validators.required,textValidator()]],//new FormControl(''),
    myStacks: this.#fb.group({                            //new FormGroup({
      front: ['Angular'],//new FormControl('Angular'),
      back: ['NodeJs'],//new FormControl('NodeJs'),
    }),
    myFavoriteFoods: this.#fb.array([['X-Tudo']]) // new FormArray([ new FormControl('X-Tudo')
      // new FormGroup({
      //   front: new FormControl('Angular'),
      //   back: new FormControl('NodeJs'),
      // }),
      // new FormGroup({
      //   front: new FormControl('Angular'),
      //   back: new FormControl('NodeJs'),
      // }),
   // ])
  });

  

  public updateName(){
    this.profileForm.patchValue({
      name: 'Farley Rufino',
      myStacks:{
        front:'Blazor',
        back:'.Net'
      }
    })
  }

  public addmyFavoriteFoods(newFood:string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);
    myFavoriteFoods.push(addNewFood);
  }

  public submit(){
    console.log(this.profileForm.valid)
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
    }
  }
 }
