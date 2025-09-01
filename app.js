
        function showSection(sectionName) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => {
                btn.classList.remove('active');
            });

 
            document.getElementById(sectionName).classList.add('active');
            
            
            event.target.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
            profileImg.style.animation = 'none';
            setTimeout(() => {
                profileImg.style.animation = 'float 3s ease-in-out infinite';
            }, 10);


        function animateOnScroll() {
            const cards = document.querySelectorAll('.content-card');
            
            cards.forEach(card => {
                const cardTop = card.offsetTop;
                const cardHeight = card.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                
                if (scrollY > (cardTop + cardHeight - windowHeight)) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }


        window.addEventListener('load', () => {
          
            const cards = document.querySelectorAll('.content-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });

        window.addEventListener('scroll', animateOnScroll);

     
        function typeWriter() {
            const tagline = document.querySelector('.tagline');
            const originalText = 'Welcome to my personal space on the web';
            let i = 0;
            tagline.innerHTML = '';
            
            function type() {
                if (i < originalText.length) {
                    tagline.innerHTML += originalText.charAt(i);
                    i++;
                    setTimeout(type, 50);
                }
            }
            
            setTimeout(type, 1000);
        }

        window.addEventListener('load', typeWriter);