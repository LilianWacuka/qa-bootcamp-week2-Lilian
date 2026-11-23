# Week 2 - Day 6 TypeScript Examples

## Basic TypeScript example

The file [basics/tests.ts](basics/tests.ts) demonstrates a numeric enum:

- `Size.Small` has the value `1`.
- `Size.Medium` has the value `2`.
- `Size.Large` has the value `3`.

It assigns `Size.Small` to `mySize` and prints `1` to the terminal.

Run it with:

```bash
npx tsx src/basics/tests.ts
```

## User profile validator

The file [profile/validator.ts](profile/validator.ts) defines a `UserProfile` type and three sample profiles.

- `settings` is optional.
- `isnotified()` reads `settings.notifications`.
- The `?? false` fallback returns `false` when a profile has no notification setting.

The profile examples print `true`, `false`, and `false` when the file runs:

```bash
npx tsx src/profile/validator.ts
```
