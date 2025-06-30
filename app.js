// KPD Peer Support Directory JavaScript

// Application data
const appData = {
  "teamMembers": [
    {
      "id": 1,
      "name": "Sergeant Maria Rodriguez",
      "title": "Peer Support Team Lead",
      "yearsOfService": 12,
      "specializations": ["Crisis Intervention", "Family Support", "PTSD Assistance"],
      "phone": "254-501-8830",
      "email": "mrodriguez@killeentx.gov",
      "availability": "24/7 On-Call",
      "bio": "Sergeant Rodriguez has been with KPD for 12 years and leads our peer support team. She specializes in crisis intervention and family support services. She completed advanced training in Critical Incident Stress Management and maintains certifications in peer support counseling.",
      "certifications": ["CISM Certified", "Peer Support Specialist", "Mental Health First Aid"],
      "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      "id": 2,
      "name": "Officer David Chen",
      "title": "Peer Support Specialist",
      "yearsOfService": 8,
      "specializations": ["Officer Wellness", "Stress Management", "Substance Abuse Support"],
      "phone": "254-501-8831",
      "email": "dchen@killeentx.gov",
      "availability": "Days - Mon-Fri",
      "bio": "Officer Chen brings 8 years of law enforcement experience and specializes in officer wellness and stress management. He has personal experience overcoming challenges and is passionate about helping fellow officers maintain their mental health.",
      "certifications": ["Peer Support Training", "Stress Management Counselor", "Addiction Recovery Support"],
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      "id": 3,
      "name": "Detective Lisa Thompson",
      "title": "Peer Support Specialist",
      "yearsOfService": 15,
      "specializations": ["Trauma Support", "Critical Incidents", "Women Officers Support"],
      "phone": "254-501-8832",
      "email": "lthompson@killeentx.gov",
      "availability": "Nights - Thu-Sun",
      "bio": "Detective Thompson has 15 years with KPD and specializes in trauma support following critical incidents. She provides specialized support for female officers and has extensive training in trauma-informed peer support.",
      "certifications": ["Advanced CISM", "Trauma-Informed Care", "Gender-Specific Support"],
      "image": "https://images.unsplash.com/photo-1494790108755-2616c6c1ad74?w=300&h=300&fit=crop&crop=face"
    },
    {
      "id": 4,
      "name": "Corporal James Wilson",
      "title": "Peer Support Specialist",
      "yearsOfService": 10,
      "specializations": ["Financial Counseling", "Career Guidance", "Retirement Planning"],
      "phone": "254-501-8833",
      "email": "jwilson@killeentx.gov",
      "availability": "Days - Tue-Sat",
      "bio": "Corporal Wilson combines his law enforcement experience with financial planning expertise to help officers with financial stress and career planning. He provides guidance on financial wellness and retirement preparation.",
      "certifications": ["Peer Support Certified", "Financial Counselor", "Career Development"],
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      "id": 5,
      "name": "Officer Amanda Foster",
      "title": "Peer Support Specialist",
      "yearsOfService": 6,
      "specializations": ["Family Relations", "Work-Life Balance", "New Officer Support"],
      "phone": "254-501-8834",
      "email": "afoster@killeentx.gov",
      "availability": "Swing Shift - Wed-Sun",
      "bio": "Officer Foster specializes in helping officers balance family life with the demands of law enforcement. She provides support for new officers and their families as they adjust to the profession.",
      "certifications": ["Family Support Specialist", "New Officer Mentoring", "Peer Support Training"],
      "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      "id": 6,
      "name": "Lieutenant Robert Martinez",
      "title": "Wellness Coordinator",
      "yearsOfService": 18,
      "specializations": ["Program Development", "Supervision", "Administrative Support"],
      "phone": "254-501-8829",
      "email": "rmartinez@killeentx.gov",
      "availability": "Admin Hours - Mon-Fri",
      "bio": "Lieutenant Martinez oversees the KPD wellness program and coordinates peer support services. With 18 years of experience, he ensures our team maintains the highest standards of support for all department personnel.",
      "certifications": ["Wellness Program Management", "Clinical Supervision", "Program Development"],
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ],
  "emergencyContacts": [
    {
      "name": "24/7 Crisis Hotline",
      "phone": "988",
      "description": "National Suicide & Crisis Lifeline"
    },
    {
      "name": "KPD Peer Support Hotline",
      "phone": "254-501-HELP (4357)",
      "description": "24/7 confidential peer support line"
    },
    {
      "name": "Texas Crisis Text Line",
      "phone": "Text HOME to 741741",
      "description": "24/7 crisis support via text"
    },
    {
      "name": "Employee Assistance Program",
      "phone": "1-800-327-4692",
      "description": "Confidential counseling and support services"
    }
  ],
  "aboutInfo": {
    "mission": "The KPD Peer Support Team provides confidential, voluntary support to officers and their families during times of personal or professional stress. Our trained peer supporters offer understanding, guidance, and resources to help our law enforcement family maintain their mental health and resilience.",
    "confidentiality": "All peer support interactions are strictly confidential within the limits of the law. Peer supporters are bound by confidentiality policies and will only share information when legally mandated or when there is imminent danger.",
    "whenToUse": "Consider contacting peer support for: Critical incident stress, personal problems affecting work, relationship issues, financial stress, substance abuse concerns, family problems, grief and loss, or when you just need someone who understands the job to talk to.",
    "notTherapy": "Peer support is not therapy or counseling. Our team members are trained officers who provide support based on shared experiences. For clinical treatment, we can provide referrals to qualified mental health professionals."
  }
};

// DOM elements
let currentMember = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing KPD Peer Support Directory...');
    initializeApp();
});

