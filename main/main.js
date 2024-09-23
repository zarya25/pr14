"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and panes
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            // Add active class to the clicked button and corresponding pane
            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});
