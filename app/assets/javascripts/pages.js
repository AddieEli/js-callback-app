// function getData(){
//   var employeesDiv = document.getElementById('employees');

//     $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees){
//         console.log(employees);

//       var htmlString = "";

//       for  (var i = 0; i < employees.length; i++) {
//         var employee = employees[i]
//         htmlString += '<div class="employee">' 
//         htmlString += '<h2>' + employee.name + '</h2>';
//         htmlString += '<p>Department' + employee.department + '</p>';
//         htmlString += '<p>Job Title' + employee.job_titles + '</p>';
//         htmlString += '<p>Salary' + employee.annual_salary + '</p>';
//         htmlString += '<br>';
//       }

//       employeesDiv.innerHTML = htmlString
 
// });
// }



function getData(){
  var landmarksDiv = document.getElementById('landmarks');

  $.get('https://data.cityofchicago.org/resource/fpx9-pjqk.json', function(landmarks){
      

      var htmlString = "";
      for (var i = 0; i < landmarks.length; i++){
        var landmark = landmarks[i];
          htmlString += '<div class="landmark" onclick="changeLandmark(this)">'
          htmlString += '<h2>' + landmark.landmark_name + '</h2>';
          htmlString += '<p>' + landmark.architect + '</p>';
          htmlString += '</br>';
          htmlString += '</div>';
        
      }
      landmarksDiv.innerHTML = htmlString;
  })
}

function changeLandmark(landmarkDiv){
  if (landmarkDiv.style.color ==='lightgray'){
    landmarkDiv.style.color = "";
  }else{
    landmarkDiv.style.color = 'lightgray';
  }
}


function showAll(){
  var landmarks = document.getElementsByClassName('landmark')
  for (var i = 0; i < landmarks.length; i++){
    var landmark = landmarks[i];

    landmark.classList.remove('hidden');
  } 
}


function showArchitect(){
  var landmarks = document.getElementsByClassName('landmark');
  
  for (var i = 0; i < landmarks.length; i++){
    var landmark = landmarks[i];
    if (landmark.innerHTML.indexOf('Durham') !== -1){
      landmark.classList.remove('hidden');
    } else {
    landmark.classList.add('hidden');
  }
}
}
