## Getting Started

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirements

## UI/UX

- The UI should look like the mockup in /mocks.
- Clicking the "Make Noise" button should cause the noise to be displayed briefly and fade away.

### Delete Button

- Add a "Delete" button to the right of the "Make Noise" button
- The delete button should only show when you hover on an animal
- The delete button should remove the animal from the list

### Add Button

- Add an "Add" button below the last animal
- The add button should create a random animal
 
### React.Context

- Move the animals into a React.Context, instead of passing as as prop to AnimalsView



## Project Docs 📖


### Project structure 👨‍🔧

- Use [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) to organize and maintain this project
- Use the Angular Commits Guide Line to lint the commit message, for more information, click on this [link](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

### Points of improvement 🛑

- The animation at animal name that's currently wrongly toggling the visibility, but this behavior can be easily fixed by creating a custom animation at the tailwind.config.js file
- The random animal creation feature would be better using a  pool of animals and their sounds to create the whole animal object randomly.
- There's a warning at the console about the title tag it's placed on the _document file, the solution it's on this [link](https://nextjs.org/docs/messages/no-document-title)
