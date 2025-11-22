import React, { useEffect } from 'react'
import "./styles/ImageSlider.css"
export default function ImageSlider() {
    
    useEffect(()=>{
                const slides = document.querySelectorAll('.slide');
                const dots = document.querySelectorAll('.slider-dot');
                const prevArrow = document.querySelector('.slider-arrow.prev');
                const nextArrow = document.querySelector('.slider-arrow.next');
                let currentSlide = 0;
                let slideInterval;

                // Function to show a specific slide
                function showSlide(n) {
                    // Hide all slides
                    slides.forEach(slide => slide.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));

                    // Ensure the index is within bounds
                    currentSlide = (n + slides.length) % slides.length;

                    // Show the current slide and activate corresponding dot
                    slides[currentSlide].classList.add('active');
                    dots[currentSlide].classList.add('active');
                }

                // Function to show next slide
                function nextSlide() {
                    showSlide(currentSlide + 1);
                }

                // Function to show previous slide
                function prevSlide() {
                    showSlide(currentSlide - 1);
                }

                // Start automatic sliding
                function startSlideShow() {
                    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
                }

                // Stop automatic sliding
                function stopSlideShow() {
                    clearInterval(slideInterval);
                }

                // Event listeners for arrows
                nextArrow.addEventListener('click', () => {
                    stopSlideShow();
                    nextSlide();
                    startSlideShow();
                });

                prevArrow.addEventListener('click', () => {
                    stopSlideShow();
                    prevSlide();
                    startSlideShow();
                });

                // Event listeners for dots
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        stopSlideShow();
                        showSlide(index);
                        startSlideShow();
                    });
                });

                // Pause slider when hovering over it
                const slider = document.querySelector('.slider');
                slider.addEventListener('mouseenter', stopSlideShow);
                slider.addEventListener('mouseleave', startSlideShow);

                // Initialize the slider
                startSlideShow();
            
    },[]);
  return (

        <section className="hero">
            <div className="slider">
                {/* <!-- Slide 1 --> */}
                <div className="slide active"
                    style={{backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
                    <div className="container">
                        <div className="slide-content">
                            <h1>Summer Sale Up To 50% Off</h1>
                            <p>Discover the latest trends in fashion, electronics, and home goods with exclusive
                                discounts.</p>
                            <div className="hero-buttons">
                                <a href="#" className="btn">Shop Now</a>
                                <a href="#" className="btn btn-secondary">New Arrivals</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Slide 2 --> */}
                <div className="slide"
                    style={{backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
                    <div className="container">
                        <div className="slide-content">
                            <h1>New Tech Collection</h1>
                            <p>Explore the latest gadgets and electronics with cutting-edge technology.</p>
                            <div className="hero-buttons">
                                <a href="#" className="btn">Shop Electronics</a>
                                <a href="#" className="btn btn-secondary">View Deals</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Slide 3 --> */}
                <div className="slide"
                    style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558769132-cb25c5d11e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
                    <div className="container">
                        <div className="slide-content">
                            <h1>Home & Living Essentials</h1>
                            <p>Transform your space with our curated collection of home decor and furniture.</p>
                            <div className="hero-buttons">
                                <a href="#" className="btn">Shop Home</a>
                                <a href="#" className="btn btn-secondary">Get Inspired</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Slide 4 --> */}
                <div className="slide"
                    style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"}}>
                    <div className="container">
                        <div className="slide-content">
                            <h1>Fashion Forward</h1>
                            <p>Stay ahead of trends with our exclusive fashion collection for all seasons.</p>
                            <div className="hero-buttons">
                                <a href="#" className="btn">Shop Fashion</a>
                                <a href="#" className="btn btn-secondary">View Lookbook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Slider Controls --> */}
            <div className="slider-arrow prev">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider-arrow next">
                <i className="fas fa-chevron-right"></i>
            </div>

            <div className="slider-controls">
                <div className="slider-dot active" data-slide="0"></div>
                <div className="slider-dot" data-slide="1"></div>
                <div className="slider-dot" data-slide="2"></div>
                <div className="slider-dot" data-slide="3"></div>
            </div>
        </section>
  )
}
