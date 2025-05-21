import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (heroRef.current) {
        gsap.fromTo(
            heroRef.current,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
        }
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="scroll-mt-20 flex flex-col items-center justify-center text-center min-h-screen bg-white px-6"
            >
            <h1 className="text-5xl font-bold mb-4">
                Alignez vos sens,<br />
                Révélez votre potentiel.
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                Coaching holistique pour retrouver équilibre et clarté dans votre vie personnelle et professionnelle.
            </p>
            <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full"
            >
                Réservez votre séance
            </a>
        </section>
    );
}