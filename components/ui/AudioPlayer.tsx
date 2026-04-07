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
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
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

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl ${!available ? 'opacity-50' : ''}`}
      role="region"
      aria-label="Lecteur audio"
    >
      {/* Hidden audio element */}
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Play / Pause button */}
      <button
        onClick={togglePlay}
        disabled={!available}
        aria-label={isPlaying ? 'Pause' : 'Lecture'}
        className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-[var(--color-border)] text-[var(--color-accent)] hover:bg-[rgba(0,212,255,0.08)] transition-colors disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
      >
        {isPlaying ? (
          /* Pause icon */
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
            <rect x="0" y="0" width="4" height="14" rx="1" />
            <rect x="8" y="0" width="4" height="14" rx="1" />
          </svg>
        ) : (
          /* Play icon */
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
            <path d="M1 1.5v11l10-5.5L1 1.5z" />
          </svg>
        )}
      </button>

      {/* Progress bar + times */}
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        <div className="relative h-1 bg-[var(--color-border)]">
          {/* Filled track */}
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
