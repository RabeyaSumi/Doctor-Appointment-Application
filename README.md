<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Generate README.md</title>
  <style>
    :root{
      --bg:#0f1724; --card:#0b1220; --muted:#9aa4b2; --accent:#60a5fa; --glass: rgba(255,255,255,0.03);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    body{margin:0;background:linear-gradient(180deg,#071029 0%, #081226 100%);color:#e6eef8;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px;}
    .wrap{width:100%;max-width:900px;background:var(--card);border-radius:12px;padding:20px;box-shadow:0 8px 30px rgba(2,6,23,0.6);backdrop-filter: blur(6px);}
    header{display:flex;align-items:center;gap:14px;margin-bottom:12px}
    header h1{font-size:18px;margin:0}
    p.lead{margin:0;color:var(--muted);font-size:13px}
    textarea{width:100%;height:420px;border-radius:8px;padding:12px;background:var(--glass);border:1px solid rgba(255,255,255,0.04);color:inherit;resize:vertical;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;font-size:13px;line-height:1.5}
    .controls{display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap;}
    button{background:linear-gradient(180deg,var(--accent),#2b6cb0);border:none;padding:10px 14px;border-radius:10px;color:#04233a;font-weight:600;cursor:pointer;box-shadow:0 6px 18px rgba(96,165,250,0.12)}
    button.secondary{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted);font-weight:600}
    small{display:block;color:var(--muted);margin-top:8px}
    .note{margin-top:12px;padding:10px;border-radius:8px;background:rgba(9,16,26,0.6);color:var(--muted);font-size:13px}
    .flex-spread{margin-left:auto;display:flex;gap:8px}
    .pill{padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.03);font-size:12px;color:var(--muted)}
  </style>
</head>
<body>
  <div class="wrap" role="main">
    <header>
      <div>
        <h1>README.md Generator — Doctors Appointment (React + Vite)</h1>
        <p class="lead">Includes steps to fix the Vite permission issue and recommended Node version.</p>
      </div>
      <div class="flex-spread">
        <div class="pill">For macOS</div>
      </div>
    </header>

    <textarea id="mdContent" spellcheck="false"># Doctors Appointment — Frontend (React + Vite)

## Prerequisites
- Node: **20.x (recommended)**  
  > This project was developed for Node 20.x. Using a different major Node version may cause warnings or runtime issues.
- npm (or pnpm/yarn) installed.
- Optional: `nvm` to manage Node versions.

## Quick start (recommended)
1. Open terminal and switch to the project folder:
   ```bash
   cd /path/to/doctors-appointment-app-main
