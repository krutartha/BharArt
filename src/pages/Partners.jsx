import '../App.css'
import '../styles/Partners.css'

const artistPartners = [
  {
    name: 'Kalakshetra Foundation',
    type: 'Art Institute',
    logo: '/1.jpg',
    specialization: 'Classical Dance & Music',
    description:
      'A premier institution dedicated to preserving and promoting Indian classical arts, with expertise in Bharatanatyam, Carnatic music, and traditional crafts.',
    artForms: ['Bharatanatyam', 'Carnatic Music', 'Traditional Crafts'],
    location: 'Chennai, India',
  },
  {
    name: 'Guru Padma Subrahmanyam',
    type: 'Master Artist',
    logo: '/1.jpg',
    specialization: 'Bharatanatyam',
    description:
      'Renowned Bharatanatyam exponent and scholar with over five decades of experience, bringing authentic classical dance traditions to modern audiences.',
    artForms: ['Bharatanatyam', 'Dance Theory', 'Cultural Heritage'],
    location: 'Chennai, India',
  },
  {
    name: 'Kalamandalam',
    type: 'Art Institute',
    logo: '/1.jpg',
    specialization: 'Kerala Performing Arts',
    description:
      'Institution preserving Kerala\'s rich performing arts heritage, specializing in Kathakali, Mohiniyattam, and traditional martial arts.',
    artForms: ['Kathakali', 'Mohiniyattam', 'Kalaripayattu'],
    location: 'Kerala, India',
  },
  {
    name: 'Yoga Institute Mumbai',
    type: 'Wellness Institute',
    logo: '/1.jpg',
    specialization: 'Yoga & Meditation',
    description:
      'Pioneering yoga institution offering authentic practices rooted in Indian tradition, focusing on holistic wellness and mindfulness.',
    artForms: ['Hatha Yoga', 'Meditation', 'Ayurveda'],
    location: 'Mumbai, India',
  },
  {
    name: 'Sangeet Natak Akademi',
    type: 'Art Institute',
    logo: '/1.jpg',
    specialization: 'Music & Theatre',
    description:
      'National academy for music, dance, and drama, connecting master artists with organizations seeking authentic cultural experiences.',
    artForms: ['Classical Music', 'Folk Theatre', 'Regional Dance'],
    location: 'New Delhi, India',
  },
  {
    name: 'Guru Ustad Zakir Hussain',
    type: 'Master Artist',
    logo: '/1.jpg',
    specialization: 'Tabla & Percussion',
    description:
      'World-renowned tabla maestro bringing the rhythmic traditions of Indian classical music to global audiences through innovative workshops.',
    artForms: ['Tabla', 'Percussion', 'Rhythm Workshops'],
    location: 'Mumbai, India',
  },
]

export default function Partners() {
  return (
    <div class="page-content">
      <section class="page-hero">
        <h1>Our Partners</h1>
        <p class="page-subtitle">
          We collaborate with master artists and premier art institutes across India to bring authentic cultural experiences to your organization
        </p>
      </section>

      <section class="partners-showcase">
        <h2>Our Artist & Art Institute Partners</h2>
        <p class="partners-intro">
          BharArt partners with renowned artists, master practitioners, and prestigious art institutions to ensure the highest quality and authenticity in every program we deliver.
        </p>
        <div class="partners-grid">
          {artistPartners.map((partner) => (
            <article class="partner-card">
              <div class="partner-logo-container">
                <img src={partner.logo} alt={`${partner.name} logo`} class="partner-logo" />
              </div>
              <div class="partner-header">
                <div class="partner-info">
                  <h3>{partner.name}</h3>
                  <p class="partner-type">{partner.type}</p>
                </div>
              </div>
              <p class="partner-specialization">
                <strong>Specialization:</strong> {partner.specialization}
              </p>
              <p class="partner-description">{partner.description}</p>
              <div class="partner-location">
                <span class="location-icon">📍</span>
                <span>{partner.location}</span>
              </div>
              <div class="partner-artforms">
                <span class="artforms-label">Art Forms:</span>
                <div class="artforms-tags">
                  {partner.artForms.map((artForm) => (
                    <span class="artform-tag">{artForm}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

