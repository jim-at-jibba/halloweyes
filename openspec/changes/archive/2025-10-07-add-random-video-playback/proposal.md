## Why
Users currently can only play a single selected video in a looping player. A "random" continuous experience (non-looping individual videos, but auto-advancing randomly through the library) provides a passive / ambient mode without disrupting existing tap-to-play behavior.

## What Changes
- Add a Random Playback control (button) on the home (video list) screen footer.
- When activated, navigate to a "random playback" mode that plays videos sequentially in random order (with replacement) indefinitely.
- Individual videos in random mode SHALL NOT loop; instead on end an immediate transition to a new random video occurs.
- Preserve existing single-video looping player flow when user taps a list item (no behavior change there).
- Provide a visible way to exit random playback and return to list.
- Reuse existing video metadata source (`videos` constant) for selection.
- Avoid repeating the same video consecutively (basic UX safeguard).

## Impact
- Affected specs: video-list (new control), video-player (new random playback requirement)
- New requirements: Random Playback Trigger (list), Random Continuous Playback (player)
- Code touch points: `app/index.tsx`, `app/video-player.tsx` (conditional loop / random logic or new screen), possibly a helper utility.
- No breaking changes; existing requirements remain valid.

## Assumptions / Open Questions
- OK to reuse existing video-player screen via query param (e.g. mode=random) instead of separate screen? (Assumed YES for minimal change.)
- Continuous random selection can include previous videos except immediate repeat (Assumed YES).
- No need for user-configurable duration or shuffle seed (Assumed YES).
- Footer placement: simple fixed button below list (above safe area) acceptable stylistically (Assumed YES).
