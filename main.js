import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_KEY';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export function escapeHtml(str) {
  return str?.replace(/&/g, '&amp;').replace(/</g, '&lt;')
             .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
             .replace(/'/g, '&#39;') || '';
}
export function convertAnchors(str) {
  return str.replace(/&gt;&gt;(\d+)/g, '<span class="anchor" onclick="scrollToAnchor($1)">>>$1</span>');
}
window.scrollToAnchor = function(num) {
  const el = document.getElementById('res' + num);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
export function isAdmin() {
  return localStorage.getItem('admin') === 'true';
}