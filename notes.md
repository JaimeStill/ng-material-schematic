# Notes

## RouterLinkActive

```html
<nav mat-tab-nav-bar
     [tabPanel]="tabs">
    <a *ngFor="let link of links"
       mat-tab-link
       routerLinkActive
       #rla="routerLinkActive"
       [routerLink]="link.url"
       [active]="rla.isActive">
        {{link.label}}
    </a>
</nav>
<mat-tab-nav-panel #tabs class="overflow">
    <router-outlet></router-outlet>
</mat-tab-nav-panel>
```

```js
export interface TabLink {
    url: string;
    label: string;
}

links: TabLink[] = [
    { url: 'material', label: 'Material' },
    { url: 'cdk', label: 'CDK' },
    { url: 'flex-layout', label: 'Flex Layout' },
    { url: 'forms', label: 'Reactive Forms' }
]
```