function initializeApp() {
    loadTeamMembers();
    loadEmergencyContacts();
    loadAboutContent();
    setupEventListeners();
    setupSmoothScrolling();
    console.log('Application initialized successfully');
}

// Load team members
function loadTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) {
        console.error('Team grid element not found');
        return;
    }
    
    teamGrid.innerHTML = '';
    
    appData.teamMembers.forEach(member => {
        const memberCard = createTeamMemberCard(member);
        teamGrid.appendChild(memberCard);
    });
    
    console.log(`Loaded ${appData.teamMembers.length} team members`);
}

// Create team member card
function createTeamMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'team-member';
    card.setAttribute('data-member-id', member.id);
    card.style.cursor = 'pointer';
    
    // Create specialization tags
    const specializationTags = member.specializations.map(spec => 
        `<span class="specialization-tag">${spec}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="member-photo">
            <img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzIxODA4RCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S1BEPC90ZXh0Pjwvc3ZnPg=='">
        </div>
        <h3 class="member-name">${member.name}</h3>
        <p class="member-title">${member.title}</p>
        <div class="member-specializations">
            ${specializationTags}
        </div>
        <p class="member-availability">${member.availability}</p>
    `;
    
    // Add click event listener
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Clicked on member:', member.name);
        openMemberModal(member);
    });
    
    // Add keyboard support
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${member.name}`);
    
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openMemberModal(member);
        }
    });
    
    return card;
}

// Load emergency contacts
function loadEmergencyContacts() {
    const emergencyGrid = document.getElementById('emergencyGrid');
    if (!emergencyGrid) {
        console.error('Emergency grid element not found');
        return;
    }
    
    emergencyGrid.innerHTML = '';
    
    appData.emergencyContacts.forEach(contact => {
        const contactCard = createEmergencyCard(contact);
        emergencyGrid.appendChild(contactCard);
    });
    
    console.log(`Loaded ${appData.emergencyContacts.length} emergency contacts`);
}

// Create emergency contact card
function createEmergencyCard(contact) {
    const card = document.createElement('div');
    card.className = 'emergency-card';
    
    // Format phone number for href
    const phoneHref = contact.phone.startsWith('Text') ? 
        `sms:741741?body=HOME` : 
        `tel:${contact.phone.replace(/\D/g, '')}`;
    
    card.innerHTML = `
        <h3>${contact.name}</h3>
        <a href="${phoneHref}" class="emergency-phone">${contact.phone}</a>
        <p class="emergency-description">${contact.description}</p>
    `;
    
    return card;
}

// Load about content
function loadAboutContent() {
    const elements = {
        'missionText': appData.aboutInfo.mission,
        'confidentialityText': appData.aboutInfo.confidentiality,
        'whenToUseText': appData.aboutInfo.whenToUse,
        'notTherapyText': appData.aboutInfo.notTherapy
    };
    
    Object.entries(elements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        } else {
            console.warn(`Element with ID ${id} not found`);
        }
    });
}

// Open member modal
function openMemberModal(member) {
    console.log('Opening modal for:', member.name);
    currentMember = member;
    const modal = document.getElementById('memberModal');
    
    if (!modal) {
        console.error('Member modal not found');
        return;
    }
    
    // Populate modal content
    const elements = {
        'modalName': member.name,
        'modalTitle': member.title,
        'modalYears': `${member.yearsOfService} years of service`,
        'modalAvailability': member.availability,
        'modalBio': member.bio
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
    
    // Set image
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = member.image;
        modalImage.alt = member.name;
    }
    
    // Set contact links
    const modalPhone = document.getElementById('modalPhone');
    if (modalPhone) {
        modalPhone.textContent = member.phone;
        modalPhone.href = `tel:${member.phone.replace(/\D/g, '')}`;
    }
    
    const modalEmail = document.getElementById('modalEmail');
    if (modalEmail) {
        modalEmail.textContent = member.email;
        modalEmail.href = `mailto:${member.email}`;
    }
    
    // Specializations
    const specializationsContainer = document.getElementById('modalSpecializations');
    if (specializationsContainer) {
        specializationsContainer.innerHTML = member.specializations.map(spec => 
            `<span class="specialization-tag">${spec}</span>`
        ).join('');
    }
    
    // Certifications
    const certificationsContainer = document.getElementById('modalCertifications');
    if (certificationsContainer) {
        certificationsContainer.innerHTML = member.certifications.map(cert => 
            `<span class="specialization-tag">${cert}</span>`
        ).join('');
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    const closeButton = document.getElementById('closeModal');
    if (closeButton) {
        setTimeout(() => closeButton.focus(), 100);
    }
}

// Close member modal
function closeMemberModal() {
    console.log('Closing member modal');
    const modal = document.getElementById('memberModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
    currentMember = null;
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Modal close buttons
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    if (closeModal) {
        closeModal.addEventListener('click', closeMemberModal);
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeMemberModal);
    }
    
    // Contact member button
    const contactMemberBtn = document.getElementById('contactMemberBtn');
    if (contactMemberBtn) {
        contactMemberBtn.addEventListener('click', () => {
            if (currentMember) {
                window.location.href = `tel:${currentMember.phone.replace(/\D/g, '')}`;
            }
        });
    }
    
    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', openQRModal);
    }
    
    // QR modal close
    const closeQrModal = document.getElementById('closeQrModal');
    if (closeQrModal) {
        closeQrModal.addEventListener('click', closeQRModal);
    }
    
    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
    
    // Close modals when clicking outside
    const memberModal = document.getElementById('memberModal');
    if (memberModal) {
        memberModal.addEventListener('click', (e) => {
            if (e.target.id === 'memberModal') {
                closeMemberModal();
            }
        });
    }
    
    const qrModal = document.getElementById('qrModal');
    if (qrModal) {
        qrModal.addEventListener('click', (e) => {
            if (e.target.id === 'qrModal') {
                closeQRModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMemberModal();
            closeQRModal();
        }
    });
    
    console.log('Event listeners setup complete');
}

// QR Code functionality
function openQRModal() {
    const modal = document.getElementById('qrModal');
    const qrContainer = document.getElementById('qrcode');
    
    if (!modal || !qrContainer) {
        console.error('QR modal elements not found');
        return;
    }
    
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // Check if QRCode library is available
    if (typeof QRCode !== 'undefined') {
        // Generate QR code with current URL
        const currentUrl = window.location.href;
        QRCode.toCanvas(qrContainer, currentUrl, {
            width: 200,
            height: 200,
            color: {
                dark: '#21808D',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('QR Code generation failed:', error);
                qrContainer.innerHTML = '<p>QR Code generation failed</p>';
            }
        });
    } else {
        // Fallback if QR library doesn't load
        qrContainer.innerHTML = '<div style="width: 200px; height: 200px; background: #21808D; color: white; display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 8px;"><div>QR Code<br>Library Loading...</div></div>';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQRModal() {
    const modal = document.getElementById('qrModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .footer a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = 'var(--shadow-lg)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzIxODA4RCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S1BEPC90ZXh0Pjwvc3ZnPg==';
                this.alt = 'KPD Team Member';
            });
        });
    }, 500);
});