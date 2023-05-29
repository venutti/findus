function formatTimer(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default function Timer({ time }) {
  return <div className="text-2xl">{formatTimer(time)}</div>;
}
