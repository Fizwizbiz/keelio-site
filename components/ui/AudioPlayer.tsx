'use client'

import { useEffect, useRef, useState } from 'react'

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

interface AudioPlayerProps {
  src: string
  light?: boolean
}

export default function AudioPlayer({ src, light = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => setDuration(audio.duration)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      if (audio) audio.currentTime = 0
    }
    const onError = () => setAvailable(false)

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !available) return
    const value = Number(e.target.value)
    audio.currentTime = value
    setCurrentTime(value)
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  if (light) {
    return (
      <div
        className={`flex items-center gap-3 px-2 py-2 border border-slate-200 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow ${!available ? 'opacity-50' : ''}`}
        role="region"
        aria-label="Lecteur audio"
      >
        <audio ref={audioRef} src={src} preload="metadata" />

        <button
          onClick={togglePlay}
          disabled={!available}
          aria-label={isPlaying ? 'Pause' : 'Lecture'}
          className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-[rgba(0,212,255,0.1)] text-[var(--color-accent-muted)] hover:bg-[var(--color-accent)] hover:text-[#0B1629] transition-colors duration-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
        >
          {isPlaying ? (
            <svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <rect x="0" y="0" width="4" height="14" rx="1" />
              <rect x="8" y="0" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <path d="M1 1.5v11l10-5.5L1 1.5z" />
            </svg>
          )}
        </button>

        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <div className="relative h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[var(--color-accent-muted)] rounded-full pointer-events-none transition-all"
              style={{ width: `${progress}%` }}
            />
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              disabled={!available}
              aria-label="Position dans l'audio"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <span className="font-body text-[0.65rem] text-slate-400 font-mono tabular-nums pr-1 flex-shrink-0">
          {available ? (
            `${formatTime(currentTime)} / ${formatTime(duration)}`
          ) : (
            'À venir'
          )}
        </span>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl ${!available ? 'opacity-50' : ''}`}
      role="region"
      aria-label="Lecteur audio"
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        onClick={togglePlay}
        disabled={!available}
        aria-label={isPlaying ? 'Pause' : 'Lecture'}
        className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-[var(--color-border)] text-[var(--color-accent)] hover:bg-[rgba(0,212,255,0.08)] transition-colors disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
      >
        {isPlaying ? (
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
            <rect x="0" y="0" width="4" height="14" rx="1" />
            <rect x="8" y="0" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
            <path d="M1 1.5v11l10-5.5L1 1.5z" />
          </svg>
        )}
      </button>

      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        <div className="relative h-1 bg-[var(--color-border)]">
          <div
            className="absolute inset-y-0 left-0 bg-[var(--color-accent-muted)] pointer-events-none"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            disabled={!available}
            aria-label="Position dans l'audio"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
        </div>
        <div className="flex justify-between font-body text-[0.65rem] text-[var(--color-text-muted)]">
          {available ? (
            <>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </>
          ) : (
            <span className="w-full text-center">Enregistrement à venir</span>
          )}
        </div>
      </div>
    </div>
  )
}
