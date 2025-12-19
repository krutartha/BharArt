import { createSignal } from 'solid-js'
import '../App.css'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleInput = (field) => (e) => {
    setFormData({ ...formData(), [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData())
  }

  return (
    <div class="page-content">
      <section class="page-hero">
        <h1>Get in Touch</h1>
        <p class="page-subtitle">
          We'd love to hear from you. Reach out to discuss how BharArt can enrich your organization's culture.
        </p>
      </section>

      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p class="contact-intro">
              Whether you're interested in our programs, have questions, or want to explore partnership opportunities, 
              we're here to help you bring the transformative power of Indian art and culture to your organization.
            </p>

            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-item-content">
                  <h3>Email</h3>
                  <p>info@bharart.com</p>
                  <p>partnerships@bharart.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-item-content">
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-item-content">
                  <h3>Address</h3>
                  <p>123 Cultural Arts Center</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div class="contact-item-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData().name}
                  onInput={handleInput('name')}
                  placeholder="Enter your full name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData().email}
                  onInput={handleInput('email')}
                  placeholder="your.email@company.com"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData().company}
                    onInput={handleInput('company')}
                    placeholder="Your company name"
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData().phone}
                    onInput={handleInput('phone')}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData().message}
                  onInput={handleInput('message')}
                  placeholder="Tell us about your organization's needs and how we can help..."
                />
              </div>

              <button type="submit" class="button primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

