let next = document.getElementById('next');
let preview = document.getElementById('preview');
let photo = document.getElementById('imgProfile')
let text = document.getElementById('text');
let name = document.getElementById('name');
let job = document.getElementById('job');

window.onload = function() {
    preview.onclick();
};

next.onclick = function() {
    photo.src = "/src/pages/testimonials-challenge/src/images/image-john.jpg";
    text.innerHTML = '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
    name.innerHTML = 'John Tarkpo'
    job.innerHTML = 'Junior Front-end Developer';
}
preview.onclick = function() {
    photo.src = "/src/pages/testimonials-challenge/src/images/image-tanya.jpg";
    text.innerHTML = ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ';
    name.innerHTML = 'Tanya Sinclair'
    job.innerHTML = 'UX Engineer';
}