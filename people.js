const hosts = [
  {
    id: "faizan",
    name: "Faizan",
    major: "Biopsychology, Cognitive, Neuroscience",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  },
  {
    id: "theadora",
    name: "Theadora",
    major: "Chemistry",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  },
  {
    id: "catherine",
    name: "Catherine",
    major: "Major not provided",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  },
  {
    id: "danielle",
    name: "Danielle",
    major: "Major not provided",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  },
  {
    id: "maya",
    name: "Maya",
    major: "Major not provided",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  },
  {
    id: "lilly",
    name: "Lilly",
    major: "Major not provided",
    journal: "",
    builds: { 1: "", 3: "", 4: "", 5: "", 7: "", 8: "" }
  }
];

const hostDetails = {
  faizan: { year: "not provided", quote: "Favorite quote not provided." },
  theadora: { year: "2030", quote: "“skibidi sigma test”" },
  catherine: { year: "not provided", quote: "Favorite quote not provided." },
  danielle: { year: "not provided", quote: "Favorite quote not provided." },
  maya: { year: "not provided", quote: "Favorite quote not provided." },
  lilly: { year: "not provided", quote: "Favorite quote not provided." }
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
  const quoteLine = make("p", "member-quote");
  quoteLine.append(make("em", "", details.quote));
  heading.append(hostTitle, majorLine, quoteLine);
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
    panel.append(panelTitle, make("p", "placeholder", writingInfo(host, writing.label, writing.file)));
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
  const back = make("a", "back-link", "Back to host navigation ↑");
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
  tabNav.querySelectorAll('[role="tab"]').forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  });
  const panel = document.getElementById(selected.getAttribute("aria-controls"));
  display.setAttribute("aria-label", panel.querySelector("h3").textContent);
}
