import '../App.css'

const values = [
  {
    title: 'Authenticity',
    description:
      'We work exclusively with master artists and cultural experts who have dedicated their lives to preserving and sharing traditional Indian art forms.',
  },
  {
    title: 'Accessibility',
    description:
      'We believe cultural enrichment should be available to everyone. Our programs are designed to be inclusive and adaptable to diverse organizational needs.',
  },
  {
    title: 'Impact',
    description:
      'Every program is crafted to create meaningful, lasting change in workplace culture, employee well-being, and team dynamics.',
  },
  {
    title: 'Excellence',
    description:
      'We maintain the highest standards in program delivery, ensuring authentic experiences that honor the rich traditions we represent.',
  },
]

const experienceStats = [
  {
    number: '35+',
    unit: 'years',
    description: 'Experience running multi-country business operations',
  },
  {
    number: '10+',
    unit: 'years',
    description: 'Event Management Experience',
  },
  {
    number: '25+',
    unit: 'years',
    description: 'Learning and performing Indian Arts',
  },
  {
    number: '10+',
    unit: 'countries',
    description: 'Served and catered to',
  },
]

export default function About() {
  return (
    <div class="page-content">
      <section class="page-hero">
        <h1>About BharArt</h1>
        <p class="page-subtitle">
          We bridge the gap between India's rich cultural heritage and modern organizational needs
        </p>
      </section>

      <section class="about-story">
        <div class="story-content">
          <h2>Our Story</h2>
          <p>
            BharArt was founded with a simple yet powerful vision: to bring the transformative power of Indian art and culture into the modern workplace. 
            We recognized that organizations were seeking meaningful ways to enhance employee well-being, build stronger teams, and create more inclusive cultures.
          </p>
          <p>
            Drawing from India's millennia-old traditions of classical dance, music, yoga, martial arts, and visual arts, we've created programs that 
            are both authentic and accessible. Our master artists and cultural experts work directly with organizations to design experiences that 
            resonate with diverse teams while honoring the depth and beauty of traditional practices.
          </p>
          <p>
            Today, BharArt has helped hundreds of organizations across India and globally to enrich their workplace culture, reduce stress, 
            improve team cohesion, and create spaces where employees can connect with themselves and each other through the universal language of art.
          </p>
        </div>
      </section>

      <section class="values-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          {values.map((value) => (
            <article class="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section class="experience-section">
        <h2>Our Team</h2>
        <div class="experience-grid">
          {experienceStats.map((stat) => (
            <div class="experience-stat">
              <div class="stat-number">{stat.number}</div>
              <div class="stat-unit">{stat.unit}</div>
              <div class="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section class="cta-section">
        <h2>Join us in bringing art to workplaces</h2>
        <p>Whether you're looking to enhance team culture or explore our programs, we'd love to connect</p>
        <div class="cta-actions">
          <button class="button primary">Get in Touch</button>
          <button class="button ghost">Learn More</button>
        </div>
      </section>
    </div>
  )
}

