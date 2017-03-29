import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({

        selector: 'my-heroes',
        templateUrl: '../heroes.component.html',
        styleUrls: ['../heroes.component.css']
    }
)

export class HeroesComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];

    constructor(private router: Router,
                private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
