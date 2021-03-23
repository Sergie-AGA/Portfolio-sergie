// CURRENT ACTIVITIES

//https://jsfiddle.net/kimmobrunfeldt/72tkyn40/
let currentActivities = [
  {
    title: "Developing a personal website for a client",
    conclusion: 60,
    type: "client",
  },
  {
    title: "Developing an interactive React JS tool for a client",
    conclusion: 80,
    type: "client",
  },
  {
    title: "Developing a business website for a client",
    conclusion: 5,
    type: "client",
  },
  {
    title:
      "Furthering knowledge on Node JS and MongoDB to create Full Stack applications",
    conclusion: 70,
    type: "personal",
  },
  {
    title: "Migrating the API Sea project to React JS and adding new API's",
    conclusion: 5,
    type: "business",
  },
  {
    title: "Researching new ways to improve UX",
    conclusion: "??",
    type: "personal",
  },
];

let activitiesArea = document.getElementById("activitiesArea");
currentActivities.forEach((activity) => {
  let activityColorR;
  let activityColorG;
  let activityColorB;
  switch (activity.type) {
    case "client":
      activityColorR = 207;
      activityColorG = 35;
      activityColorB = 5;
      break;
    case "business":
      activityColorR = 5;
      activityColorG = 173;
      activityColorB = 61;
      break;
    case "personal":
      activityColorR = 4;
      activityColorG = 135;
      activityColorB = 196;
      break;
    default:
      break;
  }

  let activityChart = document.createElement("div");
  activityChart.classList.add("activity__chart-area");
  let activityPercentage = document.createElement("div");
  activityPercentage.innerHTML = `${activity.conclusion}%`;
  activityPercentage.classList.add("activity__percentage");
  activityPercentage.style.color = `rgb(${activityColorR},${activityColorG},${activityColorB})`;

  let activityProgress = document.createElement("div");
  let activityProgressContainer = document.createElement("div");
  activityProgressContainer.classList.add("activity__progress__container");
  activityProgress.classList.add("activity__progress");
  activityProgress.style.backgroundColor = `rgb(${activityColorR},${activityColorG},${activityColorB})`;
  activityProgress.style.width = `${activity.conclusion}%`;

  activityProgressContainer.appendChild(activityProgress);
  activityChart.appendChild(activityPercentage);
  activityChart.appendChild(activityProgressContainer);

  let activityTitle = document.createElement("h3");
  activityTitle.classList.add("activity__title");
  activityTitle.innerText = activity.title;

  let currentActivity = document.createElement("div");
  currentActivity.classList.add("activity", `activity--${activity.type}`);
  currentActivity.appendChild(activityTitle);
  currentActivity.appendChild(activityChart);

  numbersButton.addEventListener("click", () => {
    activityProgress.style.width = `0`;
    activityPercentage.innerHTML = `0%`;
    setTimeout(() => {
      activityProgress.style.width = `${activity.conclusion}%`;
      let index = 0;

      function countUp() {
        index++;
        activityPercentage.innerHTML = `${index}%`;
        setTimeout(() => {
          if (index < activity.conclusion) {
            countUp();
          }
        }, 2000 / activity.conclusion);
      }
      if (typeof activity.conclusion == "number") {
        countUp();
      } else {
        let randomIndex = 0;

        function randomBar() {
          activityProgress.style.width = `${Math.floor(Math.random() * 100)}%`;
          console.log("going");
          if (randomIndex > 0) {
            setTimeout(() => {
              randomBar();
            }, 1000);
          }
        }
        activityPercentage.innerHTML = `??%`;
        currentActivity.addEventListener("mouseenter", () => {
          randomIndex++;
          console.log("start");
          randomBar();
        });
        currentActivity.addEventListener("mouseleave", () => {
          console.log("stop");
          randomIndex = 0;
        });
      }
    }, 2000);
  });
  activitiesArea.appendChild(currentActivity);
});

// TESTIMONIALS
let testimonialsData = [
  {
    id: 0,
    name: "Giuliana Murakami",
    img: "assets/testimonials/Giuliana.jpg",
    job: "Lawyer and writer",
    linkedin: "https://linkedin.com/in/giuliana-murakami-14a52bb8",
    experience:
      "Worked together as managers of the research activities of the student organization LAJUPA, where we coordinated over 80 law students",
    testimonial:
      '"I have worked with Sergie in the management of research groups in LAJUPA. I soon noticed he was a born leader, not only by the brilliant solutions he presented as well as the kind way he treated others. He is an exemplary person, someone whom I would recommend to anyone."',
  },
  {
    id: 1,
    name: "Bernardo Pita",
    img: "assets/testimonials/Giuliana.jpg",
    job: "Performance Marketing Manager and designer",
    linkedin: "",
    experience:
      "Based on his designs, I developed his website and we created the business website of a client",
    testimonial: "lorem Ipsum",
  },
];

let testimonialsArea = document.getElementById("testimonialsArea");

testimonialsData.reverse();
testimonialsData.forEach((testimonial) => {
  let testimonialImg = document.createElement("img");
  testimonialImg.setAttribute("src", testimonial.img);
  testimonialImg.classList.add("testimonial__image");

  let testimonialLeft = document.createElement("div");
  testimonialLeft.classList.add("testimonial__left");
  testimonialLeft.appendChild(testimonialImg);

  let testimonialLinkedin = document.createElement("a");
  testimonialLinkedin.setAttribute("href", testimonial.linkedin);
  testimonialLinkedin.setAttribute("target", "_blank");
  testimonialLinkedin.classList.add("testimonial__linkedin");
  testimonialLinkedin.innerHTML =
    '<i class="fab fa-linkedin testimonial__linkedin__icon" />';

  let testimonialName = document.createElement("h4");
  testimonialName.innerHTML = testimonial.name;
  testimonialName.classList.add("testimonial__name");

  let testimonialJob = document.createElement("p");
  testimonialJob.classList.add("testimonial__job");
  testimonialJob.innerHTML = testimonial.job;

  let testimonialHeader = document.createElement("div");
  testimonialHeader.classList.add("testimonial__header");
  testimonialHeader.appendChild(testimonialName);
  testimonialHeader.appendChild(testimonialJob);

  let testimonialHeaderContainer = document.createElement("div");
  testimonialHeaderContainer.classList.add("testimonial__header__container");
  testimonialHeaderContainer.appendChild(testimonialHeader);
  testimonialHeaderContainer.appendChild(testimonialLinkedin);

  let testimonialExperience = document.createElement("p");
  testimonialExperience.classList.add("testimonial__experience");
  testimonialExperience.innerHTML = `Relation: ${testimonial.experience}`;

  let testimonialRight = document.createElement("div");
  testimonialRight.classList.add("testimonial__right");
  testimonialRight.appendChild(testimonialHeaderContainer);
  testimonialRight.appendChild(testimonialExperience);

  let testimonialUpper = document.createElement("div");
  testimonialUpper.classList.add("testimonial__upper");
  testimonialUpper.appendChild(testimonialLeft);
  testimonialUpper.appendChild(testimonialRight);

  let testimonialText = document.createElement("p");
  testimonialText.classList.add("testimonial__text");
  testimonialText.innerHTML = testimonial.testimonial;

  let testimonialLower = document.createElement("div");
  testimonialLower.classList.add("testimonial__lower");
  testimonialLower.appendChild(testimonialText);

  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add("testimonial");
  testimonialCard.appendChild(testimonialUpper);
  testimonialCard.appendChild(testimonialLower);

  testimonialsArea.appendChild(testimonialCard);
});