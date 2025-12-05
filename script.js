// Portfolio JavaScript - Load data from info.json and populate the page

class Portfolio {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.populateProfile();
            this.populateNavigation();
            this.populateAbout();
            this.populateServices();
            this.setupNavigation();
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    async loadData() {
        try {
            const response = await fetch('info.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
    }

    populateProfile() {
        const { personalInfo } = this.data;
        
        // Set profile information
        document.getElementById('profileName').textContent = personalInfo.name;
        document.getElementById('profileTitle').textContent = personalInfo.title;
        document.getElementById('profileEmail').textContent = personalInfo.email;
     
        document.getElementById('profileBirthday').textContent = personalInfo.birthday;
        document.getElementById('profileLocation').textContent = personalInfo.location;
        
        // Set profile image
        const profileImg = document.getElementById('profileImage');
        profileImg.src = personalInfo.profileImage;
        profileImg.alt = `${personalInfo.name} Profile Picture`;
        
        // Set social links
        document.getElementById('githubLink').href = personalInfo.socialLinks.github;
        document.getElementById('linkedinLink').href = personalInfo.socialLinks.linkedin;
        
        // Update page title
        document.title = `Portfolio - ${personalInfo.name}`;
    }

    populateNavigation() {
        const navContainer = document.getElementById('navigation');
        const { navigation } = this.data;
        
        navContainer.innerHTML = navigation.map(item => `
            <button 
                class="px-6 py-2 rounded-md transition-colors ${
                    item.active 
                        ? 'bg-primary text-dark font-medium' 
                        : 'text-gray-300 hover:text-white'
                }"
                data-section="${item.href.substring(1)}"
            >
                ${item.name}
            </button>
        `).join('');
    }

    populateAbout() {
        const { about } = this.data;
        document.getElementById('aboutDescription').textContent = about.description;
        document.getElementById('aboutMotivation').textContent = about.motivation;
    }

    populateServices() {
        const servicesGrid = document.getElementById('servicesGrid');
        const { services } = this.data;
        
        servicesGrid.innerHTML = services.map(service => `
            <div class="bg-card-bg rounded-2xl p-6 hover:bg-gray-600 transition-colors duration-300">
                <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        ${service.icon}
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-3">${service.title}</h3>
                        <p class="text-gray-400 leading-relaxed">${service.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('[data-section]');
        
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                navButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-dark', 'font-medium');
                    btn.classList.add('text-gray-300', 'hover:text-white');
                });
                
                // Add active class to clicked button
                e.target.classList.add('bg-primary', 'text-dark', 'font-medium');
                e.target.classList.remove('text-gray-300', 'hover:text-white');
                
                // Get section name
                const sectionName = e.target.dataset.section;
                this.showSection(sectionName);
            });
        });
    }

    showSection(sectionName) {
        // Hide all sections
        const sections = ['about', 'resume', 'contact', 'services'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                element.classList.add('hidden');
            }
        });

        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            
            // If showing about, also show services
            if (sectionName === 'about') {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.classList.remove('hidden');
                }
            }
        }

        // Smooth scroll to top on section change
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Handle responsive behavior
window.addEventListener('resize', () => {
    // Add any responsive handling if needed
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
