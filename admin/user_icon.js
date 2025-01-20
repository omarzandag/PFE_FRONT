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
  

  // script list gestion des employees 

  const gest_btn = document.getElementById('gest_emps');
  const gest_list = document.getElementById('list_gest_emps');
  
  // Toggle the dropdown menu
  gest_btn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking the icon
    const isVisible = gest_list.style.display === 'block';
    gest_list.style.display = isVisible ? 'none' : 'block';
  });
  
  // Close the dropdown when clicking outside
  document.addEventListener('click', () => {
    gest_list.style.display = 'none';
  });
  

  // script list getion des specialites 
  const gest_sepc = document.getElementById('gest_spec');
  const gest_list_spec = document.getElementById('list_gest_spec');
  
  // Toggle the dropdown menu
  gest_spec.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking the icon
    const isVisible = gest_list_spec.style.display === 'block';
    gest_list_spec.style.display = isVisible ? 'none' : 'block';
  });
  
  // Close the dropdown when clicking outside
  document.addEventListener('click', () => {
    gest_list_spec.style.display = 'none';
  });
   