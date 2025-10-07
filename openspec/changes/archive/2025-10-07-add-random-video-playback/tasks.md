## 1. Specification Alignment
- [ ] 1.1 Confirm assumptions with stakeholder (footer placement, reuse player screen via param `mode=random`)

## 2. UI Additions
- [ ] 2.1 Add Random button component to `app/index.tsx` footer
- [ ] 2.2 Style button consistent with theme tokens
- [ ] 2.3 Wire navigation to video player with `?mode=random` param

## 3. Player Logic
- [ ] 3.1 Update `app/video-player.tsx` to detect `mode=random`
- [ ] 3.2 Implement non-looping playback when in random mode
- [ ] 3.3 Implement selection of initial random video if none specified (or ignore `id`)
- [ ] 3.4 Implement onEnd handler to choose new random video (no immediate repeat)
- [ ] 3.5 Ensure resource cleanup on unmount / exit

## 4. UX & Navigation
- [ ] 4.1 Provide back/exit control (reuse existing back) clearly functioning in random mode
- [ ] 4.2 Preserve list scroll state (verify existing behavior unchanged)

## 5. Validation
- [ ] 5.1 Manual test: single video tap path unaffected (still loops)
- [ ] 5.2 Manual test: random mode cycles through multiple videos without immediate repeats
- [ ] 5.3 Manual test: exiting random returns to list state

## 6. Documentation
- [ ] 6.1 Update video-player and video-list spec Purpose fields (if desired, separate change) - OPTIONAL
- [ ] 6.2 Mark tasks complete and request review
