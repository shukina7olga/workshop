'use strict';
document.addEventListener('DOMContentLoaded', () => {

    //клавиатура экрана
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '' : '50%' ;
        };

        const typing = event => {
            const target = event.target;
            //trim мутод, удаляющий справа и слева пробелы. оставляет только символы
            if(target.tagName === 'BUTTON') {
                //console.log(target.textContent.trim());
                searchInput.value += target.textContent.trim();
                // сделать spase и backspase
            }
        };
            
        keyboardButton.addEventListener("click", toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);
            
    }

    //меню 
    {
        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });


        sidebarMenu.addEventListener('click',  e => {
            let target = e.target;
            target = target.closest('a[href="#"]');

            if(target) {
                const parentTarget = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach(elem => {
                    if(elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                });
            }
        });
    }

    // модальное окно

    {
        const divYoutuber = document.createElement('div');

        
    }

});