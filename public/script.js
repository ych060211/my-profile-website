'use strict';
const menuLinks = [...document.querySelectorAll('nav a[data-path]')];
function activate(id) {
  menuLinks.forEach(link => {
    const active = link.dataset.path === id;
    link.classList.toggle('text-primary', active);
    link.classList.toggle('text-on-surface-variant', !active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
menuLinks.forEach(link => link.addEventListener('click', () => activate(link.dataset.path)));
let scheduled = false;
function updateNavigation() {
  let current = 'home';
  document.querySelectorAll('section[id]').forEach(section => {
    if (section.getBoundingClientRect().top <= window.innerHeight * .35) current = section.id;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = 'contact';
  activate(current);
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
updateNavigation();
const email = document.getElementById('email-text').textContent.trim();
const toast = document.getElementById('copy-toast');
let toastTimeout;
function notify(message) {
  toast.querySelector('span:last-child').textContent = message;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 3000);
}
document.getElementById('copy-email-btn').addEventListener('click', async () => {
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    notify('이메일 주소가 복사되었습니다!');
  } catch {
    const field = document.createElement('textarea');
    field.value = email;
    field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(field);
    field.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Offer manual copy below. */ }
    field.remove();
    if (copied) notify('이메일 주소가 복사되었습니다!');
    else window.prompt('이메일 주소를 복사해 주세요.', email);
  }
});
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `프로젝트 협업 문의 · ${data.get('sender').trim()}`;
  const body = `보낸 사람: ${data.get('sender').trim()}\n\n${data.get('message').trim()}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
