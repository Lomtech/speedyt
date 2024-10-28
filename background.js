chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (cmd) => {
          let video = document.querySelector('video');
          if (video) {
            if (cmd === 'increase-speed') {
              video.playbackRate = Math.min(video.playbackRate + 0.25, 16); // Increase by 0.25
            } else if (cmd === 'decrease-speed') {
              video.playbackRate = Math.max(video.playbackRate - 0.25, 0.25); // Decrease by 0.25
            } else if (cmd === 'reset-speed') {
              video.playbackRate = 1; // Reset to default
            }
          }
        },
        args: [command],
      });
    });
  });
  