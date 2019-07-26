export class Parent{
    parentFunctionPropertyCallable = function():string{
        return 'called parent function property callable';
    }
    parentNotFuncitonPropertyCallable():string {
        return 'called parent function property callable';
    }
    parentNotFuncitonPropertyNotCallable:string = 'called parent function property not callable';
}

export class Child extends Parent {
    childFunctionPropertyCallable = function():string{
        return 'called child function property callable';
    }
    childNotFuncitonPropertyCallable():string {
        return 'called child function property callable';
    }
    childNotFuncitonPropertyNotCallable:string = 'called child function property not callable';

}
