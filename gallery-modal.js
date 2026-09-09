/**
 * Affresco Studio - Büyük Görsel Galeri & Popup (Lightbox / Modal) Sistemi
 */

const galleryData = {
    "1": {
        title: "Klasik Affresco",
        subtitle: "İtalyan Saray Geleneği & Soft Yüzey",
        technique: "El Yapımı İtalyan Sıva",
        wallImg: "resimler/duvar1.jpg",
        textureImg: "resimler/texture1.jpg",
        story: "Geleneksel İtalyan saraylarının zamansız zarafetinden ilham alan bu çalışma, mekana asil ve dingin bir atmosfer katıyor. Katmanlı el işçiliğiyle dokunan soft yüzey, ışık oyunlarıyla birleşerek yaşam alanında adeta yaşayan bir sanat eseri etkisi yaratıyor.",
        tags: ["Geleneksel İtalyan", "El İşçiliği", "3D AI Previzyon", "Işık & Gölge Dengesi"]
    },
    "2": {
        title: "Modern Sanat",
        subtitle: "Minimalizmin Rafine Gücü & İpeksi Dokunuş",
        technique: "Saten İtalyan Bitiş",
        wallImg: "resimler/duvar2.jpg",
        textureImg: "resimler/texture2.jpg",
        story: "Minimalizmin güçlü estetiğini duvarlara taşıyan bu tasarım, sadeliğin içindeki lüksü arayanlar için kurgulandı. Mekanın ışık açısına göre form değiştiren ipeksi dokusu, çağdaş mobilyalarla kusursuz bir uyum yakalayarak rafine bir şıklık sunuyor.",
        tags: ["Minimalist", "Çağdaş Mimari", "İpeksi Doku", "3D AI Previzyon"]
    },
    "3": {
        title: "Antik Doku",
        subtitle: "Tarihin Yaşanmışlığı & Sanatsal Patina",
        technique: "Eskitme & Derin Çatlak Efekti",
        wallImg: "resimler/duvar3.jpg",
        textureImg: "resimler/texture3.jpg",
        story: "Yüzyılların yaşanmışlık hissini modern mimariyle buluşturan büyüleyici bir hikaye. Derin çatlak efektleri ve özel patina geçişleri, duvara tarihi bir karakter kazandırırken, mekanın genel atmosferine derin bir entelektüel ruh aşılıyor.",
        tags: ["Antik Patina", "Derin Doku", "Zamana Direnen Karakter", "Özel Karışım Sıva"]
    },
    "4": {
        title: "Rölyef ve Sanat",
        subtitle: "Işık ve Gölgenin Dansı & 3D Yüzey",
        technique: "Yüksek Rölyef & Heykelsi Form",
        wallImg: "resimler/duvar4.jpg",
        textureImg: "resimler/texture4.jpg",
        story: "Işık ve gölgenin duvar yüzeyinde adeta dans ettiği bu yüksek kabartma çalışma, üç boyutlu yapısıyla mekana hacim kazandırıyor. Monotonluğu tamamen kıran bu sanatsal rölyef, modern mimarinin en çarpıcı ve iddialı odak noktalarından birini oluşturuyor.",
        tags: ["3D Rölyef", "Heykelsi Kabartma", "Odak Duvarı", "3D AI Previzyon"]
    },
    "5": {
        title: "Altın Dokunuşlar",
        subtitle: "Mat Sıva ve Altın Varak Kontrastı",
        technique: "Varak & Mat İtalyan Sıva",
        wallImg: "resimler/duvar5.jpg",
        textureImg: "resimler/texture5.jpg",
        story: "Mat İtalyan sıvanın derinliği ile parıldayan altın varakların kontrastından doğan lüks bir senfoni. Gün ışığında farklı, akşam aydınlatmasında farklı parıltılar sunan bu özel tasarım, uygulandığı mekana elit ve göz alıcı bir prestij katıyor.",
        tags: ["Altın Varak", "Lüks İç Mekan", "Işıltılı Vurgu", "El Zanaatı"]
    },
    "6": {
        title: "Mural Tasarımı",
        subtitle: "Mekana Özgü Fırça Darbeleri & Kompozisyon",
        technique: "El Yapımı Sanatsal Mural",
        wallImg: "resimler/duvar6.jpg",
        textureImg: "resimler/texture6.jpg",
        story: "Duvarı sadece bir sınır olmaktan çıkarıp uçsuz bucaksız bir hikayeye dönüştüren tamamen el yapımı bir mural çalışması. Özgün çizgileri ve derin kompozisyonuyla mekanın ruhunu baştan aşağı değiştirirken, sanatı günlük yaşamın tam kalbine entegre ediyor.",
        tags: ["Özgün Çizim", "Sanatçı İmzası", "Mekansal Hikaye", "Akrilik & Sıva"]
    },
    "7": {
        title: "Doku Harmonisi",
        subtitle: "Doğal Malzemelerle Katmanlı Denge",
        technique: "Kompozit Mineral Tekstür",
        wallImg: "resimler/duvar7.jpg",
        textureImg: "resimler/texture7.jpg",
        story: "Yoğun tekstürlerin dengeli bir harmoniyle yüzeye işlendiği bu çalışma, dokunma hissi uyandıran özel bir karaktere sahip. Mekandaki ham odun, metal veya mermer gibi doğal elementlerle mükemmel bir kontrast oluşturarak bütünsel bir şıklık yakalıyor.",
        tags: ["Dokusal Zenginlik", "Ham Materyal Uyumu", "Taktil Deneyim", "Modern Tasarım"]
    },
    "8": {
        title: "Doğal Taş Dokusu",
        subtitle: "Mermer & Traverten Damarlarının Yorumu",
        technique: "Doğal Kireç & Mermer Tozu Bazlı Sıva",
        wallImg: "resimler/duvar8.jpg",
        textureImg: "resimler/texture8.jpg",
        story: "Doğanın milyonlarca yılda oluşturduğu mermer ve traverten damarlarının mimari bir saygı duruşu niteliğindeki yorumu. Ham taş estetiğinin pürüzsüz bir zarafetle duvara yansıtılması, mekana organik, güçlü ve sarsılmaz bir lüks algısı kazandırıyor.",
        tags: ["Mermer Tozu", "Traverten Efekti", "Organik Lüks", "Sarsılmaz Dayanıklılık"]
    },
    "9": {
        title: "Endüstriyel Beton",
        subtitle: "Loft Ruhu & Brütal Estetik",
        technique: "Brüt Beton Görünümlü Mineral Sıva",
        wallImg: "resimler/duvar9.jpg",
        textureImg: "resimler/texture9.jpg",
        story: "Loft kültürünün özgür ve asi ruhunu modern iç mekanlara getiren brüt beton yorumu. Ham görünümünün altındaki ipeksi dokunuş hissiyatı, modern tasarımla endüstriyel estetiğin ne kadar elit bir şekilde birleşebileceğini kanıtlıyor.",
        tags: ["Brüt Beton", "Loft Kültürü", "Endüstriyel Chic", "Modern & Cesur"]
    },
    "10": {
        title: "Metalik Yansımalar",
        subtitle: "Bronz & Bakır Oksitlenme Draması",
        technique: "Metalik Pigment & Reaktif Sıva",
        wallImg: "resimler/duvar10.jpg",
        textureImg: "resimler/texture10.jpg",
        story: "Bakır, bronz ve demir tonlarının zaman içindeki sanatsal oksitlenme hikayesi. Duvara uygulanan metalik yansımalar, mekanın aydınlatmasıyla birleştiğinde dramatik ve büyüleyici bir atmosfer yaratarak modern dekorasyonu zirveye taşıyor.",
        tags: ["Metalik Efekt", "Oksit Tonları", "Dramatik Aydınlatma", "Derin Parlaklık"]
    },
    "11": {
        title: "Rustik Akdeniz",
        subtitle: "Güneşin Isıttığı Taş Evler & Sıcak Tonlar",
        technique: "Kaba Dokulu Akdeniz Sıvası",
        wallImg: "resimler/duvar11.jpg",
        textureImg: "resimler/texture11.jpg",
        story: "Akdeniz sahillerinin, güneşin ısıttığı taş evlerin ve samimi dokuların modern bir stüdyo yorumu. Sıcak ton geçişleri ve kaba sıva estetiği, mekana anında samimi, davetkar ve huzurlu bir Akdeniz esintisi getiriyor.",
        tags: ["Akdeniz Stili", "Sıcak Toprak Tonları", "Samimi Dokular", "Dingin Atmosfer"]
    },
    "12": {
        title: "Geometrik Rölyef",
        subtitle: "Matematiksel Kusursuzluk & 3D Çizgiler",
        technique: "Hassas Şablonlu Boyutsal Rölyef",
        wallImg: "resimler/duvar12.jpg",
        textureImg: "resimler/texture12.jpg",
        story: "Matematiksel formların ve çizgisel düzenin sanatsal bir dışavurumu. Kusursuz simetrisi ve modern mimari çizgileri, özellikle minimalist ve kurumsal mekanlarda vizyoner ve çağ ötesi bir şıklık atmosferi yaratmak için tasarlandı.",
        tags: ["Geometrik Düzen", "3D Formlar", "Mimari Çizgiler", "Kurumsal & Prestijli"]
    },
    "13": {
        title: "Venedik Sıvası",
        subtitle: "Ayna Parlaklığında Asil İtalyan Klasiği",
        technique: "Stucco Veneziano (Ayna Bitiş)",
        wallImg: "resimler/duvar13.jpg",
        textureImg: "resimler/texture13.jpg",
        story: "Ayna parlaklığındaki pürüzsüz yüzeyiyle lüksün en saf hallerinden biri. Işığı kusursuzca yansıtan bu asil İtalyan klasiği, derin mermer dokusu illüzyonuyla uygulandığı her duvara benzersiz bir saray zarafeti sarıyor.",
        tags: ["Stucco Veneziano", "Ayna Parlaklığı", "Saray Zarafeti", "Yüksek Dayanıklılık"]
    },
    "14": {
        title: "Özel Tasarım Mural",
        subtitle: "Kişiye ve Mekanın Karakterine Özel Sanat",
        technique: "Özel Sanatçı Kompozisyonu",
        wallImg: "resimler/duvar14.jpg",
        textureImg: "resimler/texture14.jpg",
        story: "Mekanın mimari kimliği ve mobilya karakteri analiz edilerek tamamen kişiye özel kurgulanmış bir başyapıt. Sanatçının fırçasından çıkan her bir darbe, odanın odak noktasını sanatsal bir galeri lüksüne dönüştürmeyi amaçlıyor.",
        tags: ["Bespoke Sanat", "Özel Kurgu", "Galeri Hissiyatı", "Usta El İşçiliği"]
    }
};

