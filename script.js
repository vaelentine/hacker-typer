//selectors
let orig = document.querySelector('textarea');
let output = document.querySelector('#new');
let cursor = document.querySelector('#cursor');
cursor.style.opacity = 0;
//setting configuration
// orig.style.display = 'none';
original_text = orig.value;
let display_text = '';
counter = 0;

cursor_char = '▩'
setInterval(function() {blink()}, 200);

function blink() {
	cursor.style.opacity = (cursor.style.opacity == 0)? 1:0;
}

window.onkeypress = function() {
	display_text += original_text[display_text.length];
	display_text += original_text[display_text.length];
	display_text += original_text[display_text.length];
  output.innerText = display_text;
}
	// display_text += original_text[display_text.length].replace(/\n/g, '<br/>');
