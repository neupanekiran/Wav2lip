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

// GIF selection logic
document.querySelectorAll('.gif-item').forEach(gif => {
    gif.addEventListener('click', function() {
        // Deselect all GIFs
        document.querySelectorAll('.gif-item').forEach(g => g.classList.remove('selected'));
        
        // Select the clicked GIF
        this.classList.add('selected');
        document.querySelector('.input-field').disabled = false;  // Enable the input field
    });
});

// Handle Generate Button Click
document.getElementById('btn').addEventListener('click', function() {
    var inputField = document.querySelector('.input-field');

    // Check if the input is empty
    if (inputField.value.trim() === '') {
        alert("Please enter a prompt");
        return;
    }

    // Start the loading progress bar
    var percent = document.querySelector('.percent');
    var progress = document.querySelector('.progress');
    var count = 0;
    var per = 0;
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

    // Toggle visibility of the popup and blur
    var blur = document.getElementById("blur");
    var popup = document.getElementById("popup");
    blur.classList.add("active");
    popup.classList.add("active");

    // Hide the input section and the generate button
    document.getElementById('input-section').classList.add('hidden');
    document.querySelector('.generate-btn').classList.add('hidden');
});
