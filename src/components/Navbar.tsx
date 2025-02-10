import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, Wrench, Monitor, Briefcase, 
  Leaf, BookOpen, Users, GraduationCap, Brain,
  LineChart, Target, Award, HandshakeIcon, Presentation,
  BarChart, Calendar, MessageCircle, Calculator, Laptop,
  Building2, ChartPie, Trophy, Lightbulb, Facebook,
  MessageSquare, Twitter, Send, X as XIcon, Whatsapp
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  return (
    <nav className="bg-[#040504]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://i.ibb.co/xDYyC9D/1736962221412"
              alt="InnovXPRO.COM"
              className="h-8 w-auto sm:h-10"
            />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-[#F8E061]">
              InnovX
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu title="Services" isOpen={openDropdown === 'Services'} toggleDropdown={toggleDropdown}>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {/* Maintenance Professionnelle */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Wrench className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Maintenance Professionnelle
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#maintenance-packs" isDropdown>
                      <span className="text-left">Packs de Maintenance</span>
                    </NavLink>
                    <NavLink href="#maintenance-electrique" isDropdown>
                      <span className="text-left">Maintenance Électrique</span>
                    </NavLink>
                    <NavLink href="#maintenance-froid" isDropdown>
                      <span className="text-left">Maintenance Froid et Climatisation</span>
                    </NavLink>
                  </div>
                </div>

                {/* Services Numériques */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Laptop className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Services Numériques
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#developpement-web" isDropdown>
                      <span className="text-left">Développement de Sites Web</span>
                    </NavLink>
                    <NavLink href="#maintenance-informatique" isDropdown>
                      <span className="text-left">Maintenance Informatique</span>
                    </NavLink>
                    <NavLink href="#transformation-digitale" isDropdown>
                      <span className="text-left">Consultance en Transformation Digitale</span>
                    </NavLink>
                  </div>
                </div>

                {/* Services d'Affaires */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Building2 className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Services d'Affaires
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#secretariat-public" isDropdown>
                      <span className="text-left">Secrétariat Public</span>
                    </NavLink>
                    <NavLink href="#librairie-bureautique" isDropdown>
                      <span className="text-left">Librairie et Consommables Bureautiques</span>
                    </NavLink>
                  </div>
                </div>

                {/* Énergie et Environnement */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Leaf className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Énergie et Environnement
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#solutions-energetiques" isDropdown>
                      <span className="text-left">Solutions Énergétiques</span>
                    </NavLink>
                    <NavLink href="#controle-technique" isDropdown>
                      <span className="text-left">Suivi et Contrôle Technique</span>
                    </NavLink>
                  </div>
                </div>

                {/* Formations Professionnelles */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <GraduationCap className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Formations Professionnelles
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#formation-informatique" isDropdown>
                      <span className="text-left">Informatique et Bureautique</span>
                    </NavLink>
                    <NavLink href="#formation-developpement-personnel" isDropdown>
                      <span className="text-left">Développement Personnel</span>
                    </NavLink>
                  </div>
                </div>

                {/* Consultance et Accompagnement */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <HandshakeIcon className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Consultance et Accompagnement
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#intelligence-financiere" isDropdown>
                      <span className="text-left">Intelligence Financière</span>
                    </NavLink>
                    <NavLink href="#developpement-innovation" isDropdown>
                      <span className="text-left">Développement Personnel et Innovation</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </DropdownMenu>

            <DropdownMenu title="Formation" isOpen={openDropdown === 'Formation'} toggleDropdown={toggleDropdown}>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {/* Formations en Informatique */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Monitor className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Formations en Informatique
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#msoffice" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">MS WORD • MS EXCEL • POWERPOINT</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                    <NavLink href="#ai" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">INTELLIGENCE ARTIFICIELLE</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                  </div>
                </div>

                {/* Ateliers de Développement Personnel */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Brain className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Ateliers de Développement Personnel
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#time" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">Gestion du Temps</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                    <NavLink href="#communication" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">Communication Efficace</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                  </div>
                </div>

                {/* Intelligence Financière */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Calculator className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Intelligence Financière
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#budget" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">Gestion de Budget</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                    <NavLink href="#investment" isDropdown className="flex items-center justify-between gap-4">
                      <span className="text-left">Investissement et Épargne</span>
                      <span className="flex gap-2 shrink-0">
                        <span className="formation-badge">En ligne</span>
                        <span className="formation-badge">Présentiel</span>
                      </span>
                    </NavLink>
                  </div>
                </div>

                {/* Liens importants */}
                <div className="px-4 py-2 border-t border-[var(--primary)]">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap mt-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Calendar className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Informations Pratiques
                  </h3>
                  <div className="mt-1 space-y-1">
                    <a href="#calendar" className="block w-full text-center px-4 py-3 rounded-md border transition-all info-button">
                      Calendrier des Sessions
                    </a>
                    <a href="https://wa.me/your-number" className="block w-full text-center px-4 py-3 rounded-md border transition-all info-button">
                      Inscription aux Ateliers (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </DropdownMenu>

            <DropdownMenu title="Coaching/Mentorat" isOpen={openDropdown === 'Coaching/Mentorat'} toggleDropdown={toggleDropdown}>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {/* Coaching Professionnel */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <LineChart className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Coaching Professionnel
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#developpement-carriere" isDropdown>
                      <span className="text-left">Développement de Carrière</span>
                    </NavLink>
                    <NavLink href="#leadership" isDropdown>
                      <span className="text-left">Leadership et Management</span>
                    </NavLink>
                  </div>
                </div>

                {/* Mentorat Personnalisé */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Target className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Mentorat Personnalisé
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#objectifs-vie" isDropdown>
                      <span className="text-left">Objectifs de Vie</span>
                    </NavLink>
                    <NavLink href="#gestion-stress" isDropdown>
                      <span className="text-left">Gestion du Stress</span>
                    </NavLink>
                  </div>
                </div>

                {/* Programmes de Mentorat */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Award className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Programmes de Mentorat
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#mentorat-entrepreneurs" isDropdown>
                      <span className="text-left">Mentorat pour Entrepreneurs</span>
                    </NavLink>
                    <NavLink href="#mentorat-etudiants" isDropdown>
                      <span className="text-left">Mentorat pour Étudiants</span>
                    </NavLink>
                  </div>
                </div>

                {/* Conférences et Webinaires */}
                <div className="px-4 py-2 border-t border-[var(--primary)]">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap mt-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Presentation className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Conférences et Webinaires
                  </h3>
                  <div className="mt-1 space-y-1">
                    <a href="https://wa.me/your-number" className="block w-full text-center px-4 py-3 rounded-md border transition-all info-button">
                      Inscription aux Ateliers (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </DropdownMenu>

            <DropdownMenu title="Communauté" isOpen={openDropdown === 'Communauté'} toggleDropdown={toggleDropdown}>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto social-icons">
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap mb-4" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Users className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Réseaux Sociaux
                  </h3>
                  <div className="mt-1 space-y-3">
                    <NavLink href="https://facebook.com/your-page" isDropdown className="flex items-center gap-3 px-4 py-2">
                      <Facebook size={20} className="shrink-0" />
                      <span className="text-left">Facebook</span>
                    </NavLink>
                    <NavLink href="https://t.me/your-channel" isDropdown className="flex items-center gap-3 px-4 py-2">
                      <Send size={20} className="shrink-0" />
                      <span className="text-left">Telegram</span>
                    </NavLink>
                    <NavLink href="https://twitter.com/your-handle" isDropdown className="flex items-center gap-3 px-4 py-2">
                      <XIcon size={20} className="shrink-0" />
                      <span className="text-left">X Officiel</span>
                    </NavLink>
                    <NavLink href="https://wa.me/your-number" isDropdown className="flex items-center gap-3 px-4 py-2">
                      <Whatsapp size={20} className="shrink-0" />
                      <span className="text-left">WhatsApp</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </DropdownMenu>

            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-md border transition-colors"
              style={{
                color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                backgroundColor: '#040504'
              }}
            >
              {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md border transition-colors"
              style={{
                color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                backgroundColor: '#040504'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#040504]">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <MobileNavLink href="#services" onClick={() => { setIsMenuOpen(false); toggleServicesMenu(); }}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#formation" onClick={() => setIsMenuOpen(false)}>
              Formation
            </MobileNavLink>
            <MobileNavLink href="#coaching-mentorat" onClick={() => setIsMenuOpen(false)}>
              Coaching/Mentorat
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="#communaute" onClick={() => setIsMenuOpen(false)}>
              Communauté
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              À propos
            </MobileNavLink>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-full px-3 py-2 rounded-md border transition-colors"
              style={{
                color: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
                backgroundColor: '#040504'
              }}
            >
              {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Services Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#040504] z-50 transform transition-transform duration-300 ${isServicesMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-[#F8E061]">Services</span>
          <button onClick={toggleServicesMenu} className="p-2 text-[#F8E061]">
            <X size={24} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Maintenance Professionnelle */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Wrench className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Maintenance Professionnelle
            </h3>
            <MobileNavLink href="#maintenance-packs" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Packs de Maintenance</span>
            </MobileNavLink>
            <MobileNavLink href="#maintenance-electrique" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Maintenance Électrique</span>
            </MobileNavLink>
            <MobileNavLink href="#maintenance-froid" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Maintenance Froid et Climatisation</span>
            </MobileNavLink>
          </div>

          {/* Services Numériques */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Monitor className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Services Numériques
            </h3>
            <MobileNavLink href="#developpement-web" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Développement de Sites Web</span>
            </MobileNavLink>
            <MobileNavLink href="#maintenance-informatique" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Maintenance Informatique</span>
            </MobileNavLink>
            <MobileNavLink href="#transformation-digitale" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Consultance en Transformation Digitale</span>
            </MobileNavLink>
          </div>

          {/* Services d'Affaires */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Briefcase className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Services d'Affaires
            </h3>
            <MobileNavLink href="#secretariat-public" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Secrétariat Public</span>
            </MobileNavLink>
            <MobileNavLink href="#librairie-bureautique" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Librairie et Consommables Bureautiques</span>
            </MobileNavLink>
          </div>

          {/* Énergie et Environnement */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Leaf className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Énergie et Environnement
            </h3>
            <MobileNavLink href="#solutions-energetiques" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Solutions Énergétiques</span>
            </MobileNavLink>
            <MobileNavLink href="#controle-technique" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Suivi et Contrôle Technique</span>
            </MobileNavLink>
          </div>

          {/* Formations Professionnelles */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <BookOpen className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Formations Professionnelles
            </h3>
            <MobileNavLink href="#formation-informatique" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Informatique et Bureautique</span>
            </MobileNavLink>
            <MobileNavLink href="#formation-developpement-personnel" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Développement Personnel</span>
            </MobileNavLink>
          </div>

          {/* Consultance et Accompagnement */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Users className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Consultance et Accompagnement
            </h3>
            <MobileNavLink href="#intelligence-financiere" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Intelligence Financière</span>
            </MobileNavLink>
            <MobileNavLink href="#developpement-innovation" onClick={toggleServicesMenu} isDropdown>
              <span className="text-left">Développement Personnel et Innovation</span>
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface DropdownMenuProps {
  title: string;
  isOpen: boolean;
  toggleDropdown: (title: string) => void;
  children: React.ReactNode;
}

const DropdownMenu = ({ title, isOpen, toggleDropdown, children }: DropdownMenuProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(title)}
        className={`px-3 py-2 rounded-md text-sm font-medium border-2 transition-colors flex items-center gap-1 dropdown-button ${isOpen ? 'active border-opacity-100' : 'border-opacity-50'}`}
        style={{
          color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          borderColor: isOpen 
            ? (document.body.getAttribute('data-theme') === 'dark' ? '#FFFFFF' : '#FFE600')
            : (document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF'),
          backgroundColor: '#040504'
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div className={`absolute left-0 mt-4 w-auto rounded-lg shadow-2xl bg-white border border-black z-50 dropdown-menu transition-all duration-300 ease-in-out transform origin-top ${
          title === 'Formation' ? 'min-w-[500px]' : 
          title === 'Coaching/Mentorat' ? 'min-w-[400px]' : ''
        }`}>
          <div className={`py-4 ${title === 'Formation' || title === 'Coaching/Mentorat' ? 'px-4' : 'flex space-x-12'}`}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, children, isDropdown, className }: { href: string; children: React.ReactNode; isDropdown?: boolean; className?: string }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
      isDropdown ? 'block w-full text-left dropdown-link hover:pl-4' : ''
    } ${className || ''}`}
    style={{
      color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
      borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
      backgroundColor: '#040504'
    }}
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
  isDropdown,
  className
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isDropdown?: boolean;
  className?: string
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-sm font-medium border transition-colors ${isDropdown ? 'block w-full text-left' : ''} ${className || ''}`}
    style={{
      color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
      borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
      backgroundColor: '#040504'
    }}
  >
    {children}
  </a>
);

export default Navbar;
