import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correcto : boolean = false;
  public formContact!: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(12)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]],
      phone: ['',[
        Validators.required,
        Validators.pattern(/[0-9]{9}$/)
      ]],
      asunto: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(300)
      ]],
      
    });
  }

  send(): any{
    console.log(this.formContact.value);

    //Después de 3 Segundos, Reinicia el Form
    setTimeout(() => {
      this.correcto = false;
      this.formContact.reset();
    }, 3000);

    this.correcto = true;
  }
  comprobarCampo(input:string){
    if(this.formContact.get(input)?.valid){
      return true
    }
    return false
  }
}
