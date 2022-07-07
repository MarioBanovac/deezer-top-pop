export default function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const sec = Number(time%60) < 9 ? ("0" + (time % 60)) : time % 60;

  return `${minutes}:${sec}`;
}