let currentProjectId = "1";
let currentImageType = "wall"; // 'wall' veya 'texture'

function openProjectModal(id) {
    if (!galleryData[id]) return;
    currentProjectId = String(id);
    currentImageType = "wall";

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    renderModalContent();

    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // URL Hash güncelle (Örn: #proje-1)
    if (history.pushState) {
        history.pushState(null, null, '#proje-' + currentProjectId);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    // Hash temizle
    if (window.location.hash.startsWith('#proje-')) {
        history.pushState(null, null, window.location.pathname + window.location.search);
    }
}

function renderModalContent() {
    const data = galleryData[currentProjectId];
    if (!data) return;

    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Numara ve Başlık
    const formattedNum = String(currentProjectId).padStart(2, '0');
    document.getElementById('modal-index-badge').textContent = `KOLEKSİYON ${formattedNum} / 14`;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-technique').textContent = data.technique;
    document.getElementById('modal-story').textContent = data.story;

    // Etiketler
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'modal-tag';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    // Görseller
    updateActiveImage();

    // WhatsApp butonu bağlantısını dinamik yap
    const whatsappBtn = document.getElementById('modal-whatsapp-btn');
    if (whatsappBtn) {
        const msg = encodeURIComponent(`Merhaba, Affresco Studio "${data.title}" çalışması hakkında bilgi ve mekanımız için previzyon simülasyonu talep ediyoruz.`);
        whatsappBtn.href = `https://wa.me/905349854261?text=${msg}`;
    }

    // Küçük resimler (thumbnails)
    const thumbWall = document.getElementById('modal-thumb-wall');
    const thumbTexture = document.getElementById('modal-thumb-texture');
    if (thumbWall) thumbWall.style.backgroundImage = `url('${data.wallImg}')`;
    if (thumbTexture) thumbTexture.style.backgroundImage = `url('${data.textureImg}')`;
}

function updateActiveImage() {
    const data = galleryData[currentProjectId];
    if (!data) return;

    const mainImg = document.getElementById('modal-main-img');
    const thumbWall = document.getElementById('modal-thumb-wall');
    const thumbTexture = document.getElementById('modal-thumb-texture');
    const imageCaption = document.getElementById('modal-img-caption');

    const targetSrc = currentImageType === 'wall' ? data.wallImg : data.textureImg;
    const captionText = currentImageType === 'wall' 
        ? 'Mekan Uygulaması & 3D Dijital Previzyon' 
        : 'Sanatsal Doku & El İşçiliği Detayı (Yakın Çekim)';

    // Görsel değişimi için yumuşak efekt
    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = targetSrc;
        mainImg.alt = `${data.title} - ${captionText}`;
        if (imageCaption) imageCaption.textContent = captionText;
        mainImg.style.opacity = '1';
    }, 150);

    // Thumbnail aktiflik durumu
    if (thumbWall && thumbTexture) {
        if (currentImageType === 'wall') {
            thumbWall.classList.add('active');
            thumbTexture.classList.remove('active');
        } else {
            thumbWall.classList.remove('active');
            thumbTexture.classList.add('active');
        }
    }
}

