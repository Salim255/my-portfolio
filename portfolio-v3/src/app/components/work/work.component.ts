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
      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921001/z23yczoy7jul2kp3ek4g.png",
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project2',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921241/i3b5fykj1dh2cn7fgmog.png",
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project3',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921430/tqrutpfn1mrsmknjxir5.png",
      tools: ['html', 'react', 'nodejs']
    },
    {
      title: 'Project4',
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
        Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921508/tgahjoapmrb6gm1vovjs.png",
      tools: ['html', 'react', 'nodejs']
    }
  ]
}
