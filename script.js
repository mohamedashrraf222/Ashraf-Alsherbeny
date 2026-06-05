'use strict';

/* ===== SAVE CONTACT (VCF) ===== */
function saveContact() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Ashraf Mohamed',
    'N:Mohamed;Ashraf;;;',
    'TITLE:Lawyer & Workers\' Rights Advocate',
    'ORG:Center for Trade Union and Workers Services (CTUWS)',
    'TEL;TYPE=CELL,VOICE:+201226625198',
    'EMAIL;TYPE=INTERNET:ashrafforhelp@gmail.com',
    'URL;TYPE=Facebook:https://www.facebook.com/ashraf.forhelp',
    'ADR;TYPE=WORK:;;Cairo;;;; Egypt',
    'NOTE:Egyptian lawyer specializing in labor rights\\, trade union freedoms\\, and workers\' legal support. Affiliated with CTUWS.',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ashraf_Mohamed.vcf';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);

  showToast('Contact saved to your device!');
}

/* ===== COPY TO CLIPBOARD ===== */
function copyToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label + ' copied!');
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(label + ' copied!');
  } catch {
    showToast('Could not copy automatically.');
  }
  document.body.removeChild(ta);
}

/* ===== TOAST NOTIFICATION ===== */
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  /* Save contact button */
  const saveBtn = document.getElementById('btn-save');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveContact);
  }

  /* Copy rows */
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const text = el.dataset.copy;
      const label = el.dataset.copyLabel || 'Text';
      copyToClipboard(text, label);
    });
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
});
