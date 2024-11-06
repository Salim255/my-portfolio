import { Component } from "@angular/core";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works = [
    {
      title: 'Project1',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728159/moe9nlqbj8u3hktclvkc.webp",
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project2',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727718/laxvmy9z5ostperevjtl.webp",  /* "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728697/hiy2rlmzvzhkvejgz8w4.webp", */
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project3',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728751/cdnhlioqahv5simngrl7.webp",
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project4',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728838/fp9ygparrzg5deqg5bcr.webp",
      tools: ['html', 'react', 'nodejs']
    }
  ]
}
