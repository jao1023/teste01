document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const note1 = parseFloat(document.getElementById('note1').value);
    const note2 = parseFloat(document.getElementById('note2').value);
    const note3 = parseFloat(document.getElementById('note3').value);
    const note4 = parseFloat(document.getElementById('note4').value);

    const average = (note1 + note2 + note3 + note4) /4;

    localStorage.setItem('studentName', name);
    localStorage.setItem('subjectName', subject);
    localStorage.setItem('average', average)

    window.location.href = "result.html"
      }); 