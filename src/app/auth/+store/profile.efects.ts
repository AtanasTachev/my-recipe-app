import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { UserService } from "src/app/user/user.service";

@Injectable()
export class ProfileEffect {
    constructor(private action$: Actions, private userService: UserService) {}

    
}