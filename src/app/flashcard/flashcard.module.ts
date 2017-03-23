import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './flashcard.router';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(routes),
    ]
})
export class FlashcardModule {
}
