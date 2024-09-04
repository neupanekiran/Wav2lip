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

// JavaScript for Popup Toggle and Progress Bar
function toggle() {
    var inputSection = document.getElementById('input-section');
    var inputField = inputSection.querySelector('.input-field');

    if (inputField && inputField.value.trim() === '') {
        alert("Please enter a prompt");
        return; // Exit the function to prevent further execution
    }

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

    function startLoading() {
        count = 0; // Reset count to 0
        per = 0;   // Reset progress to 0
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
        loading = setInterval(animate, 50);
    }

    // Toggle visibility of the popup and blur
    var blur = document.getElementById("blur");
    var popup = document.getElementById("popup");
    blur.classList.toggle("active");
    popup.classList.toggle("active");

    // Manage visibility of the input section
    if (inputSection.classList.contains('null')) {
        inputSection.classList.replace('null', 'hidden');
    }
}

// GIF selection logic
document.querySelectorAll('.gif-item').forEach(gif => {
    gif.addEventListener('click', function() {
        // Deselect all GIFs
        document.querySelectorAll('.gif-item').forEach(g => g.classList.remove('selected'));
        
        // Select the clicked GIF
        this.classList.add('selected');

        // Enable the input section
        var inputSection = document.getElementById('input-section');
        inputSection.classList.remove('hidden');
        inputSection.classList.add('null');
        
        // Enable the input field
        document.querySelector('.input-field').disabled = false;
    });
});

// Disable the input field initially
document.querySelector('.input-field').disabled = true;

// Existing event listener for the button
document.getElementById('btn').addEventListener('click', function() {
    // Ensure the progress bar starts
    toggle();
});
