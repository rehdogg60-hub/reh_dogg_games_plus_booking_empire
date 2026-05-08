# Reh Dogg Games Plus: Booking Empire

**Version 1.0**

Reh Dogg Games Plus: Booking Empire is a free-to-play arcade wrestling management game for the browser. You are hired as the head booker of a fictional wrestling company and must build hot feuds, protect morale, manage contracts, grow titles, survive rival promotions, and make enough money to avoid being fired.

All wrestlers, companies, sponsors, championships, and storylines are fictional.

## Features

- 10 original fictional wrestlers with portraits, stats, finishers, morale, contracts, and legacy tracking.
- Feud setup with feud type, angle style, length, title stakes, and planned ending.
- Weekly TV show simulation with crowd reaction, segment ratings, commentary, morale changes, risk, and revenue.
- Championship system with World, Women's, Hardcore, and Tag Team titles.
- PPV / Big Event system with event cards, match ratings, title changes, revenue, and grades.
- Rival promotions, contracts, salaries, poaching pressure, news feed, chaos events, sponsors, merchandise, rankings, tag teams, fanbase analytics, creative team advice, and Hall of Fame tracking.
- Finisher preview clips loaded from the `videos/` folder.
- Local browser save system with Continue Booking and Delete Save.
- Mobile-friendly card layout and touch-friendly buttons.
- Optional audio support through the `sounds/` folder.

## How To Play

1. Select **Start Booking**.
2. Choose exactly two active wrestlers from the roster.
3. Set the feud type, angle style, length, ending, and optional title match.
4. Book weekly angles and TV segments to raise heat without letting risk or morale problems get out of control.
5. Run the feud payoff or build toward a monthly PPV.
6. Keep the company profitable. If company money reaches `$0` or job security collapses, the board fires you.

## Controls

- Mouse / touch: click buttons and cards.
- Keyboard: `Escape` closes the finisher preview modal.

## Browser Compatibility

The game is built with plain HTML, CSS, and JavaScript.

Recommended:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari on iOS / macOS

No install, build tools, npm, or server backend are required.

## Save System

Booking Empire uses `localStorage` in the player's browser.

Saved:

- Company money
- Active feud
- Wrestler morale, contracts, rankings, injuries, and legacy
- Championships and title histories
- PPV hype and results
- Rival promotions
- News, chaos, audience, sponsors, merch, and Hall of Fame data
- Sound preference

The save is stored only in the current browser/device.

## Audio Setup

The game runs if audio files are missing. For the full release presentation, include:

- `sounds/menu_theme.mp3`
- `sounds/click.mp3`
- `sounds/crowd.mp3`

Optional:

- `sounds/splash_sting.mp3`
- `sounds/ppv_theme.mp3`
- `sounds/news_alert.mp3`
- `sounds/title_win.mp3`
- `sounds/fired_theme.mp3`

Audio starts only after the player clicks or taps, which keeps the game compatible with mobile browsers.

## Finisher Clips

Finisher clips should be placed in:

`videos/`

The current Version 1.0 build expects:

- `videos/super_dragon_fly_finisher.mp4`
- `videos/iron_duchess_finisher.mp4`
- `videos/midnight_bruiser_finisher.mp4`
- `videos/velvet_storm_finisher.mp4`
- `videos/titan_rex_finisher.mp4`
- `videos/lady_voltage_finisher.mp4`
- `videos/saint_of_pain_finisher.mp4`
- `videos/neon_panther_finisher.mp4`
- `videos/big_harbor_king_finisher.mp4`
- `videos/queen_viper_finisher.mp4`

Videos lazy-load only when a finisher preview is opened.

## Folder Structure

```text
index.html
style.css
script.js
README.md
CHANGELOG.md
KO_FI_RELEASE.md
SOCIAL_MEDIA_RELEASE.md
images/
videos/
sounds/
```

## GitHub Pages Setup

1. Upload the contents of this folder to a GitHub repository.
2. Make sure `index.html`, `style.css`, and `script.js` are in the GitHub Pages root or selected Pages folder.
3. Upload the `images/`, `videos/`, and `sounds/` folders with the same spelling and case.
4. In GitHub, open **Settings > Pages**.
5. Select the branch and folder used for the site.
6. Open the published GitHub Pages URL.

GitHub Pages paths are case-sensitive, so keep filenames exactly as referenced.

## Credits

Game Design: Reh Dogg Games Plus  
Creative Direction: Reh Dogg Games Plus  
Visual Assets: Original fictional wrestler portraits, title art, UI graphics, and finisher clips  
Music and Sound: Reh Dogg Games Plus production assets  
Special Thanks: Players, supporters, Ko-fi visitors, and the RDGP arcade community

## Release Note

Free to play. Donations appreciated.
