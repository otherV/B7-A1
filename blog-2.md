# Work Smarter, Not Harder: Master Your Interfaces with Pick and Omit

## Introduction
One of the most important rules in programming is **DRY (Don't Repeat Yourself)**. In TypeScript, we often break this rule by manually creating multiple interfaces that look almost identical. This makes your code hard to maintain and prone to bugs.

## The Issue: Code Duplication
Imagine you have a master `User` interface. If you need a smaller version for a profile page, you shouldn't copy-paste those fields into a new interface. If you update the "email" field in the master list, you'll probably forget to update it in the copy.

## Slicing with Pick and Omit
TypeScript gives us "Utility Types" to create specialized slices of an interface automatically[cite: 1].

- **Pick**: You choose exactly which fields you want from a master interface[cite: 1].
- **Omit**: You choose which fields you want to remove[cite: 1].

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  secretToken: string;
}

// Just get the name and email
type UserPreview = Pick<User, "email" "name" |>;

// Get everything EXCEPT the secret token
type PublicUser = Omit<User, "secretToken">;