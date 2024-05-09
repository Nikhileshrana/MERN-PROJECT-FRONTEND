"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [status, setStatus] = useState("Inactive");
  const [statusColor, setStatusColor] = useState("green");
  const [trackStatus, setTrackStatus] = useState("/Resume_Track.svg");
  const [audioFile, setAudioFile] = useState(`/Music/${Math.floor(Math.random() * 3) + 1}.mp3`);
  const [musicinfo, setMusicInfo] = useState("Loading...");

  useEffect(() => {
    const audio = document.getElementById('audioPlayer');
    if (status === "Active") {
      setStatusColor("green");
    } else if (status === "Inactive") {
      setStatusColor("red");
    } else {
      setStatusColor("yellow");
    }

    if(audioFile === "/Music/1.mp3") {
      setMusicInfo("Until I Found You By Stephen Sanchez");
    } else if(audioFile === "/Music/2.mp3") {
      setMusicInfo("Pal Pal Har Pal By Munna Bhai MBBS");
    } else if(audioFile === "/Music/3.mp3") {
      setMusicInfo("Until I Found You By Stephen Sanchez");
    }
  }, [status, audioFile]);

  const playPause = () => {
    const audio = document.getElementById('audioPlayer');
    if (trackStatus === "/Resume_Track.svg") {
      setTrackStatus("/Pause_Track.svg");
      console.log("Track Is Resumed");
      audio.play();
      setStatus("Active");
    } else if (trackStatus === "/Pause_Track.svg") {
      setTrackStatus("/Resume_Track.svg");
      console.log("Track Is Paused");
      setStatus("Paused");
      audio.pause();
    }
  };

  const nextTrack = () => {
    const audio = document.getElementById('audioPlayer');
    audio.pause();
    setAudioFile(`/Music/${Math.floor(Math.random() * 3) + 1}.mp3`);
    audio.load();
    audio.play();
    setTrackStatus("/Pause_Track.svg");
  };

  const repeatMusic = () => {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <div id='container'>
        <div className='gradient' />

        <div className='musicplayer'>
          <div className='status'>
            <div>
              <div>Astrodude's Player</div>
              <div>Nikhilesh Rana</div>
            </div>

            <div>
              <div>{status}</div>
              <div><svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill={statusColor} d="M8 3a5 5 0 100 10A5 5 0 008 3z" /></svg></div>
            </div>
          </div>

          <div id='trackimage'>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" /></svg>
          </div>

          <div className='player-middle'>
            <div></div>
            <div>{musicinfo}</div>
          </div>

          <div className='player-bottom'>
            <div><img onClick={repeatMusic} src='/Repeat_Track.svg' alt='Repeat_Track'/></div>
            <div><img src={trackStatus} onClick={playPause} alt='MusicTrackStatus'/></div>
            <div><img onClick={nextTrack} src='/Next_Track.svg' alt='Next_Track'/></div>
          </div>

          <audio id="audioPlayer"><source src={audioFile} type="audio/mp3"/></audio>
        </div>
      </div>
    </>
  )
}

export default Page;