function switchModalImage(type) {
    if (type !== 'wall' && type !== 'texture') return;
    currentImageType = type;
    updateActiveImage();
}

function nextProject() {
    let nextId = parseInt(currentProjectId, 10) + 1;
    if (nextId > 14) nextId = 1;
    currentProjectId = String(nextId);
    currentImageType = "wall";
    renderModalContent();
    if (history.pushState) {
        history.pushState(null, null, '#proje-' + currentProjectId);
    }
}

function prevProject() {
    let prevId = parseInt(currentProjectId, 10) - 1;
    if (prevId < 1) prevId = 14;
    currentProjectId = String(prevId);
    currentImageType = "wall";
    renderModalContent();
    if (history.pushState) {
        history.pushState(null, null, '#proje-' + currentProjectId);
    }
}

// --- SAYFA KAYDIKÇA BÜYÜYEN GÖRSEL SUNUM MOTORU (SİYAH FOG & SCROLL-DRIVEN SCALE) ---
function updateScrollShowcase() {
    const cards = document.querySelectorAll('.showcase-card');
    if (!cards || cards.length === 0) return;

    const windowHeight = window.innerHeight;
    const centerY = windowHeight / 2;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        // Görünüm alanının çok dışındaysa işlem yapma
        if (rect.bottom < -100 || rect.top > windowHeight + 100) {
            return;
        }

        // Ekran merkezine uzaklık
        const distFromCenter = Math.abs(cardCenter - centerY);
        const maxDist = windowHeight * 0.70;

        // 0 ile 1 arasında yumuşak orantı
        let progress = 1 - Math.min(distFromCenter / maxDist, 1);
        // Easing eğrisi (sinusoidal yumuşatma)
        const smoothProgress = Math.sin(progress * (Math.PI / 2));

        // Ölçeklendirme: %88'den başlar, merkezde %102'ye kadar büyür
        const scale = 0.88 + (smoothProgress * 0.14);
        
        // SİYAH FOG MEKANİZMASI:
        // Kenarlarda %28 parlaklık (derin siyah gölge), merkezde %100 berrak aydınlık
        const brightness = 0.28 + (smoothProgress * 0.72);
        // Siyah sis perdesi opaklığı: Kenarlarda %82 siyah sis, merkezde 0
        const darkFog = (1 - smoothProgress) * 0.82;
        // Dikey süzülme hareketi (aşağıdan yukarı yumuşak giriş)
        const translateY = (1 - smoothProgress) * 24;

        const media = card.querySelector('.showcase-media-wrap');
        const img = card.querySelector('.showcase-img');
        if (media) {
            media.style.transform = `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
            media.style.opacity = '1'; // Arka planla karışıp beyaz pus oluşturmaması için tam opak
            media.style.setProperty('--dark-fog', darkFog.toFixed(3));
            
            if (img) {
                img.style.filter = `brightness(${brightness.toFixed(3)})`;
            }

            // Merkez odak ışıltısı
            if (smoothProgress > 0.70) {
                card.classList.add('is-focused');
            } else {
                card.classList.remove('is-focused');
            }
        }
    });
}

// --- NAVİGASYON ŞEFFAF / SCROLLED DURUM KONTROLCÜSÜ ---
function handleNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// --- KARŞILAMA SLIDER'I (AUTO-ROTATE & DRAGGABLE) ---
function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    const track = document.getElementById('hero-track');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slider || !track) return;

    const slides = track.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoplayTimer = null;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationId = null;

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function setSliderPosition() {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setPositionByIndex(smooth = true) {
        currentTranslate = -currentIndex * slider.offsetWidth;
        prevTranslate = currentTranslate;
        track.style.transition = smooth ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
        setSliderPosition();

        // Aktif slayt ve nokta durumları
        slides.forEach((slide, idx) => {
            if (idx === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        setPositionByIndex(true);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 4500);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    // Sürükleme Başlangıcı
    function touchStart(e) {
        // Tıklanan şey buton veya linkse sürükleme başlatma
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        stopAutoplay();
        isDragging = true;
        startX = getPositionX(e);
        track.style.transition = 'none';
        slider.classList.add('is-dragging');
        animationId = requestAnimationFrame(animation);
    }

    // Sürükleme Hareketi
    function touchMove(e) {
        if (!isDragging) return;
        const currentX = getPositionX(e);
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
    }

    // Sürükleme Bitişi / Bırakma
    function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('is-dragging');
        cancelAnimationFrame(animationId);

        const movedBy = currentTranslate - prevTranslate;

        // 50 pikselden fazla çekildiyse yönüne göre fırlat
        if (movedBy < -50) {
            goToSlide(currentIndex + 1);
        } else if (movedBy > 50) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex);
        }

        startAutoplay();
    }

    // Mouse Dinleyicileri
    slider.addEventListener('mousedown', touchStart);
    window.addEventListener('mousemove', touchMove);
    window.addEventListener('mouseup', touchEnd);

    // Touch (Mobil) Dinleyicileri
    slider.addEventListener('touchstart', touchStart, { passive: true });
    slider.addEventListener('touchmove', touchMove, { passive: true });
    slider.addEventListener('touchend', touchEnd);

    // Mouse üzerine gelince otomatik dönmeyi durdur
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', () => {
        if (!isDragging) startAutoplay();
    });

    // Ok Butonları
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentIndex - 1);
            startAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentIndex + 1);
            startAutoplay();
        });
    }

    // Noktalar
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(dot.getAttribute('data-index'), 10);
            goToSlide(idx);
            startAutoplay();
        });
    });

    window.addEventListener('resize', () => {
        setPositionByIndex(false);
    });

    setPositionByIndex(false);
    startAutoplay();
}

// Klavye Olayları ve Tıklama Dinleyicileri
document.addEventListener('DOMContentLoaded', () => {
    // Header Şeffaf / Scrolled Durumunu Başlat
    handleNavScroll();

    // Karşılama Slider'ını Başlat
    initHeroSlider();

    // Scroll Dinleyicisi
    let ticking = false;
    window.addEventListener('scroll', () => {
        handleNavScroll();

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollShowcase();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', updateScrollShowcase);
    
    // İlk yüklemede ekrandakileri hemen ölçeklendir
    setTimeout(updateScrollShowcase, 100);
    setTimeout(updateScrollShowcase, 400);

    // ESC ve Ok Tuşları
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('project-modal');
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowRight') {
            nextProject();
        } else if (e.key === 'ArrowLeft') {
            prevProject();
        }
    });

    // Modal dışına tıklayınca kapatma
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                closeProjectModal();
            }
        });
    }

    // URL kontrolü (Sayfa açıldığında doğrudan belirli bir proje istenmişse)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#proje-')) {
        const id = hash.replace('#proje-', '');
        if (galleryData[id]) {
            setTimeout(() => openProjectModal(id), 250);
        }
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        if (id && galleryData[id]) {
            setTimeout(() => openProjectModal(id), 250);
        }
    }
});

// --- LÜKS MİMARİ DANIŞMANLIK & DOĞRUDAN WHATSAPP İLETİŞİM KONTROLCÜSÜ ---
function handleInquirySubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name ? form.name.value.trim() : '';
    const phone = form.phone ? form.phone.value.trim() : '';
    const email = form.email ? form.email.value.trim() : '';
    const space = form.space ? form.space.value.trim() : '';
    const projectTypeInput = form.querySelector('input[name="project_type"]:checked');
    const projectType = projectTypeInput ? projectTypeInput.value : 'Klasik İtalyan Sıva';
    const message = form.message ? form.message.value.trim() : '';

    // WhatsApp Mesaj Metnini Oluştur
    let waText = `Merhaba Affresco Studio,\nWeb siteniz üzerinden mimari proje ve teklif talebinde bulunuyorum:\n\n`;
    waText += `👤 *İsim:* ${name}\n`;
    waText += `📞 *Telefon:* ${phone}\n`;
    if (email) waText += `✉️ *E-Posta:* ${email}\n`;
    if (space) waText += `📐 *Metraj / Şehir:* ${space}\n`;
    waText += `🎨 *Mimari Tercih:* ${projectType}\n`;
    if (message) waText += `📝 *Proje Notları:* ${message}\n`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/905349854261?text=${encodedText}`;

    // Butonda anlık görsel geri bildirim ver
    const submitBtn = form.querySelector('#btn-submit-inquiry');
    if (submitBtn) {
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <span>WhatsApp Açılıyor...</span>
            <span class="btn-submit-arrow">✓</span>
        `;
        setTimeout(() => {
            submitBtn.innerHTML = originalHTML;
        }, 3000);
    }

    // Tek tıkla doğrudan WhatsApp'ı aç
    const waWindow = window.open(waUrl, '_blank');
    if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
        window.location.href = waUrl;
    }
}
