import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function About() {
    const aboutRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (aboutRef.current) {
        gsap.fromTo(
            aboutRef.current,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
        }
    }, []);

    return (
        <section id="about" ref={aboutRef} className="scroll-mt-20 max-w-3xl mx-auto px-6 py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Qui suis-je ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Entreprendre, s’adapter, aligner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Multi-entrepreneur et coach professionnel certifié ICF & praticien PNL, j’ai évolué dans des environnements exigeants, allant de la gestion de crise en aviation en zone de guerre à la création et direction de projets culturels et entrepreneuriaux.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                J’ai appris à agir sous pression, prendre des décisions stratégiques et accompagner des équipes à surmonter leurs défis quotidiens. Aujourd’hui, j’aide les entrepreneurs et dirigeants à structurer leur vision, optimiser leur stratégie et retrouver un équilibre entre ambition et sérénité.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>3 ans compositeur & ingénieur du son freelance</li>
                <li>4 ans en logistique opérationnelle dans l’aviation, en gestion de crise</li>
                <li>6 ans en accompagnement événementiel & team building B2B & B2C (+50 clients, dont Decathlon, EDF, FIDH, CNA…)</li>
                <li>7 ans à la tête d’un festival de musique que j’ai créé</li>
                <li>3 ans de gestion d’un bar à vin</li>
                <li>+40 entrepreneurs accompagnés en coaching individuel</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
                Quand on aligne sa stratégie avec qui l’on est vraiment, on avance plus vite et plus sereinement.
            </p>
        </section>
    );
}