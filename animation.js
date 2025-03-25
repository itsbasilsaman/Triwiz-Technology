
document.addEventListener("DOMContentLoaded", function () {
  // Select all counter elements
  const counterElements = document.querySelectorAll(".counter-number");

  // Animation for the first counter (652+)
  gsap.from(counterElements[0], {
      scrollTrigger: {
          trigger: ".laboratory-counter-wrapper", // Trigger animation when this element is in view
          start: "top 80%", // Start animation when the top of the element is 80% in view
          end: "bottom 20%", // End animation when the bottom of the element is 20% in view
          toggleActions: "play none none none", // Play animation once
          onEnter: () => {
              // Animate the number from 0 to 652
              gsap.to(counterElements[0], {
                  innerText: 652,
                  duration: 2, // Animation duration in seconds
                  snap: { innerText: 1 }, // Snap to whole numbers
                  onUpdate: () => {
                      // Append "+" when the animation completes
                      if (Math.floor(counterElements[0].innerText) === 652) {
                          counterElements[0].innerText = "652+";
                      }
                  },
              });
          },
      },
  });

  // Animation for the second counter (124+)
  gsap.from(counterElements[1], {
      scrollTrigger: {
          trigger: ".laboratory-counter-wrapper", // Trigger animation when this element is in view
          start: "top 80%", // Start animation when the top of the element is 80% in view
          end: "bottom 20%", // End animation when the bottom of the element is 20% in view
          toggleActions: "play none none none", // Play animation once
          onEnter: () => {
              // Animate the number from 0 to 124
              gsap.to(counterElements[1], {
                  innerText: 124,
                  duration: 2, // Animation duration in seconds
                  snap: { innerText: 1 }, // Snap to whole numbers
                  onUpdate: () => {
                      // Append "+" when the animation completes
                      if (Math.floor(counterElements[1].innerText) === 124) {
                          counterElements[1].innerText = "124+";
                      }
                  },
              });
          },
      },
  });

  // Animation for the third counter (8Y)
  gsap.from(counterElements[2], {
      scrollTrigger: {
          trigger: ".laboratory-counter-wrapper", // Trigger animation when this element is in view
          start: "top 80%", // Start animation when the top of the element is 80% in view
          end: "bottom 20%", // End animation when the bottom of the element is 20% in view
          toggleActions: "play none none none", // Play animation once
          onEnter: () => {
              // Animate the number from 0 to 8
              gsap.to(counterElements[2], {
                  innerText: 8,
                  duration: 2, // Animation duration in seconds
                  snap: { innerText: 1 }, // Snap to whole numbers
                  onUpdate: () => {
                      // Append "Y" when the animation completes
                      if (Math.floor(counterElements[2].innerText) === 8) {
                          counterElements[2].innerText = "8Y";
                      }
                  },
              });
          },
      },
  });
});
