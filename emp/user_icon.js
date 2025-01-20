  // Select elements
  const userIcon = document.getElementById('user_icon');
  const dropdownMenu = document.getElementById('user_list');
  
  // Toggle the dropdown menu
  userIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking the icon
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
  });
  
  // Close the dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
  });
  