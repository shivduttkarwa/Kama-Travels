import { useContext, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { AppReadyContext } from '../App';

const HIDDEN = { opacity: 0, y: 30 };

const useHeroReveal = (getTargets, deps = []) => {
  const appReady = useContext(AppReadyContext);

  useLayoutEffect(() => {
    const targets = Array.from(getTargets()).filter(Boolean);
    if (!targets.length) return;

    if (!appReady) {
      gsap.set(targets, HIDDEN);
      return;
    }

    const tween = gsap.fromTo(targets, HIDDEN, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.2,
      force3D: true,
    });

    return () => tween.revert();
  }, [appReady, ...deps]);
};

export default useHeroReveal;
