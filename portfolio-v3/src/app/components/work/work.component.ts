import { Component } from "@angular/core";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  works = [
    {
      title: 'Scroll',
      description: `is a scroll-based web application featuring animations, responsive
                   navigation. The project includes a dynamically toggling sticky navbar based on scroll
                   position, smooth section navigation.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728159/moe9nlqbj8u3hktclvkc.webp",
      tools: ['html', 'CSS', 'JavaScript'],
      siteLink: 'https://fascinating-praline-ce1eb9.netlify.app/',
    },
    {
      title: 'Stripe',
      description: `is a modern navigation interface built with vanilla JavaScript, inspired by
                   sites like Stripe. This project showcases dynamic submenus that reveal additional content
                    on hover.`,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730727718/laxvmy9z5ostperevjtl.webp",  /* "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728697/hiy2rlmzvzhkvejgz8w4.webp", */
      tools: ['html', 'CSS', 'JavaScript'],
      siteLink: 'https://fastidious-bonbon-cf5c45.netlify.app/',
    },
    {
      title: 'Trillo',
      description: `is a fictional all-in-one booking app built to showcase modern web development
                   techniques. It allows users to browse and book hotels, flights, cars, and tours within
                   a sleek, responsive interface.`,
      image: "https://res.cloudinary.com/dlaztxrfw/image/upload/v1731075375/hteufdzdssa5sqqobwpf.webp",
      tools: ['html', 'css'],
      siteLink: "https://flexbox-trillo.netlify.app/",
    },
    {
      title: 'Natours',
      description: `is a sleek, interactive website crafted using pure CSS, designed for a fictional nature tour
                   company, showcasing the latest CSS techniques. This project combines modern animations
                    and styling to create an immersive user experience.
                 `,
      image:  "https://res.cloudinary.com/dlaztxrfw/image/upload/v1730728838/fp9ygparrzg5deqg5bcr.webp",
      tools: ['html', 'css'],
      siteLink: 'https://bright-pudding-cf3abe.netlify.app/',
    }
  ]
}
