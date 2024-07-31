document.addEventListener('DOMContentLoaded', function () {  //The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
// Hide the modal initially

//This line prevents the default behavior of the form submission.e: This refers to the event object passed to the event listener function.
//preventDefault(): This method prevents the browser's default action for the event, which in this case is submitting the form data.

    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
// 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value ||  "a course"; // Fallback to "a course" if no input
// ||: This is the logical OR operator. It evaluates the left-hand side expression first. If it's truthy (not null, undefined, 0, empty string, or false), the entire expression evaluates to the left-hand side value. If the left-hand side is falsy, the right-hand side is evaluated and becomes the value of the expression.
// "a course": This is a string literal representing the default value if the
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
//.trim(): This method removes whitespace from both ends of a string.

      // 🚨 Generate certificate content dynamically
      //This code dynamically generates the content of a certificate based on the provided variables. The resulting HTML will be inserted into the element with the ID certificateContent.
      certificateContent.innerHTML = `
      <h3>${studentName}</h3>
                  <h3>Certificate of Completion</h3>
            <p>This certifies that <strong>${studentName}</strong> has successfully completed <strong>${courseName}</strong>.</p>
            <p><em>${personalMessage}</em></p>
        `;

    
      //  Display the modal

      // In essence, this code line changes the display style of the modal element from its default (likely "none" which hides it) to "block" which makes it visible.
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
      
    });
  });
  