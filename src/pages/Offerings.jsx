import '../App.css'
import '../styles/Offerings.css'

const offerings = [
  {
    title: 'Classical Dance Workshops',
    description:
      'Experience the grace and discipline of Indian classical dance forms including Bharatanatyam, Kathak, Odissi, and Kuchipudi. Our master dancers guide your team through movements that enhance coordination, mindfulness, and cultural appreciation.',
    duration: '2-4 hours',
    format: 'In-person or Virtual',
    benefits: ['Stress Reduction', 'Team Building', 'Cultural Awareness', 'Physical Wellness'],
  },
  {
    title: 'Music & Instrumental Sessions',
    description:
      'Discover the therapeutic power of Indian classical music. Learn to play traditional instruments like tabla, sitar, or flute, or simply immerse yourself in the meditative sounds of ragas that promote focus and creativity.',
    duration: '1.5-3 hours',
    format: 'In-person or Virtual',
    benefits: ['Enhanced Focus', 'Creativity Boost', 'Emotional Well-being', 'Cultural Connection'],
  },
  {
    title: 'Yoga & Meditation Programs',
    description:
      'Rooted in ancient Indian traditions, our yoga and meditation programs are tailored for the modern workplace. Improve flexibility, reduce stress, and cultivate mindfulness with authentic practices.',
    duration: '1-2 hours',
    format: 'In-person or Virtual',
    benefits: ['Stress Relief', 'Improved Flexibility', 'Better Focus', 'Work-Life Balance'],
  },
  {
    title: 'Kalaripayattu Training',
    description:
      'Experience one of the oldest martial arts forms from Kerala. Kalaripayattu combines physical training, mental discipline, and spiritual growth, making it perfect for team building and personal development.',
    duration: '2-3 hours',
    format: 'In-person',
    benefits: ['Physical Strength', 'Mental Discipline', 'Team Coordination', 'Self-Confidence'],
  },
  {
    title: 'Art & Craft Workshops',
    description:
      'Engage in traditional Indian arts like Madhubani painting, Warli art, pottery, or textile design. These hands-on sessions foster creativity, patience, and appreciation for traditional craftsmanship.',
    duration: '2-4 hours',
    format: 'In-person',
    benefits: ['Creativity', 'Patience', 'Cultural Appreciation', 'Hand-Eye Coordination'],
  },
  {
    title: 'Cultural Storytelling Sessions',
    description:
      'Immerse your team in the rich narratives of Indian mythology, folklore, and history. These engaging storytelling sessions promote cultural understanding and team bonding through shared experiences.',
    duration: '1-2 hours',
    format: 'In-person or Virtual',
    benefits: ['Cultural Understanding', 'Team Bonding', 'Communication Skills', 'Historical Awareness'],
  },
]

export default function Offerings() {
  return (
    <div class="page-content">
      <section class="page-hero">
        <h1>Our Offerings</h1>
        <p class="page-subtitle">
          Discover our range of authentic Indian art and culture programs designed to enrich your workplace
        </p>
      </section>

      <section class="offerings-grid">
        {offerings.map((offering) => (
          <article class="offering-card">
            <div class="offering-header">
              <h3>{offering.title}</h3>
              <div class="offering-meta">
                <span class="offering-duration">{offering.duration}</span>
                <span class="offering-format">{offering.format}</span>
              </div>
            </div>
            <p class="offering-description">{offering.description}</p>
            <div class="offering-benefits">
              <h4>Key Benefits:</h4>
              <ul>
                {offering.benefits.map((benefit) => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
            <button class="button primary">Request Information</button>
          </article>
        ))}
      </section>

      <section class="cta-section">
        <h2>Ready to bring art to your organization?</h2>
        <p>Contact us to customize a program that fits your team's needs</p>
        <div class="cta-actions">
          <button class="button primary">Schedule a Consultation</button>
          <button class="button ghost">Download Program Guide</button>
        </div>
      </section>
    </div>
  )
}

