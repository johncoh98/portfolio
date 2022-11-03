import React from 'react'


const About = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 gap-8'>
                <div className='xs:text-left pb-8 pl-4'>
                    <p className='text-4xl font-serif text-gray-300 border-b-4 border-pink-600 inline'>About</p>
                </div>
                
                <div className='xs:text-left text-4xl font-bold reveal '>
                        <p>I'm John Cohen, 24 years old and I am a Full-Stack Developer.  </p>
                </div>
                <br />
                <div className='max-w-[1000px] w-full gap-8 reveal'>
                    <div className='xs:text-left text-2xl font-bold '>
                        <p>Languages: Hebrew French English Spanish</p>
                    </div>
                </div>
                <br />
                <div className='text-2xl font-bold reveal'>
                    <p>I'm interested by computers since i'm a kid and always dreamed about working as a developer. I'm also interested by video games and mobile apps.  My native language is french but also have hebrew, english and spanish as mastered languages. I love to learn new technologies </p>
                </div>
                <br />
                <div className='xs:text-left text-2xl font-bold reveal mb-8 '>
                    <p>Qualities :  Serious, Hardworker, Adaptive, Creative, Learn fast</p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default About