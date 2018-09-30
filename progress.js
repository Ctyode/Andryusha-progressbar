window.onload = function() {
  var art_made = 80; // сюда вставляй сколько нарисовал
  var all_art_tasks = 136; // общее количество задач по рисованию
  var text_made = 50; // сюда вставляй сколько текста написал
  var all_text_tasks = 60; // общее количество задач по тексту
  var engine_made = 10; // сюда вставляй сколько задач по коду сделал
  var all_engine_tasks = 10; // общее количество задач по коду


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
