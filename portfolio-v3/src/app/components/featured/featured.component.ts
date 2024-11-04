import { Component } from "@angular/core";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent {
   featuredData = [
    {
      title:'Project1',
      description: `It was a amazing expercince, I work with difence tecnonlie such as soketjs,
               web sokcets angualr ionic, nodejs expres for the backe end as
              alsso uyou van see for the front end wioth angualr and ionic
              A minimal` ,
      subDescription: `dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm
      It was a amazing expercince,  Atom Package Manager, and npm`,

      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727630/aubhlzwcngmbg70wyenr.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    },
    {
      title:'Project2',
      description: `It was a amazing expercince, I work with difence tecnonlie such as soketjs,
               web sokcets angualr ionic, nodejs expres for the backe end as
              alsso uyou van see for the front end wioth angualr and ionic
              A minimal` ,
      subDescription: `dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm
      It was a amazing expercince,  Atom Package Manager, and npm`,

      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727718/laxvmy9z5ostperevjtl.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    },
    {
      title:'Project3',
      description: `It was a amazing expercince, I work with difence tecnonlie such as soketjs,
               web sokcets angualr ionic, nodejs expres for the backe end as
              alsso uyou van see for the front end wioth angualr and ionic
              A minimal` ,
      subDescription: `dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm
      It was a amazing expercince,  Atom Package Manager, and npm`,

      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727782/fezrhx9zdih1wcao9lp1.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    }
   ]
  constructor(){}

}
