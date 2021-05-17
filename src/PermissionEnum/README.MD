# Permission Enum

## Question

Extend the Permission enum so that it has the following fields:

-   Read, which should have a value of 1
-   Write, which should have a value of 2
-   Execute, which should have a value of 4

Extend the `getPermissionList` function so that it accepts a combination of several Permission enums and returns an array of strings which are the names of the Permissions.

For example, executing:

`getPermissionList(Permission.Read | Permission.Write);`
should return `[ 'Read', 'Write' ]` in any order.

## Starting Code

```typescript
function getPermissionList(permission: Permission): string[] {
    return [];
}

enum Permission {}

//console.log(getPermissionList(Permission.Read | Permission.Write));
```

## [Answer](index.ts)
