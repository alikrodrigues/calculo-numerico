import {Routes} from '@angular/router';
import { ConversaoComponent } from './conversao/conversao.component';
import { BiseccaoComponent } from './biseccao/biseccao.component';
import { BiseccaoLocaComponent } from './biseccao-loca/biseccao-loca.component';
import { NewtonRaphsonComponent } from './newton-raphson/newton-raphson.component';

export const ROUTES: Routes = [
    {path: '', component: ConversaoComponent},
    {path: 'biseccao', component: BiseccaoComponent},
    {path: 'biseccao/loca', component: BiseccaoLocaComponent},
    {path: 'linear', component: BiseccaoLocaComponent},
    {path: 'newton', component: NewtonRaphsonComponent}
];
