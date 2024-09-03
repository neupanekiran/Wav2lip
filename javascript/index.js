

// JavaScript for Dropdown Menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.closest('.profile')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
};
 document.getElementById('btn').addEventListener('click', toggle);
// JavaScript for Popup Toggle
function toggle() {
    // JavaScript for Loading Animation
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);

function animate() {
    if (count >= 100 && per >= 400) {
        clearInterval(loading);
    } else {
        per += 4;
        count += 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}

function startLoading() {
    count = 0; // Reset count to 0
    per = 0;   // Reset progress to 0
    progress.style.width = per + 'px';
    percent.textContent = count + '%';
    loading = setInterval(animate, 50);
}
    var blur = document.getElementById("blur");
    var popup = document.getElementById("popup");
    blur.classList.toggle("active");
    popup.classList.toggle("active");
    
    // Select elements
    var element1 = document.getElementById('input-section');
    var element2 = document.getElementById('gif');

    // Change className from 'null' to 'hidden'
    if (element1.classList.contains('null')) {
        element1.classList.replace('null', 'hidden');
    }
    if (element2.classList.contains('null')) {
        element2.classList.replace('null', 'hidden');
    }
}

// Adding event listener to button
document.getElementById('btn').addEventListener('click', function() {
    // Select elements
    var element1 = document.getElementById('input-section');
  

    // Change className from 'null' to 'hidden'
    if (element1.classList.contains('null')) {
        element1.classList.replace('null', 'hidden');
    }
});
