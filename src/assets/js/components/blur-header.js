const blurHeader = () => {
    /*=============== ADD BLUR HEADER ===============*/
    const header = document.getElementById('header');
    
    // Проверка существования элемента header
    if (!header) return;
    
    // Используем requestAnimationFrame для оптимизации производительности
    let ticking = false;
    
    const blurHeaderF = () => {
        if (window.scrollY >= 50) {
            header.classList.add('blur-header');
        } else {
            header.classList.remove('blur-header');
        }
        ticking = false;
    };
    
    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(blurHeaderF);
            ticking = true;
        }
    };
    
    // Добавляем обработчик события прокрутки с параметром passive для улучшения производительности
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Установка начального состояния
    blurHeaderF();
    
    // Возвращаем функцию для удаления обработчика при необходимости
    return () => {
        window.removeEventListener('scroll', onScroll);
    };
};

export default blurHeader;