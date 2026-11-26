#!/usr/bin/env python3
"""Decode image-data/*.b64 into images/ for a local clone or GitHub Pages build."""
from __future__ import annotations
import base64
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "image-data"
DEST = ROOT / "images"
DEST.mkdir(exist_ok=True)

count = 0
for path in sorted(SRC.glob("*.b64")):
    name = path.name[:-4]  # strip .b64
    out = DEST / name
    out.write_bytes(base64.b64decode(path.read_text(encoding="ascii")))
    count += 1
    print(f"wrote {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")
print(f"decoded {count} images")
