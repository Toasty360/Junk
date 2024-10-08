(async () => {
  var data = await fetch(
    "https://tmstr.luminousstreamhaven.com/stream_new2/H4sIAAAAAAAAAw3PwW6DIAAA0F8SqOvcbU7BYMWAAupNhMUhdibrtO3Xb5d3f8ie3YhONkk.wSsaYTSOMYIujs__vJyStylLW_mVrFNm_ejtMnRs5mjepyBmC29xlc1tBUQ.6ByVKBB.FasrAuaKEpYt0dRVh8vnh_a2lCrFFyiBkj9R7.3ToPejlrNWMBFmVcEpSm1uYaMoUMttEwEfvbTfLVSxJLjqge1tIaMKWWQ8vuqMUbWKuoQcCaTCGLa979LGZGJn0d0bLQjzHBp9X5sclAbGzHR9VH_ccnPFeVvQRjwxc.s9dcvxYFDtfEmORoVC463R5P_j57XW4LchdFd4yNqFny7PYXPkALyNkj.TTwx4QQEAAA--/master.m3u8",
    {
      headers: {
        Referer: "https://flickersky.com/",
      },
    }
  ).then((resp) => resp.text());
  console.log(data);
})();
