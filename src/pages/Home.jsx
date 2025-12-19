import { createSignal, onCleanup, onMount } from 'solid-js'
import { A } from '@solidjs/router'
import '../App.css'
import '../styles/Home.css'

const scrapbookCards = [
  { width: '200px', height: '250px', rotation: -12, x: '-15%', y: '8%', image: '/1.jpg' },
  { width: '180px', height: '220px', rotation: 18, x: '75%', y: '5%', image: '/2.jpg' },
  { width: '220px', height: '200px', rotation: -8, x: '25%', y: '15%', image: '/3.jpg' },
  { width: '190px', height: '240px', rotation: 22, x: '95%', y: '25%', image: '/4.jpg' },
  { width: '210px', height: '180px', rotation: -15, x: '5%', y: '60%', image: '/5.jpg' },
  { width: '200px', height: '220px', rotation: 10, x: '65%', y: '55%', image: '/6.jpg' },
  { width: '185px', height: '230px', rotation: -18, x: '40%', y: '80%', image: '/7.jpg' },
  { width: '195px', height: '200px', rotation: 14, x: '100%', y: '85%', image: '/8.jpg' },
]

const reasons = [
  {
    icon: '/authentic.png',
    title: 'Authentic Cultural Connection',
    description:
      'Bring genuine Indian art forms directly to your organization, creating meaningful connections with rich cultural traditions.',
  },
  {
    icon: '/expert.png',
    title: 'Expert-Curated Experiences',
    description:
      'Programs designed by master artists and cultural experts, ensuring authentic and transformative experiences.',
  },
  {
    icon: '/flexible.png',
    title: 'Flexible Program Formats',
    description:
      'From one-time workshops to ongoing programs, we adapt to your schedule and organizational needs.',
  },
  {
    icon: '/measure.png',
    title: 'Measurable Impact on Well-being',
    description:
      'Reduce stress, enhance creativity, and improve team cohesion through the therapeutic power of art.',
  },
]

const carouselItems = [
  {
    id: 'music',
    title: 'Music',
    rightImage: '/1.jpg',
    description:
      'Immerse your team in the rich traditions of Indian classical and folk music. From soulful ragas to vibrant regional melodies, our music programs create harmony and connection through the universal language of sound.',
  },
  {
    id: 'dance',
    title: 'Dance',
    rightImage: '/1.jpg',
    description:
      'Experience the grace and power of Indian dance forms—from classical Bharatanatyam and Kathak to energetic folk dances. Our programs combine movement, rhythm, and cultural storytelling to energize and inspire.',
  },
  {
    id: 'martial-arts',
    title: 'Martial Arts',
    rightImage: '/1.jpg',
    description:
      'Discover the discipline and philosophy of traditional Indian martial arts like Kalaripayattu. Build strength, focus, and team coordination while learning ancient techniques that blend physical training with mental discipline.',
  },
  {
    id: 'yoga',
    title: 'Yoga',
    rightImage: '/1.jpg',
    description:
      'Connect mind, body, and spirit through authentic yoga practices rooted in Indian tradition. Our wellness programs offer stress relief, improved flexibility, and enhanced mindfulness for a healthier, more balanced workplace.',
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = createSignal(false)
  const [activeCarouselIndex, setActiveCarouselIndex] = createSignal(0)

  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  })

  const goToSlide = (index) => {
    setActiveCarouselIndex(index)
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
              >
                <img src={card.image} alt={`Artwork ${index + 1}`} class="scrapbook-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="section why-bharart" id="about">
        <div class="why-bharart-container">
          <div class="why-bharart-left">
            <h2 class="why-bharart-heading">
              <span class="heading-highlight">Why</span> Bhar-Art?
            </h2>
            <p class="why-bharart-description">
              We enable a range of experiences that allow you to enrich your workplace culture through authentic engagement with Indian art forms. Providing unique alternatives to traditional team-building methods, we provide you with everything you need to enhance your operations today and equip you for the cultural enrichment of tomorrow. Our comprehensive programs support multiple applications and are easy to implement, scalable, and integrate seamlessly into your existing organizational environment.
            </p>
            <A href="/offerings" class="button primary why-bharart-cta">
              Explore Offerings
            </A>
          </div>
          <div class="why-bharart-right">
            <div class="reasons-grid">
              {reasons.map((reason) => (
                <div class="reason-item">
                  <div class="reason-icon">
                    <img src={reason.icon} alt={reason.title} class="reason-icon-image" />
                  </div>
                  <div class="reason-content">
                    <h3 class="reason-title">{reason.title}</h3>
                    <p class="reason-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="section offering-overview-section">
        <div class="offering-overview-container">
          <h2 class="offering-overview-title">
            Experience the Spirit of <span class="title-highlight">Bhar</span>at Through <span class="title-highlight">Art</span>
          </h2>
          <p class="offering-overview-subtext">
            We offer a curated, customizable bouquet of Indian art experiences designed to engage, inspire, and uplift your organization. Our diverse portfolio spans classical and contemporary art forms—from dance and music to folk traditions, crafts, and wellness workshops—each tailored to your goals. From concept to execution, we bring authentic cultural engagement to life. And beyond
          </p>

          <div class="offering-carousel">
            <div class="carousel-buttons">
              {carouselItems.map((item, index) => (
                <button
                  class={`carousel-button ${activeCarouselIndex() === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${item.title} slide`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div class="carousel-wrapper">
              <div
                class="carousel-track"
                style={{
                  transform: `translateX(-${activeCarouselIndex() * 100}%)`,
                }}
              >
                {carouselItems.map((item) => (
                  <div class="carousel-slide">
                    <div class="carousel-content">
                      <div class="carousel-text">
                        <h3 class="carousel-title">{item.title}</h3>
                        <p class="carousel-description">{item.description}</p>
                      </div>
                      <div class="carousel-image-container">
                        <img src="/1.jpg" alt={item.title} class="carousel-image" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section white-section">
        <div class="white-section-container">
          <div class="white-section-left">
            <img src="/1.jpg" alt="BharArt mission" class="white-section-image" />
          </div>
          <div class="white-section-right">
            <h2 class="white-section-heading">
              Our mission: to help <span class="heading-emphasis">you</span> find better answers, sooner
            </h2>
            <p class="white-section-description">
              BharArt was founded on the belief that it is time for better answers to cultural engagement and workplace well-being questions. We are committed to providing high-quality solutions with authentic Indian art forms to help you solve even the most complex organizational challenges. We are devoted to finding better ways to equip you to discover more meaningful connections than ever before.
            </p>
            <A href="/about" class="button primary white-section-cta">
              Learn About Bhar-Art
            </A>
          </div>
        </div>
      </section>

      <section class="section cta-panels-section">
        <div class="cta-panels-container">
          <div class="cta-panel cta-panel-left">
            <h2 class="cta-panel-heading">Ask a question</h2>
            <A href="/contact" class="button cta-panel-button">
              Contact Us
            </A>
          </div>
          <div class="cta-panel cta-panel-right">
            <h2 class="cta-panel-heading">Our Partners</h2>
            <A href="/partners" class="button cta-panel-button">
              Learn More
            </A>
          </div>
        </div>
      </section>
    </>
  )
}

