const hosts = [
  {
    id: "faizan",
    name: "Faizan",
    major: "Biopsychology, Cognitive, Neuroscience",
    journal: "https://docs.google.com/document/d/1oYjbVAAFVXImqBa2bT6o7uLRIbDoye0SaHYbj00kp8Q/edit?tab=t.0",
    builds: {
      1: "https://docs.google.com/document/d/1KMPjgsYvlXfVRvA-4NdSzt8ePjQ5O3AmnYBRDT0Aujc/edit?tab=t.0",
      3: "https://docs.google.com/document/d/1UyQ0GAiFHYjhmSYvwML6Ns7B9rhk8WIbKt15JggvLWg/edit?tab=t.0",
      4: "https://docs.google.com/document/d/1D7v36A1imEf9Ai6xAk8AyzsH7LxTJ_RXNYbXZUGcJ6Q/edit?tab=t.0",
      5: "https://docs.google.com/document/d/1ngfUIuj0_3xTJlaN9BeUuewwcrp4eDsW7whYupvkqVQ/edit?tab=t.z32hnyhbhiux",
      7: "", 8: ""
    }
  },
  {
    id: "theadora",
    name: "Theadora",
    major: "Chemistry",
    journal: "https://docs.google.com/document/d/1iKgw9mtrwHA9p2k4oGt4eKFx571m5s0biTG6TsViSkw/edit?usp=sharing",
    builds: {
      1: "https://docs.google.com/document/d/16zzg6w6SrxktNYL5F8A1_N66brGjf9l6JVoO6NwvRpo/edit?usp=sharing",
      3: "https://docs.google.com/document/d/1BrXzzSilIu_xqdHavnrsRYexZjdxD0jObvgDby0Lc5Y/edit?usp=sharing",
      4: "https://docs.google.com/document/d/1dPM8wvqAMi3OWE_xnhf4MsRXi1qioZwwwiEub2jxEXg/edit?usp=sharing",
      5: "https://docs.google.com/document/d/1tWon0lkCHi3dVEFFladzLJ9e9LutvH9kKa2gtLjrY3c/edit?usp=sharing",
      7: "", 8: ""
    }
  },
  {
    id: "catherine",
    name: "Catherine",
    major: "Political Science",
    journal: "https://docs.google.com/document/d/1ffEJQ7aI4YWvv5UB8mRQDu5MQ1T_vuR2S1Yboy3tu8U/edit?tab=t.0#heading=h.84y5y3d8yuc1",
    builds: {
      1: "https://docs.google.com/document/d/17pSW2YP6u8ZPJAwAhDIXV6_WA6e6pqRjIGxCI5vkN8o/edit?tab=t.0",
      3: "https://docs.google.com/document/d/10U-7LWjd1ln4YGXNGvC3z61W3Sy8MgpM4_HC36h4cbI/edit?tab=t.0",
      4: "https://docs.google.com/document/d/1MYjzNuQooHac7HT3arEgguhk6cJpslrgdLaqhtSmapY/edit?tab=t.0",
      5: "https://docs.google.com/document/d/1AdnxgzNE5WlvDndQpyjeh_A2Xv8bR5Dhx1Vw8MuaUII/edit?tab=t.0",
      7: "", 8: ""
    }
  },
  {
    id: "danielle",
    name: "Danielle",
    major: "Biology, Health & Society",
    journal: "https://docs.google.com/document/d/1BkOPBftrwHjVAYYk64LMDXCBYHwq2EvRjBgWfVdxVBo/edit?usp=sharing",
    builds: {
      1: "https://docs.google.com/document/d/1YoeDBbiMq-hoJxDw9nXhbv5SVyR8XSYvFDktlK5eAPA/edit?usp=sharing",
      3: "https://docs.google.com/document/d/1IBLhhsbrpmWZyf2AbwcaQcLfyNi_x6Be0ziMO2cCDYs/edit?usp=sharing",
      4: "https://docs.google.com/document/d/1bC5ahBXRDwizaZND32xNU7S4AYnAeGEl3CHQp2Ls4Gs/edit?usp=sharing",
      5: "https://docs.google.com/document/d/1xQu1JRMr9cb4MMnrSFX-1ONo76Dt_1aYBn0mghbgr34/edit?usp=sharing",
      7: "", 8: ""
    }
  },
  {
    id: "maya",
    name: "Maya",
    major: "Economics",
    journal: "",
    builds: {
      1: "https://docs.google.com/document/d/12qAYoY09KorCfnxCe3YpnrdDCJ_GUwfhkvxi9ONWwNc/edit?tab=t.0",
      3: "https://docs.google.com/document/d/1SKxrzOAY4lKHbc3bUef1Ij1o9AXpr0A7Rt12_uudrpo/edit?tab=t.0",
      4: "https://docs.google.com/document/d/1YVGJmkRtqnCxoUkPdjCO3S8YhUoUmHEyyHKLUhFEgI4/edit?tab=t.0",
      5: "https://docs.google.com/document/d/1J7KRlijpNXGWo4sgJlFLgTOGF5zv9ggqhLYJkv6WmLY/edit?tab=t.0",
      7: "", 8: ""
    }
  },
  {
    id: "lilly",
    name: "Lilly",
    major: "Neuroscience",
    journal: "https://docs.google.com/document/d/11I1XPa47NblwA5X5CjHIWXy7VnYgZSj51Rj6EtwQ9tc/edit?usp=sharing",
    builds: {
      1: "https://docs.google.com/document/d/1eP-vh8tkfq4FgUWjwYiPIhz-anbavx7fv8Euovu2JwE/edit?usp=sharing",
      3: "https://docs.google.com/document/d/1ERdRUF7_imu8JhjPZaSSGIqHI9mcOkPuMmhQA8S3jxo/edit?usp=sharing",
      4: "https://docs.google.com/document/d/1y3OVC7ZUcVoaWyowFX1LzWDE5Q4O6sYJtg7K96PGL74/edit?usp=sharing",
      5: "https://docs.google.com/document/d/1glEahD9Wod-vS_drFq3k4mchTWurOyZHQNnQwGqAFuM/edit?usp=sharing",
      7: "", 8: ""
    }
  }
];

