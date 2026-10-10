"use client";
import { useRef, useState } from "react";
import Icon from "./Icon";
function time(value: number) {
  return Number.isFinite(value)
    ? Math.floor(value / 60) +
        ":" +
        Math.floor(value % 60)
          .toString()
          .padStart(2, "0")
    : "0:00";
}
const bars = [
  12, 22, 16, 30, 46, 24, 54, 72, 42, 28, 60, 88, 68, 40, 76, 96, 60, 34, 52,
  82, 98, 66, 44, 72, 92, 54, 28, 64, 80, 42, 24, 50, 68, 36, 18, 28, 14,
];
export default function AudioPlayer({ src }: { src: string; light?: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");
  async function toggle() {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      return;
    }
    try {
      setError("");
      await audio.current.play();
    } catch {
      setError(
        "La lecture est indisponible. Réessayez ou contactez-nous pour une démo.",
      );
    }
  }
  return (
    <div className={playing ? "voice-player is-playing" : "voice-player"}>
      <audio
        ref={audio}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setPosition(e.currentTarget.currentTime)}
        onError={() => {
          setPlaying(false);
          setError("Cet enregistrement est momentanément indisponible.");
        }}
      />
      <div className="waveform" aria-hidden="true">
        {bars.map((height, i) => (
          <span
            key={i}
            style={{ height: height + "%", animationDelay: i * -0.087 + "s" }}
          />
        ))}
      </div>
      <div className="audio-controls">
        <button
          type="button"
          onClick={toggle}
          className="audio-play"
          aria-label={
            playing ? "Mettre la démo en pause" : "Écouter la démo audio"
          }
        >
          <Icon name={playing ? "pause" : "play"} />
        </button>
        <div className="audio-track">
          <strong>
            {playing
              ? "Écoutez Keelio en action"
              : "Une voix. Une vraie conversation."}
          </strong>
          <label className="sr-only" htmlFor="demo-position">
            Position dans la démonstration audio
          </label>
          <input
            id="demo-position"
            type="range"
            min="0"
            max={duration || 1}
            step="0.1"
            value={position}
            disabled={!duration}
            onChange={(e) => {
              if (audio.current) {
                audio.current.currentTime = Number(e.target.value);
                setPosition(Number(e.target.value));
              }
            }}
            aria-valuetext={time(position) + " sur " + time(duration)}
          />
          <span className="audio-time">
            {time(position)}
            {duration > 0 && " / " + time(duration)}{" "}
            <span>Démo enregistrée</span>
          </span>
        </div>
      </div>
      {error && (
        <p className="audio-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
