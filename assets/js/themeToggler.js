function toggleTheme() {
  $('body').toggleClass('dark').toggleClass('light');
  if($('body').hasClass('dark')) {
    localStorage.setItem('theme','dark');
  } else {
    localStorage.setItem('theme','light');
  }
}

function loadTheme() {
  var themeSet = localStorage.getItem('theme');
  if (themeSet == 'dark') {
    $('body').removeClass('light').addClass('dark');
  } else {
    $('body').removeClass('dark').addClass('light');
  }
}

$('#theme-toggle').click(function() {
  toggleTheme();
});
