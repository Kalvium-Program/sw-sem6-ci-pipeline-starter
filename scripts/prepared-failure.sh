#!/usr/bin/env bash
# Simulates a teammate's change: the seat calculation stops at 1 instead of 0.
# The app's tests should catch this, and the image build should never run.
# After committing, undo it with:
#   git checkout main -- events-api/events.js
set -eu
file="events-api/events.js"
sed 's/Math.max(event.seats - booked, 0)/Math.max(event.seats - booked, 1)/' "$file" > "$file.tmp"
mv "$file.tmp" "$file"
echo "Changed the seat calculation in $file"
