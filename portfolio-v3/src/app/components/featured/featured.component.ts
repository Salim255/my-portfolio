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

      image: 'http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921152/ogwxasnbvcfskr0ehijr.png',

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

      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921304/j3eadk04rsa3hyntziuv.png",

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

      image: "http://res.cloudinary.com/dlaztxrfw/image/upload/v1711921365/px2mrv6xboiiz7auqsmn.png",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    }
   ]
  constructor(){}

}
