import './Menu.css';
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
import logo from '../../../Images/raymB.png'; 

const Navbar = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const actionBtn = document.querySelector('.nav-btn-js');
    const updateClipPath = () => {
      const rect = actionBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      document.documentElement.style.setProperty('--clip-x', `${x}px`);
      document.documentElement.style.setProperty('--clip-y', `${y}px`);
    };

    updateClipPath();
    window.addEventListener('resize', updateClipPath);

    actionBtn.addEventListener('click', () => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (!isRevealed) {
        anime({
          targets: '.nav-js',
          keyframes: [
            { clipPath: `circle(0% at var(--clip-x) var(--clip-y))` },
            { clipPath: `circle(150% at var(--clip-x) var(--clip-y))` }
          ],
          easing: 'easeOutQuad',
          duration: 700,
          complete: () => setIsAnimating(false)
        });
        setIsRevealed(true);
        actionBtn.setAttribute('data-open', true);
      } else {
        anime({
          targets: '.nav-js',
          keyframes: [
            { clipPath: `circle(150% at var(--clip-x) var(--clip-y))` },
            { clipPath: `circle(0% at var(--clip-x) var(--clip-y))` }
          ],
          easing: 'easeInQuad',
          duration: 700,
          complete: () => setIsAnimating(false)
        });
        setIsRevealed(false);
        actionBtn.setAttribute('data-open', false);
      }
    });

    return () => window.removeEventListener('resize', updateClipPath);
  }, [isRevealed, isAnimating]);

  return (
    <div className="menu-body">
      <header className="header__content p-4">
        <img src={logo} alt="Logo" className="logo" />
        <div className="icons-container">
          <i className="fas fa-user text-2xl cursor-pointer"></i>
          <i className="fas fa-shopping-cart text-2xl cart-icon"></i>
          <button className="header__button nav-btn-js" type="button"></button>
        </div>
        <nav className="header__nav nav-js" data-active={isRevealed ? 'true' : 'false'}>
          <section className="clip-text-video">
            <video autoPlay loop muted playsInline preload="auto" width="100%" controls>
              <source src="/src/assets/components/NavCircle/Menu/MTB.mp4" type="video/mp4" />
            </video>
            <div className="clip-text-video__overlay"></div>
            <div className="clip-text-video__text">
              <p>RAYM</p>
            </div>
            <div className="clip-text-video__overlay-bottom"></div>
          </section>
          <ul className="header__menu">
            <li className="header__menu-item"><a href="#">Accueil</a></li>
            <li className="header__menu-item"><a href="#">La marque</a></li>
            <li className="header__menu-item"><a href="#">Configurateur</a></li>
            <li className="header__menu-item"><a href="#">Entretien</a></li>
            <li className="header__menu-item"><a href="#">Contacts</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
