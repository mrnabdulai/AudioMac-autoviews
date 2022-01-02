setInterval(() => {
  document.getElementsByClassName("player__control--forwards")[0].click();
  setTimeout(() => {
    document.getElementsByClassName("player__control--back")[0].click();
  }, [5000]);
}, [5000]);
