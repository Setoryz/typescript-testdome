# Permission Enum

### [◀ Home](../../README.MD)

## Question

Consider the following two base classes, Positionable and Rotatable, and MovingObject derived class:

```TypeScript
class Positionable {
    locationX: number;
    locationY: number;
}

class Rotatable {
    orientation: number;
    rotate(orientation: number) {
        this.orientation += orientation;
    }
    align(rotatable: Rotatable) {
        this.orientation = rotatable.orientation;
    }
}

class MovingObject implements Positionable, Rotatable {
    locationX: number = 0;
    locationY: number = 0;
    orientation: number = 0;
    rotate: (orientation: number) => void;
}

applyMixins(MovingObject, [Positionable, Rotatable]);
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

let mover = new MovingObject(); 
mover.rotate(30);
```

## Answer

Select the statements that are correct.

   Select all acceptable answers.

- ✅ The applyMixins function applies the implementations of Positionable and Rotatable to MovingObject.
- ✅ The TypeScript compiler will highlight that the property 'align' is missing for the type MovingObject.
- 🔳 As the MovingObject implements Rotatable, the call to mover.rotate(30) will do nothing.
- 🔳 The Positionable class could be changed to an interface without causing any compiler errors.
- ✅ The properties of MovingObject are required as stand-ins to satisfy the TypeScript compiler.
