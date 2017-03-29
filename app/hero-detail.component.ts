import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({

    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.html',
    styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {

        this.route.params
            .switchMap(params => this.heroService.getHero(Number(params['id'])))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
