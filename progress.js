window.onload = function() {
  var version_number = "0.2.1"; // сюда пиши номер версии (только число с точками)
  var art_made = 80; // сюда вставляй сколько нарисовал
  var all_art_tasks = 136; // общее количество задач по рисованию
  var text_made = 50; // сюда вставляй сколько текста написал
  var all_text_tasks = 60; // общее количество задач по тексту
  var engine_made = 10; // сюда вставляй сколько задач по коду сделал
  var all_engine_tasks = 10; // общее количество задач по коду


  var all_tasks = all_art_tasks + all_text_tasks + all_engine_tasks;
  var all_tasks_made = art_made + text_made + engine_made;
  var percent_completed = Math.round(100 / (all_tasks / all_tasks_made));
  document.getElementById("version").innerHTML="v" + version_number + " Progress";
  document.getElementById("version_completed").innerHTML= percent_completed + "% completed of" + " " + all_tasks + " tasks";

  var art_result = 100 / (all_art_tasks / art_made);
  document.getElementById('first_fragment').setAttribute("style", "width:" +  art_result + "%");
  document.getElementById("first_percent-text").innerHTML=Math.round(art_result) + "%";
  document.getElementById("first_tasks-made").innerHTML=art_made + " / " + all_art_tasks;

  var text_result = 100 / (all_text_tasks / text_made);
  document.getElementById('second_fragment').setAttribute("style", "width:" +  text_result + "%");
  document.getElementById("second_percent-text").innerHTML=Math.round(text_result) + "%";
  document.getElementById("second_tasks-made").innerHTML=text_made + " / " + all_text_tasks;

  var engine_result = 100 / (all_engine_tasks / engine_made);
  document.getElementById('third_fragment').setAttribute("style", "width:" +  engine_result + "%");
  document.getElementById("third_percent-text").innerHTML=Math.round(engine_result) + "%";
  document.getElementById("third_tasks-made").innerHTML=engine_made + " / " + all_engine_tasks;


}
