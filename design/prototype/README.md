# NewMoji Interactive Prototype

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

### User Flow
1. **Home Screen**
   - See the emoji headlines
   - Notice the daily challenge
   - Check out your stats (streak, score)

2. **Tap a Story**
   - Try the Congress spending story
   - Notice how content reveals progressively
   - Tap "Continue" to see each level

3. **Try the Challenge**
   - In Level 3, answer the bias detection question
   - See the educational feedback
   - Watch your score increase

4. **Complete the Story**
   - Go all the way to Level 4
   - See the completion screen
   - Notice achievement celebration

### What's Working
✅ Progressive disclosure (tap to reveal)
✅ Interactive challenge with feedback
✅ Points and score tracking
✅ Achievement celebrations
✅ Responsive design (works on mobile)
✅ Beautiful visual design

### What's Hardcoded
- Only 3 stories available
- Only 1 challenge works
- No real data persistence
- No actual API calls
- Achievement badges don't fully work

**This is intentional!** We're testing the EXPERIENCE, not building the product yet.

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
