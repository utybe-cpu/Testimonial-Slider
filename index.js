const testimonials = [
    { text: "I couldn't be happier with the results!", author: "John Doe" },
    { text: "Amazing service! Highly recommended.", author: "Jane Smith" },
    { text: "The best decision I've ever made!", author: "Bob Johnson" },
  ];
  
  let currentTestimonial = 0;
  
  const testimonialElem = document.getElementById("testimonial");
  const authorElem = document.getElementById("author");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function showTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialElem.innerHTML = `"${testimonial.text}"`;
    authorElem.innerHTML = `- ${testimonial.author}`;
  }
  
  function showPrev() {
    currentTestimonial--;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    showTestimonial();
  }
  
  function showNext() {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial();
  }
  
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);
  
  showTestimonial();
  