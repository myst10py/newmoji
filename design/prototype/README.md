# NewMoji Interactive Prototype v2.0

## ✨ What's New in This Version

**6 Complete, Realistic Stories** covering topics Gen Z cares about:
- 🤖💼📉 AI replacing jobs (Tech layoffs vs AI expansion)
- 🎓💸😰 Student loan forgiveness blocked
- 🌍🔥🌊 Climate extreme weather worldwide
- 📱⚖️🚫 Montana bans TikTok statewide
- 🏠💸😰 Housing crisis: $2,000/month rent
- 🤖📚🎓 Schools split on ChatGPT

**Multiple Challenge Types:**
- Bias detection (emotional language)
- Loaded language identification
- Fact vs opinion sorting
- Source credibility evaluation
- Framing analysis
- Perspective identification

**All stories are fully functional** with 4 levels of progressive disclosure, realistic multi-source perspectives, and educational challenges.

---

## How to View the Prototype

### Option 1: Local Browser (Easiest)
1. Navigate to this directory in your terminal
2. Open `index.html` in any web browser:
   ```bash
   # Mac:
   open index.html

   # Linux:
   xdg-open index.html

   # Windows:
   start index.html
   ```
3. Or simply double-click `index.html` in your file browser

### Option 2: Simple Local Server (Best for mobile testing)
```bash
# If you have Python installed:
python -m http.server 8000

# Then open: http://localhost:8000
```

This allows you to test on your phone by visiting your computer's IP address.

---

## What to Test

### Recommended Testing Order

**Story 1: AI Jobs** (🤖💼📉)
- Good first story - very relevant to Gen Z
- Challenge: Identify emotional language
- Tests basic bias detection

**Story 2: Student Loans** (🎓💸😰)
- Directly affects young people
- Challenge: Multiple correct answers (checkboxes)
- Tests loaded language identification

**Story 3: TikTok Ban** (📱⚖️🚫)
- Platform they actually use
- Challenge: Source credibility evaluation
- Tests understanding of expertise vs agenda

**Story 4: Housing Crisis** (🏠💸😰)
- Economic reality they're facing
- Challenge: Framing analysis (all answers correct)
- Tests understanding how same data = different narratives

**Story 5: Climate Weather** (🌍🔥🌊)
- Complex topic with strong opinions
- Challenge: Fact vs opinion sorting
- Tests distinguishing measurement from interpretation

**Story 6: AI in Education** (🤖📚🎓)
- Directly relevant to students
- Challenge: Perspective identification
- Tests recognizing viewpoint signaling

### User Flow to Test
1. **Home Screen**
   - All 6 stories visible with emoji headlines
   - Notice the daily challenge
   - Check out your stats (streak, score)

2. **Tap Any Story**
   - Progressive disclosure works
   - Tap "Continue" to reveal each level
   - Notice different emoji for each story

3. **Try Different Challenges**
   - Some use radio buttons (single answer)
   - Some use checkboxes (multiple answers)
   - Different types of media literacy lessons

4. **Complete Multiple Stories**
   - Go back to home after finishing one
   - Try 2-3 different stories
   - Watch your score increase
   - See "X / 6 stories completed"

### What's Working
✅ 6 complete stories with realistic content
✅ Progressive disclosure (tap to reveal)
✅ Multiple challenge types (bias, loaded language, source credibility, framing, fact/opinion)
✅ Automatic grading with detailed feedback
✅ Points and score tracking
✅ Stories completed counter (X/6)
✅ Achievement celebrations
✅ Responsive design (works on mobile)
✅ Beautiful visual design

### What's Still Prototype
- No real news API (content is hardcoded but realistic)
- No backend / data persistence
- Badges don't unlock features (just visual)
- Related stories don't link (just show what would exist)
- No actual user accounts

**This is intentional!** We're testing the EXPERIENCE and CONTENT, not building infrastructure yet.

---

## Testing on Mobile

### To test on your phone:
1. Start local server (see above)
2. Find your computer's IP address:
   ```bash
   # Mac/Linux:
   ifconfig | grep "inet "

   # Windows:
   ipconfig
   ```
3. On your phone, open browser and go to:
   ```
   http://[YOUR_IP]:8000
   ```
   Example: http://192.168.1.5:8000

### Chrome DevTools Mobile Simulation
1. Open prototype in Chrome
2. Press F12 (open DevTools)
3. Click the device icon (top-left of DevTools)
4. Select "iPhone 12 Pro" or similar
5. Interact as if on mobile

---

## What to Look For When Testing

### Good Signs ✅
- User smiles at emoji headlines
- Taps to Level 2 without prompting
- Completes the challenge
- Reads carefully (not just skimming)
- Says "This is actually cool"
- Asks when they can download it

### Red Flags 🚩
- Confused about what to do
- Doesn't tap to continue
- Skips challenge
- Says "This is for kids"
- Closes quickly
- No emotional reaction

---

## Quick Edits You Can Make

### Change the emoji headlines:
Edit `index.html`, lines 53-73:
```html
<div class="emoji-headline">🔥💰📊</div>
<div class="story-preview">Congress spending drama</div>
```

### Change colors:
Edit `style.css`:
- Line 11: Main gradient background
- Line 131: Daily challenge colors
- Line 372: Button colors

### Add more stories:
1. Copy a story card in `index.html`
2. Give it a unique `data-story` attribute
3. Add content in the story levels
4. Update JavaScript in `script.js` if needed

---

## Common Issues

### Prototype doesn't open?
- Make sure all 3 files are in the same directory
- Try a different browser (Chrome recommended)
- Check browser console for errors (F12)

### Styles look wrong?
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Ensure `style.css` is in same folder

### Interactions not working?
- Check that `script.js` loaded (view browser console)
- JavaScript may be disabled in your browser

### Looks bad on mobile?
- Use Chrome DevTools device simulation
- Or test on actual device via local server

---

## Files Explained

### `index.html` (563 lines)
- All the content and structure
- Home screen, story levels, completion screen
- The "bones" of the experience

### `style.css` (742 lines)
- All the visual design
- Colors, layout, animations
- The "skin" of the experience

### `script.js` (180 lines)
- All the interactions
- Progressive disclosure logic
- Challenge grading
- Score tracking
- The "brain" of the experience

---

## Next Steps After Testing

### If people love it:
1. Test with 10-15 more users (formal testing)
2. Document feedback
3. Iterate on issues found
4. Proceed to technical architecture

### If feedback is mixed:
1. Identify what's working vs not working
2. Redesign problem areas
3. Re-test the updated version
4. Iterate until validated

### If people don't get it:
1. Dig deep into why
2. Consider pivot or kill
3. Document learnings
4. Move on or restart design

---

## Sharing This Prototype

### For user testing:
- Send them the prototype files
- Or host it on GitHub Pages (free)
- Or use a local server and screen share

### For stakeholders:
- Record a video walkthrough
- Create a Loom demo
- Or schedule a live demo session

### For developers (later):
- This becomes the spec
- Shows exactly what to build
- Demonstrates all interactions

---

## Questions?

If something doesn't work or you want to modify it, here's a cheat sheet:

**Want to change text?** → Edit `index.html`
**Want to change colors/layout?** → Edit `style.css`
**Want to change interactions?** → Edit `script.js`

The code is well-commented to help you find what you need.

---

**Now go test it with real Gen Z users and see if this idea has legs!**
