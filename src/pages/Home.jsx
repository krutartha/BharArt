import { createSignal, createEffect, onCleanup, onMount } from 'solid-js'
import { A } from '@solidjs/router'
import '../App.css'

const scrapbookCards = [
  { width: '200px', height: '250px', rotation: -12, x: '-5%', y: '8%' },
  { width: '180px', height: '220px', rotation: 18, x: '75%', y: '5%' },
  { width: '220px', height: '200px', rotation: -8, x: '25%', y: '20%' },
  { width: '190px', height: '240px', rotation: 22, x: '85%', y: '25%' },
  { width: '210px', height: '180px', rotation: -15, x: '5%', y: '50%' },
  { width: '200px', height: '220px', rotation: 10, x: '65%', y: '55%' },
  { width: '185px', height: '230px', rotation: -18, x: '40%', y: '80%' },
  { width: '195px', height: '200px', rotation: 14, x: '90%', y: '85%' },
]

// Carousel cards (subset for carousel display)
const carouselCards = scrapbookCards.slice(0, 6)

const reasons = [
  {
    number: 1,
    title: 'Authentic Cultural Connection',
    description:
      'We bring genuine Indian art forms directly to your organization, creating meaningful connections between your team and rich cultural traditions.',
    testimonial: {
      quote:
        'BharArt transformed our workplace culture. The authentic art experiences created a sense of community and appreciation for Indian heritage that we never had before.',
      name: 'Priya Sharma',
      role: 'HR Director, TechCorp India',
      company: 'TechCorp India',
    },
  },
  {
    number: 2,
    title: 'Expert-Curated Experiences',
    description:
      'Our programs are designed by master artists and cultural experts, ensuring authentic and transformative experiences for your team.',
    testimonial: {
      quote:
        'The quality of instruction and the depth of cultural knowledge our team gained was exceptional. It was more than a workshop—it was a journey.',
      name: 'Rajesh Kumar',
      role: 'VP of Operations, Global Solutions',
      company: 'Global Solutions',
    },
  },
  {
    number: 3,
    title: 'Flexible Program Formats',
    description:
      'From one-time workshops to ongoing programs, we adapt to your schedule and organizational needs, making cultural enrichment accessible.',
    testimonial: {
      quote:
        'The flexibility to customize programs around our busy schedule made all the difference. Our team loved every session.',
      name: 'Anita Desai',
      role: 'Chief People Officer, InnovateLabs',
      company: 'InnovateLabs',
    },
  },
  {
    number: 4,
    title: 'Measurable Impact on Well-being',
    description:
      'Our programs are designed to reduce stress, enhance creativity, and improve team cohesion through the therapeutic power of art.',
    testimonial: {
      quote:
        'We saw a 40% increase in employee satisfaction scores after implementing BharArt programs. The impact on team well-being was remarkable.',
      name: 'Vikram Patel',
      role: 'CEO, WellnessFirst',
      company: 'WellnessFirst',
    },
  },
  {
    number: 5,
    title: 'Comprehensive Support',
    description:
      'From initial consultation to program delivery and follow-up, we provide end-to-end support to ensure your success.',
    testimonial: {
      quote:
        'The team at BharArt was with us every step of the way. Their support and attention to detail made the entire process seamless.',
      name: 'Meera Reddy',
      role: 'Director of Culture, Enterprise Group',
      company: 'Enterprise Group',
    },
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = createSignal(false)
  const [currentCarouselIndex, setCurrentCarouselIndex] = createSignal(0)
  const [isMobile, setIsMobile] = createSignal(false)

  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 960)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkScreenSize)
    handleScroll()
    checkScreenSize()

    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkScreenSize)
    })
  })

  // Auto-advance carousel on mobile
  createEffect(() => {
    if (isMobile()) {
      const carouselInterval = setInterval(() => {
        setCurrentCarouselIndex((prev) => (prev + 1) % carouselCards.length)
      }, 3000)

      onCleanup(() => {
        clearInterval(carouselInterval)
      })
    }
  })

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselCards.length)
  }

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselCards.length) % carouselCards.length)
  }

  const goToCarouselSlide = (index) => {
    setCurrentCarouselIndex(index)
  }

  return (
    <>
      <section class="hero" id="home">
        <div class="hero-left">
          <h1>
            Curated
            <br />
            Art Experiences
            <br />
            for your team
          </h1>
          <p class="lede">
            We help organizations enrich workplace culture through authentic engagement with Indian art forms that inspire well-being and connection.
          </p>
          <div class="hero-actions">
            <A href="/offerings" class="button primary">
              Browse our offerings
            </A>
          </div>
        </div>

        <div class="hero-right">
          {/* Scrapbook cards for desktop */}
          <div class="scrapbook-container">
            {scrapbookCards.map((card, index) => (
              <div
                class="scrapbook-card"
                style={{
                  width: card.width,
                  height: card.height,
                  left: card.x,
                  top: card.y,
                  transform: `rotate(${card.rotation}deg)`,
                  '--rotation': `${card.rotation}deg`,
                }}
              />
            ))}
          </div>

          {/* Carousel for mobile/tablet */}
          <div class="carousel-container">
            <div class="carousel-wrapper">
              <div
                class="carousel-track"
                style={{
                  transform: `translateX(-${currentCarouselIndex() * 100}%)`,
                }}
              >
                {carouselCards.map((card, index) => (
                  <div class="carousel-slide">
                    <div
                      class="carousel-card"
                      style={{
                        width: '280px',
                        height: '350px',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div class="carousel-controls">
              <button class="carousel-button carousel-button-prev" onClick={prevCarousel} aria-label="Previous">
                ‹
              </button>
              <div class="carousel-indicators">
                {carouselCards.map((_, index) => (
                  <button
                    class={`carousel-indicator ${currentCarouselIndex() === index ? 'active' : ''}`}
                    onClick={() => goToCarouselSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button class="carousel-button carousel-button-next" onClick={nextCarousel} aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="section why-bharart" id="about">
        <div class="section-heading">
          <h2>Why BharArt?</h2>
        </div>
      </section>

      {reasons.map((reason) => (
        <section class="section reason-section" id={`reason-${reason.number}`}>
          <div class="reason-container">
            <div class="reason-content">
              <h3 class="reason-title">{reason.title}</h3>
              <p class="reason-description">{reason.description}</p>
            </div>
            <div class="testimonial-card-elegant">
              <div class="testimonial-quote-mark">"</div>
              <p class="testimonial-quote">{reason.testimonial.quote}</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">
                  {reason.testimonial.name.charAt(0)}
                </div>
                <div class="testimonial-info">
                  <p class="testimonial-name">{reason.testimonial.name}</p>
                  <p class="testimonial-role">{reason.testimonial.role}</p>
                  <p class="testimonial-company">{reason.testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

