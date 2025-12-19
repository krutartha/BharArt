import { createSignal, createEffect, onCleanup, onMount } from 'solid-js'
import { A } from '@solidjs/router'
import '../App.css'
import '../styles/Layout.css'

export default function Layout(props) {
  const [isScrolled, setIsScrolled] = createSignal(false)
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen())
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Lock body scroll when menu is open
  createEffect(() => {
    if (isMenuOpen()) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })

  onCleanup(() => {
    document.body.style.overflow = ''
  })

  return (
    <div class="page">
      <header class={`site-header ${isScrolled() ? 'site-header--scrolled' : ''}`}>
        <A href="/" class="logo-container" onClick={closeMenu}>
          <img src="/logo.png" alt="Bhar-Art Logo" class="logo-image" />
        </A>

        <div class="header-actions">
          <nav class="nav">
            <A href="/offerings" onClick={closeMenu}>Offerings</A>
            <A href="/about" onClick={closeMenu}>About</A>
            <A href="/partners" onClick={closeMenu}>Our Partners</A>
            <A href="/contact" onClick={closeMenu}>Contact</A>
          </nav>
          <button class="button primary" type="button">
            Request a Demo
          </button>
          <button
            class="hamburger-menu"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span class={`hamburger-line ${isMenuOpen() ? 'hamburger-line--open' : ''}`} />
            <span class={`hamburger-line ${isMenuOpen() ? 'hamburger-line--open' : ''}`} />
            <span class={`hamburger-line ${isMenuOpen() ? 'hamburger-line--open' : ''}`} />
          </button>
        </div>
      </header>

      {isMenuOpen() && (
        <div class="mobile-menu-overlay" onClick={closeMenu} />
      )}

      <div class={`mobile-menu ${isMenuOpen() ? 'mobile-menu--open' : ''}`}>
        <nav class="mobile-nav">
          <A href="/offerings" onClick={closeMenu}>Offerings</A>
          <A href="/about" onClick={closeMenu}>About</A>
          <A href="/partners" onClick={closeMenu}>Our Partners</A>
          <A href="/contact" onClick={closeMenu}>Contact</A>
          <button class="button primary mobile-cta" type="button" onClick={closeMenu}>
            Request a Demo
          </button>
        </nav>
      </div>

      <main class="main">
        {props.children}
      </main>

      <footer class="footer">
        <div class="footer-content">
          <A href="/" class="footer-logo-container">
            <img src="/logo.png" alt="Bhar-Art Logo" class="footer-logo" />
          </A>
          <div class="footer-brand">BharArt</div>
          <p class="footer-tagline">Bringing Indian Art & Culture to Your Organization</p>
          <div class="footer-links">
            <A href="/offerings">Offerings</A>
            <A href="/about">About</A>
            <A href="/partners">Our Partners</A>
            <A href="/contact">Contact</A>
          </div>
          <p class="footer-copyright">© 2025 BharArt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

