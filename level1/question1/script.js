
document.getElementById('btn-alert').addEventListener('click', function(e) {
    alert('Eureka! It is a success!');
    e.stopPropagation();
  });