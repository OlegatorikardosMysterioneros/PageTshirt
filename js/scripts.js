

document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buy-button');

    // Проверяем, существует ли кнопка
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            alert('Товар добавлен в корзину!');
        });
    }
});
const productImage = document.getElementById('product-image');





document.addEventListener('DOMContentLoaded', function() {
    // Получаем изображение
    const productImage = document.getElementById('product-image');

    // Получаем все кнопки для выбора цвета
    const colorButtons = document.querySelectorAll('.color-option');

    // Добавляем обработчик события для каждой кнопки выбора цвета
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем цвет из текста кнопки
            const color = button.id;

            // В зависимости от выбранного цвета меняем изображение
            switch (color) {
                case 'white':
                    productImage.src = 'img/tshirt_white.jpg';
                    break;
                case 'yellow':
                    productImage.src = 'img/tshirt_yellow.jpg';
                    break;
                case 'green':
                    productImage.src = 'img/tshirt_green.jpg';
                    break;
                default:
                    break;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент с ценой товара
    const productPrice = document.getElementById('product-price');

    // Получаем все кнопки для выбора размера
    const sizeButtons = document.querySelectorAll('.size-option');

    // Добавляем обработчик события для каждой кнопки выбора размера
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем размер из текста кнопки
            const size = button.textContent;

            // В зависимости от выбранного размера меняем цену
            switch (size) {
                case 'S':
                    productPrice.textContent = '1000₽';
                    break;
                case 'M':
                    productPrice.textContent = '1500₽';
                    break;
                case 'L':
                    productPrice.textContent = '2000₽';
                    break;
                default:
                    break;
            }
        });
    });
});