const hostDetails = {
  faizan: { year: "2030", role: "Team spokesperson", quote: "“Evolution forged the entirety of sentient life on this planet using only one tool, the mistake.” — Dr. Robert Ford" },
  theadora: { year: "2030", role: "Team moderator", quote: "“See, now that's why I never learned to read” — Lawrence" },
  catherine: { year: "2030", role: "Team designer", quote: "Favorite quote not provided." },
  danielle: { year: "2030", role: "Team checker", quote: "Favorite quote not provided." },
  maya: { year: "2030", role: "Team recorder", quote: "Favorite quote not provided." },
  lilly: { year: "2030", role: "Team devil’s advocate", quote: "“67”" }
};

const app = document.querySelector("#people-app");
const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const intro = make("section", "page-intro");
intro.setAttribute("aria-labelledby", "page-title");
intro.append(make("p", "eyebrow", "People ／ Individual Journals & Builds"));
const title = make("h1", "", "The hosts");
title.id = "page-title";
intro.append(title);
intro.append(make("p", "section-intro", "Browse each host’s Personal Journal and individual builds. Builds 2 and 6 are Team Builds and are listed on the Team Builds page."));
app.replaceChildren(intro);

const layout = make("div", "people-layout");
const sidebar = make("aside", "people-sidebar");
sidebar.setAttribute("aria-label", "Host navigation");
const sideHeading = make("h2", "sidebar-title", "Hosts");
sidebar.append(sideHeading);
const sideNav = make("nav");
sideNav.setAttribute("aria-label", "Hosts and writing");
const sideList = make("ul", "host-side-list");
const content = make("div", "host-content");

function writingInfo(host, key, filename) {
  return `Writing unavailable: no Google Docs URL or document text was supplied for ${host.name}'s ${key}.`;
}

