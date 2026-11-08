#!/usr/bin/env bash
# Kyle Roof audit + drift monitor for toolaspect.com pages (utility-sites repo)
set -euo pipefail
cd /data/projects/utility-sites
git pull --ff-only >/dev/null 2>&1 || true
python3 scripts/kyle_roof_audit.py
echo "---"
echo "Report: docs/kyle-roof-audit-report.md (full fix queue in repo)"
