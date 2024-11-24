function solution(video_len, pos, op_start, op_end, commands) {
  const video = convertTimeToSeconds(video_len);
  const start = convertTimeToSeconds(op_start);
  const end = convertTimeToSeconds(op_end);
  let curr = convertTimeToSeconds(pos);

  if (isSkipPos(start, curr, end)) {
    curr = end;
  }

  for (const command of commands) {
    if (command === "prev") {
      curr = Math.max(curr - 10, 0);
    } else {
      curr = Math.min(curr + 10, video);
    }

    if (isSkipPos(start, curr, end)) {
      curr = end;
    }
  }

  return convertSecondsToTime(curr);
}

// 현재 시간이 오프닝 스킵 가능 시간인지 확인하는 메서드
function isSkipPos(start, pos, end) {
  return start <= pos && pos < end;
}

// MM:SS string을 x초로 변환해주는 메서드
function convertTimeToSeconds(time) {
  const [min, sec] = time.split(":");

  return Number(min) * 60 + Number(sec);
}

// seconds초를 MM:SS string으로 변환해주는 메서드
function convertSecondsToTime(seconds) {
  const min = String(parseInt(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  return `${min}:${sec}`;
}
