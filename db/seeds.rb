Project.destroy_all

Project.create(
    name: "Communuity Cat Catalog",
    tag_line: "Catalog and track stray cats in your community.",
    description: "An app that allows caretakers to map and maintain their cat colonies. Caretakers can track the date their cats were TNR (trap-neuter-returned) through Cat Stats as well as add new cats to the map. Users can see other cats in the area and leave a Cat Comment.",
    year_completed: "2022",
    image: "https://live.staticflickr.com/65535/52035026975_fe67857a07_c.jpg",
    demo_link: "https://www.loom.com/embed/512ffc243fc14ec988062fd7ce762eb3",
    github_link: "https://github.com/LindseyP6/community_cats",
    technologies: "React, Ruby, Mapbox, React-Map-GL, Ruby Geocoder, B-Crypt"
)

# <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/512ffc243fc14ec988062fd7ce762eb3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Project.create(
    name: "AnotherTreasure",
    tag_line: "Connecting charitable organizations with the community for donations.",
    description: "Have you ever wondered where you can easily donate your used goods? Use this app to find community centers, shelters, organizations and churches in your area that are accepting donations. Leave a 'virtual donation' via a form before dropping your items off.",
    year_completed: "2022",
    image: "https://live.staticflickr.com/65535/52034758569_9288c27592_c.jpg",
    demo_link: "",
    github_link: "https://github.com/emilyhigginson/another_treasure",
    technologies: "React, Rails, Mapbox, B-Crypt"
)

Project.create(
    name: "TarotReader",
    tag_line: "Step right in for your virtual tarot reading and experience.",
    description: "Start your Tarot experience by asking a question and you will be dealt a 5 card spread. Just like a real Tarot reading, your cards will be dealt up or reveresed. Check out the Tarot Library to see details on each card and even add your own card to the deck!",
    year_completed: "2022",
    image: "https://live.staticflickr.com/65535/52034551273_5dfa983bcc_c.jpg",
    demo_link: "https://www.loom.com/embed/c5b973a8f6834f09a439e786727169e7",
    github_link: "https://github.com/LindseyP6/tarotProject",
    technologies: "React, JSON API"
)

TechStack.create(
    tech: "React",
    background_color: "#61DAFB",
    image: "https://storage.cloud.google.com/all-cats/Tech/react.svg",
    website: "https://reactjs.org/"
)
TechStack.create(
    tech: "Ruby on Rails",
    background_color: "#CC0000",
    image: "https://storage.cloud.google.com/all-cats/Tech/rubyonrails.svg",
    website: "https://rubyonrails.org/"
)
TechStack.create(
    tech: "HTML5",
    background_color: "#E34F26",
    image: "https://storage.cloud.google.com/all-cats/Tech/html5.svg",
    website: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
)
TechStack.create(
    tech: "JavaScript",
    background_color: "#F7DF1E",
    image: "https://storage.cloud.google.com/all-cats/Tech/javascript.svg",
    website: "https://www.javascript.com/"
)
TechStack.create(
    tech: "Ruby",
    background_color: "#CC342D",
    image: "https://storage.cloud.google.com/all-cats/Tech/ruby.svg",
    website: "https://www.ruby-lang.org/en/"
)
TechStack.create(
    tech: "CSS",
    background_color: "#1572B6",
    image: "https://storage.cloud.google.com/all-cats/Tech/css3.svg",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS"
)
TechStack.create(
    tech: "Postman",
    background_color: "#FF6C37",
    image: "https://storage.cloud.google.com/all-cats/Tech/postman.svg",
    website: "https://www.postman.com/"
)
TechStack.create(
    tech: "PostgresSQL",
    background_color: "#4169E1",
    image: "https://storage.cloud.google.com/all-cats/Tech/postgresql.svg",
    website: "https://www.postgresql.org/"
)
TechStack.create(
    tech: "Github",
    background_color: "#181717",
    image: "https://storage.cloud.google.com/all-cats/Tech/github.svg",
    website: "https://github.com/"
)
TechStack.create(
    tech: "Mapbox",
    background_color: "white",
    image: "https://storage.cloud.google.com/all-cats/Tech/mapbox.svg",
    website: "https://mapbox.com/"
)