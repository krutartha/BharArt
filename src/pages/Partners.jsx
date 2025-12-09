import '../App.css'

const partners = [
  {
    name: 'TechCorp India',
    industry: 'Technology',
    testimonial:
      'BharArt has been instrumental in creating a more inclusive and culturally aware workplace. Our employees look forward to every session.',
    programs: ['Classical Dance', 'Yoga & Meditation'],
  },
  {
    name: 'Global Solutions',
    industry: 'Consulting',
    testimonial:
      'The quality of instruction and cultural depth in BharArt programs exceeded our expectations. Highly recommended for any organization.',
    programs: ['Music Sessions', 'Cultural Storytelling'],
  },
  {
    name: 'InnovateLabs',
    industry: 'Innovation',
    testimonial:
      "Our team's creativity and collaboration improved significantly after implementing BharArt programs. The impact has been remarkable.",
    programs: ['Art & Craft Workshops', 'Kalaripayattu'],
  },
  {
    name: 'WellnessFirst',
    industry: 'Healthcare',
    testimonial:
      'BharArt programs have become an essential part of our employee wellness initiatives. The authentic approach makes all the difference.',
    programs: ['Yoga & Meditation', 'Music Sessions'],
  },
  {
    name: 'Enterprise Group',
    industry: 'Finance',
    testimonial:
      'The flexibility and professionalism of BharArt allowed us to seamlessly integrate cultural programs into our busy corporate schedule.',
    programs: ['Classical Dance', 'Art & Craft'],
  },
  {
    name: 'Creative Minds',
    industry: 'Media & Entertainment',
    testimonial:
      'As a creative organization, we appreciate the authentic artistic experiences BharArt brings. Our team is more inspired than ever.',
    programs: ['Music Sessions', 'Art & Craft Workshops'],
  },
]

const partnershipBenefits = [
  'Customized program design',
  'Flexible scheduling options',
  'Expert master artists',
  'Measurable impact tracking',
  'Ongoing support and consultation',
  'Scalable for organizations of all sizes',
]

export default function Partners() {
  return (
    <div class="page-content">
      <section class="page-hero">
        <h1>Our Partners</h1>
        <p class="page-subtitle">
          Trusted by leading organizations across industries to enhance workplace culture through authentic art experiences
        </p>
      </section>

      <section class="partners-showcase">
        <h2>Organizations We Work With</h2>
        <div class="partners-grid">
          {partners.map((partner) => (
            <article class="partner-card">
              <div class="partner-header">
                <div class="partner-avatar">
                  {partner.name.charAt(0)}
                </div>
                <div class="partner-info">
                  <h3>{partner.name}</h3>
                  <p class="partner-industry">{partner.industry}</p>
                </div>
              </div>
              <p class="partner-testimonial">"{partner.testimonial}"</p>
              <div class="partner-programs">
                <span class="programs-label">Programs:</span>
                <div class="programs-tags">
                  {partner.programs.map((program) => (
                    <span class="program-tag">{program}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section class="partnership-benefits">
        <h2>Partnership Benefits</h2>
        <div class="benefits-grid">
          {partnershipBenefits.map((benefit) => (
            <div class="benefit-item">
              <div class="benefit-icon">✓</div>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section class="cta-section">
        <h2>Become a Partner</h2>
        <p>Join leading organizations in bringing authentic Indian art and culture to your workplace</p>
        <div class="cta-actions">
          <button class="button primary">Start Partnership</button>
          <button class="button ghost">Schedule a Demo</button>
        </div>
      </section>
    </div>
  )
}

