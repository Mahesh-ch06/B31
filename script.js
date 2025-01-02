// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dayFilter = document.getElementById('day-filter');
    const subjectFilter = document.getElementById('subject-filter');
    const instructorFilter = document.getElementById('instructor-filter');
    const resetFilters = document.getElementById('reset-filters');
    const rows = document.querySelectorAll('#timetable tbody tr');
  
    const filterTimetable = () => {
      const dayValue = dayFilter.value;
      const subjectValue = subjectFilter.value.toLowerCase();
      const instructorValue = instructorFilter.value.toLowerCase();
  
      rows.forEach(row => {
        const day = row.getAttribute('data-day');
        const cells = row.querySelectorAll('td');
        const [time, subject, instructor] = [cells[0], cells[1], cells[2]];
        
        const matchesDay = day === dayValue;
        const matchesSubject = subject.textContent.toLowerCase().includes(subjectValue);
        const matchesInstructor = instructor.textContent.toLowerCase().includes(instructorValue);
  
        if (matchesDay && matchesSubject && matchesInstructor) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    };
  
    dayFilter.addEventListener('change', filterTimetable);
    subjectFilter.addEventListener('input', filterTimetable);
    instructorFilter.addEventListener('input', filterTimetable);
  
    resetFilters.addEventListener('click', () => {
      dayFilter.value = 'Monday';
      subjectFilter.value = '';
      instructorFilter.value = '';
      filterTimetable();
    });
  
    // Initialize filter
    filterTimetable();
  });
  