hosts.forEach((host, hostIndex) => {
  const section = make("section", "member-section frame");
  section.id = host.id;
  section.setAttribute("aria-labelledby", `${host.id}-title`);
  const heading = make("div", "member-heading");
  heading.append(make("p", "eyebrow", `Host ${String(hostIndex + 1).padStart(2, "0")} ／ Individual archive`));
  const hostTitle = make("h2", "", host.name);
  hostTitle.id = `${host.id}-title`;
  const details = hostDetails[host.id];
  const majorLine = make("p", "member-meta", `Majoring in ${host.major}, class of ${details.year}`);
  const roleLine = make("p", "member-meta", details.role);
  const quoteLine = make("p", "member-quote");
  quoteLine.append(make("em", "", details.quote));
  heading.append(hostTitle, majorLine, roleLine, quoteLine);
  section.append(heading);

  const tabNav = make("nav", "writing-tabs");
  tabNav.setAttribute("aria-label", `${host.name}'s writing`);
  tabNav.setAttribute("role", "tablist");
  tabNav.setAttribute("aria-orientation", "horizontal");
  const sourceNote = make("p", "source-fallback", "Not displaying right? Source file unavailable: no Google Docs URL was supplied in the planning document.");
  const display = make("div", "writing-display");
  display.setAttribute("aria-live", "polite");

  const writings = [{ key: "journal", label: "Personal Journal", file: host.journal }];
  Object.entries(host.builds).forEach(([number, file]) => writings.push({ key: `build-${number}`, label: `Build ${number}`, file }));

  writings.forEach((writing, writingIndex) => {
    const panelId = `${host.id}-${writing.key}`;
    const tabId = `${panelId}-tab`;
    const tab = make("button", "writing-tab", writing.label);
    if (writing.file) tab.dataset.sourceUrl = writing.file;
    tab.type = "button";
    tab.id = tabId;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panelId);
    tab.setAttribute("aria-selected", writingIndex === 0 ? "true" : "false");
    tab.tabIndex = writingIndex === 0 ? 0 : -1;

    const panel = make("section", "writing-panel");
    panel.id = panelId;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tabId);
    panel.tabIndex = 0;
    if (writingIndex !== 0) panel.hidden = true;
    const panelTitle = make("h3", "", writing.label);
    panel.append(panelTitle);
    if (writing.file) {
      const preview = make("iframe", "document-preview");
      preview.src = writing.file.replace(/\/edit(?:\?.*)?$/, "/preview");
      preview.title = `${host.name}, ${writing.label} document preview`;
      preview.loading = "lazy";
      preview.setAttribute("referrerpolicy", "no-referrer");
      panel.append(preview);
    } else {
      panel.append(make("p", "placeholder", writingInfo(host, writing.label, writing.file)));
    }
    display.append(panel);

    tab.addEventListener("click", () => selectWriting(tab, tabNav, display));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const tabs = [...tabNav.querySelectorAll('[role="tab"]')];
      const current = tabs.indexOf(tab);
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus();
      selectWriting(tabs[next], tabNav, display);
    });
    tabNav.append(tab);
  });

  section.append(tabNav, sourceNote, display);
  const back = make("a", "back-link", "Back to Top ↑");
  back.href = "#page-title";
  section.append(back);
  content.append(section);

  const item = make("li", "host-side-item");
  const hostNavDetails = document.createElement("details");
  hostNavDetails.open = hostIndex === 0;
  const summary = make("summary", "", host.name);
  hostNavDetails.append(summary);
  const subList = make("ul", "host-subnav");
  writings.forEach((writing, index) => {
    const linkItem = make("li");
    const link = make("a", "", writing.label);
    link.href = `#${host.id}-${writing.key}`;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const tab = section.querySelectorAll('[role="tab"]')[index];
      selectWriting(tab, tabNav, display);
      section.scrollIntoView({ block: "start" });
      history.replaceState(null, "", `#${host.id}`);
    });
    linkItem.append(link);
    subList.append(linkItem);
  });
  hostNavDetails.append(subList);
  item.append(hostNavDetails);
  sideList.append(item);
});

sideNav.append(sideList);
sidebar.append(sideNav);
layout.append(sidebar, content);
app.append(layout);

function selectWriting(selected, tabNav, display) {
  const sourceNote = display.parentElement.querySelector(".source-fallback");
  if (selected.dataset.sourceUrl) {
    const sourceLink = make("a", "", "Not displaying right? Open the source file in a new tab ↗");
    sourceLink.href = selected.dataset.sourceUrl;
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    sourceNote.replaceChildren(sourceLink);
  } else {
    sourceNote.textContent = "Not displaying right? Source file unavailable: no Google Docs URL was supplied in the planning document.";
  }
  tabNav.querySelectorAll('[role="tab"]').forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  });
  const panel = document.getElementById(selected.getAttribute("aria-controls"));
  display.setAttribute("aria-label", panel.querySelector("h3").textContent);
}
