import { Injectable } from "@angular/core";
import { Actions, createEffect} from "@ngrx/effects";
import { filter, mergeMap, map, catchError, of } from "rxjs";
import { UserService } from "src/app/user/user.service";
import { profilePageInitalized, profileLoaded, profileLoadError } from "./actions";

@Injectable()
export class ProfileEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    onProfilePageLoaded$ = createEffect(() =>
    this.actions$.pipe(
        filter(a => a.type === profilePageInitalized().type),
        mergeMap(() => this.userService.getProfile$()),
        map(currentProfile => profileLoaded({ profile: currentProfile })),
        catchError(() => of(profileLoadError()))
    )
)

}