import { Component } from "@angular/core";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent {
   featuredData = [
    {
      title:'IntiMacy',
      description: `its love application is designed to connect people in
                    a way similar to Tinder, offering a seamless and interactive user experience.
                    It combines a Node.js backend with Angular and Ionic for a responsive, mobile-friendly frontend. ` ,
      subDescription: ` Utilizing Socket.io for real-time updates, the application enables instant messaging and live interactions,
                      enhancing user engagement and connectivity. The tech stack brings together the efficiency of JavaScript
                      with Angular's dynamic UI capabilities, resulting in a smooth, reliable matchmaking platform.`,

      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730763745/f6ra2qnzpjkhk6jjitcb.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    },
    {
      title:'Photography',
      description: `its a static web application was designed to present a photographer’s
                    portfolio in a visually engaging layout. Built using React.js, HTML, CSS.
                    The project required an eye for arrangement and design to showcase
                    the photographer’s work.` ,
      subDescription: `I worked extensively with layout structures to ensure that the photographs
                      were displayed attractively, creating a seamless viewing experience that emphasized
                       the photographer’s creative vision. This project enhanced my skills in web design,
                        particularly in visual arrangement and responsive image handling.`,

      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727630/aubhlzwcngmbg70wyenr.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    },
    {
      title:'Developer Connecter',
      description: `its a full-stack social network application, as part
                    of a tutorial to enhance my proficiency in React and the MERN stack
                    the project involved Node.js, Express, React and Redux.` ,
      subDescription: `The app features user profiles, experience and education tracking, GitHub integration,
                      and an interactive post and comment section. It allowed me to deepen my understanding of building a
                      structured application using the MERN stack.`,

      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727782/fezrhx9zdih1wcao9lp1.webp",

      github: '',
      web:'',
      tools: ['html', 'css', 'JavaScript']
    }
   ]

  constructor(){}
}
