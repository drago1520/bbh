# Make each unique page (Home, About, etc.) as singleton collection

Why single collection vs Globals
Pros: relationships - I can include data from other collections in my own collection
Cons: I have to remove "Add new page" button myself

Actually, forget about Globals as they only provide API fetching & access control benefits I don't care about at all.

Every section is it's own collection but is not shown in the main admin ui. Which means, each block get's exported as a collection with

```ts
admin: {
  hidden: true;
}
```

so it doesn't clutter the admin panel but it's still selectable trough relationships.
Each unique page will have a field with

```ts
{
  name: "sections",
  relationTo: [singletonColletion1, singletonColletion2, ...],
  hasMany: true,
  index: true,
  unique: true
}
```

[[1]](https://payloadcms.com/docs/fields/relationship)
