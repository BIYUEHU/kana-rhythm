#!/usr/bin/env python3
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
RESET = "\033[0m"

def info(msg: str):
    print(f"✨ {msg}")

def success(msg: str):
    print(f"{GREEN}✅ {msg}{RESET}")

def warn(msg: str):
    print(f"{YELLOW}⚠️  {msg}{RESET}")

def error(msg: str):
    print(f"{RED}❌ {msg}{RESET}")

def run_cmd(cmd, cwd=ROOT, desc=None):
    if desc:
        info(desc)
    exe = shutil.which(cmd[0])
    if exe is None:
        raise FileNotFoundError(f"command not found: {cmd[0]}")
    try:
        subprocess.run([exe] + cmd[1:], cwd=str(cwd), check=True)
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"command failed: {' '.join(cmd)} (exit {e.returncode})")

def main():
    try:
        info("Starting build sequence")

        # 1) moon build --target js
        run_cmd(["moon", "build", "--target", "js"], desc="Running: moon build --target js")

        # 2) npx vite build
        run_cmd(["npx", "vite", "build"], desc="Running: npx vite build")

        # 3) copy target/js/release/build/main/main.js -> dist/main.js
        src = ROOT / "target" / "js" / "release" / "build" / "main" / "main.js"
        dst_dir = ROOT / "dist"
        dst = dst_dir / "main.js"

        info(f"Copying build artifact: {src} -> {dst}")
        if not src.exists():
            raise FileNotFoundError(f"source file not found: {src}")

        dst_dir.mkdir(parents=True, exist_ok=True)
        shutil.copy2(str(src), str(dst))
        success(f"copied to {dst}")

        # 4) replace path in dist/index.html
        index_html = dst_dir / "index.html"
        if not index_html.exists():
            warn(f"index.html not found at {index_html}, skipping HTML replacement")
        else:
            info(f"Updating {index_html} (replace script src -> /main.js)")
            content = index_html.read_text(encoding="utf-8")
            old_path = "target/js/release/build/main/main.js"
            if old_path in content:
                content = content.replace(old_path, "/main.js")
                index_html.write_text(content, encoding="utf-8")
                success("index.html updated")
            else:
                warn(f"pattern not found in {index_html}, no changes made")

        success("build.py completed successfully")
    except FileNotFoundError as e:
        error(str(e))
        sys.exit(2)
    except RuntimeError as e:
        error(str(e))
        sys.exit(3)
    except Exception as e:
        error(f"unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    import shutil, os
    main()
