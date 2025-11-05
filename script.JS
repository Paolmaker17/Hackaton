document.addEventListener('DOMContentLoaded', () => {
            const revealElements = document.querySelectorAll('.scroll-reveal')

            if (!('IntersectionObserver' in window)) {
                revealElements.forEach(el => el.classList.add('is-inview'))
                return
            }
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -12% 0px', // rivela leggermente prima di farlo tutto
                threshold: 0.8                 // 8% di un elemento
            }

            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-inview')
                        observer.unobserve(entry.target)
                    }
                })
            }

            const observer = new IntersectionObserver(observerCallback, observerOptions)
            revealElements.forEach(el => observer.observe(el))
        })