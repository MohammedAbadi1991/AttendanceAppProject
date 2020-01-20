import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  id: number;
  currentSession: SessionModel;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService) {
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.initForm();
      });
     }

  ngOnInit() {
  }

  private initForm() {

    this.sessionService.getSessionById(this.id).subscribe(session =>{
      this.currentSession = session;
    });
    // let recipeName = '';
    // let recipeImagePath = '';
    // let recipeDescription = '';
    // let recipeIngredients = new FormArray([]);

    // if (this.editMode) {
    //   const recipe = this.recipeService.getRecipe(this.id);
    //   recipeName = recipe.name;
    //   recipeImagePath = recipe.imagePath;
    //   recipeDescription = recipe.description;
    //   if (recipe['ingredients']) {
    //     for (let ingredient of recipe.ingredients) {
    //       recipeIngredients.push(
    //         new FormGroup({
    //           name: new FormControl(ingredient.name, Validators.required),
    //           amount: new FormControl(ingredient.amount, [
    //             Validators.required,
    //             Validators.pattern(/^[1-9]+[0-9]*$/)
    //           ])
    //         })
    //       );
    //     }
    //   }
    // }

    // this.recipeForm = new FormGroup({
    //   name: new FormControl(recipeName, Validators.required),
    //   imagePath: new FormControl(recipeImagePath, Validators.required),
    //   description: new FormControl(recipeDescription, Validators.required),
    //   ingredients: recipeIngredients
    // });
  }
}
