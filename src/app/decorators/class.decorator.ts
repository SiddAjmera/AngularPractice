import { environment } from "../../environments/environment";

export function Sticker(configuration) {
    return function(target) {
        target.prototype.stickers = configuration.stickers;
    }
}

export function HookLogger(configuration?) {
    return function(target) {
        if( !environment.production ) {

            const componentName = target.name;
            const defaultHooks: string[] = [
                'ngOnChanges',
                'ngOnInit',
                'ngDoCheck',
                'ngAfterContentInit',
                'ngAfterContentChecked',
                'ngAfterViewInit',
                'ngAfterViewChecked',
                'ngOnDestroy',
            ];

            let hooksToBeLogged = (configuration && configuration.hooks) || defaultHooks;

            hooksToBeLogged.forEach(hookToBeLogged => {
                const original = target.prototype[hookToBeLogged];
                target.prototype[hookToBeLogged] = function(...args) {
                    console.log(`Component Name: ${componentName} | Hook Name: ${hookToBeLogged} | `, ...args);
                    original && original.apply(this, args);
                }
            });
        }
    }
}

export function Readonly(value) {
    return function(target, key) {
        Object.defineProperty(target, key, {
            set: () => target.key = value,
            get: () => value,
            configurable: false
        });
    }
}