import { Component } from "@angular/core";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works = [
    {
      title: 'Scroll Project',
      description: `A scroll-based web application featuring smooth animations and responsive navigation.
                    The project dynamically toggles a sticky navbar based on scroll position, includes smooth
                    section navigation, a back-to-top button.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728159/moe9nlqbj8u3hktclvkc.webp",
      tools: ['html', 'CSS', 'JavaScript'],
      siteLink: 'https://fascinating-praline-ce1eb9.netlify.app/',
    },
    {
      title: 'Stripe',
      description: `A modern navigation interface built with vanilla JavaScript,inspired by sites like
                     Stripe. This project showcases dynamic submenus that reveal additional content on hover.
                     that reveal additional content on hover.`,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727718/laxvmy9z5ostperevjtl.webp",  /* "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728697/hiy2rlmzvzhkvejgz8w4.webp", */
      tools: ['html', 'CSS', 'JavaScript'],
      siteLink: 'https://fastidious-bonbon-cf5c45.netlify.app/',
    },
    {
      title: 'Trillo',
      description: `The Trillo project is a fictional all-in-one booking app, built to showcase
                  modern web development techniques. Users can browse and book hotels, flights, cars, and
                   tours within a sleek and responsive interface.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1731075375/hteufdzdssa5sqqobwpf.webp",
      tools: ['html', 'react', 'node.js'],
      siteLink: "https://flexbox-trillo.netlify.app/",
    },
    {
      title: 'Natours',
      description: `Natours is a sleek, interactive website crafted using pure CSS, designed for a fictional nature tour
                   company, showcasing the latest CSS techniques. This project combines modern animations
                    and styling to create an immersive user experience.
                 `,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728838/fp9ygparrzg5deqg5bcr.webp",
      tools: ['html', 'css'],
      siteLink: 'https://bright-pudding-cf3abe.netlify.app/',
    }
  ]
}
