chrome.tabs.onCreated.addListener((tab)=>{
  if (tab.incognito) {
    chrome.tabs.remove(tab.id);
  }
});