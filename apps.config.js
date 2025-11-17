import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutAanandi } from './components/apps/Aanandi';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: "./themes/Yaru/apps/chrome.png",
        favourite: true,
        desktop_shortcut: true,
        disabled: false,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calculator",
        icon: "./themes/Yaru/apps/calc.png",
        favourite: true,
        desktop_shortcut: false,
        disabled: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-aanandi",
        title: "About Aanandi",
        icon: "./themes/Yaru/system/user-home.png",
        favourite: true,
        desktop_shortcut: true,
        disabled: false,
        screen: displayAboutAanandi,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: "./themes/Yaru/apps/vscode.png",
        favourite: true,
        desktop_shortcut: false,
        disabled: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: "./themes/Yaru/apps/bash.png",
        favourite: true,
        desktop_shortcut: false,
        disabled: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: "./themes/Yaru/apps/spotify.png",
        favourite: true,
        desktop_shortcut: false,
        disabled: false,
        screen: displaySpotify,
    },
    {
        id: "settings",
        title: "Settings",
        icon: "./themes/Yaru/apps/gnome-control-center.png",
        favourite: true,
        desktop_shortcut: false,
        disabled: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: "./themes/Yaru/system/user-trash-full.png",
        favourite: false,
        desktop_shortcut: true,
        disabled: false,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: "./themes/Yaru/apps/gedit.png",
        favourite: false,
        desktop_shortcut: true,
        disabled: false,
        screen: displayGedit,
    },
    {
        id: "github",
        title: "GitHub",
        icon: "./themes/Yaru/apps/github.png",
        favourite: false,
        desktop_shortcut: true,
        disabled: false,
        isExternalApp: true,
        url: "https://github.com/Aanandi05",
        screen: () => {},
    },
];

export default apps;
