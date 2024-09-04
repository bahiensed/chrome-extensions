async function Hello() {
  let [tab] = await chrome.tabs.query({ active: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello from popup.js")
    }
  })
}

document.getElementById("my-button").addEventListener("click", Hello);
