export default function Redirect({ to }) {
  const url = new URL(window.location);
  if (to === '') {
    url.hash = '#';
  } else {
    url.hash = to;
  }
  window.location.replace(url);
  return null;
}
