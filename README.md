# Как работать с JS-кодом
1. В html должна быть обертка всего контента. В данном JS-коде оберткой является 'wrapper'.
1. Поместить в html следующую разметку:
```html
<div class="wrapper">
    <div class="modal" id="modal">
       <div class="modal__body">
          <div class="modal__content">
             <a class="modal__close close-modal" href="#">Закрыть модальное окно</a>
          </div>
       </div>
    </div>
</div>
```
## Важные нюансы селекторов
`.modal` - Модальное окно с "затемнением" при открытии.

`.modal__body` - Элемент модального окна. Используется для центрирования контента внутри.

`.modal__content` - Контент модального окна.

Создать `id` для модального окна. Напрм: `id="modal"`.

Создать в разметке кнопку-ссылку, которая будет открывать модальное окно. Задать ей класс `".modal-link"` с href равным названию `id` модального окна и "#" в начале. Напрм: `href="#modal"`.

При смене скорости анимации в css, в js нужно изменить значение в переменной `timeout` на такое же.
