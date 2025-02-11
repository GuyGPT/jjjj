import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, 
  Wrench, Laptop, Brain, PiggyBank, ClipboardList,
  Monitor, Briefcase, Users, BookOpen,
  Settings, Tool, Wind, Globe,
  Code, Database, Lightbulb, Building,
  FileText, Printer, Cloud, BarChart,
  Facebook, Send as Telegram, Twitter, MessageSquare as WhatsApp
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isFormationMenuOpen, setIsFormationMenuOpen] = useState(false);

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

  const toggleFormationMenu = () => {
    setIsFormationMenuOpen(!isFormationMenuOpen);
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
                    <Settings className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <Code className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <Building className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <Globe className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <BookOpen className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <Lightbulb className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
                    <Laptop className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Formations en Informatique
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#bureautique" isDropdown>
                      <span className="text-center block w-full">Bureautique : MS Word, Excel, PowerPoint</span>
                    </NavLink>
                    <NavLink href="#ia" isDropdown>
                      <span className="text-center block w-full">Intelligence Artificielle</span>
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
                    <NavLink href="#gestion-temps" isDropdown>
                      <span className="text-center block w-full">Gestion du Temps</span>
                    </NavLink>
                    <NavLink href="#communication" isDropdown>
                      <span className="text-center block w-full">Communication Efficace</span>
                    </NavLink>
                  </div>
                </div>

                {/* Intelligence Financière */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <PiggyBank className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Intelligence Financière
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#gestion-budget" isDropdown>
                      <span className="text-center block w-full">Gestion de Budget</span>
                    </NavLink>
                    <NavLink href="#investissement" isDropdown>
                      <span className="text-center block w-full">Investissement et Épargne</span>
                    </NavLink>
                  </div>
                </div>

                {/* Calendrier et Inscription */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap mb-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <ClipboardList className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Autres Informations
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#calendrier" isDropdown>
                      <span className="text-center block w-full">Calendrier des Sessions</span>
                    </NavLink>
                    <NavLink href="#inscription" isDropdown>
                      <span className="text-center block w-full">Inscription aux Ateliers</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </DropdownMenu>
            <DropdownMenu title="Coaching/Mentorat" isOpen={openDropdown === 'Coaching/Mentorat'} toggleDropdown={toggleDropdown}>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                {/* Coaching Professionnel */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Briefcase className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Coaching Professionnel
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#developpement-carriere" isDropdown>
                      <span className="text-center block w-full">Développement de Carrière</span>
                    </NavLink>
                    <NavLink href="#leadership" isDropdown>
                      <span className="text-center block w-full">Leadership et Management</span>
                    </NavLink>
                  </div>
                </div>

                {/* Mentorat Personnalisé */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Users className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Mentorat Personnalisé
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#objectifs-vie" isDropdown>
                      <span className="text-center block w-full">Objectifs de Vie</span>
                    </NavLink>
                    <NavLink href="#gestion-stress" isDropdown>
                      <span className="text-center block w-full">Gestion du Stress</span>
                    </NavLink>
                  </div>
                </div>

                {/* Programmes de Mentorat */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                    <Lightbulb className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
                    Programmes de Mentorat
                  </h3>
                  <div className="mt-1 space-y-1">
                    <NavLink href="#mentorat-entrepreneurs" isDropdown>
                      <span className="text-center block w-full">Mentorat pour Entrepreneurs</span>
                    </NavLink>
                    <NavLink href="#mentorat-etudiants" isDropdown>
                      <span className="text-center block w-full">Mentorat pour Étudiants</span>
                    </NavLink>
                    <NavLink href="#conferences" isDropdown>
                      <span className="text-center block w-full">Conférences et Webinaires</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </DropdownMenu>
            <DropdownMenu title="Communauté" isOpen={openDropdown === 'Communauté'} toggleDropdown={toggleDropdown}>
              <div className="py-1 w-44">
                <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] text-center pb-1 mb-1 border-b border-[var(--primary)] mx-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
                  Réseaux Sociaux
                </h3>
                <div className="flex flex-col gap-0.5">
                  <NavLink href="#facebook" isDropdown className="flex items-center px-3 py-1 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-200">
                    <Facebook size={16} className="flex-shrink-0 mr-3" />
                    <span className="truncate">Facebook</span>
                  </NavLink>
                  <NavLink href="#telegram" isDropdown className="flex items-center px-3 py-1 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-200">
                    <Telegram size={16} className="flex-shrink-0 mr-3" />
                    <span className="truncate">Telegram</span>
                  </NavLink>
                  <NavLink href="#twitter" isDropdown className="flex items-center px-3 py-1 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-200">
                    <Twitter size={16} className="flex-shrink-0 mr-3" />
                    <span className="truncate">X (Twitter)</span>
                  </NavLink>
                  <NavLink href="#whatsapp" isDropdown className="flex items-center px-3 py-1 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-200">
                    <WhatsApp size={16} className="flex-shrink-0 mr-3" />
                    <span className="truncate">WhatsApp</span>
                  </NavLink>
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
            <MobileNavLink href="#formation" onClick={() => { setIsMenuOpen(false); toggleFormationMenu(); }}>
              Formation
            </MobileNavLink>
            <MobileNavLink href="#coaching" onClick={() => setIsMenuOpen(false)}>
              Coaching/Mentorat
            </MobileNavLink>
            <div className="px-2 py-2 border rounded-md" style={{
              borderColor: theme === 'dark' ? '#F8E061' : '#FFFFFF',
            }}>
              <h3 className="text-sm font-semibold mb-2 text-center" style={{ color: theme === 'dark' ? '#F8E061' : '#FFFFFF' }}>
                Communauté
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavLink href="#facebook" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Facebook size={16} />
                  <span>Facebook</span>
                </MobileNavLink>
                <MobileNavLink href="#telegram" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Telegram size={16} />
                  <span>Telegram</span>
                </MobileNavLink>
                <MobileNavLink href="#twitter" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Twitter size={16} />
                  <span>X (Twitter)</span>
                </MobileNavLink>
                <MobileNavLink href="#whatsapp" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <WhatsApp size={16} />
                  <span>WhatsApp</span>
                </MobileNavLink>
              </div>
            </div>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
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
              <Settings className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
              <Code className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
              <Building className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
              <Globe className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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
              <Lightbulb className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
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

      {/* Mobile Formation Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#040504] z-50 transform transition-transform duration-300 ${isFormationMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-[#F8E061]">Formation</span>
          <button onClick={toggleFormationMenu} className="p-2 text-[#F8E061]">
            <X size={24} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Formations en Informatique */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Laptop className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Formations en Informatique
            </h3>
            <MobileNavLink href="#bureautique" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Bureautique : MS Word, Excel, PowerPoint</span>
            </MobileNavLink>
            <MobileNavLink href="#ia" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Intelligence Artificielle</span>
            </MobileNavLink>
          </div>

          {/* Ateliers de Développement Personnel */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Brain className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Ateliers de Développement Personnel
            </h3>
            <MobileNavLink href="#gestion-temps" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Gestion du Temps</span>
            </MobileNavLink>
            <MobileNavLink href="#communication" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Communication Efficace</span>
            </MobileNavLink>
          </div>

          {/* Intelligence Financière */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <PiggyBank className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Intelligence Financière
            </h3>
            <MobileNavLink href="#gestion-budget" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Gestion de Budget</span>
            </MobileNavLink>
            <MobileNavLink href="#investissement" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Investissement et Épargne</span>
            </MobileNavLink>
          </div>

          {/* Calendrier et Inscription */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap mb-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <ClipboardList className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Autres Informations
            </h3>
            <div className="mt-1 space-y-1">
              <MobileNavLink href="#calendrier" onClick={toggleFormationMenu} isDropdown>
                <span className="text-center block w-full">Calendrier des Sessions</span>
              </MobileNavLink>
              <MobileNavLink href="#inscription" onClick={toggleFormationMenu} isDropdown>
                <span className="text-center block w-full">Inscription aux Ateliers</span>
              </MobileNavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Coaching/Mentorat Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-[#040504] z-50 transform transition-transform duration-300 ${isFormationMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-[#F8E061]">Coaching/Mentorat</span>
          <button onClick={toggleFormationMenu} className="p-2 text-[#F8E061]">
            <X size={24} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Coaching Professionnel */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Briefcase className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Coaching Professionnel
            </h3>
            <MobileNavLink href="#developpement-carriere" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Développement de Carrière</span>
            </MobileNavLink>
            <MobileNavLink href="#leadership" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Leadership et Management</span>
            </MobileNavLink>
          </div>

          {/* Mentorat Personnalisé */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Users className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Mentorat Personnalisé
            </h3>
            <MobileNavLink href="#objectifs-vie" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Objectifs de Vie</span>
            </MobileNavLink>
            <MobileNavLink href="#gestion-stress" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Gestion du Stress</span>
            </MobileNavLink>
          </div>

          {/* Programmes de Mentorat */}
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white dark:text-[#F8E061] flex items-center justify-center whitespace-nowrap" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }}>
              <Lightbulb className="mr-2" style={{ color: theme === 'dark' ? '#FFFFFF' : '' }} />
              Programmes de Mentorat
            </h3>
            <MobileNavLink href="#mentorat-entrepreneurs" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Mentorat pour Entrepreneurs</span>
            </MobileNavLink>
            <MobileNavLink href="#mentorat-etudiants" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Mentorat pour Étudiants</span>
            </MobileNavLink>
            <MobileNavLink href="#conferences" onClick={toggleFormationMenu} isDropdown>
              <span className="text-center block w-full">Conférences et Webinaires</span>
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
        className="px-3 py-2 rounded-md text-sm font-medium border transition-colors flex items-center gap-1 dropdown-button"
        aria-expanded={isOpen}
        style={{
          color: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          borderColor: document.body.getAttribute('data-theme') === 'dark' ? '#F8E061' : '#FFFFFF',
          backgroundColor: '#040504'
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-8 w-auto rounded-md shadow-lg bg-white border border-black z-50 dropdown-menu transition-all duration-200 ease-in-out opacity-100 transform translate-y-0">
          <div className="py-1 flex">
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
    className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${isDropdown ? 'block w-full text-left dropdown-link' : ''} ${className || ''}`}
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
